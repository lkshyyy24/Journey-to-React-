import UserProvider from "./context/UserProvider";
import Login from "./Login";

function App() {
  return (
    <UserProvider>
      <Login />
    </UserProvider>
  );
}

export default App;