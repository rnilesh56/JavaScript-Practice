import StudentProp from "./StudentProp";

const ClassComp = () => {
  console.log("Class Component render");

  return (
    <>
      <div className="bg-sky-400 p-10 text-center font-bold text-2xl">
        <div>ClassComp</div>
        <StudentProp />
      </div>
    </>
  );
};

export default ClassComp;
