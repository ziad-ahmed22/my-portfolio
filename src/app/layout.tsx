import AppWrapper from "@/components/app-wrapper/AppWrapper";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ziad AHmed Portfolio",
  description: "Frontend Web Developer using React.js and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-body-bg`}
        suppressHydrationWarning
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
