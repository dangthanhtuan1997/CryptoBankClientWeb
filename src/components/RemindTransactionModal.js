import React from 'react';

class RemindTransactionModal extends React.Component {

    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="remind-in-debt">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <a href="#" className="close" data-dismiss="modal" aria-label="Close"><em className="icon ni ni-cross" /></a>
                        <div className="modal-body modal-body-md">
                            <div className="sp-package text-center">
                                <div className="sp-package-head">
                                    <h4 className="title">Yêu cầu chuyển tiền</h4>
                                    <p className="text-soft">Mỗi ngày bạn chỉ được thiện hiện gửi yêu cầu chuyển tiền tới mỗi tài khoản tối đa 1 lần.</p>
                                </div>
                                <ul className="sp-package-plan nav nav-switch nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#internal" data-toggle="tab" className="nav-link active">Cùng ngân hàng</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="internal">
                                        <ul className="sp-package-list">
                                            <div className="row gy-4">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="full-name">Số tài khoản</label>
                                                        <input type="text" className="form-control form-control-lg" id="full-name" defaultValue="0000 1111 2222" placeholder="Enter Full name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="display-name">Người nhận</label>
                                                        <input disabled={true} type="text" className="form-control form-control-lg" id="display-name" defaultValue="Đặng Tiến Đạt" placeholder="Enter display name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="phone-no">Số tiền</label>
                                                        <input type="text" className="form-control form-control-lg" id="phone-no" defaultValue="16.000.000" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="birth-day">Nội dung</label>
                                                        <input type="text" className="form-control form-control-lg" id="birth-day" defaultValue="Thanh toán nợ" />
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                               </div>
                                <div className="sp-package-action">
                                    <a href="#" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#confirm-transaction">Gửi yêu cầu</a>
                                    <a href="#" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy gửi</a>
                                </div>
                            </div>
                        </div>
                    </div>{/* .modal-content */}
                </div>{/* .modal-dialog */}
            </div>
        );
    }
}

export default RemindTransactionModal;