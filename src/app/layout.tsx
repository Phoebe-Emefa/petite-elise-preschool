import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quick-sand",
});

export const metadata: Metadata = {
  title: "Petite Elise Preschool",
  description:
    "Nurturing young minds to become curious, resilient, and independent thinkers in a safe, loving environment",
  icons: {
    icon: "/icons/logo.petite-elise.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Theme>
        <body className={`${quickSand.variable} antialiased`}>
          <div className="flex flex-col min-h-screen font-quick-sand">
            {/* Sticky Navbar */}
            <NavBar />

            {/* Main Content */}
            <main className="flex-grow  ">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </body>
      </Theme>
    </html>
  );
}
