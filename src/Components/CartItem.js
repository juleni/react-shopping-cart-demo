import "../CartItem.css";
// Cart Item component
function CartItem({ id, name, price, qty, updateQty}) {

  const addOne = () => updateQty(id, qty + 1);
  const subtractOne = () => updateQty(id, qty - 1);

  return(
    <div className="CartItem">
        <div className="CartItem-name">{ name }</div>
        <div>{ price } &euro;</div>
        <div>
          <button onClick={ subtractOne } disabled={ qty < 1 }>-</button> { qty } <button onClick={ addOne }>+</button>
        </div>
        <div>Total: { (qty * price).toFixed(2) } &euro;</div>
    </div>
  )
}

export default CartItem;