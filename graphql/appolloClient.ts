import { ApolloClient, InMemoryCache } from "@apollo/client";
export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9y2h2dq179a01uo3fsu0zr0/master",
  cache: new InMemoryCache(),
});
