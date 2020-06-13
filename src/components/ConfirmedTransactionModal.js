import React from 'react';

class ConfirmedTransactionModal extends React.Component {

    render() {
        return (
            <div className="modal fade" tabIndex={-1} id="confirmed-transaction">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-body modal-body-md text-center">
                            <div className="nk-modal">
                                <em className="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-check bg-success" />
                                <h4 className="nk-modal-title">Chuyển tiền thành công!</h4>
                                <div className="nk-modal-text">
                                    <p>Lệnh chuyển tiền của đã được xử lý. Đừng lo lắng khi chưa nhận được tiền ngay, điều này có thể kéo dài đến <strong>15 phút</strong> tùy thuộc vào ngân hàng đối tác.</p>
                                </div>
                                <div className="nk-modal-action-lg">
                                    <a href="#" className="btn btn-mw btn-light" data-dismiss="modal">Trở về</a>
                                </div>
                            </div>
                        </div>{/* .modal-body */}
                    </div>{/* .modal-content */}
                </div>{/* .modla-dialog */}
            </div>
        );
    }
}

export default ConfirmedTransactionModal;