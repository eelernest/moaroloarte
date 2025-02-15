import "./globals.css";
import Navbar from "./componentes/nav";
import Footer from "./componentes/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
