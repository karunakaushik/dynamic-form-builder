Problem Statement:

    Create a dynamic form builder using React. The form structure (fields, types, labels, etc.) will be provided as a JSON object. Based on this JSON, the form should render with the appropriate fields (text, checkbox, radio, etc.). The user should be able to submit the form, and the form data should be validated and logged in the console.

    Dynamic Rendering: Render form fields dynamically based on a JSON configuration.
    Form Validation: Implement validation based on the field types specified in the JSON. For example, ensure email fields contain valid emails, required fields are filled, etc.
    State Management: Manage form state in a way that scales well, especially if the form is complex with many fields.

    Implement custom validators specified in the JSON.
    Allow adding/removing fields dynamically by editing the JSON object.

    Folder Structure : 
    /src
        ├── components
        │    ├── dynamix-form
        │    │     ├──form.tsx
        │    │     ├──form.module.css
        │    │
        │    ├── field
        │          ├──field.tsx
        │          ├──field.module.css
        │          ├──multi-checkbox
        │               ├──multi-checkbox.tsx
        │           
        ├── constant
        │    ├── data.ts
        │    ├── validators.ts
        ├── App.tsx
        ├── App.css
        ├── index.css
        ├── main.tsx
