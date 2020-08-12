import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
export const UserForm = ({ onSubmit }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Email"
        {...email} //Rest Operator, porque las props que retorna el hook tienen el mismo nombre
        //value={email.value}
        //onChange={email.onChange}
      />
      <input type="password" placeholder="Password" {...password} />
      <button>Iniciar Sesion</button>
    </form>
  );
};
