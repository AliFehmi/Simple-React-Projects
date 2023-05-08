import "./Home.css";
import ProductHome from "./Producthome";
import { useState, useEffect } from "react";
import { useItemamountContext } from "./useItemamountContext";
import { useLoginContext } from "./useLoginContext";
const Home = () => {
   const {dispatch} = useItemamountContext();
   const {user}= useLoginContext();
   const [items, setItems]= useState([])
   // eslint-disable-next-line
   const [basketitems, setBasketitems]= useState(null)
   
   useEffect(()=> {
    async function fetchData(){
        const response= await fetch(`http://localhost:3000/basketitems?email=${user.email}`)
        const json= await response.json();
        
        if(response.ok){
            setBasketitems(json)
            console.log(`There are ${json.length} items in the basket`);
            dispatch(json.length);
        }
    }
    fetchData()
    
    // eslint-disable-next-line
    }, [])


   useEffect(()=> {
        async function fetchData(){
            const response= await fetch("http://localhost:3000/items")
            const json= await response.json();
            setItems(json)
        }
        fetchData()
   }, [])
   
   const renderItemRows= () =>{
    const rows=[]
  
    for(let i=0; i < items.length; i+=3){
        
        const rowItems= items.slice(i, i+3);
        const row=(
            <div key={i} className="homePageProductRow">
                {rowItems && rowItems.map(item =>(
                    <ProductHome
                        key= {item.id}
                        id= {item.id}
                        title= {item.title}
                        price= {item.price}
                        rating= {item.rating}
                        imgUrl= {item.imgUrl}
                    />
                ))}
            </div>
        );
        rows.push(row)
    }
    return rows
   }

    return (
        <div className="homePage">
            <div className="homePageImage">
                <img className="introImage" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" 
                alt="" />
            </div>
            <div className="homePageProductContainer">
                {renderItemRows()}
                
            </div>
        </div>
        
    );
}

export default Home;

