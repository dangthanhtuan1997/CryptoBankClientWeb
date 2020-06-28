import React, { useState } from 'react';
import { connect } from 'react-redux';
import { resetStatusTransaction } from '../actions';

function FailedTransactionModal(props) {
    function close() {
        props.resetStatusTransaction();
    }

    if (props.transaction.status !== 'fail') {
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
                                <p className="lead">{props.transaction.reason}</p>
                                <p className="text-soft">Hotline hỗ trợ: xxxx.xxxx</p>
                            </div>
                            <div className="nk-modal-action-lg">
                                <a onClick={() => close()} className="btn btn-mw btn-light" data-dismiss="modal">Trở về</a>
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
        resetStatusTransaction: () => dispatch(resetStatusTransaction()),
    }
})(FailedTransactionModal);