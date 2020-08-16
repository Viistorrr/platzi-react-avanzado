import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";

export const UserForm = ({ onSubmit, disabled, title, error }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          {...email} //Rest Operator, porque las props que retorna el hook tienen el mismo nombre
          //value={email.value}
          //onChange={email.onChange}
        />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />
        <Button>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
