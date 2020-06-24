import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { onGetUserByAccountNumber, onSendMoneyToOthers } from '../actions';

function TransactionModal(props) {
    const typingTimeoutRef = useRef(null);

    const [receiverName, setReceiverName] = useState('');
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('0000123456789999');
    const [amount, setAmount] = useState(1000000);
    const [note, setNote] = useState('');
    const [selectedBank, setSelectedBank] = useState('nklbank');
    const [type, setType] = useState('internal');

    useEffect(() => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        if (receiverName !== '') {
            return;
        }

        typingTimeoutRef.current = setTimeout(async () => {
            const receiverName = await onGetUserByAccountNumber(receiverAccountNumber, type);
            setReceiverName(receiverName);
        }, 500);
    });

    function clearState() {
        setReceiverName('');
        setReceiverAccountNumber('');
        setAmount(0);
        setNote('');
    }

    function onSendMoneyInternal() {
        props.onSendMoneyToOthers({
            receiver: {
                full_name: receiverName,
                account_number: receiverAccountNumber
            },
            amount,
            note
        }, 'internal');
    }

    function onSendMoneyExternal() {
        props.onSendMoneyToOthers({
            receiver: {
                full_name: receiverName,
                account_number: receiverAccountNumber
            },
            amount,
            note
        }, 'external');
    }

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
                                    <a className="nav-link active" onClick={() => {
                                        setType('internal');
                                        clearState();
                                    }} href="#internal" data-toggle="tab" className="nav-link active">Cùng ngân hàng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => {
                                        setType('external');
                                        clearState();
                                    }} href="#external" data-toggle="tab" className="nav-link">Liên ngân hàng</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="internal">
                                    <ul className="sp-package-list">
                                        <div className="row gy-4">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Số tài khoản</label>
                                                    <input type="text" className="form-control form-control-lg" value={receiverAccountNumber} onChange={(e) => {
                                                        setReceiverAccountNumber(e.target.value);
                                                        setReceiverName('');
                                                    }} placeholder="Nhập số tài khoản" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Người nhận</label>
                                                    <input disabled={true} type="text" className="form-control form-control-lg" value={receiverName} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Số tiền</label>
                                                    <input type="text" className="form-control form-control-lg" value={amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} onChange={(e) => {
                                                        setAmount(isNaN(e.target.value.replace(/,/g, "")) ? 0 : parseInt(e.target.value.replace(/,/g, "")));
                                                    }} placeholder="Số tiền" />
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
                                            <div className="col-6">
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" defaultChecked="true" className="custom-control-input" />
                                                    <label className="custom-control-label">Phí người chuyển chịu </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" defaultChecked="true" className="custom-control-input" />
                                                    <label className="custom-control-label">Lưu người nhận </label>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                    <div className="sp-package-action">
                                        <a href="#" className="btn btn-primary" onClick={() => onSendMoneyInternal()} data-dismiss="modal" >Chuyển</a>
                                        <a href="#" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy chuyển</a>
                                    </div>
                                </div>
                                <div className="tab-pane" id="external">
                                    <ul className="sp-package-list">
                                        <div className="row gy-4">
                                            <div className="form col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label">Ngân hàng</label>
                                                    <select defaultValue={selectedBank} onChange={e => setSelectedBank(e.target.value)} className="form-select" data-search="off" data-ui="clean">
                                                        <option value="nklbank">NKL Bank</option>
                                                        <option value="teabank">TeaBank</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Số tài khoản</label>
                                                    <input type="text" className="form-control form-control-lg" value={receiverAccountNumber} onChange={(e) => {
                                                        setReceiverAccountNumber(e.target.value);
                                                        setReceiverName('');
                                                    }} placeholder="Số tài khoản" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Người nhận</label>
                                                    <input disabled={true} type="text" className="form-control form-control-lg" value={receiverName} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" >Số tiền</label>
                                                    <input type="text" className="form-control form-control-lg" value={amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} onChange={(e) => {
                                                        setAmount(isNaN(e.target.value.replace(/,/g, "")) ? 0 : parseInt(e.target.value.replace(/,/g, "")));
                                                    }} placeholder="Số tiền" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" >Nội dung</label>
                                                    <input type="text" className="form-control form-control-lg" value={note} onChange={(e) => {
                                                        setNote(e.target.value);
                                                    }} placeholder="Nội dung" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" defaultChecked="true" className="custom-control-input" />
                                                    <label className="custom-control-label" >Phí người chuyển chịu </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" defaultChecked="true" className="custom-control-input" />
                                                    <label className="custom-control-label">Lưu người nhận </label>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                    <div className="sp-package-action">
                                        <a href="#" className="btn btn-primary" onClick={() => onSendMoneyExternal()} data-dismiss="modal" >Chuyển</a>
                                        <a href="#" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy chuyển</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* .modal-content */}
            </div>{/* .modal-dialog */}
        </div >
    );
}

export default connect(state => {
    return {
        user: state.userReducer
    }
}, dispatch => {
    return {
        onSendMoneyToOthers: (receiver, type) => dispatch(onSendMoneyToOthers(receiver, type)),
    }
})(TransactionModal);