import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harshal Khairnar",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="w-full flex "
         
        >
           
          
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
