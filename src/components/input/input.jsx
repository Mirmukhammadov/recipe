// import React from "react";
// import "./input.css";

// function Input({ type, id, text, secondary, register }) {
//   return (
//     <div className={`input-div ${secondary == "secondary" ? secondary : ""}`}>
//       <label htmlFor={id}>{text}</label>
//       <input type={type} id={id} {...register(id)} />
//     </div>
//   );
// }

// export default Input;

import React from "react";
import { Controller } from "react-hook-form";
import { FormContext } from "../../Context/useFormContext";
import "./input.css";

function Input({ type, id, text, secondary, control, name, rules }) {
  const { formData, setFormData } = React.useContext(FormContext);

  return (
    <div className={`input-div ${secondary === "secondary" ? secondary : ""}`}>
      <label htmlFor={id}>{text}</label>
      {control ? (
        <Controller
          name={name}
          control={control}
          defaultValue=""
          rules={rules}
          render={({ field, fieldState }) => (
            <>
              <input type={type} id={id} {...field} />
              {fieldState.error && (
                <span className="error-message">
                  {fieldState.error.message}
                </span>
              )}
            </>
          )}
        />
      ) : (
        <input type={type} id={id} />
      )}
    </div>
  );
}

export default Input;

// import React, { useContext } from "react";
// import { Controller } from "react-hook-form";
// import { FormContext } from "../../Context/useFormContext";

// function Input({ id, type, text, name, control, secondary }) {
//   const { setFormData } = useContext(FormContext);

//   return (
//     <div className={`input-div ${secondary ? "secondary" : ""}`}>
//       <label htmlFor={id}>{text}</label>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <input
//             id={id}
//             type={type}
//             value={field.value || ""}
//             onChange={(e) => {
//               field.onChange(e);
//               setFormData((prevData) => ({
//                 ...prevData,
//                 [name]: e.target.value,
//               }));
//             }}
//           />
//         )}
//       />
//     </div>
//   );
// }

// export default Input;
