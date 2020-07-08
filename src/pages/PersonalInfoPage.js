import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function PersonalInfoPage(props) {
    const { user } = props;

    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="nk-content-wrap">
                            <div className="nk-block-head">
                                <div className="nk-block-head-content">
                                    <h2 className="nk-block-title fw-normal">Thông tin cá nhân</h2>
                                    {/* <div className="nk-block-des">
                                        <p>You have full control to manage your own account setting. <span className="text-primary"><em className="icon ni ni-info" /></span></p>
                                    </div> */}
                                </div>
                            </div>
                            {/* <ul className="nk-nav nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link" href="">Personal</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Billing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Notifications</a>
                                </li>
                            </ul> */}
                            <div className="nk-block">
                                <div className="nk-block-head">
                                    <div className="nk-block-head-content">
                                        {/* <h5 className="nk-block-title">Thông tin cá nhân</h5> */}
                                        <div className="nk-block-des">
                                            <p>Xem thông tin cá nhân của bạn và đổi mật khẩu.</p>
                                        </div>
                                    </div>
                                </div>{/* .nk-block-head */}
                                <div className="card card-bordered">
                                    <div className="nk-data data-list">
                                        <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                                            <div className="data-col">
                                                <span className="data-label">Họ tên</span>
                                                <span className="data-value">{user.userInfo ? user.userInfo.full_name : null}</span>
                                            </div>
                                            <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios" /></span></div>
                                        </div>{/* .data-item */}
                                        <div className="data-item">
                                            <div className="data-col">
                                                <span className="data-label">Email</span>
                                                <span className="data-value">{user.userInfo ? user.userInfo.email : null}</span>
                                            </div>
                                            <div className="data-col data-col-end"><span className="data-more disable"><em className="icon ni ni-lock-alt" /></span></div>
                                        </div>{/* .data-item */}
                                        <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                                            <div className="data-col">
                                                <span className="data-label">Số điện thoại</span>
                                                <span className="data-value">{user.userInfo ? user.userInfo.phone : null}</span>
                                            </div>
                                            <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios" /></span></div>
                                        </div>{/* .data-item */}
                                        <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                                            <div className="data-col">
                                                <span className="data-label">Ngày sinh</span>
                                                <span className="data-value">Chưa có</span>
                                            </div>
                                            <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios" /></span></div>
                                        </div>{/* .data-item */}
                                        <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                                            <div className="data-col">
                                                <span className="data-label">Địa chỉ</span>
                                                <span className="data-value">Chưa có</span>
                                            </div>
                                            <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios" /></span></div>
                                        </div>{/* .data-item */}
                                        <div className="data-item" data-toggle="modal" data-target="#password-edit">
                                            <div className="data-col">
                                                <span className="data-label">Mật khẩu</span>
                                                <span className="data-value">******</span>
                                            </div>
                                            <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios" /></span></div>
                                        </div>{/* .data-item */}
                                    </div>{/* .nk-data */}
                                </div>{/* .card */}
                            </div>{/* .nk-block */}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default connect(state => {
    return {
        user: state.userReducer,
    }
}, dispatch => {
    return {
    }
})(PersonalInfoPage);