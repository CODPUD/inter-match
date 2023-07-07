import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inter Match | Remote Jobs Simplified",
  description:
    "Find your next remote job at Inter Match. Explore, connect, and start your work-from-anywhere journey today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
