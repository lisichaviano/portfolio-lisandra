import { PropsWithChildren } from "react";
import "./global.css";
import { Metadata } from "next";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "my-portfolio",
  description:
    "Lisandra Peña's portfolio. A place to showcase my work and skills.",
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col m-0">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
