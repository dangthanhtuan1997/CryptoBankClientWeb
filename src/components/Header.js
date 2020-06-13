import React from 'react';
import { connect } from 'react-redux';
import { onLogout } from '../actions';

function Header(props) {
    const { user } = props;

    function caculatorSaving() {
        let sum = 0;
        if (user.userInfo) {
            user.userInfo.saving.map(x => sum += x.amount);
        }
        return sum;
    }

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
                            <a className="nk-news-item" href="#">
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
                                            <div className="user-name dropdown-indicator">{user.userInfo ? user.userInfo.full_name : null}</div>
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
                                                <span className="lead-text">{user.userInfo ? user.userInfo.full_name : null}</span>
                                                <span className="sub-text">{user.userInfo ? user.userInfo.username : null}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-inner user-account-info">
                                        <h6 className="overline-title-alt">Số dư khả dụng</h6>
                                        <div className="user-balance">{user.userInfo ? user.userInfo.balance : null} <small className="currency">VND</small></div>
                                        <div className="user-balance-sub">Tiết kiệm <span>{caculatorSaving()} <span className="currency">VND</span></span></div>
                                        <a href="#" className="link"><span>Chuyển tiền</span> <em className="icon ni ni-wallet-out" /></a>
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
                                            <li><a href='/login' onClick={() => this.props.onLogout()}><em className="icon ni ni-signout" /><span>Đăng xuất</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown notification-dropdown mr-n1">
                                <a href="#" className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                                    <div className="icon-status icon-status-info"><em className="icon ni ni-bell" /></div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                                    <div className="dropdown-head">
                                        <span className="sub-title nk-dropdown-title">Thông báo</span>
                                        <a href="#">Đánh dấu tất cả đã đọc</a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="nk-notification">
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Chuyển tiền đến Nguyễn Sĩ Văn</div>
                                                    <div className="nk-notification-time">2 giờ trước</div>
                                                </div>
                                            </div>{/* .dropdown-inner */}
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">Nhận tiền từ Nguyễn Sĩ văn</div>
                                                    <div className="nk-notification-time">3 giờ trước</div>
                                                </div>
                                            </div>{/* .dropdown-inner */}
                                        </div>
                                    </div>{/* .nk-dropdown-body */}
                                    <div className="dropdown-foot center">
                                        <a href="#">Xem tất cả</a>
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
        user: state.userReducer
    }
}, dispatch => {
    return {
        onLogout: () => dispatch(onLogout()),
    }
})(Header);