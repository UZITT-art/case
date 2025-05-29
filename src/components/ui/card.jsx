// src/components/ui/card.jsx
export function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", px: "2px" }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
