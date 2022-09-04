import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <Container sx={{ padding: `100px` }}>
            <Grid container rowSpacing={10} columnSpacing={8}>
                {productos.map((prod) => {
                    return <Grid item md={4} key={prod.id}>
                        <Item producto={prod} />
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}

export default ItemList


