import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { clearPopup, onRemoveDebtTransaction, onConfirmRemoveDebtTransaction } from '../actions';

function RemoveDebtTransactionModal({ onRemoveDebtTransaction, clearPopup, popup, onConfirmRemoveDebtTransaction }) {
    const [note, setNote] = useState('');

    function close() {
        clearPopup();
    }

    if (popup.status !== 'success' || popup.title !== 'remove-debt-transaction') {
        return null;
    }

    return (
        <div className="modal fade show" tabIndex={-1} id="remove-debt-transaction" style={{ display: 'block' }} aria-modal="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <a onClick={() => close()} className="btn close" data-dismiss="modal" aria-label="Close"><em className="icon ni ni-cross" /></a>
                    <div className="modal-body modal-body-md">
                        <h4 className="nk-modal-title title">Hủy nhắc nợ</h4>
                        <p><strong>Thao tác này sẽ không thể hoàn tác.</strong></p>
                        <p>Một thông báo sẽ được gửi đến người gửi lời nhắc rằng bạn xác nhận hủy lời nhắc.</p>
                        <div className="form">
                            <div className="form-group">
                                <label className="form-label">Ghi chú</label>
                                <div className="form-control-wrap">
                                    <input type="text" onChange={(e) => setNote(e.target.value)} className="form-control" placeholder="******" />
                                </div>
                                <div className="form-note">
                                    <span>Ghi chú là không bắt buộc.</span>
                                </div>
                            </div>
                            <ul className="align-center flex-wrap g-3">
                                <li>
                                    <button onClick={() => {
                                        clearPopup();
                                        onConfirmRemoveDebtTransaction(note)
                                    }} className="btn btn-primary" data-dismiss="modal">Xác nhận</button>
                                </li>
                                <li>
                                    <a onClick={() => close()} className="btn btn-light" data-dismiss="modal">Hủy</a>
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
        clearPopup: () => dispatch(clearPopup()),
        onRemoveDebtTransaction: () => dispatch(onRemoveDebtTransaction()),
        onConfirmRemoveDebtTransaction: (note) => dispatch(onConfirmRemoveDebtTransaction(note))
    }
})(RemoveDebtTransactionModal);