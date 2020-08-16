import React, { Fragment } from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";

export const NotRegisterUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <Fragment>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              //Esto es lo que se quiere que se ejecute
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables }).then(activateAuth);
              };
              const errorMsg =
                error && "El usuario ya existe o hay algun problema";
              return (
                <UserForm
                  disabled={loading}
                  error={errorMsg}
                  title="Registrarse"
                  onSubmit={onSubmit}
                />
              );
            }}
          </RegisterMutation>

          <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
        </Fragment>
      );
    }}
  </Context.Consumer>
);
