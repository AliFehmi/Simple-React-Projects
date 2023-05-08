import "./CheckoutItem.css"
import GradeIcon from '@mui/icons-material/Grade';
const CheckoutItem = ({ id, imgUrl, title, price, rating, deleteItem}) => {
   
    async function handleClick(){
        console.log(id)
        try{
            await fetch(`http://localhost:3000/basketitems/`+id,{
                method:'DELETE',
                headers: {'Content-Type': 'application/json'}
            })
            deleteItem(id);
        }
        catch(error){
            console.log("ok")
            console.log(error)
        }
    }

let count=0;

    return ( 
    <div  className="checkoutItemContainer">
    
        <div  className="checkoutItem">
            <div className="line"></div>
            <img  alt="" className="checkoutItemImage" src={imgUrl}></img>
            <div className="checkoutItemInfo">
                <div className="checkoutItemTitle">{title}</div>
                <div className="checkoutItemPrice"><strong>$ {price}</strong></div>
                <div className="checkoutItemRating">
                    {Array(rating).fill().map((num) =>
                    <GradeIcon key={count++} className='ratings'/>
                    )}
                </div>
                <div className="checkoutItemButton"  onClick={handleClick}> Remove from Basket</div>
            </div>
        </div>
        
        
        </div>
     
    );
}
 
export default CheckoutItem;