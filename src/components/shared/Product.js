// import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { update_cart } from "../../redux/cart/cart_slice";
// import Context from "../../context/context";
// import { ACTION } from "../../context/reducer";

function Product(props){
    // const {state,dispatch} = useContext(Context);
    const product = props.product;

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const addToCart = () => {
        const items = [...cart.items]; // Tạo bản sao của mảng hiện tại

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const existingItemIndex = items.findIndex(item => item.id === product.id);

        if (existingItemIndex >= 0) {
            // Nếu đã có, tăng quantity
            items[existingItemIndex] = {
                ...items[existingItemIndex],
                quantity: (items[existingItemIndex].quantity || 1) + 1
            };
        } else {
            // Nếu chưa có, thêm sản phẩm mới với quantity = 1
            items.push({
                ...product,
                quantity: 1
            });
        }

        dispatch(update_cart(items));
        console.log(cart)// Sửa: truyền trực tiếp items, không cần wrap trong object
    };

    return ( // jsx
        <div className="col-3 mt-3 mb-3">
            <div className="card">
                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={"/product/"+product.id} className="btn btn-primary me-1">Detail</Link>
                    <a href="#" onClick={addToCart} className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    );
}
export default Product; // create component