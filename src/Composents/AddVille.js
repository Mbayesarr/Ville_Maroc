import React, { useRef } from 'react'

const AddVille = (props) => {


    const inputville = useRef("")


    const onAddVille= ()=>{
        //alert(inputville.current.value)
        let input_value = inputville.current.value;
        inputville.current.value="";  
        props.addListVille(input_value)
        
    }
    return (
            <div class="d-flex justify-content-center " >
            <input type="text" 
                    placeholder="Ajouter une ville" 
                    class="form-control w-25"
                    ref={inputville} />
            <button class="btn btn-success text-uppercase m-2 "
            onClick={onAddVille}><i class="fa fa-plus" aria-hidden="true"></i>
            </button>

        </div>
    )
}

export default AddVille
