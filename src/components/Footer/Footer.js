import React from 'react';
import iconFacebook from '../../images/snsicon-02.png';
import iconShape from '../../images/snsicon-01.png';
import iconBlog from '../../images/snsicon-03.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <p className="title_footer">what happened</p>
                        <p className="desc_footer">
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                            [공지] 29CM 강남 스토어 영업 종료
                            [공지] 개인 정보 처리 방침 변경 사전 안내
                            [공지] iOS 10 이하 버전 지원 중단 안내
                            [공지] 개인 정보 처리 방침 변경 사전 안내</p>
                    </div>
                    <div className="col-md-5 row">
                        <div className="col-md-3">
                            <p className="title_footer">about us</p>
                            <p className="desc_footer">회사 소개
                                인재 채용
                                상시 할인 혜택</p>
                        </div>
                        <div className="col-md-3">
                            <p className="title_footer">my order</p>
                            <p className="desc_footer">내 주문
                                주문 배송
                                취소 / 교환 / 반품 내역
                                상품 리뷰 내역
                                증빙 서류 발급</p>
                        </div>
                        <div className="col-md-3">
                            <p className="title_footer">my account</p>
                            <p className="desc_footer">회원 정보 수정
                                회원 등급
                                마일리지 현황
                                쿠폰</p>
                        </div>
                        <div className="col-md-3">
                            <p className="title_footer">help</p>
                            <p className="desc_footer">1 : 1 상담 내역
                                상품 Q & A 내역
                                공지 사항
                                자주하는 질문
                                고객의 소리</p>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-xl-6 wrap_contact_footer">
                        <p className="contact_footer">© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                    </div>
                    <div className="col-xl-6 wrap_icons_footer">
                        <img src={iconShape} alt="iconShape" />
                        <img src={iconFacebook} alt="iconFacebook" />
                        <img src={iconBlog} alt="iconBlog" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
