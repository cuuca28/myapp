import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from './ItemList'

const url = "https://api.coderhouse.com/alumnos?id=269"

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
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

    return (
        <div className="list_container">
            <ItemList items={productos}/>
        </div>
    )
        
} 

export default ItemListContainer