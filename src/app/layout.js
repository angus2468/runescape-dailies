import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Runescape Dailies",
  description: "By Angus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-blue-700">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-blue-700">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
