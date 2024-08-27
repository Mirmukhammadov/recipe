import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { FormContext } from "../../Context/useFormContext";
import "./input.css";

interface InputProps {
  type: string;
  id: string;
  text?: string;
  secondary?: string;
  control: Control<FieldValues> | undefined;
  name: string;
  rules?: RegisterOptions;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  text,
  secondary,
  control,
  name,
  rules,
}) => {
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
};

export default Input;
