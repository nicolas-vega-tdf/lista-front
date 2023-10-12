import React,{ useState , useEffect } from "react";

const Lista = () => {

    //const personas = ["Leandro","Gaston","Jorge","Emilio"]

    const [personas,setPersonas] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/lista')
        .then(resp => resp.json())
        .then(data => setPersonas(data))
        .catch(error => {
            console.log('no se pudo obtener las personas',error)
        });
    },[]);

    return(
        <>
            <h1>Personas</h1>
            <ul>
                {personas.map((personas,index)=>(
                    <li key={index}>{personas.nombre} - {personas.apellido} - {personas.nacionalidad}</li>
                ))}
            </ul>
        </>
    )
}

export default Lista;