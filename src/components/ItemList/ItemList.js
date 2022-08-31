import { Container, Grid } from "@mui/material"
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {
    return (
        <Container sx={{ padding: `100px` }}>
            <Grid container rowSpacing={10} columnSpacing={8} >
                {productos.map((prod) => {
                    return <Grid item md={4}>
                        <Item producto={prod} key={prod.id} />
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}

export default ItemList


