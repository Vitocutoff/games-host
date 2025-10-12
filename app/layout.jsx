import "./globals.css";

export const metadata = {
  title: "Games HUB",
  description: "App per catalogare i gichi della Switch",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (

    <html
      lang="it"
    >

      <body>

        {children}

      </body>

    </html>
  );
}
