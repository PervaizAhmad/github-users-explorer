import { GetUser } from "@/http/queries/users";
import Image from "next/image";
import {
  FaBinoculars,
  FaBuilding,
  FaCodeBranch,
  FaIdCard,
  FaMapMarked,
  FaQuoteRight,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";

export default function UserProfile({
  username,
  showDetails = false,
  onClick,
}: {
  username: string;
  showDetails?: boolean;
  onClick?: (username: string) => void;
}) {
  const user = GetUser(username);

  const profileRedirect = () => {
    location.href = `https://github.com/${username}`;
  };

  return (
    <>
      {!user.isLoading && !!user.data && (
        <div
          className={`flex flex-col items-center text-black group pt-6 pb-6 ease-out duration-300 ${
            showDetails ? "" : "hover:pt-0 cursor-pointer"
          }`}
          onClick={!!onClick ? () => onClick(username) : () => {}}
        >
          <Image
            src={user.data.avatar_url}
            width={150}
            height={150}
            alt="GitHub avatar"
            className={`rounded-full shadow-lg shadow-[#000614] border-sky-400 ease-out duration-300 cursor-pointer ${
              showDetails
                ? "border-4 hover:border-white hover:shadow-md hover:shadow-white"
                : "group-hover:w-[198px] group-hover:border-4"
            }`}
            onClick={showDetails ? profileRedirect : () => {}}
          />
          <div
            className={`px-10 py-4 rounded-2xl max-w-sm text-center bg-sky-950 shadow-inner shadow-[#000614] mt-10 ease-out duration-300 ${
              showDetails ? "" : "group-hover:mt-4"
            } `}
          >
            <p
              className={`text-xl text-white font-bold ${
                showDetails ? "pb-2" : "cursor-pointer"
              }`}
            >
              <span className="text-sky-400 select-none">{"<"}</span>
              {user.data.login}
              <span className="text-sky-400 select-none">{" />"}</span>
            </p>
            <div
              className={`flex flex-col w-fit m-auto gap-4 ${
                showDetails ? "items-start" : ""
              }`}
            >
              {!!user.data.name && (
                <div className="flex flex-row items-center justify-center pt-3">
                  <FaIdCard
                    color={"#fff"}
                    size={showDetails ? "2rem" : "1rem"}
                  />
                  <p className="pl-2 text-base text-sky-100 text-left">
                    {user.data.name}
                  </p>
                </div>
              )}
              {showDetails ? (
                <>
                  {!!user.data.company && (
                    <div className="flex flex-row items-center justify-center">
                      <FaBuilding color={"#fff"} size={"2rem"} />
                      <p className="pl-2 text-white text-left">
                        {user.data.company}
                      </p>
                    </div>
                  )}
                  {!!user.data.location && (
                    <div className="flex flex-row items-center justify-center">
                      <FaMapMarked color={"#fff"} size={"2rem"} />
                      <p className="pl-2 text-white text-left">
                        {user.data.location}
                      </p>
                    </div>
                  )}
                  {!!user.data.following && (
                    <div className="flex flex-row items-center justify-center">
                      <FaBinoculars color={"#fff"} size={"2rem"} />
                      <p className="pl-2 text-white text-left">
                        {user.data.following}
                      </p>
                    </div>
                  )}
                  {!!user.data.followers && (
                    <div className="flex flex-row items-center justify-center">
                      <FaUsers color={"#fff"} size={"2rem"} />
                      <p className="pl-2 text-white text-left">
                        {user.data.followers}
                      </p>
                    </div>
                  )}
                  {!!user.data.public_repos && (
                    <div className="flex flex-row items-center justify-center">
                      <FaCodeBranch color={"#fff"} size={"2rem"} />
                      <p className="pl-2 text-white text-left">
                        {user.data.public_repos}
                      </p>
                    </div>
                  )}
                  {!!user.data.twitter_username && (
                    <div className="flex flex-row items-center justify-center">
                      <FaTwitter color={"#fff"} size={"2rem"} />
                      <p className="pl-2 text-white text-left">
                        {user.data.twitter_username}
                      </p>
                    </div>
                  )}
                  {!!user.data.bio && (
                    <div className="flex flex-row items-center justify-center">
                      <FaQuoteRight color={"#fff"} size={"2rem"} />
                      <p className="pl-2 text-white text-left">
                        {user.data.bio}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
