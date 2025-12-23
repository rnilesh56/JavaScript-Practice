import { useContext } from "react";
import { SubjectContext } from "./ContextData";

const SubjectComp = () => {
  console.log("Subject Component render");

  const subject = useContext(SubjectContext);
  return (
    <>
      <div className="p-10 bg-red-300 text-center font-bold text-2xl">
        Subject is : {subject}
      </div>
    </>
  );
};

export default SubjectComp;
