import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Christian Bourlier — AI Systems Architect | CacheBash";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a12 0%, #111827 50%, #0a0a12 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#e5e7eb",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #5bb8d4, #3b82f6, #5bb8d4)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#f9fafb",
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}
        >
          Christian Bourlier
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#5bb8d4",
            marginTop: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          AI Systems Architect
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "#374151",
            marginTop: "32px",
            marginBottom: "32px",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Bounded AI systems that ship. 60+ MCP tools. Multi-agent
          orchestration. Full audit coverage.
        </div>

        {/* Metrics bar */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "40px",
          }}
        >
          {[
            { value: "60+", label: "MCP Tools" },
            { value: "4", label: "Production Systems" },
            { value: "100%", label: "Audit Coverage" },
            { value: "0", label: "Uncontained Failures" },
          ].map((metric) => (
            <div key={metric.label} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#5bb8d4",
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: 20,
            color: "#4b5563",
            fontWeight: 500,
          }}
        >
          bourlier.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
