import { useState } from "react";
import CollegeComp from "./CollegeComp";
import { SubjectContext } from "./ContextData";

const ContextApi = () => {
  const [subject, setSubject] = useState("English");
  return (
    <SubjectContext.Provider value={subject}>
      <div className="bg-yellow-300 p-10 text-center font-bold text-2xl">
        <select
          defaultValue={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="text-black px-4  py-2 border border-gray-200"
        >
          <option value="">Select</option>
          <option value="English">English</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="Hindi">Hindi</option>
        </select>
        <div>ContextApi</div>
        <button onClick={() => setSubject("")}>Clear Subject</button>
        <CollegeComp />
      </div>
    </SubjectContext.Provider>
  );
};

export default ContextApi;
