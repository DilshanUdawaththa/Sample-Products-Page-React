import React from "react";

import ProductImage from "../components/ProductImage";
import TitleBox from "../components/TitleBox";
import PrizingBox from '../components/PrizingBox';
import QuantityBox from "../components/QuantityBox";

import './ProductPage.css';

const ProductPage = () => {

    const productDetails = {
        image: "https://cdn11.bigcommerce.com/s-w4tnuohjvi/images/stencil/1280x1280/products/778/2288/3x3FloatingGolfGreen4__96181.1497886450.1280.1280__42407.1545132815.jpg?c=2?imbypass=on",
        title: "3' X 3' ACE FLOATING GREEN",
        itemNo: "MA000001",
        currencySymbol: "$",
        price: {
            begin:"155.",
            last:"00"
        }
    };

    return(
        <>
            <section className="product">
                <div className="row">
                    <div className="leftSide">
                        <ProductImage image={productDetails.image}/>
                    </div>
                    <div className="rightSide">
                        <div className="title_box">
                            <TitleBox title={productDetails.title} itemNo={productDetails.itemNo}/>
                        </div>
                        <div className="prizing_box">
                            <PrizingBox currencySymbol={productDetails.currencySymbol} priceBegin={productDetails.price.begin} priceLast={productDetails.price.last}/>
                        </div>
                        <div className="quantity_box">
                            <QuantityBox/>
                        </div>
                        <div className="cart_box">
                            <button>ADD TO CART {'>'}</button>
                        </div>
                    </div>
                </div>
            </section>
            

        </>
    );
}

export default ProductPage;