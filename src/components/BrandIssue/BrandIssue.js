import React from 'react';
import { dataIssue } from '../../untils/fakedata';
import IconNext from '../../images/icon_issue/news-img-01.png';
import IconDice_1 from '../../images/icon_issue/icon_dice_1.png';
import IconDice_2 from '../../images/icon_issue/icon_dice_2.png';
import IconCirle from '../../images/icon_issue/icon_circle.png';
import IconHot from '../../images/icon_issue/icon_hot.png';
import IconLol from '../../images/icon_issue/icon_lol.png';


const BrandIssue = () => {
    return (
        <div className="issue" style={{ backgroundColor: "#fccb05" }}>
            <div className="wrap_title_issue">
                <div className="text_title_issue">
                    <span className="text-uppercase">Happened’s issue</span>
                </div>
                <div className="text_desc_issue">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </div>
                <div className="view_more">
                    <button>SEE MORE</button>
                </div>
            </div>
            <div className="wrap_content_issue">
                <div className="container-fluid">
                    {/* row row-cols-1 row-cols-sm-2 row-cols-md-4 */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5  row-cols-xs-5">
                        <div className="col wrap_card_start item_card">
                            <div className="card_start">
                                <span>whpnissue</span>
                                <div className="icon_start">
                                    <img src={IconNext} alt="" />
                                </div>
                            </div>
                        </div>
                        {
                            dataIssue.map((link, index) => (
                                <div className="col item_card" key={index}>
                                    <div className="card">
                                        <div className={(index + 1) % 3 == 0 ? 'card-body card-orange' : 'card-body'}>
                                            <p className="card-title">{link.title}</p>
                                        </div>
                                        <img src={`${process.env.PUBLIC_URL}/images/issue/${link.image}`} className="card-img-bottom" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="wrap_icon_circle">
                    <img src={IconCirle} alt="" />
                </div>
                <div className="wrap_icon_hot">
                    <img src={IconHot} alt="" />
                </div>

                <div className="wrap_icon_lol">
                    <img src={IconLol} alt="" />
                </div>
            </div>

            <div className="wrap_icon_dices">
                <img className="icon_dice_5" src={IconDice_2} alt="" />
                <img className="icon_dice_3" src={IconDice_1} alt="" />
                
            </div>
        </div>
    )
}

export default BrandIssue;
