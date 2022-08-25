import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () =>{
    return(
        <Badge badgeContent={1} color="primary">
            <ShoppingCartIcon />
        </Badge>
    );
}

export default CartWidget;