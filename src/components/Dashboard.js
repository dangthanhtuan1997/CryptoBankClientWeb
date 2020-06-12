import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                    <div className="nk-content-body">
                        <div className="nk-block-head">
                            <div className="nk-block-head-sub"><span>Số dư tài khoản</span></div>
                            <div className="nk-block-between-md g-4">
                                <div className="nk-block-head-content">
                                    <h2 className="nk-block-title fw-normal">1234 5678 9999</h2>
                                    <div className="nk-block-des">
                                        <p>Tóm tắt chi tiết tài khoản của bạn.</p>
                                    </div>
                                </div>
                                <div className="nk-block-head-content">
                                    <ul className="nk-block-tools gx-3">
                                        <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-dim btn-warning btn-outline-light"><em className="icon ni ni-arrow-from-right" /></a><span className="btn-extext">Yêu cầu chuyển tiền</span></li>
                                        <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-success"><em className="icon ni ni-wallet-out" /></a><span className="btn-extext">Chuyển tiền</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/* .nk-block-head */}
                        <div className="nk-block">
                            <div className="card card-bordered">
                                <div className="card-inner">
                                    <div className="nk-wg1 mb-3">
                                        <div className="nk-wg1-group g-2">
                                            <div className="nk-wg1-item mr-xl-4">
                                                <div className="nk-wg1-title">Khả dụng</div>
                                                <div className="nk-wg1-amount">
                                                    <div className="amount">50.255.000 <small className="currency">VND</small></div>
                                                </div>
                                            </div>{/* .nk-wg1-item */}
                                            <div className="nk-wg1-item ml-lg-auto">
                                                <div className="nk-wg1-title">Trong tháng này</div>
                                                <div className="nk-wg1-group g-2">
                                                    <div className="nk-wg1-sub">
                                                        <div className="sub-text"><span>Gửi</span>
                                                            <div className="dot" data-bg="#ff5733" />
                                                        </div>
                                                        <div className="lead-text">1.150.000.000</div>
                                                    </div>
                                                    <div className="nk-wg1-sub">
                                                        <div className="sub-text"><span>Nhận</span>
                                                            <div className="dot" data-bg="#2ecc71" />
                                                        </div>
                                                        <div className="lead-text">1.213.000.000</div>
                                                    </div>
                                                </div>
                                            </div>{/* .nk-wg1-item */}
                                        </div>{/* .nk-wg1-group */}
                                    </div>{/* .nk-wg1 */}
                                    <div className="nk-ck1">
                                        <canvas className="chart-account-balance" id="mainBalance" />
                                    </div>{/* .nk-ck1 */}
                                </div>{/* .card-inner */}
                            </div>{/* .card */}
                            <div className="card card-bordered">
                                <div className="card-inner">
                                    <div className="card-head ui-v2">
                                        <div className="card-title">
                                            <h5 className="title">Balance Summary</h5>
                                        </div>
                                        <div className="card-tools">
                                            <ul className="card-tools-nav">
                                                <li><a href="#">This Month</a></li>
                                                <li><a href="#">Months</a></li>
                                                <li className="active"><a href="#">Years</a></li>
                                            </ul>
                                        </div>
                                    </div>{/* .card-head */}
                                    <div className="nk-wg4">
                                        <div className="nk-wg4-group flex-lg-nowrap justify-between g-3">
                                            <div className="nk-wg4-item">
                                                <div className="nk-wg4-group g-3">
                                                    <div className="nk-wg4-sub">
                                                        <div className="sub-text">
                                                            <div className="dot dot-lg sq" data-bg="#5ce0aa" /> <span>Total Received</span>
                                                        </div>
                                                        <div className="lead-text-lg">2.010550 <span className="currency currency-btc">BTC</span></div>
                                                    </div>
                                                    <div className="nk-wg4-sub">
                                                        <div className="sub-text">
                                                            <div className="dot dot-lg sq" data-bg="#798bff" /> <span>Total Send</span>
                                                        </div>
                                                        <div className="lead-text-lg">2.010550<span className="currency currency-btc">BTC</span></div>
                                                    </div>
                                                    <div className="nk-wg4-sub">
                                                        <div className="sub-text">
                                                            <div className="dot dot-lg sq" data-bg="#f6ca3e" /><span>Total Withdraw</span>
                                                        </div>
                                                        <div className="lead-text-lg">2.010550<span className="currency currency-btc">BTC</span></div>
                                                    </div>
                                                </div>{/* .nk-wg4-group */}
                                            </div>{/* .nk-wg4-item */}
                                            <div className="nk-wg4-item text-lg-right">
                                                <ul className="nk-wg4-switcher">
                                                    <li>
                                                        <div className="dropdown">
                                                            <a className="dropdown-indicator" href="#" data-toggle="dropdown">January</a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <ul className="link-list-plain li-col3x text-center">
                                                                    <li><a href="#">Jan</a></li>
                                                                    <li><a href="#">Feb</a></li>
                                                                    <li><a href="#">Mar</a></li>
                                                                    <li><a href="#">Apr</a></li>
                                                                    <li><a href="#">May</a></li>
                                                                    <li><a href="#">Jun</a></li>
                                                                    <li><a href="#">Jul</a></li>
                                                                    <li><a href="#">Aug</a></li>
                                                                    <li><a href="#">Sep</a></li>
                                                                    <li><a href="#">Oct</a></li>
                                                                    <li><a href="#">Nov</a></li>
                                                                    <li><a href="#">Dec</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dropdown">
                                                            <a className="dropdown-indicator" href="#" data-toggle="dropdown">2019</a>
                                                            <div className="dropdown-menu dropdown-menu-auto">
                                                                <ul className="link-list-plain sm text-center">
                                                                    <li><a href="#">2018</a></li>
                                                                    <li><a href="#">2017</a></li>
                                                                    <li><a href="#">2016</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>{/* .nk-wg4-switcher */}
                                                <div className="nk-wg4-note">Total <span>35,405</span> transaction made</div>
                                            </div>{/* .nk-wg4-item */}
                                        </div>{/* .nk-wg4-group */}
                                    </div>{/* .nk-wg4 */}
                                    <div className="nk-ck2">
                                        <canvas className="chart-account-summary" id="summaryBalance" />
                                    </div>{/* .nk-ck2 */}
                                </div>{/* .card-inner */}
                            </div>{/* .card */}
                        </div>{/* .nk-block */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);