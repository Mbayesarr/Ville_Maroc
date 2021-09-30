import React from 'react'

const ItemVille = ({nom}) => {
    return (
        <>
         <li className="list-group-item m-2 border d-flex justify-content-between align-items-center">
                    <div className=" p-2">
                        <img width={100} src="https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-o/16/fc/e3/94/photo4jpg.jpg?w=700&h=500&s=1" className="img-thumbnail" alt="..." />
                        <span className=" bottom-50 end-50"> {nom}</span>
                    </div>
                    <button className="btn btn-danger">
                        <i className="fa fa-trash" aria-hidden="true" />
                    </button>
                </li>
        </>
    )
}

export default ItemVille
