import React, { useCallback } from "./react";

// hook for form control
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

// hook for form control and form validation
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

// const nameValidation = (fieldName, fieldValue) => {
//   if (fieldValue.trim() === '') {
//     return `${fieldName} is required`;
//   }
//   if (/[^a-zA-Z -]/.test(fieldValue)) {
//     return 'Invalid characters';
//   }
//   if (fieldValue.trim().length < 3) {
//     return `${fieldName} needs to be at least three characters`;
//   }
//   return null;
// };