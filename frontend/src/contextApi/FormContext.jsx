import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // shared state for form
  const [form, setForm] = useState({ open: false, event: null,id:null });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};
