import NavBar from './components/Header/NavBar'
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer nombre='Nicolás Robles' mensaje='En Naiky Store tenemos las mejores ofertas en calzado, indumentaria y accesorios'/>
      <ItemCount/>
    </div>
  );
}

export default App;
