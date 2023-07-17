
import { useState, useEffect } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading]  = useState(true)

    const { itemId } = useParams()
    console.log(item)
    console.log(itemId)

    useEffect (() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))        
            })    
            .catch((err) => console.log(err))
            .finally (() => setLoading(false))
        
    }, [categoryId])

    return (
        <div className="list_container">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </div>
    )
        
} 

export default ItemDetailContainer