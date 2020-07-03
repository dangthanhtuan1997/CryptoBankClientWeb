import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { onGetUserByAccountNumber, onCreateNewTransaction } from '../actions';
import Select from 'react-select';

const options = [
    { value: 'nklbank', label: 'Ngân hàng NKLBank' },
    { value: 'teabank', label: 'Ngân hàng TeaBank' }
];

function TransactionModal(props) {
    const typingTimeoutRef = useRef(null);

    const [receiverName, setReceiverName] = useState('');
    const [receiverAccountNumber, setReceiverAccountNumber] = useState('0123456789012345');
    const [amount, setAmount] = useState(10000);
    const [note, setNote] = useState('Chuyển tiền');
    const [selectedBank, setSelectedBank] = useState('nklbank');
    const [scope, setScope] = useState('internal');
    const [fee, setFee] = useState(true);
    const [save, setSave] = useState(true);

    useEffect(() => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        if (receiverName !== '') {
            return;
        }

        typingTimeoutRef.current = setTimeout(async () => {
            const receiverName = await onGetUserByAccountNumber(receiverAccountNumber, scope, selectedBank);
            setReceiverName(receiverName);
        }, 300);
    });

    const handleChangeSelectedBank = (value) => {
        setSelectedBank(value);
        clearState();
    }

    function clearState() {
        setReceiverName('');
        setReceiverAccountNumber('');
        setAmount(0);
        setNote('');
        setFee(true);
        setSave(true);
    }

    function sendTransactionInfo(scope) {
        props.onCreateNewTransaction({
            receiver: {
                full_name: receiverName,
                account_number: receiverAccountNumber
            },
            amount,
            note,
            scope,
            partner_code: selectedBank,
            fee,
            save,
            type: 'transfer'
        });
    }

    return (
        <div className="modal fade show" tabIndex={-1} id="new-transaction">
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
                                        setScope('internal');
                                        clearState();
                                    }} href="#internal" data-toggle="tab" className="nav-link active">Cùng ngân hàng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => {
                                        setScope('external');
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
                                            <div className="col-6">
                                                <div className="custom-control custom-switch">
                                                    <input id="fee" type="checkbox" checked={fee} onChange={(e) => setFee(e.target.checked)} className="custom-control-input" />
                                                    <label htmlFor="fee" className="custom-control-label">Phí người chuyển chịu </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="custom-control custom-switch">
                                                    <input id="save" type="checkbox" checked={save} onChange={(e) => setSave(e.target.checked)} className="custom-control-input" />
                                                    <label htmlFor="save" className="custom-control-label">Lưu người nhận </label>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                    <div className="sp-package-action">
                                        <a href="#" className="btn btn-primary" onClick={() => sendTransactionInfo('internal')} data-dismiss="modal">Chuyển</a>
                                        <a href="#" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy chuyển</a>
                                    </div>
                                </div>
                                <div className="tab-pane" id="external">
                                    <ul className="sp-package-list">
                                        <div className="row gy-4">
                                            <div className="form col-md-12">
                                                <div className="form-group">
                                                    <label className="form-label">Ngân hàng</label>
                                                    <div className="form-control-wrap">
                                                        <Select options={options} defaultValue={options[0]} placeholder='Chọn ngân hàng...' onChange={(e) => handleChangeSelectedBank(e.value)}>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Số tài khoản</label>
                                                    {receiverAccountNumber ? <input type="text" className="form-control form-control-lg" value={receiverAccountNumber} onChange={(e) => {
                                                        setReceiverAccountNumber(e.target.value);
                                                        setReceiverName('');
                                                    }} placeholder="Số tài khoản" /> :
                                                        <input type="text" className="form-control form-control-lg error" value={receiverAccountNumber} onChange={(e) => {
                                                            setReceiverAccountNumber(e.target.value);
                                                            setReceiverName('');
                                                        }} placeholder="Số tài khoản" />}

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
                                                    <label className="form-label" >Số tiền</label>
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
                                        <a href="#" className="btn btn-primary" onClick={() => sendTransactionInfo('external')} data-dismiss="modal">Chuyển</a>
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
        onCreateNewTransaction: (transaction) => dispatch(onCreateNewTransaction(transaction)),
    }
})(TransactionModal);