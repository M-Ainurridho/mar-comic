import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
