import type { Metadata } from "next";
import {Quicksand} from "next/font/google"
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const quickSand = Quicksand({subsets: ["latin"], variable: "--font-quick-sand"});

export const metadata: Metadata = {
  title: "Petite Elise",
  description: "A wonderful place for little ones to grow and learn in a safe, nurturing environment.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.variable} antialiased`}
      >
    <div className="flex flex-col min-h-screen font-quick-sand">
      {/* Sticky Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow  ">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
      </body>
    </html>
  );
}
