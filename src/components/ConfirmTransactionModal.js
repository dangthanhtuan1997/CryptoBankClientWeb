import React from 'react';

class ConfirmTransactionModal extends React.Component {

    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="confirm-transaction">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <a href="#" className="close" data-dismiss="modal" aria-label="Close"><em className="icon ni ni-cross" /></a>
                        <div className="modal-body modal-body-md">
                            <h4 className="nk-modal-title title">Xác nhận chuyển tiền</h4>
                            <p><strong>Để đảm bảo an toàn, chúng tôi đã gửi mã xác nhận vào email của bạn.</strong></p>
                            <p>Vui lòng kiểm tra thông tin người nhận một lần nữa trong email của bạn, nếu không đúng hãy bấm nút hủy phía dưới.</p>
                            <div className="form">
                                <div className="form-group">
                                    <label className="form-label">Nhập mã xác nhận</label>
                                    <div className="form-control-wrap">
                                        <input type="text" className="form-control" placeholder="*********" />
                                    </div>
                                    <div className="form-note">
                                        <span>Lệnh chuyển tiền sẽ không thể hủy sau khi bạn xác nhận.</span>
                                    </div>
                                </div>
                                <ul className="align-center flex-wrap g-3">
                                    <li>
                                        <button className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#confirmed-transaction">Xác nhận</button>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-light" data-dismiss="modal">Hủy chuyển</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{/* .modal-content */}
                </div>{/* .modla-dialog */}
            </div>
        );
    }
}

export default ConfirmTransactionModal;