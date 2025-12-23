import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/layout/navber";
import Footer from "@/components/layout/footer";
import { getGlobalData } from "@/lib/global";

export const metadata: Metadata = {
  title: "IFAD IT",
};

const global = await getGlobalData()
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header data={global.header} />
        {children}
                <Footer data={global.footer} />

      </body>
    </html>
  );
}
