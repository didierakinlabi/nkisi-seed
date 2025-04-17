
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Kisantu wa Mbongi",
  description: "Nkisi Network – Archive, Healing, Resistance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-neutral-100 text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
