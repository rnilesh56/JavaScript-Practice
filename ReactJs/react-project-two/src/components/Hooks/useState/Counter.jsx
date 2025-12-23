import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <p>You have clicked {count}</p>
      <button
        className="border bg-white text-black px-6 "
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
