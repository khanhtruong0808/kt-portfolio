import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "./ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
