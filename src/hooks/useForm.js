import { useState } from "react";

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setValue({
      id: Date.now(),
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return { value, setValue, handleInputChange };
};
