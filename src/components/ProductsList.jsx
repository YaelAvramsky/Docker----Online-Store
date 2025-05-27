import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { fetchDataAsyncAction } from "../redux/thunk";
import loadingIcon from '../assets/Interwind@1x-1.0s-200px-200px.gif';
import errorIcon from '../assets/14447763.gif';

const ProductsList = () => {
    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.products.productsList);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchDataAsyncAction())
    }, []);
    return (
        <>
< div className="container align-items-start p-0" >
      
            <div className="row">
            {error && <img src={errorIcon} alt="Error" width="350px" height="350px" />}
            {loading && <img src={loadingIcon} alt="Loading" width="150px" height="270px" />} 
            {productsList && productsList.length > 0 &&
                      <div style={{justifyContent:'center', padding:'55px'}} className="row align-items-start mb-4">
                      <div className="col-6">
                          <h1 className="mb-0"><b>Kitchen Accessories</b></h1>
                      </div>
                  </div>
            }  
            {productsList && productsList.length > 0 &&
                productsList.map((product, index) => <Product key={index} product={product} />)
            }
            </div>
        </div >
        </>
    )
}

export default ProductsList;