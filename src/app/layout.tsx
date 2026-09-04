import "./globals.css";

import { ThemeProvider } from "@/../components/ThemeProvider";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { UnifrakturCook } from "next/font/google";

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}