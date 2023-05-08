import "./BasketPage.css"

const TotalItems = ({itemAmount, itemTotal}) => {
    return ( <div className="totalItems">
        <p className="subtotalItems">Subtotal ({itemAmount} items): <strong>${itemTotal}</strong> </p>
        <div className="gift"> 
            <input type="checkbox" /> 
            <p>This item contains a gift.</p>
        </div>
        <button className="basketButton" >Proceed to Checkout</button>
    </div> );
}
 
export default TotalItems;