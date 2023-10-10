"use client";

import UserProfile from "@/components/userProfile";
import { GetUsers } from "@/http/queries/users";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [perPage, setPerPage] = useState(9);

  const loadMoreRef = useRef<null | HTMLButtonElement>(null);

  useEffect(() => {
    if (loadMoreRef.current)
      loadMoreRef.current.scrollIntoView({
        block: "center",
        behavior: "instant",
      });
  }, [perPage, loadMoreRef.current]);

  const users = GetUsers(perPage.toString());

  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-full pt-16">
        {users.isLoading ? (
          <div>
            <>LOADING...</>
          </div>
        ) : (
          users.data?.map((user, index) => (
            <UserProfile
              data={user}
              onClick={(username: string) => router.push(`/${username}`)}
            />
          ))
        )}
      </div>
      {users.isLoading ? (
        <></>
      ) : (
        <button
          ref={loadMoreRef}
          className="bg-sky-100 font-bold rounded-lg p-3 px-6 mt-16 text-sky-950 hover:bg-sky-400 hover:text-sky-100 ease-out duration-300"
          onClick={() => setPerPage(perPage + 3)}
        >
          Load More
        </button>
      )}
    </>
  );
}
