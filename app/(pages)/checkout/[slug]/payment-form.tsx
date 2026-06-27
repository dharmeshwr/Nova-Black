"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";

interface PaymentFormProps {
  slug: string;
}

interface PaymentResponse {
  target: string;
  fields: {
    mid: string;
    orderId: string;
    txnToken: string;
  };
  error?: string;
}

const initialFormState = {
  name: "",
  email: "",
  mobile: "",
};

export function CheckoutPaymentForm({ slug }: PaymentFormProps) {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof typeof initialFormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function validateForm() {
    if (!formState.name.trim()) return "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(formState.email.trim())) {
      return "Enter a valid email address.";
    }
    if (!/^\d{10}$/.test(formState.mobile.replace(/\D/g, ""))) {
      return "Enter a 10-digit mobile number.";
    }

    return "";
  }

  function submitHostedPaymentForm(payment: PaymentResponse) {
    const form = document.createElement("form");

    form.method = "POST";
    form.action = payment.target;
    form.style.display = "none";

    Object.entries(payment.fields).forEach(([name, value]) => {
      const input = document.createElement("input");

      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/paytm/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
          name: formState.name.trim(),
          email: formState.email.trim(),
          mobile: formState.mobile.replace(/\D/g, ""),
        }),
      });
      const payment = (await response.json()) as PaymentResponse;

      if (!response.ok) {
        throw new Error(payment.error ?? "Payment could not be started.");
      }

      submitHostedPaymentForm(payment);
    } catch (err) {
      setIsSubmitting(false);
      setError(
        err instanceof Error
          ? err.message
          : "Payment could not be started. Try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="checkout-name"
          className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2"
        >
          Name
        </label>
        <input
          id="checkout-name"
          type="text"
          autoComplete="name"
          value={formState.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="form-input"
          placeholder="Your full name"
          disabled={isSubmitting}
          required
        />
      </div>

      <div>
        <label
          htmlFor="checkout-email"
          className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2"
        >
          Email
        </label>
        <input
          id="checkout-email"
          type="email"
          autoComplete="email"
          value={formState.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="form-input"
          placeholder="you@example.com"
          disabled={isSubmitting}
          required
        />
      </div>

      <div>
        <label
          htmlFor="checkout-mobile"
          className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2"
        >
          Mobile
        </label>
        <input
          id="checkout-mobile"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          value={formState.mobile}
          onChange={(event) => updateField("mobile", event.target.value)}
          className="form-input"
          placeholder="10-digit mobile number"
          disabled={isSubmitting}
          required
        />
      </div>

      {error ? (
        <p className="text-sm leading-relaxed text-red-300" aria-live="polite">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full flex items-center justify-between border border-zinc-700 bg-zinc-50 text-zinc-950 px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-zinc-950 hover:text-zinc-50 disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-700 disabled:text-zinc-400 transition-all duration-300"
      >
        {isSubmitting ? "Redirecting..." : "Pay now"}
        <ArrowRightIcon
          size={16}
          weight="light"
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </form>
  );
}
