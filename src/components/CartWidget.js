import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () =>{

    const qty = useContext(CartContext);

    return(
        <Badge badgeContent={qty.calcItemsQty()} color="primary">
            <ShoppingCartIcon />
        </Badge>
    );
}

export default CartWidget;