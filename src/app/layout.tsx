import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./_components/Background";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corp Comment",
  description: "Leave a comment for your favorite corp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background>
          <Header />
          {children}
        </Background>
      </body>
    </html>
  );
}
