import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { onConfirmSendMoneyToOthers, clearPopup } from '../actions';

function OTPModal(props) {
    const [otp, setOtp] = useState('');

    function close() {
        props.clearPopup();
    }

    if (props.popup.status !== 'success' || props.popup.title !== 'pending-transaction') {
        return null;
    }

    return (
        <div className="modal fade show" tabIndex={-1} id="confirm-transaction" style={{ display: 'block' }} aria-modal="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                <a onClick={() => close()} className="btn close" data-dismiss="modal" aria-label="Close"><em className="icon ni ni-cross" /></a>
                    <div className="modal-body modal-body-md">
                        <h4 className="nk-modal-title title">Xác nhận chuyển tiền</h4>
                        <p><strong>Để đảm bảo an toàn, chúng tôi đã gửi mã xác nhận vào email của bạn.</strong></p>
                        <p>Vui lòng kiểm tra thông tin người nhận một lần nữa trong email của bạn, nếu không đúng hãy bấm nút hủy phía dưới.</p>
                        <div className="form">
                            <div className="form-group">
                                <label className="form-label">Nhập mã xác nhận</label>
                                <div className="form-control-wrap">
                                    <input type="text" onChange={(e) => setOtp(e.target.value)} className="form-control" placeholder="******" />
                                </div>
                                <div className="form-note">
                                    <span>Lệnh chuyển tiền sẽ không thể hủy sau khi bạn xác nhận.</span>
                                </div>
                            </div>
                            <ul className="align-center flex-wrap g-3">
                                <li>
                                    <button onClick={() => {
                                        props.clearPopup();
                                        props.onConfirmSendMoneyToOthers(otp);
                                    }} className="btn btn-primary" data-dismiss="modal">Xác nhận</button>
                                </li>
                                <li>
                                    <a onClick={() => close()} className="btn btn-light" data-dismiss="modal">Hủy chuyển</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>{/* .modal-content */}
            </div>{/* .modla-dialog */}
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer,
        popup: state.popupReducer
    }
}, dispatch => {
    return {
        onConfirmSendMoneyToOthers: (otp) => dispatch(onConfirmSendMoneyToOthers(otp)),
        clearPopup: () => dispatch(clearPopup()),
    }
})(OTPModal);