import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "NovaBlack E-Tech Private Limited";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "small_logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          gap: "24px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={180} height={180} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.02em",
            }}
          >
            NOVA BLACK
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#a1a1aa",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Innovate. Empower. Connect.
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#eab308",
            }}
          />
          <span
            style={{
              fontSize: 16,
              color: "#71717a",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            IT Solutions &amp; Software Development
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
