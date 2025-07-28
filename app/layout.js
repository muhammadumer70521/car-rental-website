// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
// in layout.js
import 'leaflet/dist/leaflet.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <Toaster position="top-center" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
