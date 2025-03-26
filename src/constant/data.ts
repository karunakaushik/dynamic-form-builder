export const formSchema = {
  title: "User Registration",
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      minLength: 3,
      errorMessage: {
        required: "Username is required",
        minLength: "Username must be at least 3 characters long",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      validator: "email",
      errorMessage: {
        required: "Email is required",
        invalid: "Please enter a valid email address",
      },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: false,
      minLength: 6,
      errorMessage: {
        required: "Password is required",
        minLength: "Password must be at least 6 characters long",
      },
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: ["Male", "Female", "Other"],
      required: true,
    },
    {
      name: "education",
      label: "Education",
      type: "select",
      options: ["12th", "10th", "B.tech"],
      required: true,
    },
    {
      name: "hobbies",
      label: "Hobbies",
      type: "checkbox",
      options: [
        { label: "Reading", value: "reading" },
        { label: "Gaming", value: "gaming" },
        { label: "Traveling", value: "traveling" },
      ],
      required: false,
      errorMessage: {
        required: "Please select at least one hobby",
      },
      multiCheckbox: true,
    },
    {
      name: "agree",
      label: "Agree to terms",
      type: "checkbox",
      required: true,
    },
  ],
};
