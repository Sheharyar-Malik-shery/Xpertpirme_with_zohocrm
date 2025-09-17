
import './globals.css';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header"
import Footer from "../components/footer";
import { Poppins } from 'next/font/google';
import ServicesWrapper from "../components/ServiceWarper";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], 
  variable: '--font-poppins',   
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Customized Software & Entrprice Solution | Xpert Prime",
  description: "Customized software and Entrprice Solution | Xpert Prime",
  icons:{
    icon:"/faviconV2.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans`}
      >
      <Header />
       <ServicesWrapper>{children}</ServicesWrapper>
      {/* <main className="flex-1">{children}</main> */}
      <Footer/>
      </body>
    </html>
  );
}
