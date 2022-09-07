import Item from "../components/Item";

const ItemListContainer = () => {
    return (
        <Item 
        name="Cuchillo Bowie"
        description="Cuchillo de 20CM producido con material de disco de arado. Cabo de madera con detalles de acero inoxidable."
        price="$5000ars"
        stock={4}
        />
    )    
}

export default ItemListContainer;
