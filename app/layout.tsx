import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBI Clearance - Secure Your NBI Clearance Online",
  description: "National Bureau of Investigation Clearance Application System",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
