'use client'
import { PackageIcon } from "@phosphor-icons/react";

export default function ShippingPolicy() {
  return (
    <section className="min-h-screen bg-background text-foreground font-sans pt-24 pb-12 px-6">
      <div className="max-w-350 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="w-full lg:w-1/4 lg:sticky lg:top-32 h-fit space-y-6">
          <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
            <PackageIcon size={16} />
            <span>Shipping_2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter leading-none">
            Shipping <br className="hidden lg:block" /> Policy
          </h1>
          <div className="pt-6 border-t border-foreground/20">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono uppercase text-muted-foreground">Last Updated</span>
              <span className="text-lg font-medium">14 March 2026</span>
            </div>
          </div>
        </div>

        <div>-</div>
      </div>
    </section>
  )
}
