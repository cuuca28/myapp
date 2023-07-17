


const ItemDetail = ({id,nombre, precio, category, descripcion, img}) => {

    return (
        <div className="list_container">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br/>
            <small>categoría: {category}</small>
        </div>
    )

}

export default ItemDetail