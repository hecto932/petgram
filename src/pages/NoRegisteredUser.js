import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NoRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <Fragment>
          <UserForm title='Registrarse' onSubmit={activateAuth} />
          <UserForm title='Iniciar sesion' onSubmit={activateAuth} />
        </Fragment>
      )
    }
  </Context.Consumer>
)
