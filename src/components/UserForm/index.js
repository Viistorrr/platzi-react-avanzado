import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          {...email} //Rest Operator, porque las props que retorna el hook tienen el mismo nombre
          //value={email.value}
          //onChange={email.onChange}
        />
        <Input type="password" placeholder="Password" {...password} />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  );
};
