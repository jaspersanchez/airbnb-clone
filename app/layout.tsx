import { Nunito } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={font.className}>{children}</body>
    </html>
  );
}
