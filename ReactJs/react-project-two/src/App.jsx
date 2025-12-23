import UserCard from "./components/Props/UserCard";
import { user } from "../src/components/Props/user";
import Counter from "./components/Hooks/useState/Counter";
import UserForm from "./components/Hooks/useReducer/UserForm";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="flex flex-wrap gap-4">
        <UserCard user={user[0]} />
        <UserCard user={user[1]} />
      </div> */}

      {/* <Counter /> */}

      <UserForm />
    </>
  );
}

export default App;
