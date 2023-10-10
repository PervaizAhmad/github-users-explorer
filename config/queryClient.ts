import { QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 60000 * 5,
    },
    mutations: {
      retry: false,
    },
  },
};
