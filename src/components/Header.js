import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { onLogout, onSeenNotification } from '../actions';
import moment from 'moment';

function Header(props) {
    const { user, notification } = props;
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);

    function caculatorSaving() {
        let sum = 0;
        if (user.userInfo) {
            user.userInfo.saving.map(x => sum += x.amount);
        }
        return sum;
    }

    useEffect(() => {
        if (notification.data){
            const arr = [...(notification.data)]
            setData(arr.reverse());
        }
    }, [notification.data?.length]);

    return (
        <div className="nk-header nk-header-fluid nk-header-fixed is-light">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ml-n1">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
                    </div>
                    <div className="nk-header-brand d-xl-none">
                        <a href="html/crypto/index.html" className="logo-link">
                            <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                            <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                            <span className="nio-version">Crypto</span>
                        </a>
                    </div>
                    <div className="nk-header-news d-none d-xl-block">
                        <div className="nk-news-list">
                            <a className="nk-news-item" href="" onClick={(e) => e.preventDefault()}>
                                <div className="nk-news-icon">
                                    <em className="icon ni ni-card-view" />
                                </div>
                                <div className="nk-news-text">
                                    <p>Tính năng mới <span> Gửi lời nhắc chuyển tiền cho bạn bè</span></p>
                                    <em className="icon ni ni-external" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <li className="dropdown user-dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <div className="user-toggle">
                                        <div className="user-avatar sm">
                                            <em className="icon ni ni-user-alt" />
                                        </div>
                                        <div className="user-info d-none d-md-block">
                                            <div className="user-status user-status-unverified">User</div>
                                            <div className="user-name dropdown-indicator">{user.userInfo?.full_name}</div>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                        <div className="user-card">
                                            <div className="user-avatar">
                                                <span>AB</span>
                                            </div>
                                            <div className="user-info">
                                                <span className="lead-text">{user.userInfo?.full_name}</span>
                                                <span className="sub-text">{user.userInfo?.username}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-inner user-account-info">
                                        <h6 className="overline-title-alt">Số dư khả dụng</h6>
                                        <div className="user-balance">{Number(user.userInfo?.balance).toLocaleString('en-US', { currency: 'VND' })} <small className="currency"> VND</small></div>
                                        <div className="user-balance-sub">Tiết kiệm <span>{caculatorSaving()} <span className="currency">VND</span></span></div>
                                        <a href="#" className="link" data-toggle="modal" data-target="#new-transaction"><span>Chuyển tiền</span> <em className="icon ni ni-wallet-out" /></a>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li><a href="html/crypto/profile.html"><em className="icon ni ni-user-alt" /><span>Thông tin cá nhân</span></a></li>
                                            <li><a href="html/crypto/profile-security.html"><em className="icon ni ni-setting-alt" /><span>Cài đặt</span></a></li>
                                            <li><a href="html/crypto/profile-activity.html"><em className="icon ni ni-activity-alt" /><span>Lịch sử đăng nhập</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li><a href="" onClick={() => {
                                                props.onLogout();
                                            }}><em className="icon ni ni-signout" /><span>Đăng xuất</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown notification-dropdown mr-n1">
                                <a onClick={() => {
                                    setShow(!show);
                                    props.onSeenNotification();
                                }} className="dropdown-toggle nk-quick-nav-icon">
                                    <div className="icon-overlap">
                                        {notification.notificationLength > 0 ? <span className="badge badge-pill badge-danger">{notification.notificationLength}</span> : null}
                                        <em className="icon ni ni-bell" style={{ height: 15, width: 15 }} />
                                    </div>
                                    {/* <div className="icon-status icon-status-danger"><em className="icon ni ni-bell" /></div> */}
                                </a>
                                <div className={show ? "dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1 show" : "dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1"}>
                                    <div className="dropdown-head">
                                        <span className="sub-title nk-dropdown-title">Thông báo</span>
                                        <a href="" onClick={(e) => {
                                            e.preventDefault();
                                        }}>Đánh dấu tất cả đã đọc</a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="nk-notification">
                                            {data?.map(item =>
                                                item.title === 'debt' ?
                                                    <div className="nk-notification-item dropdown-inner">
                                                        <div className="nk-notification-icon">
                                                            <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                                        </div>
                                                        <div className="nk-notification-content">
                                                            <div className="nk-notification-text">{item.content.receiver.full_name} vừa nhắc bạn trả {Number(item.content.amount).toLocaleString('en-US', { currency: 'VND' })} VND</div>
                                                            <div className="nk-notification-time">{moment(item.content.createdAt).format('HH:mm:ss DD/MM/YYYY')}</div>
                                                        </div>
                                                    </div> : null
                                            )}
                                            {/* <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Nhận tiền từ Nguyễn Sĩ văn</div>
                                                    <div className="nk-notification-time">3 giờ trước</div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>{/* .nk-dropdown-body */}
                                    <div className="dropdown-foot center">
                                        <a href="" onClick={(e) => e.preventDefault()}>Xem tất cả</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer,
        notification: state.notificationReducer
    }
}, dispatch => {
    return {
        onLogout: () => dispatch(onLogout()),
        onSeenNotification: () => dispatch(onSeenNotification())
    }
})(Header);