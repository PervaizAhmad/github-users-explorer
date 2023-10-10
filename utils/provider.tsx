"use client";

import { queryClientConfig } from "@/config/queryClient";
import Hydrate from "@/utils/hydrate.client";
import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";

function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientConfig)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default Providers;
