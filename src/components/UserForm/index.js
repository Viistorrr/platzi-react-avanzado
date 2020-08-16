import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Title, Error } from "./styles";
import { SubmitButton } from "../SubmitButton";

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
        <SubmitButton>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
