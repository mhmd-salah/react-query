import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5,
    },
  },
});

const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppRouter;
