import React from 'react';
import { dataProduct } from '../../untils/fakedata';


const Card = () => {
    return (
        <div className="container">
            <div className="list_product">

                {
                    dataProduct.map((link, index) => (
                        <div className="row" key={index}>
                            <div className="col">
                                <div className="card_product">
                                    <div className="card_title">
                                        <img src={`${process.env.PUBLIC_URL}/images/products/${link.image}`} alt="" />
                                    </div>
                                    <div className="card_content">
                                        <span className="name_title">{link.desc}</span>
                                        <div className="price">
                                            <span>{link.price}</span>
                                            <div className="favorite">
                                                <img src={`${process.env.PUBLIC_URL}/images/products/icon/${link.icon}`} alt="" />
                                                <span style={{ marginLeft: "5px" }}>{link.favorites}</span>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    ))
                }
                <br />
                
            </div>
            <div className="view_more best_product_viewmore">
                    <button>SEE MORE</button>
                </div>
        </div>

    )
}

export default Card;
