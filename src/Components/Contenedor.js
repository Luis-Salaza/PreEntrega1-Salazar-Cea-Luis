import './Css/ContenedorStyle.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';


function Contenedor (){
    return ( 
    <div className="content">
        <ItemListContainer greeting="Bienvenido a Bioz Games" />
        <NavBar />

    </div>
    );
}
export default Contenedor;