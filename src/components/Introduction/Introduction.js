import React from 'react';
import IntroductionBg from '../../images/introduction-bg/introduction-bg.png';
import Introduction2x from '../../images/introduction-bg/introduction-bg@2x.png';
import Introduction3x from '../../images/introduction-bg/introduction-bg@3x.png';
import isRetina from '../../untils/isRetina';
const Introduction = () => {
    return (
        <div className="introduction">
            <img src={IntroductionBg} alt="Introduction" srcSet={isRetina(Introduction2x, Introduction3x)} />
            <div className="container" style={{position: 'relative', height: 0}}>
                <div className="introduction_title">
                <span className="what_happened text-uppercase">
                    What Happened!
                </span>
                </div>
               
                <div className="introduction_desc">
                    <span> How to create mobile-optimized videos in minutes. Not a designer,  every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create
                        mobile-optimized videos in minutes.</span>
                   
                </div>

            </div>
        </div>
    )
}

export default Introduction;
