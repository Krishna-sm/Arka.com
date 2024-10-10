import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer2";
import ReduxProvider from "@/redux/ReduxProvider";
import NextTopLoader from 'nextjs-toploader';
const poppins = Poppins({ subsets: ["latin"],weight:["400"] });

export const metadata: Metadata = {
  title: "Arka",
  description: "Invierte Inteligentemente sin Esfuerzo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <ReduxProvider>
        <Header/>
          <NextTopLoader color="#2F288B" showSpinner />
        {children}
        <Footer/> 
    </ReduxProvider>
        </body>
    </html>
  );
}
