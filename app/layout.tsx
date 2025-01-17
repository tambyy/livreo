import type { Metadata } from "next";
import localFont from "next/font/local";
import Menus from "./(menus)/Menus";
import "./globals.css";
import ReduxProvider from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Livreo",
  description: "Delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full h-full ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="w-full h-full flex flex-row">
            <Menus />
            <div className="h-full flex-1 flex-row overflow-hidden">
              {children}
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
