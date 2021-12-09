import React from 'react';
import ImageVideo from '../../images/video_object/video.png';
import Icon_H_Black from '../../images/video_object/video-object-05.png';
import Icon_H_Orange from '../../images/video_object/video-object-03.png';
import ImageGray from '../../images/video_object/video-object-04.png';
import ImagePink from '../../images/video_object/video-object-08.png';
import Icon_Click from '../../images/video_object/video-object-02.png';
import Icon_Error from '../../images/video_object/video-object-01.png';
import Icon_Heart_Black from '../../images/video_object/video-object-06.png';
import IconW from '../../images/video_object/video-object-07.png';
import IconInky from '../../images/video_object/video-object-09.png';

const Video = () => {
    return (
        <div className="video">
            <div className="wrap_title_video">
                <div className="text_title_video">
                    <span className="text-uppercase">Happened’s issue</span>
                </div>
                <div className="text_desc_video">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </div>
                <div className="view_more">
                    <button>SEE MORE</button>
                </div>
            </div>
            <div className="wrap_video_center">
                <img src={ImageVideo} />

                <div className="icon_bottom_left">
                    <img src={Icon_H_Orange} />
                </div>
                <div className="icon_bottom_right">
                    <img src={Icon_Error} />
                </div>
                <div className="icon_video_inky">
                <img src={IconInky} />
            </div>
            <div className="icon_video_pink">
                <img src={ImagePink} />
            </div>
            </div>
            <div className="icon_video_top_left">
                <img src={Icon_H_Black} />
            </div>
            <div className="icon_video_left">
                <img src={ImageGray} />
            </div>
           

            <div className="icon_top_right_bottom">
            <img src={Icon_Heart_Black} />
            </div>
            <div className="icon_top_right_top">
            <img src={IconW} />
            </div>
            
        </div>
    )
}

export default Video;
