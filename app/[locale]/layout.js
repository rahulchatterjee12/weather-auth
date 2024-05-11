import ReduxProvider from "@/components/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Weather Check",
  description: "Weather App with Next js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 text-white">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
