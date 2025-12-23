import SubjectComp from "./SubjectComp";

const StudentProp = () => {
  console.log("Student Component render");

  return (
    <>
      <div className="bg-green-400 p-10 text-center font-bold text-2xl">
        <div>StudentProp</div>
        <SubjectComp />
      </div>
    </>
  );
};

export default StudentProp;
