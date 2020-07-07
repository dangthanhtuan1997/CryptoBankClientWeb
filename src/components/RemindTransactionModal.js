import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { onGetUserByAccountNumber, onCreateNewTransaction } from '../actions';
import { connect } from 'react-redux';
import { socket } from '../socket';

function RemindTransactionModal({ onCreateNewTransaction, user }) {
    const typingTimeoutRef = useRef(null);

    const [receiverAccountNumber, setReceiverAccountNumber] = useState('0123456789012345');
    const [amount, setAmount] = useState(10000);
    const [note, setNote] = useState('Chuyển tiền');
    const [receiverName, setReceiverName] = useState('');

    useEffect(() => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        if (receiverName !== '') {
            return;
        }

        typingTimeoutRef.current = setTimeout(async () => {
            const receiverName = await onGetUserByAccountNumber(receiverAccountNumber, 'internal', '');
            setReceiverName(receiverName);
        }, 300);
    });

    function sendDebtTransaction() {
        const debt = {
            receiver: {
                full_name: receiverName,
                account_number: receiverAccountNumber
            },
            amount,
            note,
            scope: 'internal',
            partner_code: '',
            fee: false,
            save: true,
            type: 'debt'
        }
        onCreateNewTransaction(debt);
    }

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
                                                    <label className="form-label">Số tài khoản</label>
                                                    {receiverAccountNumber ? <input type="number" value={receiverAccountNumber} className="form-control form-control-lg" onChange={(e) => {
                                                        setReceiverAccountNumber(e.target.value);
                                                        setReceiverName('');
                                                    }} placeholder="Nhập số tài khoản" /> : <input type="number" value={receiverAccountNumber} className="form-control form-control-lg error" onChange={(e) => {
                                                        setReceiverAccountNumber(e.target.value);
                                                        setReceiverName('');
                                                    }} placeholder="Nhập số tài khoản" />}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Người nhận</label>
                                                    {receiverName ? <input disabled={true} type="text" className="form-control form-control-lg" value={receiverName} /> :
                                                        <input disabled={true} type="text" className="form-control form-control-lg error" value={receiverName} />}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Số tiền</label>
                                                    {amount != 0 ? <input type="text" className="form-control form-control-lg" value={Number(amount).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} onChange={(e) => {
                                                        const val = parseInt(e.target.value.replace(/,/g, "")) || 0;
                                                        setAmount(val);
                                                    }} placeholder="Số tiền" /> :
                                                        <input type="text" className="form-control form-control-lg error" value={Number(amount).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} onChange={(e) => {
                                                            const val = parseInt(e.target.value.replace(/,/g, "")) || 0;
                                                            setAmount(val);
                                                        }} placeholder="Số tiền" />}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Nội dung</label>
                                                    <input type="text" className="form-control form-control-lg" placeholder="Nội dung" value={note} onChange={(e) => {
                                                        setNote(e.target.value);
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="sp-package-action">
                                <a href="" onClick={() => sendDebtTransaction()} className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#confirm-transaction">Gửi yêu cầu</a>
                                <a href="" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy gửi</a>
                            </div>
                        </div>
                    </div>
                </div>{/* .modal-content */}
            </div>{/* .modal-dialog */}
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer
    }
}, dispatch => {
    return {
        onCreateNewTransaction: (transaction) => dispatch(onCreateNewTransaction(transaction)),
    }
})(RemindTransactionModal);