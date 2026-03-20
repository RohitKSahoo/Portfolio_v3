import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Cursor from "./components/Cursor";
import ThemeToggle from "./components/ThemeToggle";
import Nav from "./components/Nav"; // 1. Import the new Nav component

// Inter for readable body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

// Outfit for the massive geometric headings
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Rohit Kumar Sahoo | Portfolio",
  description: "Full-Stack Developer Portfolio",
};

// You can only have one default export per file!
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <Providers>
          {/* Your custom cursor goes here inside the body/providers */}
          <Cursor />
          <Nav /> {/* 2. Add it here, outside your main page content */}
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}