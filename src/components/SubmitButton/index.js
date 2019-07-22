import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ disabled, children, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>
    {children}
  </Button>
}
