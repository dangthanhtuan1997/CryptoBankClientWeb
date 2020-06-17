import React, { useState } from 'react';
import { connect } from 'react-redux';
import { completedTransaction } from '../actions';

function ConfirmedTransactionModal(props) {
    function close() {
        props.completedTransaction();
    }


    if (!props.transaction.newConfirmedTransaction) {
        return null;
    }

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} id="confirmed-transaction" aria-modal="true">
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
                                <a onClick={() => close()} className="btn btn-mw btn-light" data-dismiss="modal">Trở về</a>
                            </div>
                        </div>
                    </div>{/* .modal-body */}
                </div>{/* .modal-content */}
            </div>{/* .modla-dialog */}
        </div>
    );
}

export default connect(state => {
    return {
        transaction: state.transactionReducer
    }
}, dispatch => {
    return {
        completedTransaction: () => dispatch(completedTransaction()),
    }
})(ConfirmedTransactionModal);