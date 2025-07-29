import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
// import Context from "../../context/context";

function Nav(){
    // const {state,setState} = useContext(Context);
    const [categories,setCategories] = useState([]);
    const _getCategories = async ()=>{
        const url = "https://localhost:7068/api/category";
        try {
            const rs = await axios.get(url);
            setCategories(rs.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        _getCategories();
    },[])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cart = useSelector(state => state.cart);

    // Tính tổng số lượng sản phẩm trong giỏ hàng - kiểm tra cart.items có phải array không
    const cartItemCount = Array.isArray(cart.items)
        ? cart.items.reduce((total, item) => {
            return total + (item.quantity || 1);
        }, 0)
        : 0;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
                        {
                            categories.map((item,key)=>{
                                return  <li key={key} className="nav-item">
                                    <Link className="nav-link" to={"/category"}>{item.name}</Link>
                                </li>
                            })
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to={"/my-account"}>My Account</Link>
                        </li>
                        <li>
                            <Button variant="primary" onClick={handleShow}>Login</Button>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart({cartItemCount})</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </nav>
    )
}
export default Nav;