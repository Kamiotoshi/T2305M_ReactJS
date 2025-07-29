import { useSelector, useDispatch } from "react-redux";
import { update_cart, remove_all } from "../../redux/cart/cart_slice";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // Tính tổng tiền
    const totalAmount = cart.items.reduce((total, item) => {
        return total + (item.price * (item.quantity || 1));
    }, 0);

    // Tăng số lượng sản phẩm
    const increaseQuantity = (productId) => {
        const updatedItems = cart.items.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: (item.quantity || 1) + 1 };
            }
            return item;
        });
        dispatch(update_cart(updatedItems));
    };

    // Giảm số lượng sản phẩm
    const decreaseQuantity = (productId) => {
        const updatedItems = cart.items.map(item => {
            if (item.id === productId && (item.quantity || 1) > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => (item.quantity || 1) > 0);
        dispatch(update_cart(updatedItems));
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeItem = (productId) => {
        const updatedItems = cart.items.filter(item => item.id !== productId);
        dispatch(update_cart(updatedItems));
    };

    // Xóa tất cả sản phẩm
    const clearCart = () => {
        dispatch(remove_all());
    };

    if (!cart.items || cart.items.length === 0) {
        return (
            <div className="container mt-4">
                <h2>Giỏ hàng của bạn</h2>
                <div className="alert alert-info">
                    <h4>Giỏ hàng trống</h4>
                    <p>Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
                    <a href="/" className="btn btn-primary">Tiếp tục mua sắm</a>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2>Giỏ hàng của bạn</h2>

            <div className="row">
                <div className="col-md-8">
                    {cart.items.map((item, index) => (
                        <div key={item.id} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img
                                        src={item.thumbnail}
                                        className="img-fluid rounded-start h-100"
                                        alt={item.title}
                                        style={{objectFit: 'cover'}}
                                    />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text text-muted">
                                                    {item.description || "Không có mô tả"}
                                                </p>
                                                <p className="card-text">
                                                    <strong className="text-success">${item.price}</strong>
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-center mb-3">
                                                    <label className="me-2">Số lượng:</label>
                                                    <div className="btn-group" role="group">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary btn-sm"
                                                            onClick={() => decreaseQuantity(item.id)}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="btn btn-outline-secondary btn-sm disabled">
                                                            {item.quantity || 1}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary btn-sm"
                                                            onClick={() => increaseQuantity(item.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <strong className="text-primary">
                                                        Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}
                                                    </strong>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        Xóa
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar tổng kết */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Tổng kết đơn hàng</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Số lượng sản phẩm:</span>
                                <span>{cart.items.reduce((total, item) => total + (item.quantity || 1), 0)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Tạm tính:</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Phí vận chuyển:</span>
                                <span>Miễn phí</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-3">
                                <strong>Tổng cộng:</strong>
                                <strong className="text-success">${totalAmount.toFixed(2)}</strong>
                            </div>

                            <div className="d-grid gap-2">
                                <button className="btn btn-success btn-lg">
                                    Thanh toán
                                </button>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => window.history.back()}
                                >
                                    Tiếp tục mua sắm
                                </button>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={clearCart}
                                >
                                    Xóa tất cả
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;