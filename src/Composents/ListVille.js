import React from 'react'
import ItemVille from './ItemVille'

const ListVille = ({ville}) => {
    return (
        <>
            <ul className="list-group">
                {ville.map((NomVille)=>(
                <ItemVille nom={NomVille}/>))
                }
            </ul>
        </>
    )
}

export default ListVille
