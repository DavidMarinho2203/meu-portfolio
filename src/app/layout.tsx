import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" type="image/x-icon" />
        <title>David Beckham</title>
      </head>
      <body>
        <div className="flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
