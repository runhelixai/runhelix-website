import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import LenisScroll from "@/components/LenisScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Helix",
  description: "The DNA of Product Storytelling",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>
        <LenisScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
