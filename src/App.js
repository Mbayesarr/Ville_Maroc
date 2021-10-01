import React, { useState } from 'react'
import ListVille from './Composents/ListVille'

const App = () => {

  return (
    <div>
        <h1 className="text-center">LES VILLES DE MAROC</h1>
      <hr color="gray" />
      <ListVille/>
    </div>

  )
}

export default App
