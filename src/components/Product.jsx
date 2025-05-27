import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const Product = ({product}) => {
    const dispatch=useDispatch();

        return (
            <div className="col-md-3 mb-4">
                <div className="card bg-light shadow-sm h-100">
                    <img
                        src={product.images[0]}
                        className="card-img-top img-small"
                        alt={product.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">
                            <strong>Price:</strong> {product.price.toFixed(2)} ₪
                        </p>
                    </div>
                     <button style={{fontSize:'20px'}} onClick={()=>dispatch(addProduct(product))}>🛒 Add To Cart</button>
                </div>
            </div>
        );
    };
export default Product;

