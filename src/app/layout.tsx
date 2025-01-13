import type { Metadata } from "next";
import { Shrikhand } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({
    variable: "--font-shrikhand",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "The High Lighters",
    description: "A group of lighters that love to smoke and rap",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${shrikhand.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
