import React, { useState } from 'react'
import ListVille from './Composents/ListVille'
import AddVille from './Composents/AddVille'

const App = () => {

  /*const addnewville = (newville) =>{

    setlistville([... listville, newville])
     
  }
  */

  return (
    <div>
        <h1 className="text-center">LES VILLES DE MAROC</h1>
      <hr color="gray" />
      {/*<AddVille AddListVille={addnewville}/>*/}
      <ListVille/>
    </div>

  )
}

export default App
