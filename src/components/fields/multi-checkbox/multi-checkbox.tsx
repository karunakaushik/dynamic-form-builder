import React from "react";
import styles from "../field.module.css";

interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  field: {
    name: string;
    label: string;
    options: CheckboxOption[];
    required?: boolean;
  };
  value: string[];
  onChange: (name: string, value: string[]) => void;
  classes?: Record<string, string>;
  errorMessage?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  field,
  value = [],
  onChange,
  classes = {},
  errorMessage = "",
}) => {
  const { name, label, options, required } = field;

  const handleCheckboxChange = (optionValue: string) => {
    const updatedValues = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];

    onChange(name, updatedValues);
  };

  return (
    <div className={`${styles?.root} ${classes?.root}`}>
      <label
        className={`${styles?.label} ${classes?.label} block font-semibold`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className={styles.multicheckboxOptions}>
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <div key={optionValue} className={styles.multicheckboxRoot}>
            <label className={styles?.label}>
              <input
                type="checkbox"
                checked={value.includes(optionValue)}
                onChange={() => handleCheckboxChange(optionValue)}
                className={`${classes?.checkboxField}`}
              />
              {optionLabel}
            </label>
          </div>
        ))}
      </div>

      {errorMessage && <p className={styles?.error}>{errorMessage}</p>}
    </div>
  );
};

export default CheckboxGroup;
