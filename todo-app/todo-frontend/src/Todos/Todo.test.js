import React from 'react'
import { render, screen } from '@testing-library/react';
import Todo from './Todo'


test('todo displays text correctly', () => {

  const todo = {
    text: "Finish those tests.",
    done: false
  }
  
  render(
    <Todo 
      onClickDelete={() => {}} 
      onClickComplete={() => {}} 
      todo={todo} />
  )

  expect(screen.getByText('Finish those tests.')).toBeInTheDocument()
})
