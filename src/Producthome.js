import GradeIcon from '@mui/icons-material/Grade';
import { v4 as uuidv4 } from 'uuid';
import "./Producthome.css"
import { useLoginContext } from './useLoginContext';
import { useItemamountContext } from './useItemamountContext';
const ProductHome = ({id, title, price, rating, imgUrl}) => {
    let count1=0
    let {count, dispatch}= useItemamountContext();
    const {user}= useLoginContext();
    async function handleClick(){
        const data= {
            email:user.email,
            title:title,
            imgUrl: imgUrl,
            price:price,
            rating:rating,
            id:uuidv4()
        };
        console.log(data);
        
        try{
        const response= await fetch('http://localhost:3000/basketitems', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        const json= await response.json();
        if(response.ok){
            console.log("added to basket", json)
            dispatch(++count);
        }
        }catch(error){
            console.log(error)
        }
        
        

    }

    return ( 
        <div key={id} className="product">
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="price">
                ${price}
            </div>
            <div className="rating">
                {Array(rating).fill().map((num) =>
                    <GradeIcon key={count1++} className='ratings'/>
                 )}
            </div>
            <img className="productImage" src={imgUrl} alt="" />
            <button className='addButton' onClick={handleClick}>Add to basket </button>
        </div>
     );
}
 
export default ProductHome;