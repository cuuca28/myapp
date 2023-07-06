import ItemCard from "./ItemCard"

const ItemList = ({ items }) => {
    
        return(
        <div className="list_container">
            <h2>Los mejores productos para una excelente experiencia</h2>
            <hr />

            <div className='row'>
            {
                items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
            }
            </div>    
        </div>
    )
}

export default ItemList