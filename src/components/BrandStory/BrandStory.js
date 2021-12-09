import React from 'react';
import BookIconLarge from '../../images/book_large.png';
import BookIconSmall from '../../images/book_small.png';
import NoteIcon_1 from '../../images/note-01.png';
import Background from '../../images/img.png';
import ScheduleIcon from '../../images/object-05.png';
import PotIcon from '../../images/object-04.png';
import NoteIcon_2 from '../../images/object-02.png';
import NoteIcon_3 from '../../images/object-03.png';

const BrandStory = () => {
    return (
        <div className="brand" style={{ backgroundColor: "#0565bb" }}>
            <div className="wrap_title_brand">
                <div className="text_title_brand">
                    <span className="text-uppercase">brand story</span>
                </div>
                <div className="text_desc_brand">
                    <p className="text-uppercase">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    </p>
                    <p className="text-uppercase"> 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                </div>
            </div>

            <div className="icons_left">
                <img className="book_icon_large" src={BookIconLarge} />
                <img className="book_icon_small" src={BookIconSmall} />
            </div>
            <div className="icons_top_left">
                <img className="note_icon_1" src={NoteIcon_1} />
            </div>

            <div className="icons_right_l">
                <img className="schedule_icon" src={ScheduleIcon} />

            </div>
            <div className="icons_right_r">
                <img className="pot_icon" src={PotIcon} />
            </div>
            <div className="icons_top_r">
                <img src={NoteIcon_3} alt="" />
            </div>
            <div className="icons_top_l">
                <img src={NoteIcon_2} alt="" />
            </div>
            <div className="wrap_images_brand">
                <div className="lines_brand">
                    <div className="line_blue"></div>
                    <div className="line_blue"></div>
                </div>
                <div className="wrap_content_brand">
                    <div className="center_left">
                        <img src={Background} />
                    </div>
                    <div className="center_right">
                        <div className="title_content_brand text-uppercase">
                            What Happened’s Brand story
                        </div>
                        <div className="desc_content_brand text-uppercase">
                            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                        </div>
                        <div className="view_more">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>



            </div>

        </div >
    )
}

export default BrandStory;
