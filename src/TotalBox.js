import '.TotalBox.css';

const TotalBox = ({itemAmount, totalCost}) => {
    return ( 
        <div className="BasketItem">
            <div className="line1">
                <p>Subtotal({itemAmount} items): <strong> ${totalCost}</strong></p>
            </div>
            <div className="line2">
                <input type="checkbox" />
                <p>This order contains a gift</p>
            </div>
            <button>Proceed to Checkout</button>
        </div>
     );
}
 
export default TotalBox;