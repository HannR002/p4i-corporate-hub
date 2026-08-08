import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
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
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-6C89K5WKQG" />
      </body>
    </html>
  );
}
