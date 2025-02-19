import { Inter } from 'next/font/google'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Turf",
  description: "Book your next turf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
