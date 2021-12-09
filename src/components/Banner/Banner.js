import React from 'react';
import MainBanner from '../../images/main-banner/main-banner.png';
import MainBanner2x from '../../images/main-banner/main-banner@2x.png';
import MainBanner3x from '../../images/main-banner/main-banner@3x.png';
import isRetina from '../../untils/isRetina';


const Banner = () => {
    return (
        <div className="main_banner">
                <img src={MainBanner} alt="MainBanner" srcSet={isRetina(MainBanner2x, MainBanner3x)} />
            </div>

    )
}

export default Banner;
