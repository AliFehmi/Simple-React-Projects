import './BasketPage.css'
import TotalItems from './TotalItems';
import CheckoutItem from './CheckoutItem'
import { useLoginContext } from './useLoginContext';
import { useEffect, useState } from 'react';
import { useItemamountContext } from './useItemamountContext';
const BasketPage = () => {
    const [items, setItems]= useState(null);
    const {user}= useLoginContext();
    let {count, dispatch}= useItemamountContext();
    let email="none";
    if(user!==null){
        email= user.email
    }
    
    console.log("users email in basket page:", email)
    useEffect(()=> {
        async function fetchData(){
            const response= await fetch(`http://localhost:3000/basketitems?email=${email}`);
            const json= await response.json();
            
            if(response.ok){
                console.log(json)
                setItems(json);
                
            }
        }
        fetchData();
        // eslint-disable-next-line
    }, [email])
    let total=0;
    let amount=0;
    items && items.map((item)=>{
        
        total+= item.price;
        amount+=1;
        return null;
    });


    function deleteItem(id) {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        dispatch(--count)
      }
    return ( 
        <div className="BasketPage">
            <div className="basketPageTop">
                <div className="adImage">
                        <img src="https://i.gadgets360cdn.com/large/amazon_summer_sale_2022_oneplus_redmi_samsung_1651048043298.jpg?downsize=950:*" 
                        alt="" />
                        <h1>Your Shopping Basket</h1>
                </div>
                {/* <div className="totalItems">

                </div> */}
                <TotalItems itemAmount={amount} itemTotal= {total} ></TotalItems>
           </div>
           {/* <CheckoutItem 
           imgUrl="https://m.media-amazon.com/images/I/81Smb69jtWS._AC_SL1500_.jpg"
           title="SAMSUNG 85-inch Class QN900A Series - Neo QLED 8K Smart TV with Alexa Built-in (2021 Model) HW-Q950A 11.1.4ch Soundbar with Dolby Atmos/DTS:X Alexa Built in(2021), Black"
           price={9857.45}
           rating={4} /> */}
           {items && items.map(item => (
            
            <CheckoutItem 
            key= {item.id}
            id= {item.id}
            imgUrl={item.imgUrl}
            title= {item.title}
            price={item.price}
            rating={item.rating}
            deleteItem={deleteItem}
           />
           ))}
        </div>
     );
}
 
export default BasketPage;