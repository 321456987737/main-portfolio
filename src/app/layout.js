// "use client";
import "./globals.css";
import Navbar from "@/component/navbar";
import { Fira_Code } from "next/font/google";
import Footer from "@/component/footer";
import SmoothScroll from "@/component/SmoothScroll";
import Layoutwraper from "@/component/layoutwraper"
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira",
});
export const metadata = {
  title: "IFtikhar ali | portfolio",
  description: "I am a full-stack web developer focused on modern, responsive experiences using Next.js and Node.js.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
        style={{ fontFamily: "var(--font-fira), monospace" }}
      >
        <SmoothScroll>
          <Navbar />
         <div >
          <Layoutwraper />
         </div>
          <div className="bg-[var(--bg)]">
            {children}

            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
