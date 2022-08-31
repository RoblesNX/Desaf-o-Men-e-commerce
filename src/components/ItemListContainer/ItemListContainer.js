import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getData()
            .then((res) => {
                setProductos(res)
            })

            .finally(() => {
                // console.log("Fin del proceso")
            })

    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer

