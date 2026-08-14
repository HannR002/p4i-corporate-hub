import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professional Data Analyst Portfolio",
  description: "Muhammad Farhan - Transforming Data into Executive Strategy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-6C89K5WKQG" />
      </body>
    </html>
  );
}
