import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/layout/navber";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "IFAD IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={` antialiased`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
