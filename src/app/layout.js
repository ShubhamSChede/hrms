import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "HRMS Pro - Complete HR Management Solution for Small Business",
  description: "Streamline your HR operations with our comprehensive HRMS platform. Manage attendance, payroll, leave, performance, and recruitment all in one place. Trusted by 1000+ businesses across India.",
  keywords: "HRMS, HR software, payroll management, attendance tracking, leave management, performance management, recruitment software, small business HR",
  authors: [{ name: "HRMS Pro Team" }],
  openGraph: {
    title: "HRMS Pro - Complete HR Management Solution",
    description: "Streamline your HR operations with our comprehensive HRMS platform",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
