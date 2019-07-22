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
            {(register) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables })
                  .then(activateAuth)
              }
              return <UserForm title='Registrarse' onSubmit={onSubmit} />
            }}
          </RegisterMutation>
          <UserForm title='Iniciar sesion' onSubmit={activateAuth} />
        </Fragment>
      )
    }
  </Context.Consumer>
)
