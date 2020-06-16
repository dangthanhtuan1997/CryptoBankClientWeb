import React, { useState } from 'react';
import { connect } from 'react-redux';
import { completedTransaction } from '../actions';

function FailedTransactionModal(props) {
    function close() {
        props.completedTransaction();
    }

    if (!props.transaction.newFailedTransaction) {
        return null;
    }

    return (
        <div className="modal fade show" tabIndex={-1} id="failed-transaction" style={{ display: 'block' }} aria-modal="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-body modal-body-md text-center">
                        <div className="nk-modal">
                            <em className="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-cross bg-danger" />
                            <h4 className="nk-modal-title">Chuyển tiền thất bại!</h4>
                            <div className="nk-modal-text">
                                <p className="lead">Giao dịch của bạn vừa bị hủy bỏ, vui lòng kiểm tra lại thông tin người nhận.</p>
                                <p className="text-soft">Nếu giao dịch thất bại nhiều lần, hãy gọi hỗ trợ: 0338.434.323.</p>
                            </div>
                            <div className="nk-modal-action-lg">
                                <a href="#" onClick={() => close()} className="btn btn-mw btn-light" data-dismiss="modal">Trở về</a>
                            </div>
                        </div>
                    </div>{/* .modal-body */}
                </div>
            </div>
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
})(FailedTransactionModal);