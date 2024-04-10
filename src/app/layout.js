import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";

import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/lib/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agency Site",
  description: "A site for a creative agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="container">
              <Navbar />
              <div className="h-[85vh]" a>
                {children}
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
