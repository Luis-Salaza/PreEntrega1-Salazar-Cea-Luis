import './Css/ContenedorStyle.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';


function Contenedor (props){
    return ( 
    <div className="content">
        <ItemListContainer Bienvenido="Bienvenido a Bioz Games" />
        <NavBar />

    </div>
    );
}
export default Contenedor;