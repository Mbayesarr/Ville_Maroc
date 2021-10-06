import React, { useRef } from 'react'
import"../App.css"
import AddVille from './AddVille'
import ItemVille from './ItemVille'
import { useState } from 'react'
const ListVille = () => {


    const [villes, setvilles] = useState([{id: 1, nom1:"Casablanca", photo:"./casa.jpeg"},
                                          {id: 2, nom1:"Tanger", photo:"./tanger.jpeg"},])


    //Backup
    const [villesBackup, setvillesBackup] = useState(["" ])
                                          
    const firlterville = useRef("") 

    const filterVilleTitre = () =>{
        let query = firlterville.current.value;
        if(query )
        let newlistville = [...villes]
        newlistville = newlistville.filter((ville)=>ville.nom1.includes(query))
        setvilles([...newlistville])
    }

    const addnewville = (newville) => {
        if(newville){
        setvilles([...villes, {id: villes.length +1, nom1: newville, photo: "./tanger.jpeg"}])
        setvillesBackup([...villesBackup, {id: villes.length +1, nom1: newville, photo: "./tanger.jpeg"}])

        }else
            alert("Le champs est vide !!!")
    }

    const deleteVille = (idville) => {

        if (window.confirm("Voulez vous supprimer ?") === false) return
        let newville = [...villes]
        newville = newville.filter((t) => t.id !== idville)
        setvilles([...newville])
        setvillesBackup([... newville])


    }

    return (
        <div>
            <AddVille addListVille={addnewville} />
            <div class="filter"> 
            <input type="text" 
                   placeholder="filter task by title" 
                   class="form-control w-50 mx-auto m-3"
                   onKeyUp={filterVilleTitre}
                   ref={firlterville}/>
            <i class="fa fa-search"
             aria-hidden="true"
             ></i>
             </div>
            <ul className="list-group">
                {villes.map((v) =>
                    <ItemVille
                        nom={v.nom1}
                        photo={v.photo}
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
