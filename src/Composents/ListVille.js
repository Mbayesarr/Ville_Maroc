import React from 'react'
import ItemVille from './ItemVille'
import { useState } from 'react'
const ListVille = () => {


    const [villes, setstate] = useState([{id: 1, nom1:"Casablanca", photo:"./casa.jpeg"},{id: 2, nom1:"Tanger", photo:"./tanger.jpeg"}])


    
    return (
        <div>
            <ul className="list-group">
                {villes.map((v)=>
                <ItemVille 
                nom={v.nom1} 
                photo={v.photo }
                key={v.id}
                id={v.id}
                enDelete={(id)=>alert(id)}
                />
                )}
            </ul>
        </div>
    )
}

export default ListVille
