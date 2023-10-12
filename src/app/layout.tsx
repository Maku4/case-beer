import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beer Collection - BrewMaster's Choice",
  description:
    "Explore our curated collection of the finest beers from around the world. Discover unique flavors, brewing techniques, and the stories behind each bottle.",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
