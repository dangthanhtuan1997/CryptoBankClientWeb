import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class TransactionModal extends React.Component {

    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="subscription-change">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <a href="#" className="close" data-dismiss="modal" aria-label="Close"><em className="icon ni ni-cross" /></a>
                        <div className="modal-body modal-body-md">
                            <div className="sp-package text-center">
                                <div className="sp-package-head">
                                    <h4 className="title">Chuyển tiền</h4>
                                    <p className="text-soft">Vui lòng kiểm tra thông tin người nhận trước khi gửi.</p>
                                </div>
                                <ul className="sp-package-plan nav nav-switch nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#internal" data-toggle="tab" className="nav-link active">Cùng ngân hàng</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#external" data-toggle="tab" className="nav-link">Liên ngân hàng</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="internal">
                                        <ul className="sp-package-list">
                                            <li className="sp-package-item">
                                                <input className="sp-package-choose" type="radio" name="subscription-pack-plan" id="pack-plan-entprise" defaultChecked />
                                                <label className="sp-package-desc" htmlFor="pack-plan-entprise">
                                                    <span className="sp-package-info">
                                                        <span className="sp-package-title title">Enterprise Plan <span className="badge badge-primary badge-pill">Current</span></span>
                                                        <span className="sp-package-detail">Unlimited Access / $599.00 USD / Year</span>
                                                    </span>
                                                    <span className="sp-package-price">
                                                        <span className="sp-package-amount yearly">
                                                            <span className="amount">$599.00</span>
                                                            <span className="text-soft">Yearly</span>
                                                        </span>
                                                        <span className="sp-package-amount monthly d-none">
                                                            <span className="amount">$99.00</span>
                                                            <span className="text-soft">Monthly</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li className="sp-package-item">
                                                <input className="sp-package-choose" type="radio" name="subscription-pack-plan" id="pack-plan-pro" />
                                                <label className="sp-package-desc" htmlFor="pack-plan-pro">
                                                    <span className="sp-package-info">
                                                        <span className="sp-package-title title">NioPro Plan</span>
                                                        <span className="sp-package-detail">Unlimited Access / $249.00 USD / Year</span>
                                                    </span>
                                                    <span className="sp-package-price">
                                                        <span className="sp-package-amount yearly">
                                                            <span className="amount">$299.00</span>
                                                            <span className="text-soft">Yearly</span>
                                                        </span>
                                                        <span className="sp-package-amount monthly d-none">
                                                            <span className="amount">$49.00</span>
                                                            <span className="text-soft">Monthly</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li className="sp-package-item">
                                                <input className="sp-package-choose" type="radio" name="subscription-pack-plan" id="pack-plan-free" />
                                                <label className="sp-package-desc" htmlFor="pack-plan-free">
                                                    <span className="sp-package-info">
                                                        <span className="sp-package-title title">Free Plan</span>
                                                        <span className="sp-package-detail">Free Access / $0.00 USD / Year</span>
                                                    </span>
                                                    <span className="sp-package-price">
                                                        <span className="sp-package-amount yearly">
                                                            <span className="amount">$0.00</span>
                                                            <span className="text-soft">Yearly</span>
                                                        </span>
                                                        <span className="sp-package-amount monthly d-none">
                                                            <span className="amount">$0.00</span>
                                                            <span className="text-soft">Monthly</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane" id="external">
                                        <ul className="sp-package-list">
                                            <li className="sp-package-item">
                                                <input className="sp-package-choose" type="radio" name="subscription-pack-plan" id="pack-plan-entprise" defaultChecked />
                                                <label className="sp-package-desc" htmlFor="pack-plan-entprise">
                                                    <span className="sp-package-info">
                                                        <span className="sp-package-title title">Enterprise Plan <span className="badge badge-primary badge-pill">Current</span></span>
                                                        <span className="sp-package-detail">Unlimited Access / $599.00 USD / Year</span>
                                                    </span>
                                                    <span className="sp-package-price">
                                                        <span className="sp-package-amount yearly">
                                                            <span className="amount">$599.00</span>
                                                            <span className="text-soft">Yearly</span>
                                                        </span>
                                                        <span className="sp-package-amount monthly d-none">
                                                            <span className="amount">$99.00</span>
                                                            <span className="text-soft">Monthly</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li className="sp-package-item">
                                                <input className="sp-package-choose" type="radio" name="subscription-pack-plan" id="pack-plan-pro" />
                                                <label className="sp-package-desc" htmlFor="pack-plan-pro">
                                                    <span className="sp-package-info">
                                                        <span className="sp-package-title title">NioPro Plan</span>
                                                        <span className="sp-package-detail">Unlimited Access / $249.00 USD / Year</span>
                                                    </span>
                                                    <span className="sp-package-price">
                                                        <span className="sp-package-amount yearly">
                                                            <span className="amount">$299.00</span>
                                                            <span className="text-soft">Yearly</span>
                                                        </span>
                                                        <span className="sp-package-amount monthly d-none">
                                                            <span className="amount">$49.00</span>
                                                            <span className="text-soft">Monthly</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li className="sp-package-item">
                                                <input className="sp-package-choose" type="radio" name="subscription-pack-plan" id="pack-plan-free" />
                                                <label className="sp-package-desc" htmlFor="pack-plan-free">
                                                    <span className="sp-package-info">
                                                        <span className="sp-package-title title">Free Plan</span>
                                                        <span className="sp-package-detail">Free Access / $0.00 USD / Year</span>
                                                    </span>
                                                    <span className="sp-package-price">
                                                        <span className="sp-package-amount yearly">
                                                            <span className="amount">$0.00</span>
                                                            <span className="text-soft">Yearly</span>
                                                        </span>
                                                        <span className="sp-package-amount monthly d-none">
                                                            <span className="amount">$0.00</span>
                                                            <span className="text-soft">Monthly</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sp-package-action">
                                    <a href="#" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#transaction-confirmed">Chuyển</a>
                                    <a href="#" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy chuyển</a>
                                </div>
                            </div>
                        </div>
                    </div>{/* .modal-content */}
                </div>{/* .modal-dialog */}
            </div>
        );
    }
}

export default withRouter(TransactionModal);