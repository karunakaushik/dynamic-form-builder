import React, { useState } from "react";
import Field from "../fields/filed";
import { formSchema } from "../../constant/data";
import styles from "./form.module.css";
import CheckboxGroup from "../fields/multi-checkbox/multi-checkbox";

interface classes {
  root?: string;
  title?: string;
  submitBtn?: string;
  error?: string;
}

const Form = ({ classes }: { classes?: classes }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (formData: Record<string, any>) => {
    const errors: Record<string, string> = {};

    formSchema.fields.forEach(
      ({ name, required, minLength, errorMessage, multiCheckbox }) => {
        const value = formData[name] || (multiCheckbox ? [] : "");

        if (required && (!value || (multiCheckbox && value.length === 0))) {
          errors[name] = errorMessage?.required || "This field is required";
        }

        if (!multiCheckbox && minLength && value.length < minLength) {
          errors[name] =
            errorMessage?.minLength ||
            `Must be at least ${minLength} characters`;
        }

        if (name === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) {
          errors[name] = errorMessage?.invalid || "Invalid email format";
        }
      }
    );

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.root} ${classes?.root}`}
      noValidate
    >
      <h2 className={`${styles?.title} ${classes?.title}`}>
        {formSchema.title}
      </h2>
      {formSchema.fields.map((field) => (
        <div key={field.name} style={{ width: "90%" }}>
          {field?.multiCheckbox ? (
            <CheckboxGroup
              field={field}
              errorMessage={errors[field.name]}
              value={formData[field.name] || []}
              onChange={(name: string, value: string[]) =>
                handleChange(name, value)
              }
            />
          ) : (
            <>
              <Field
                field={field}
                value={formData[field.name]}
                onChange={handleChange}
              />
              {errors[field.name] && (
                <p className={` ${styles?.error} ${classes?.error}`}>
                  {errors[field.name]}
                </p>
              )}
            </>
          )}
        </div>
      ))}
      <button
        type="submit"
        className={`${styles?.submitBtn} ${classes?.submitBtn}`}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
