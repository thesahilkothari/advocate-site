// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Kothari Vakil | Adv. Sahil S. Kothari",
  description: "Advocate (vakil) & lawyer from Baramati; High Court advocate in Maharashtra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
