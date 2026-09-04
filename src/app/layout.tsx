import "./globals.css";
import { ThemeProvider } from "@/../components/ThemeProvider";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
