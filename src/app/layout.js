import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harshal Khairnar",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <div
          className="w-full flex bg-bg-main "
         
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
