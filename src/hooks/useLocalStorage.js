import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const savedValues = JSON.parse(localStorage.getItem(key));
  
  const [value, setValue] = useState(() => {
    return savedValues || initialValue
  });

  const handleSave = (newValue) => {
    const updatedListValues = [...value, newValue];

    setValue(updatedListValues);
    localStorage.setItem(key, JSON.stringify(updatedListValues));
  };

  const handleUpdate = (id, changes) => {
    const objToUpdate = value.find(item => item.id === id);

    if(objToUpdate){
      Object.assign(objToUpdate,changes)
    }

    const updatedListValues = [...value];

    setValue(updatedListValues);
    
    localStorage.setItem(key, JSON.stringify(updatedListValues));
  };

  return { value, handleSave, handleUpdate };
};

