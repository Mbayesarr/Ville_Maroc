import React, { useState } from 'react'
import ListVille from './Composents/ListVille'

const App = () => {

  const [Listville, setListVille] = useState(["Ville 1", "Ville 2"]);
  return (
    <div>
      <header>
        <h1 className="text-center">LES VILLES DE MAROC</h1>
        
      </header>
      <hr color="gray" />
      <ListVille ville={Listville} />
    </div>

  )
}

export default App
