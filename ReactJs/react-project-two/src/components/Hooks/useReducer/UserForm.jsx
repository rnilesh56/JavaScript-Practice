// import { useReducer } from "react";

// const emptyData = {
//   name: "",
//   password: "",
//   email: "",
//   city: "",
//   address: "",
// };

// const reducer = (data, action) => {
//   return { ...data, [action.type]: action.value };
// };

// const UserForm = () => {
//   const [state, dispatch] = useReducer(reducer, emptyData);

//   const handleChange = (e) => {
//     let { value, name } = e.target;
//     dispatch({
//       type: name,
//       value: value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log(state);
//   };
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-semibold mb-4">Use Reducer</h1>

//       <div className="flex flex-col gap-3">
//         <input
//           className="border px-4 py-2 rounded"
//           placeholder="Enter name"
//           name="name"
//           onChange={handleChange}
//         />
//         <input
//           className="border px-4 py-2 rounded"
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           onChange={handleChange}
//         />
//         <input
//           className="border px-4 py-2 rounded"
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           onChange={handleChange}
//         />
//         <input
//           className="border px-4 py-2 rounded"
//           type="text"
//           name="city"
//           placeholder="Enter city"
//           onChange={handleChange}
//         />
//         <input
//           className="border px-4 py-2 rounded"
//           type="text"
//           name="address"
//           placeholder="Enter address"
//           onChange={handleChange}
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="mt-7 px-4 py-2 bg-black text-white rounded"
//       >
//         Add Details
//       </button>

//       <div className="bg-gray-200 mt-4 text-black p-3 rounded-sm">
//         <ul>
//           <li>Name: {state.name}</li>
//           <li>password: {state.password}</li>
//           <li>email: {state.email}</li>
//           <li>city: {state.city}</li>
//           <li>address: {state.address}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserForm;

//!

import { useReducer } from "react";

/* -------------------- INITIAL STATE -------------------- */

const initialState = {
  values: {
    name: "",
    password: "",
    email: "",
    city: "",
    address: "",
  },
  errors: {},
  touched: {},
  isSubmitting: false,
};

/* -------------------- ACTION TYPES -------------------- */

const ACTIONS = {
  CHANGE_FIELD: "CHANGE_FIELD",
  SUBMIT_START: "SUBMIT_START",
  SUBMIT_SUCCESS: "SUBMIT_SUCCESS",
  RESET: "RESET",
};

/* -------------------- VALIDATION -------------------- */

const validate = (values) => {
  const errors = {};

  for (const key in values) {
    if (!values[key].trim()) {
      errors[key] = `${key} is required`;
    }
  }

  return errors;
};

/* -------------------- REDUCER -------------------- */

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_FIELD: {
      const { name, value } = action.payload;

      return {
        ...state,
        values: {
          ...state.values,
          [name]: value,
        },
        touched: {
          ...state.touched,
          [name]: true,
        },
        errors: {
          ...state.errors,
          [name]: value.trim() ? "" : `${name} is required`,
        },
      };
    }

    case ACTIONS.SUBMIT_START: {
      const errors = validate(state.values);

      if (Object.keys(errors).length > 0) {
        return {
          ...state,
          errors,
          touched: Object.keys(state.values).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
          ),
          isSubmitting: false,
        };
      }

      return {
        ...state,
        isSubmitting: true,
        errors: {},
      };
    }

    case ACTIONS.SUBMIT_SUCCESS:
      return initialState;

    case ACTIONS.RESET:
      return initialState;

    default:
      return state;
  }
};

/* -------------------- COMPONENT -------------------- */

const UserForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: ACTIONS.CHANGE_FIELD,
      payload: { name, value },
    });
  };

  const handleSubmit = () => {
    dispatch({ type: ACTIONS.SUBMIT_START });

    // stop if validation errors exist
    if (Object.keys(state.errors).length > 0) return;

    console.log("Submitted data:", state.values);

    dispatch({ type: ACTIONS.SUBMIT_SUCCESS });
  };

  const { values, errors, touched, isSubmitting } = state;

  return (
    <div className="p-4 max-w-md">
      <h1 className="text-xl font-semibold mb-4">useReducer Form (Full)</h1>

      <div className="flex flex-col gap-3">
        {Object.keys(values).map((field) => (
          <div key={field}>
            <input
              className="border px-4 py-2 rounded w-full"
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={`Enter ${field}`}
              value={values[field]}
              onChange={handleChange}
            />

            {touched[field] && errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="mt-5 px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  );
};

export default UserForm;
