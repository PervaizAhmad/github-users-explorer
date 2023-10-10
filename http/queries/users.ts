import { UserSchemaI } from "@/_interfaces/services/user.schema.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../axios-intercept";

const getUsers = async ({
  queryKey,
}: {
  queryKey: (string | null | undefined)[];
}) => {
  const [_, perPage, since] = queryKey;
  const { data: response }: { data: UserSchemaI[] } = await axios.get(
    `/users${perPage ? "?per_page=" + perPage : ""}${
      since ? "&since=" + since : ""
    }`
  );
  return response;
};

const getUser = async ({
  queryKey,
}: {
  queryKey: (string | null | undefined)[];
}) => {
  const [_, username] = queryKey;
  const { data: response }: { data: UserSchemaI } = await axios.get(
    `/users/${username}`
  );
  return response;
};

/**
 * Lists all users, in the order that they signed up on GitHub.
 * This list includes personal user accounts and organization accounts.
 *
 * @param perPage The number of results per page (max 100).
 * @param since A user ID. Only return users with an ID greater than this ID.
 * @returns Array of UserSchemaI
 */
export const GetUsers = (perPage?: string, since?: string) => {
  return useQuery(["getUsers", perPage, since], getUsers);
};

/**
 * Provides publicly available information about someone with a GitHub account.
 *
 * @param username The handle for the GitHub user account.
 * @returns UserSchemaI
 */
export const GetUser = (username: string) => {
  return useQuery(["getUser", username], getUser);
};
