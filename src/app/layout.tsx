import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Study MBBS Russia | Expert NEET Counselling & Medical College Guidance",
  description:
    "Trusted medical education consultants helping NEET aspirants and parents choose the best medical colleges in India and abroad. Free counselling for NEET UG/PG admissions.",
  keywords:
    "NEET counselling, MBBS in Russia, medical college admission, NEET UG guidance, MBBS abroad, medical education consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
