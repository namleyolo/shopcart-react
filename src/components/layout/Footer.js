import React from 'react'
import logo from './../../assets/images/logo-footer.png'



export default function Footer() {
    return (
        <div>
            <div id="footer-top">
                <div className="container">
                    <div className="row">
                        <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
                            {/*<h2><a href="#"><img src={logo} alt="logo-footer" /></a></h2>*/}
                            <p>
                </p>
                        </div>
                        <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Địa chỉ</h3>
                            <p>B8A Võ Văn Dũng - Ao Sen - Hà Nội</p>
                            <p>Số 25 Ngõ 178/71 - Ha Dong - Hà Nội</p>
                        </div>
                        <div id="service" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Dịch vụ</h3>
                            <p>Học là có việc</p>
                            <p>Đảm bảo học viên có việc sau khóa học</p>
                        </div>
                        <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Hotline</h3>
                            <p>Phone Sale: (+84) 0988 550 553</p>
                            <p>Email: gb9e999.edu.vn@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
