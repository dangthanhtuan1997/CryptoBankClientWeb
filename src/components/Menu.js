import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class Menu extends React.Component {

    render() {
        return (
            <div className="nk-sidebar nk-sidebar-fat nk-sidebar-fixed" data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-sidebar-brand">
                        <a href="html/crypto/index.html" className="logo-link nk-sidebar-logo">
                            <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                            <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                            <span className="nio-version">Crypto</span>
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
                                        <h6 className="overline-title-alt">Available Balance</h6>
                                        <div className="user-balance">2.014095 <small className="currency currency-btc">BTC</small></div>
                                        <div className="user-balance-alt">18,934.84 <span className="currency currency-btc">BTC</span></div>
                                    </div>
                                    <a href="#" className="btn btn-white btn-icon btn-light"><em className="icon ni ni-line-chart" /></a>
                                </div>
                                <ul className="user-account-data gy-1">
                                    <li>
                                        <div className="user-account-label">
                                            <span className="sub-text">Profits (7d)</span>
                                        </div>
                                        <div className="user-account-value">
                                            <span className="lead-text">+ 0.0526 <span className="currency currency-btc">BTC</span></span>
                                            <span className="text-success ml-2">3.1% <em className="icon ni ni-arrow-long-up" /></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="user-account-label">
                                            <span className="sub-text">Deposit in orders</span>
                                        </div>
                                        <div className="user-account-value">
                                            <span className="sub-text">0.005400 <span className="currency currency-btc">BTC</span></span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="user-account-actions">
                                    <ul className="g-3">
                                        <li><a href="#" className="btn btn-lg btn-primary"><span>Deposit</span></a></li>
                                        <li><a href="#" className="btn btn-lg btn-warning"><span>Withdraw</span></a></li>
                                    </ul>
                                </div>
                            </div>{/* .nk-sidebar-widget */}
                            <div className="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0">
                                <a className="nk-profile-toggle toggle-expand" data-target="sidebarProfile" href="#">
                                    <div className="user-card-wrap">
                                        <div className="user-card">
                                            <div className="user-avatar">
                                                <span>AB</span>
                                            </div>
                                            <div className="user-info">
                                                <span className="lead-text">Abu Bin Ishtiyak</span>
                                                <span className="sub-text">info@softnio.com</span>
                                            </div>
                                            <div className="user-action">
                                                <em className="icon ni ni-chevron-down" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="nk-profile-content toggle-expand-content" data-content="sidebarProfile">
                                    <div className="user-account-info between-center">
                                        <div className="user-account-main">
                                            <h6 className="overline-title-alt">Available Balance</h6>
                                            <div className="user-balance">2.014095 <small className="currency currency-btc">BTC</small></div>
                                            <div className="user-balance-alt">18,934.84 <span className="currency currency-btc">BTC</span></div>
                                        </div>
                                        <a href="#" className="btn btn-icon btn-light"><em className="icon ni ni-line-chart" /></a>
                                    </div>
                                    <ul className="user-account-data">
                                        <li>
                                            <div className="user-account-label">
                                                <span className="sub-text">Profits (7d)</span>
                                            </div>
                                            <div className="user-account-value">
                                                <span className="lead-text">+ 0.0526 <span className="currency currency-btc">BTC</span></span>
                                                <span className="text-success ml-2">3.1% <em className="icon ni ni-arrow-long-up" /></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="user-account-label">
                                                <span className="sub-text">Deposit in orders</span>
                                            </div>
                                            <div className="user-account-value">
                                                <span className="sub-text text-base">0.005400 <span className="currency currency-btc">BTC</span></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="user-account-links">
                                        <li><a href="#" className="link"><span>Withdraw Funds</span> <em className="icon ni ni-wallet-out" /></a></li>
                                        <li><a href="#" className="link"><span>Deposit Funds</span> <em className="icon ni ni-wallet-in" /></a></li>
                                    </ul>
                                    <ul className="link-list">
                                        <li><a href="html/crypto/profile.html"><em className="icon ni ni-user-alt" /><span>View Profile</span></a></li>
                                        <li><a href="html/crypto/profile-security.html"><em className="icon ni ni-setting-alt" /><span>Account Setting</span></a></li>
                                        <li><a href="html/crypto/profile-activity.html"><em className="icon ni ni-activity-alt" /><span>Login Activity</span></a></li>
                                    </ul>
                                    <ul className="link-list">
                                        <li><a href="#"><em className="icon ni ni-signout" /><span>Sign out</span></a></li>
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
                                        <a href="html/crypto/index.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-dashboard" /></span>
                                            <span className="nk-menu-text">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/crypto/accounts.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-user-c" /></span>
                                            <span className="nk-menu-text">My Account</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/crypto/wallets.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-wallet-alt" /></span>
                                            <span className="nk-menu-text">Wallets</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/crypto/buy-sell.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-coins" /></span>
                                            <span className="nk-menu-text">Buy / Sell</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/crypto/order-history.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-repeat" /></span>
                                            <span className="nk-menu-text">Orders</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/crypto/profile.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-account-setting" /></span>
                                            <span className="nk-menu-text">My Profile</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/crypto/kyc-application.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-file-text" /></span>
                                            <span className="nk-menu-text">KYC Application</span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-heading">
                                        <h6 className="overline-title">Additionals</h6>
                                    </li>
                                    <li className="nk-menu-item has-sub">
                                        <a href="#" className="nk-menu-link nk-menu-toggle">
                                            <span className="nk-menu-icon"><em className="icon ni ni-files-fill" /></span>
                                            <span className="nk-menu-text">Pages</span>
                                        </a>
                                        <ul className="nk-menu-sub">
                                            <li className="nk-menu-item">
                                                <a href="html/crypto/welcome.html" className="nk-menu-link">
                                                    <span className="nk-menu-text">Welcome / Intro</span>
                                                </a>
                                            </li>
                                            <li className="nk-menu-item">
                                                <a href="html/general/pages/auths/auth-login.html" target="_blank" className="nk-menu-link">
                                                    <span className="nk-menu-text">Login / Sign in</span>
                                                </a>
                                            </li>
                                            <li className="nk-menu-item">
                                                <a href="html/general/pages/auths/auth-register.html" target="_blank" className="nk-menu-link">
                                                    <span className="nk-menu-text">Register / Sign up</span>
                                                </a>
                                            </li>
                                            <li className="nk-menu-item">
                                                <a href="html/general/pages/auths/auth-reset.html" target="_blank" className="nk-menu-link">
                                                    <span className="nk-menu-text">Forgot Password</span>
                                                </a>
                                            </li>
                                            <li className="nk-menu-item">
                                                <a href="html/general/pages/auths/auth-success.html" target="_blank" className="nk-menu-link">
                                                    <span className="nk-menu-text">Success / Confirm</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a href="html/general/components.html" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-layers-fill" /></span>
                                            <span className="nk-menu-text">Components</span>
                                        </a>
                                    </li>
                                </ul>{/* .nk-menu */}
                            </div>{/* .nk-sidebar-menu */}
                            <div className="nk-sidebar-widget">
                                <div className="widget-title">
                                    <h6 className="overline-title">Crypto Accounts <span>(4)</span></h6>
                                    <a href="#" className="link">View All</a>
                                </div>
                                <ul className="wallet-list">
                                    <li className="wallet-item">
                                        <a href="#">
                                            <div className="wallet-icon"><em className="icon ni ni-sign-kobo" /></div>
                                            <div className="wallet-text">
                                                <h6 className="wallet-name">NioWallet</h6>
                                                <span className="wallet-balance">30.959040 <span className="currency currency-nio">NIO</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="wallet-item">
                                        <a href="#">
                                            <div className="wallet-icon"><em className="icon ni ni-sign-btc" /></div>
                                            <div className="wallet-text">
                                                <h6 className="wallet-name">Bitcoin Wallet</h6>
                                                <span className="wallet-balance">0.0495950 <span className="currency currency-btc">BTC</span></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="wallet-item wallet-item-add">
                                        <a href="#">
                                            <div className="wallet-icon"><em className="icon ni ni-plus" /></div>
                                            <div className="wallet-text">
                                                <h6 className="wallet-name">Add another wallet</h6>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>{/* .nk-sidebar-widget */}
                            <div className="nk-sidebar-footer">
                                <ul className="nk-menu nk-menu-footer">
                                    <li className="nk-menu-item">
                                        <a href="#" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-help-alt" /></span>
                                            <span className="nk-menu-text">Support</span>
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
}

export default withRouter(Menu);