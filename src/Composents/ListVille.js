import React from 'react'
import ItemVille from './ItemVille'
import { useState } from 'react'
const ListVille = () => {


    const [villes, setvilles] = useState([{id: 1, nom1:"Casablanca", photo:"./casa.jpeg"},
                                        {id: 2, nom1:"Tanger", photo:"./tanger.jpeg"},
                                        {id: 3, nom1:"Rabat", photo:"./tanger.jpeg"}])

                                          
    const deleteVille = (idville)=>{ 

        if(window.confirm("Voulez vous supprimer ?")===false) return
        let newville = [... villes]
        newville = newville.filter((t)=>t.id !== idville)
        setvilles([... newville])

    }
    
    return (
        <div>
            <ul className="list-group">
                {villes.map((v)=>
                <ItemVille 
                nom={v.nom1} 
                photo={v.photo }
                key={v.id}
                id={v.id}
                enDelete={deleteVille}
                //enDelete={(id)=>alert(id)} 
                />
                )}
            </ul>
        </div>
    ) 
}

export default ListVille
