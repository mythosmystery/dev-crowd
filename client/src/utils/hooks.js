import { useState } from 'react';

export const useForm = (callback) => {
   const [formState, setFormState] = useState({});

   const onChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   const onSubmit = (event) => {
      event.preventDefault();
      callback();
   };

   return {
      onChange,
      onSubmit,
      formState,
   };
};
