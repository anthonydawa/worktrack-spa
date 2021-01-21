import { Fragment, useContext } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { value, setValue } = useContext(UserContext);

  console.log(value);

  return (
    <Fragment>
      {value ? (
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const value = await signInWithGoogle;
            setValue(value);
          }}
        >
          Login with Google
        </button>
      )}
    </Fragment>
  );
};

export default Login;
