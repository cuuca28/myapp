import { useEffect } from 'react'
import '../App.css'

const MOCK_DATA = [
    {
        id: 1,
        nombre: "Blunt",
        descripción: "El mejor sabor para quemar",
        precio: 150,
        img: "../img/"
    },
    {
        id: 2,
        nombre: "Tierra",
        descripción: "La tierra con el abono de ph justo",
        precio: 450,
        img: "../img/"
    },
    {
        id: 3,
        nombre: "Hojillas",
        descripción: "Hojillas con pegamiento de miel",
        precio: 50,
        img: "../img/"
    },
    {
        id: 4,
        nombre: "Bóveda",
        descripción: "Sobre bóveda ajusta la humedad perfecta",
        precio: 250,
        img: "../img/"
    }
]

const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (MOCK_DATA)         
        }, 5000)
     })
} 

const ItemListContainer = () => {

    const [productos, setProcutos] = useState ([])
    console.log(productos)  


    useEffect (() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <div className="list_container">
            <h2>Los mejores productos para una excelente experiencia</h2>
            <hr />

            {
                productos.map((prod) => (
                    <div>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre} />
                        <p>{prod.descripcion}</p>
                        <p>Precio: ${prod.precio}</p>
                ))
            {'}'}

        </div>
    )
        
}

export default ItemListContainer