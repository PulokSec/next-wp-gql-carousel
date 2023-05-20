import "../styles/index.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
