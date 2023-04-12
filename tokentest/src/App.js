import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./page/Login";

function App() {
  return (
    <GoogleOAuthProvider clientId="946916753815-sme09oj9iqieo2lbf6837j4qdp3h50s6.apps.googleusercontent.com">
      <div>
        <Login />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
