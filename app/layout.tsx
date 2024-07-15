import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import { spaceGrotesk } from "./libs/fonts/fonts";
import { ReactLenis } from "@/app/libs/lenis";
import CustomCursor from "./Components/CustomCursor/CustomCursor";

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
    <html lang="en">
      <ReactLenis root>
        <body className={spaceGrotesk.className}>
          <Navbar />
          <CustomCursor />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
