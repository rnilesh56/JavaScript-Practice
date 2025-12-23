import useToggle from "./useToggle";

const Toggle = () => {
  const { value, toggleValue } = useToggle(false);

  return (
    <>
      <div className="text-center mb-10 text-xl font-bold">
        {value ? <h1>Custom Hooks </h1> : null}
      </div>
      <div className="flex gap-6">
        <button
          onClick={toggleValue}
          className="px-6 py-3 bg-white text-black rounded-xl cursor-pointer border"
        >
          Toggle Heading
        </button>
        <button
          onClick={() => toggleValue(false)}
          className="px-6 py-3 bg-white text-black rounded-xl cursor-pointer border"
        >
          Hide Heading
        </button>
        <button
          onClick={() => toggleValue(true)}
          className="px-6 py-3 bg-white text-black rounded-xl cursor-pointer border"
        >
          Show Heading
        </button>
      </div>
    </>
  );
};

export default Toggle;
