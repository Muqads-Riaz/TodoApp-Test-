import React from 'react'
import { Button } from '@mui/material'

export default function MyButton(props) {
  return (
    <Button sx={{ margin: "20px" }} color={props.color} variant="contained" onClick={props.onClick}>{props.label}</Button>
  )
}
