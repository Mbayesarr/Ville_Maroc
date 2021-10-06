import React from 'react'

const ItemVille = ({ nom, photo,id,enDelete }) => {
    return (

        <li className="list-group-item m-2 border d-flex justify-content-between align-items-center">
                    <img src={photo} className="img-thumbnail" width="200" alt="..." />
                    <h1> {nom}</h1>
                
                <button className="btn btn-danger" 
                onClick={()=>enDelete(id)} >
                    <i className="fa fa-trash" aria-hidden="true" />
                </button>
            </li>

    )
}

export default ItemVille
