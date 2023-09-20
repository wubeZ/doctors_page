import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ReduxProviders from "@/lib/redux/providers";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HakimHub",
  description: "hakimhub for doctors and patients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <ReduxProviders>{children}</ReduxProviders>
        <Footer />
      </body>
    </html>
  );
}
