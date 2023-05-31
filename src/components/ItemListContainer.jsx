

const ItemListContainer = ( {mensaje} ) => {

    return(
        <div className="list_container">
            <h2>Los mejores productos para una excelente experiencia</h2>
            <hr />

            <p>{mensaje}</p>
        </div>
    )
        
}

export default ItemListContainer