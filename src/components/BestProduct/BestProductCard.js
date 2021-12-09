import React from 'react';
import { Link } from 'react-router-dom';
import ProductBg from '../../images/producticon-bg/producticon-bg.png';
import GoIcon from '../../images/go-icon/go-icon.png';
import Bes from '../../images/bes-bg/bes-bg.png';
import Bes2x from '../../images/bes-bg/bes-bg@2x.png';
import Bes3x from '../../images/bes-bg/bes-bg@3x.png';

const BestProductCard = () => {
    const productArr = [
        {
            id: "01",
         image: "best-image-02.png",
         content: "How to create mobile-optimized"
         },
         {
            id: "02",
         image: "bes-image-01.png",
         content: "How to create mobile-optimized"
         },
         {
            id: "03",
         image: "best-image-03.png",
         content: "How to create mobile-optimized"
         }
    ]
    return (
        <div className="wrap_products">
            <img className="background_best_product" src={Bes} alt="Bes" srcSet={Bes2x, Bes3x} />
            <div className="wrap_top_content">
            <div className="top_content_title">
                <span className=" text-uppercase"> Best Product</span>
            </div>
            <div className="top_content_desc">
                <span>
                    How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first
                </span>
            </div>
            </div>
            
            <div className="wrap_card">
            {
                productArr.map((link, index) => (
                    <div className="cards" key={index}>
                        <div className="card_top">
                        <img className="bg" src={ProductBg} alt="ProductBg"/>
                        <span className="id">{link.id}</span>
                        </div>
                        <Link to="/" className="link_to_product">
                            <img className="image_product" src={`${process.env.PUBLIC_URL}/images/bes-image-01/${link.image}`} alt="images" />
                        </Link>
                        <div className="card_details">
                            <span>{link.content}</span>
                            <div style={{height: "25%",display:"flex",alignItems:'center'}}>
                            <Link to="/" className="button_icon">
                            <img src={GoIcon} alt="GoIcon" />
                            </Link>
                            </div>
                        </div>

                    </div>
                ))
            }
            </div>
           
        </div>
    )
}

export default BestProductCard;
