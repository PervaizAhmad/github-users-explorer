import Providers from "@/utils/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub User Explorer",
  description:
    "A web app that allows you to search for GitHub users and view their profile details, repositories, and followers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="flex flex-row items-center">
              <Image
                src="/assets/github-mark-white.png"
                alt="Github Logo Icon"
                width={100}
                height={24}
                priority
              />
              <div className="flex flex-col items-end">
                <Image
                  src="/assets/GitHub_Logo_White.png"
                  alt="Github Logo Icon"
                  width={250}
                  height={24}
                  priority
                />
                <h1 className="pr-5 text-xl font-bold">User Explorer</h1>
              </div>
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
