import { UserSchemaI } from "@/_interfaces/services/user.schema.interface";
import { GetUser } from "@/http/queries/users";
import Image from "next/image";

export default function UserProfile({
  data,
  onClick,
}: {
  data: UserSchemaI;
  onClick: (username: string) => void;
}) {
  const username = data.url.split("https://api.github.com/users/")[1];
  const user = GetUser(username);

  return (
    <>
      {user.isLoading ? (
        <p>...</p>
      ) : (
        user.data && (
          <div
            className="flex flex-col items-center text-black group pt-6 pb-6 hover:pt-0 ease-out duration-300 cursor-pointer"
            onClick={() => onClick(username)}
          >
            <Image
              src={data.avatar_url}
              width={150}
              height={150}
              alt="GitHub avatar"
              className="rounded-full shadow-lg shadow-[#000614] group-hover:w-[198px] group-hover:border-4 group-hover:border-sky-400 ease-out duration-300 cursor-pointer"
            />
            <div className="mt-10 group-hover:mt-4 px-10 py-4 rounded-2xl ease-out duration-300 text-center bg-sky-950 shadow-inner shadow-[#000614]">
              <p className="text-xl text-white font-bold cursor-pointer">
                <span className="text-sky-400 select-none">{"<"}</span>
                {data.login}
                <span className="text-sky-400 select-none">{" />"}</span>
              </p>
              <p className="pt-3 text-base text-sky-100">{user.data.name}</p>
            </div>
          </div>
        )
      )}
    </>
  );
}
