import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

interface UseFormArgs<T> {
  defaultValues: T;
  validate: (values: T) => ErrorForm<T> & {
    isValidating: boolean;
  };
}

type ErrorForm<T> = {
  [k in keyof T]: string[];
};

export function useForm<T>({ defaultValues, validate }: UseFormArgs<T>) {
  const [values, setValues] = useState<T>(defaultValues);

  const [errors, setErrors] = useState<{
    [K in keyof T]: string[];
  }>();

  const debouncedHandleError = useDebounce({
    fn: setErrors,
    timeout: 200,
  });
  const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues((prev) => {
      const newValues = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      debouncedHandleError({ ...validate(newValues) });
      return newValues;
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const validateResult = validate(values);
    setErrors({
      ...validateResult,
    });

    if (!validateResult.isValidating) {
      return;
    }

    alert(JSON.stringify(values));
  };

  return {
    values,
    errors,
    handleValueChange,
    handleSubmit,
  };
}
