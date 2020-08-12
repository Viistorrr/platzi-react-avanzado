import React, { useState } from "react";

//CustomHook personalizado para manejar el estado de todos los inputs
export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);

  return { value, onChange };
};
