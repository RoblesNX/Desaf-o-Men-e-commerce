import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <Container sx={{ my:12 }}>

            <Grid container
                rowSpacing={10}
                columnSpacing={10}
            >
                
                {productos.map((prod) => {
                    return <Grid item
                        md={4}
                        key={prod.id}
                    >

                        <Item producto={prod} />

                    </Grid>
                })}

            </Grid>

        </Container>
    )
}

export default ItemList


