import React from 'react';
import history from '../history';
import { connect } from 'react-redux';

function Menu(props) {
    const { user } = props;

    return (
        <div className="nk-sidebar nk-sidebar-fat nk-sidebar-fixed" data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-sidebar-brand">
                    <a href="/" className="logo-link nk-sidebar-logo">
                        <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                        <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                        <span className="nio-version">Crypto Bank</span>
                    </a>
                </div>
                <div className="nk-menu-trigger mr-n2">
                    <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em className="icon ni ni-arrow-left" /></a>
                </div>
            </div>{/* .nk-sidebar-element */}
            <div className="nk-sidebar-element">
                <div className="nk-sidebar-body" data-simplebar>
                    <div className="nk-sidebar-content">
                        <div className="nk-sidebar-widget d-none d-xl-block">
                            <div className="user-account-info between-center">
                                <div className="user-account-main">
                                    <h6 className="overline-title-alt">Tổng tài sản</h6>
                                    {user.userInfo ? <div className="user-balance">
                                        {Number(user.userInfo.balance).toLocaleString('en-US', { currency: 'VND' })}<small className="currency"> VND
                                         </small>
                                    </div> :
                                        <div class="d-flex justify-content-center">
                                            <div class="spinner-border spinner-border-sm text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>}
                                </div>
                                <a href="#" className="btn btn-white btn-icon btn-light"><em className="icon ni ni-line-chart" /></a>
                            </div>
                            <ul className="user-account-data gy-1">
                                <li>
                                    <div className="user-account-label">
                                        <span className="sub-text">Khả dụng</span>
                                    </div>
                                    <div className="user-account-value">
                                        {user.userInfo ?
                                            <span className="lead-text">
                                                {Number(user.userInfo.balance).toLocaleString('en-US', { currency: 'VND' })}
                                                <span className="currency"> VND</span>
                                            </span> :
                                            <div class="d-flex justify-content-center">
                                                <div class="spinner-border spinner-border-sm text-dark" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            </div>}
                                    </div>
                                </li>
                                <li>
                                    <div className="user-account-label">
                                        <span className="sub-text">Tiết kiệm</span>
                                    </div>
                                    <div className="user-account-value">
                                        <span className="sub-text">0 <span className="currency">VND</span></span>
                                    </div>
                                </li>
                            </ul>
                            <div className="user-account-actions">
                                <ul className="g-3">
                                    <li><a href="#" className="btn btn-lg btn-primary" data-toggle="modal" data-target="#remind-in-debt"><span>Nhắc nợ</span></a></li>
                                    <li><a href="#" className="btn btn-lg btn-warning" data-toggle="modal" data-target="#new-transaction"><span>Chuyển tiền</span></a></li>
                                </ul>
                            </div>
                        </div>{/* .nk-sidebar-widget */}

                        <div className="nk-sidebar-menu">
                            {/* Menu */}
                            <ul className="nk-menu">
                                <li className="nk-menu-heading">
                                    <h6 className="overline-title">Menu</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        history.push('/');
                                    }} className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashboard" /></span>
                                        <span className="nk-menu-text">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        history.push('/');
                                    }} className="nk-menu-link" >
                                        <span className="nk-menu-icon"><em className="icon ni ni-user-c" /></span>
                                        <span className="nk-menu-text">Thông tin tài khoản</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        history.push('/');
                                    }} className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-wallet-alt" /></span>
                                        <span className="nk-menu-text">Danh sách tài khoản</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        history.push('/transactions');
                                    }} className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-repeat" /></span>
                                        <span className="nk-menu-text">Giao dịch</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        history.push('/');
                                    }} className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-file-text" /></span>
                                        <span className="nk-menu-text">Yêu cầu trả nợ</span>
                                    </a>
                                </li>
                            </ul>{/* .nk-menu */}
                        </div>{/* .nk-sidebar-menu */}
                        <div className="nk-sidebar-footer">
                            <ul className="nk-menu nk-menu-footer">
                                <li className="nk-menu-item">
                                    <a href="#" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-help-alt" /></span>
                                        <span className="nk-menu-text">Hỗ trợ</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item ml-auto">
                                    <div className="dropup">
                                        <a href="#" className="nk-menu-link dropdown-indicator has-indicator" data-toggle="dropdown" data-offset="0,10">
                                            <span className="nk-menu-icon"><em className="icon ni ni-globe" /></span>
                                            <span className="nk-menu-text">English</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                            <ul className="language-list">
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/english.png" alt="" className="language-flag" />
                                                        <span className="language-name">English</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/spanish.png" alt="" className="language-flag" />
                                                        <span className="language-name">Español</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/french.png" alt="" className="language-flag" />
                                                        <span className="language-name">Français</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="language-item">
                                                        <img src="./images/flags/turkey.png" alt="" className="language-flag" />
                                                        <span className="language-name">Türkçe</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>{/* .nk-footer-menu */}
                        </div>{/* .nk-sidebar-footer */}
                    </div>{/* .nk-sidebar-contnet */}
                </div>{/* .nk-sidebar-body */}
            </div>{/* .nk-sidebar-element */}
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer
    }
}, dispatch => {
    return {

    }
})(Menu);