import { PropsWithChildren } from "react";
import "./global.css";
import { Metadata } from "next";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "my-portfolio",
  description:
    "Lisandra Peña's portfolio. A place to showcase my work and skills.",
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html>
      <body>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
