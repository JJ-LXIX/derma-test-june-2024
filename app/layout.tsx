import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "./libs/lenis";
import Navbar from "./Components/Navbar/Navbar";
import { spaceGrotesk } from "./libs/fonts/fonts";
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
    <ReactLenis root>
      <html lang="en" className={spaceGrotesk.className}>
        <body>
          <Navbar />
          <CustomCursor />
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
