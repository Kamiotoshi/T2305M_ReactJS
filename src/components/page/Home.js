import { useEffect, useState } from "react";
import Product from "../shared/Product";

export default function Home(){
    const [products,setProducts] = useState([]); // products = [];
    // async  function _getProducts(){}
    const _getProducts = async ()=>{ 
        const url = `https://dummyjson.com/products?limit=12`;
        let rs = await fetch(url); // string
        rs = await rs.json(); // convert to json
        setProducts(rs.products);
    }

    useEffect(
        ()=>{
            _getProducts();
        }
    ,[]); // did mount
    
    return (
        <div className="container">
            <h1>Products</h1>
            <div className="row">
                {
                    products.map((item,key)=>{
                        return <Product key={key} product={item} />
                    })
                }
                
            </div>
        </div>
    )
}