import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Template from "./template";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Login from "./components/login/login.component";
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  cache: new InMemoryCache(),
});


const App = () => {

  const [value, setValue] = useState(null);
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null);
  // const user = useMemo(() => ({ value, setValue }), [value, setValue]);

  useEffect(() => {
    setUnsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapshot) => {
            setValue({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            });
          });
        } else {
          setValue(userAuth);
        }
      }
    );

    return () => {
      unsubscribeFromAuth();
    };
  }, [value]);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={Login} />
          <Route
            path="/dashboard"
            render={() =>
              value ? <Redirect to="/"></Redirect> : <Template></Template>
            }
          />
        </UserContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
