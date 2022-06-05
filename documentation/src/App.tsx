import React from 'react'

import { Button, Input } from 'atomikku'
import 'atomikku/dist/index.css'

const App = () => {
  return (
    <div>
      <h1>
        Hello I'm a documentation website for atomikku
        <span role={'img'} aria-label='rocket'>
          {' '}
          🚀
        </span>
      </h1>
      <Button>Click Me</Button>
      <br />
      <Input type='password' placeholder='Input from atomikku' />
    </div>
  )
}

export default App
