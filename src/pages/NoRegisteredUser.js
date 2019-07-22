import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NoRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <Fragment>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables })
                  .then(activateAuth)
              }

              const errorMsg = error && 'El usuario ya existe o hay algun problema.'
              return <UserForm disabled={loading} title='Registrarse' onSubmit={onSubmit} error={errorMsg} />
            }}
          </RegisterMutation>

          <LoginMutation >
            {
              (login, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables })
                    .then(activateAuth)
                }

                const errorMsg = error && 'Usuario o contrasña incorrecta...'
                return <UserForm title='Iniciar sesion' onSubmit={onSubmit} disabled={loading} error={errorMsg} />
              }
            }
          </LoginMutation>

        </Fragment>
      )
    }
  </Context.Consumer>
)
