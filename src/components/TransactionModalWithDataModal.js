import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { onGetUserByAccountNumber, onCreateNewTransaction } from '../actions';
import Select from 'react-select';

const options = [
    { value: 'NKLBank', label: 'Ngân hàng NKLBank' },
    { value: 'TeaBank', label: 'Ngân hàng TeaBank' }
];

function TransactionModalWithData(props) {

    const { transactions } = props;
    const [amount, setAmount] = useState(0);
    const [note, setNote] = useState('');
    const [selectedBank, setSelectedBank] = useState(transactions?.template?.bank);
    const [scope, setScope] = useState('internal');
    const [fee, setFee] = useState(true);
    const [save, setSave] = useState(true);

    const handleChangeSelectedBank = (value) => {
        setSelectedBank(value);
        clearState();
    }

    function clearState() {
        setAmount(0);
        setNote('');
        setFee(true);
        setSave(true);
    }
    
    function checkForm() {
        if (!amount) {
            return false;
        }
        return true;
    }

    function sendTransactionInfo(scope) {
        props.onCreateNewTransaction({
            receiver: {
                full_name: transactions.template?.full_name,
                account_number: transactions.template?.account_number
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
        <div className="modal fade show" tabIndex={-1} id="new-transaction-with-data">
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
                                {transactions?.template?.bank === 'cryptobank' ?
                                    <li className="nav-item">
                                        <a className="nav-link active" onClick={() => {
                                            setScope('internal');
                                            clearState();
                                        }} href="#internal-with-data" data-toggle="tab" className="nav-link active">Cùng ngân hàng</a>
                                    </li> : <li className="nav-item">
                                        <a className="nav-link" onClick={() => {
                                            setScope('external');
                                            clearState();
                                        }} href="#external-with-data" data-toggle="tab" className="nav-link">Liên ngân hàng</a>
                                    </li>}
                            </ul>
                            <div className="tab-content">
                                {transactions?.template?.bank === 'cryptobank' ?
                                    <div className="tab-pane active" id="internal-with-data">
                                        <ul className="sp-package-list">
                                            <div className="row gy-4">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Số tài khoản</label>
                                                        <input type="number" disabled={true} value={transactions.template?.account_number} className="form-control form-control-lg" placeholder="Nhập số tài khoản" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Người nhận</label>
                                                        <input disabled={true} type="text" className="form-control form-control-lg" value={transactions.template?.full_name} />
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
                                                        <input id="fee-with-data" type="checkbox" checked={fee} onChange={(e) => setFee(e.target.checked)} className="custom-control-input" />
                                                        <label htmlFor="fee-with-data" className="custom-control-label">Phí người chuyển chịu </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-control custom-switch">
                                                        <input id="save-with-data" type="checkbox" checked={save} onChange={(e) => setSave(e.target.checked)} className="custom-control-input" />
                                                        <label htmlFor="save-with-data" className="custom-control-label">Lưu người nhận </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="sp-package-action">
                                            <a href="" style={checkForm() ? {} : {
                                            'pointer-events': 'none',
                                        }} className="btn btn-primary" onClick={() => sendTransactionInfo('internal')} data-dismiss="modal">Chuyển</a>
                                            <a href="#" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy chuyển</a>
                                        </div>
                                    </div> :
                                    <div className="tab-pane active" id="external-with-data">
                                        <ul className="sp-package-list">
                                            <div className="row gy-4">
                                                <div className="form col-md-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Ngân hàng</label>
                                                        <div className="form-control-wrap">
                                                            <Select isDisabled={true} value={options[options.findIndex(item =>item.value === transactions?.template?.bank)]}>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Số tài khoản</label>
                                                        <input type="text" disabled={true} className="form-control form-control-lg" value={transactions.template?.account_number} placeholder="Số tài khoản" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Người nhận</label>
                                                        <input disabled={true} type="text" className="form-control form-control-lg" value={transactions.template?.full_name} />
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
                                                        <input id="fee-external-with-data" type="checkbox" defaultChecked="true" className="custom-control-input" />
                                                        <label htmlFor="fee-external-with-data" className="custom-control-label" >Phí người chuyển chịu </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="custom-control custom-switch">
                                                        <input id="save-external-with-data" type="checkbox" defaultChecked="true" className="custom-control-input" />
                                                        <label htmlFor="save-external-with-data" className="custom-control-label">Lưu người nhận </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                        <div className="sp-package-action">
                                            <a href="" style={checkForm() ? {} : {
                                            'pointer-events': 'none',
                                        }} className="btn btn-primary" onClick={() => sendTransactionInfo('external')} data-dismiss="modal">Chuyển</a>
                                            <a href="#" className="btn btn-dim btn-danger" data-dismiss="modal">Hủy chuyển</a>
                                        </div>
                                    </div>
                                }
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
        user: state.userReducer,
        transactions: state.transactionReducer
    }
}, dispatch => {
    return {
        onCreateNewTransaction: (transaction) => dispatch(onCreateNewTransaction(transaction)),
    }
})(TransactionModalWithData);