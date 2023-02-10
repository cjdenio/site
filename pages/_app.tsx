import "../styles/global.css";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { nanoid } from "nanoid";
import { useEffect } from "react";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!document.cookie.includes("user_key")) {
      document.cookie = `user_key=${nanoid()}; path=/; max-age=31536000;`;
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
