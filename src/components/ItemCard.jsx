import { Link } from "react-router-dom"


const ItemCard = ({id, nombre, precio, descripcion, img}) => {

    return (
        <div className='col-3 m-2'>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <button className="btn btn-primary" to={`/detail/${id}`}>Ver más</button>
        </div>
    )
}

export default ItemCard