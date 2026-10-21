
import { useReducer } from "react";
import "./App.css";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "logIn":
      return {
        ...state,
        error: "",
      };

    case "success":
      return {
        ...state,
        loggedIn: true,
        password: "",
        error: "",
      };

    case "error":
      return {
        ...state,
        error: "Incorrect username or password",
        loggedIn: false,
        username: "",
        password: "",
      };

    case "logOut":
      return {
        ...state,
        username: "",
        password: "",
        loggedIn: false,
        error: "",
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(loginReducer, {
    username: "",
    password: "",
    loggedIn: false,
    error: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "logIn" });

    if (state.username === "Jerry" && state.password === "Tom") {
      dispatch({ type: "success" });
    } else {
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="App">
      <h1 className="text-center text-3xl font-semibold mt-2 py-2">
        usereducer
      </h1>

      <div>
        {state.loggedIn ? (
          <div className="flex flex-col items-center mt-4">
            <h2 className="text-center text-3xl mt-4 py-4">
              Welcome {state.username}!
            </h2>

            <button
              className="bg-blue-600 text-white text-lg font-medium rounded-lg py-1 px-3"
              onClick={() => dispatch({ type: "logOut" })}
            >
              Log Out
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col items-center justify-center gap-4 mt-4 py-4"
            onSubmit={handleSubmit}
          >
            <input
              className="border rounded-lg px-2 py-1"
              type="text"
              autoComplete="username"
              placeholder="Username"
              value={state.username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.target.value,
                })
              }
            />

            <input
              className="border rounded-lg px-2 py-1"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.target.value,
                })
              }
            />

            <button
              className="bg-blue-600 text-white text-lg font-medium rounded-lg py-1 px-3"
              type="submit"
            >
              Login
            </button>

            <p className="text-red-500 text-center">{state.error}</p>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
