import { Metadata } from "next";
import "@/app/ui/global.css"
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: '%s | Rian Dash',
    default: 'Rian Dashboard'
  },
  description: "Plataforma oficial do Rianzin",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiaseds`} >{children}</body>
    </html>
  );
}
