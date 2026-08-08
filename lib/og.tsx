export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function OgImage({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#1f6f78",
        backgroundImage: "linear-gradient(135deg, #1f6f78 0%, #145057 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#d6e4c4",
        }}
      >
        ValuePro Painting
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 980,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div style={{ marginTop: 20, fontSize: 30, color: "#f7f5f0" }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}
