export const metadata = {
  title: "Adv. Sahil S. Kothari — Law Chambers",
  description: "Advocate — District & Sessions Courts, Tribunals across Maharashtra, and Bombay High Court",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
