import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "./libs/lenis";
import Navbar from "./Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dermatology Test Website - Jagrath LXIX",
  description: "A test website made for dermatologists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
