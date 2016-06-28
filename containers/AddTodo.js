import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField';

const KEY_ENTER = 13

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <TextField
        hintText="input text"
        floatingLabelText="What Task?"
        onKeyDown={e => {
          if (e.keyCode === KEY_ENTER) {
            dispatch(addTodo("テキトウ"))
          }
        }}
      />
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
