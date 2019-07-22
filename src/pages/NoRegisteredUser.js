import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

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

              const errorMsg = error && 'El usuario ya no existe o hay algun problema.'
              return <UserForm disabled={loading} title='Registrarse' onSubmit={onSubmit} error={errorMsg} />
            }}
          </RegisterMutation>
          <UserForm title='Iniciar sesion' onSubmit={activateAuth} />
        </Fragment>
      )
    }
  </Context.Consumer>
)
