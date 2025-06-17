import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthWise",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
             <div className="container mx-auto px-4 text-center text-gray-600">
                 {/* The className was added to the <p> tag below */}
                 <p className="text-gray-800 [text-shadow:0_0_8px_#FFFFFFCC]"> Made by 8th sem ('25) CS project Group 13</p>
             </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
