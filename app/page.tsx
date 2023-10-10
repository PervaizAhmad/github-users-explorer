"use client";

import Image from "next/image";

export default function Home() {
  return (
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
          <h1 className="pr-5 text-xl">User Explorer</h1>
        </div>
      </div>
    </main>
  );
}
