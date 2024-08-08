import { useState } from "react";

function Product(props) {
    const product = props.product
   // const liked =0; //readonly
   const [liked,setLiked]= useState(0);
   const [disliked,setDisLiked]= useState(0);
   const upLiked =()=>{  //arrow function
    setLiked(liked+1); //liked = liked+1
   }
   const downLiked =()=>{  //arrow function
    setDisLiked(disliked+1);
   }
    return (
        <div className="col-3">
            <h1>{product.name}</h1>
            <p>$ {product.price +500}</p>
            <p> Sản phẩm hot</p>
            <p>{ product.qty > 0 ?"Còn hàng":"Hết hàng"}</p>
            <div className="col-row-6">
                <p>
                    <i class="bi bi-hand-thumbs-up-fill text-success"></i>
                    <b>{liked}</b>
                    <i class="bi bi-hand-thumbs-down-fill text-danger"></i>
                    <b>{disliked}</b>
                </p>
                
            </div>
            <button onClick={upLiked} className="btn btn-outline-success" type="button">Like</button>
            <button onClick={downLiked} className="btn btn-outline-danger" type="button">DisLike</button>
        </div>
    );
}
export default Product;