import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
