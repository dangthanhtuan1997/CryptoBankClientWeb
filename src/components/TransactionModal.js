import React from 'react';

class TransactionModal extends React.Component {

    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="new-transaction">
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
                                                        <input type="text" className="form-control form-control-lg" id="birth-day" defaultValue="Thanh toán" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-control custom-switch">
                                                        <input type="checkbox" defaultChecked="true" className="custom-control-input" id="latest-sale1" />
                                                        <label className="custom-control-label" htmlFor="latest-sale1">Phí người chuyển chịu </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-control custom-switch">
                                                        <input type="checkbox" defaultChecked="true" className="custom-control-input" id="save1" />
                                                        <label className="custom-control-label" htmlFor="save1">Lưu người nhận </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="tab-pane" id="external">
                                        <ul className="sp-package-list">
                                            <div className="row gy-4">
                                                <div className="form col-md-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="birth-day">Ngân hàng</label>
                                                        <select defaultValue="teabank" className="form-select" data-search="off" data-ui="clean">
                                                            <option value="nklbank">NKL Bank</option>
                                                            <option value="teabank">TeaBank</option>
                                                        </select>
                                                    </div>
                                                </div>
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
                                                        <input type="text" className="form-control form-control-lg" id="birth-day" defaultValue="Thanh toán" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-control custom-switch">
                                                        <input type="checkbox" defaultChecked="true" className="custom-control-input" id="latest-sale2" />
                                                        <label className="custom-control-label" htmlFor="latest-sale2">Phí người chuyển chịu </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-control custom-switch">
                                                        <input type="checkbox" defaultChecked="true" className="custom-control-input" id="save2" />
                                                        <label className="custom-control-label" htmlFor="save2">Lưu người nhận </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sp-package-action">
                                    <a href="#" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#confirm-transaction">Chuyển</a>
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

export default TransactionModal;