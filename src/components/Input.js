import React from 'react'

export default function Input(props) {
  return (
    <input value={props.value} placeholder={props.placeholder} className={props.className} onChange={props.onChange}></input>
  )
}
