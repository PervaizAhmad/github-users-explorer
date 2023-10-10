"use client";

import UserProfile from "@/components/userProfile";
import { GetUser } from "@/http/queries/users";

export default function Profile({ params }: { params: { username: string } }) {
  const user = GetUser(params.username);

  return (
    <>
      {!user.isLoading && !!user.data && (
        <div className="w-full mt-16">
          <UserProfile username={user.data.login} showDetails />
        </div>
      )}
    </>
  );
}
