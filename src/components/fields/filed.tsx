import React from "react";
import styles from "./field.module.css";

interface FieldProps {
  field: {
    name: string;
    label: string;
    options?: any;
    required: boolean;
    type: string;
    multiCheckbox?: boolean;
  };
  value: any;
  onChange: (name: string, value: any) => void;
  classes?: {
    inputField?: string;
    radiofield?: string;
    checkboxField?: string;
    inputSelect?: string;
    root?: string;
    label?: string;
  };
}

const Field: React.FC<FieldProps> = ({ field, value, onChange, classes }) => {
  const { name, label, type, options, required } = field;

  if (type === "select") {
    return (
      <div className={` ${styles?.root} ${classes?.root}`}>
        <label className={classes?.label}>{label}</label>
        <select
          value={value || ""}
          onChange={(e) => onChange(name, e.target.value)}
          className={`${classes?.inputSelect}  ${styles?.inputSelect} `}
        >
          <option value="">Select</option>
          {options.map((opt: string) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className={` ${styles?.root} ${classes?.root}`}>
        <label className={` ${styles?.label} ${classes?.label}`}>
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(name, e.target.checked)}
            required={required}
            className={`${classes?.checkboxField}`}
          />
          {label}
        </label>
      </div>
    );
  }

  if (type === "radio") {
    return (
      <div className={` ${styles?.root} ${classes?.root}`}>
        <label className="font-semibold">{label}</label>
        <div className={styles.radioOptions}>
          {options.map((opt: string) => (
            <label key={opt} className={` ${styles?.label} ${classes?.label}`}>
              <input
                type="radio"
                name={name}
                value={opt}
                checked={value === opt}
                onChange={() => onChange(name, opt)}
                className={`${classes?.radiofield} border mr-2`}
                required={required}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles?.root} ${classes?.root}`}>
      <label className={classes?.label}>
        {label} {required && "*"}
      </label>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(name, e.target.value)}
        required={required}
        className={`${styles?.input} ${classes?.inputField} border p-2 w-full`}
      />
    </div>
  );
};

export default Field;
