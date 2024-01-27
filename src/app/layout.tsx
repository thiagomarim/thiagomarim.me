import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { Toaster } from "./components/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "thiagomarim.me ",
  description: "Portfolio do Thiago Soares Marim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster />

        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
