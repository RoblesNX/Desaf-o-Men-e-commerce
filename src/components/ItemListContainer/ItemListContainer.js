import './ItemListContainer.scss'

const ItemListContainer = ( {nombre='Nombre del usuario', mensaje='Mensaje publicitario'} ) => { 

    return (
        <div className="lista">
            <h2>Hola {nombre}</h2>
            <hr/>
            <p>Mensaje publicitario: {mensaje}</p>
        </div>
    );
}

export default ItemListContainer

