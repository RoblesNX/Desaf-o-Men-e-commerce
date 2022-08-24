import ResponsiveAppBar from './components/Header/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <ItemListContainer nombre='Nicolás Robles' mensaje='En Naiky Store tenemos las mejores ofertas en calzado, indumentaria y accesorios'/>
    </div>
  );
}

export default App;
