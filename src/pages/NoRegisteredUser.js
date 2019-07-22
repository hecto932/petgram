import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NoRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables })
              .then(({ data }) => {
                const { signup } = data
                console.log(signup)
              })
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
                .then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                })
            }

            const errorMsg = error && 'Usuario o contrasña incorrecta...'
            return <UserForm title='Iniciar sesion' onSubmit={onSubmit} disabled={loading} error={errorMsg} />
          }
        }
      </LoginMutation>

    </Fragment>
  )
}
