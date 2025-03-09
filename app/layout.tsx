import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import "./globals.css";
import { KarlaFont } from "@/lib/font";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Uifry",
  description: "The ultimate tool for you shope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${KarlaFont.className} antialiased`}>
        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />{" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
