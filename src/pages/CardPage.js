import React, { useState, useEffect } from 'react';
import { onGetUserInfo, onGetTransactions } from '../actions';
import { connect } from 'react-redux';

function CardPage(props) {
    const { user, transactions, onGetTransactions, onGetUserInfo } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!user.userInfo) {
            onGetUserInfo();
        }

        if (user.userInfo && !transactions.data) {
            onGetTransactions();
        }
    });

    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner"></div>
                <div className="nk-content-body">
                    <div className="nk-content-wrap">
                        <div className="nk-block-head nk-block-head-lg">
                            <div className="nk-block-between-md g-4">
                                <div className="nk-block-head-content">
                                    <h2 className="nk-block-title fw-normal">Quản lý thẻ của bạn</h2>
                                    <div className="nk-block-des">
                                        <p>Quản lý và mở tài khoản tiết kiệm ngay hôm nay để nhận lãi suất ưu đãi. <span className="text-primary"><em className="icon ni ni-info" /></span></p>
                                    </div>
                                </div>
                                <div className="nk-block-head-content">
                                    <ul className="nk-block-tools gx-3">
                                        <li className="order-md-last"><a href="" className="btn btn-white btn-dim btn-outline-primary"><span>Xem kì hạn, lãi suất</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/* .nk-block-head */}
                        <div className="nk-block">
                            <div className="card card-bordered sp-plan">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <div className="sp-plan-info card-inner">
                                            <div className="row gx-0 gy-3">
                                                <div className="col-xl-9 col-sm-8">
                                                    <div className="sp-plan-name">
                                                        <h6 className="title"><a href="html/subscription/subscriptions-detail.html">Tài khoản chính <span className="badge badge-success badge-pill">Active</span></a></h6>
                                                        <h4 className="nk-block-title fw-normal">Số tài khoản: {user.userInfo?.account_number} </h4>
                                                        <p>Số dư: <span className="text-base">{Number(user.userInfo?.balance).toLocaleString('en-US', { currency: 'VND' })} VND</span></p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-4">
                                                    <div className="sp-plan-opt">
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input" id="auto-plan-p1" defaultChecked />
                                                            <label className="custom-control-label text-soft" htmlFor="auto-plan-p1">Hủy kích hoạt</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* .sp-plan-info */}
                                        <div className="sp-plan-desc card-inner">
                                            <ul className="row gx-1">
                                                <li className="col-6 col-lg-3">
                                                    <p><span className="text-soft">Ngày đăng ký</span> 01/07/2020</p>
                                                </li>
                                                <li className="col-6 col-lg-3">
                                                    <p><span className="text-soft">Ngày hết hạn</span> </p>
                                                </li>
                                                <li className="col-6 col-lg-3">
                                                    <p><span className="text-soft">Phí duy trì</span> Miễn phí</p>
                                                </li>
                                                <li className="col-6 col-lg-3">
                                                    <p><span className="text-soft">Giới hạn/giao dịch</span> Không giới hạn</p>
                                                </li>
                                            </ul>
                                        </div>{/* .sp-plan-desc */}
                                    </div>{/* .col */}
                                    <div className="col-md-4 col-lg-4">
                                        <div className="card card-bordered dashed h-100">
                                            <div className="nk-wgw-add">
                                                <div className="nk-wgw-inner">
                                                    <a href="">
                                                        <div className="add-icon">
                                                            <em className="icon ni ni-plus"></em>
                                                        </div>
                                                        <h6 className="title">Mở tài khoản tiết kiệm</h6>
                                                    </a>
                                                    <span className="sub-text">Bạn có thể mở tài khoản tiết kiệm và tất toán ngay trên trang web mà không cần tới phòng giao dịch.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* .row */}
                            </div>{/* .sp-plan */}
                        </div>{/* .nk-block */}
                        <div className="nk-block">
                            <div className="card card-bordered">
                                <div className="card-inner card-inner-lg">
                                    <div className="nk-help">
                                        <div className="nk-help-img">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 118">
                                                <path d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z" transform="translate(0 -1)" fill="#f6faff" />
                                                <rect x={18} y={32} width={84} height={50} rx={4} ry={4} fill="#fff" />
                                                <rect x={26} y={44} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
                                                <rect x={50} y={44} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
                                                <rect x={74} y={44} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
                                                <rect x={38} y={60} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
                                                <rect x={62} y={60} width={20} height={12} rx={1} ry={1} fill="#e5effe" />
                                                <path d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z" transform="translate(0 -1)" fill="#798bff" />
                                                <path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="#6576ff" />
                                                <path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="none" stroke="#6576ff" strokeMiterlimit={10} strokeWidth={2} />
                                                <line x1={40} y1={22} x2={57} y2={22} fill="none" stroke="#fffffe" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                                <line x1={40} y1={27} x2={57} y2={27} fill="none" stroke="#fffffe" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                                <line x1={40} y1={32} x2={50} y2={32} fill="none" stroke="#fffffe" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                                <line x1="30.5" y1="87.5" x2="30.5" y2="91.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
                                                <line x1="28.5" y1="89.5" x2="32.5" y2="89.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
                                                <line x1="79.5" y1="22.5" x2="79.5" y2="26.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
                                                <line x1="77.5" y1="24.5" x2="81.5" y2="24.5" fill="none" stroke="#9cabff" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="90.5" cy="97.5" r={3} fill="none" stroke="#9cabff" strokeMiterlimit={10} />
                                                <circle cx={24} cy={23} r="2.5" fill="none" stroke="#9cabff" strokeMiterlimit={10} /></svg>
                                        </div>
                                        <div className="nk-help-text">
                                            <h5>Bạn cần tư vấn mở tài khoản, tài khoản tiết kiệm, tài khoản tính dụng?</h5>
                                            <p className="text-soft">Hãy để lại thông tin liên lạc, nhân viên sẽ nhanh chóng liên lạc với bạn sớm nhất!</p>
                                        </div>
                                        <div className="nk-help-action">
                                            <a href="" className="btn btn-lg btn-outline-primary">Cần hỗ trợ</a>
                                        </div>
                                    </div>{/* .nk-help */}
                                </div>
                            </div>{/* .card */}
                        </div>{/* .nk-block */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer,
        transactions: state.transactionReducer
    }
}, dispatch => {
    return {
        onGetUserInfo: () => dispatch(onGetUserInfo()),
        onGetTransactions: () => dispatch(onGetTransactions())
    }
})(CardPage);