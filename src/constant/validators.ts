export const validators = {
  email: (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email format",
  minLength: (value: string, length: number) =>
    value.length >= length || `Must be at least ${length} characters`,
  required: (value: any) => !!value || "This field is required",
};
