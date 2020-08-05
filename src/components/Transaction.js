import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { onGetOTPTransaction, onRemoveDebtTransaction } from '../actions';

function Transaction({ onGetOTPTransaction, onRemoveDebtTransaction, user, data }) {
    const { depositor, receiver, amount, createdAt, note, type, status, _id, active } = data;
    const time = moment(createdAt).format('HH:mm:ss DD/MM/YYYY');

    return (
        <tr className="nk-tb-item">
            <td className="nk-tb-col">
                <div className="user-card">
                    <div class="nk-tnx-type-icon bg-danger-dim text-danger">
                        <em class="icon ni ni-arrow-up-right"></em>
                    </div>
                    <div className="user-info">
                        <span className="tb-lead">{depositor.full_name}<span className="dot dot-success d-md-none ml-1" /></span>
                        <span>{depositor.account_number}</span>
                    </div>
                </div>
            </td>
            <td className="nk-tb-col">
                <div className="user-card">
                    <div class="nk-tnx-type-icon bg-success-dim text-success">
                        <em class="icon ni ni-arrow-down-left"></em>
                    </div>
                    <div className="user-info">
                        <span className="tb-lead">{receiver.full_name}<span className="dot dot-success d-md-none ml-1" /></span>
                        <span>{receiver.account_number}</span>
                    </div>
                </div>
            </td>
            <td className="nk-tb-col tb-col-md">
                <span className="tb-lead">{Number(amount).toLocaleString('en-US', { currency: 'VND' })}</span>
                {type === 'transfer' ? depositor.account_number === user.userInfo.account_number ? <span className="tb-status text-danger">Chuyển tiền</span> :
                    <span className="tb-status text-success">Nhận tiền</span> : <span className="tb-status text-warning">Nhắc nợ</span>}

            </td>
            <td className="nk-tb-col tb-col-lg">
                <span>{time}</span>
            </td>
            <td className="nk-tb-col tb-col-lg">
                <span>{note}</span>
            </td>

            <td className="nk-tb-col tb-col-md">
                {status === 'pending' ? <span class="badge badge-sm badge-dim badge-outline-warning d-none d-md-inline-flex">Đang chờ</span> :
                    <span class="badge badge-sm badge-dim badge-outline-success d-none d-md-inline-flex">Thành công</span>}
            </td>
            <td className="nk-tb-col nk-tb-col-tools">
                {type === 'debt' && status === 'pending' && depositor.account_number === user.userInfo.account_number &&
                    <ul className="nk-tb-actions gx-1">
                        <li className="nk-tb-action-hidden">
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                onGetOTPTransaction(_id);
                            }} className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Wallet">
                                <em className="icon ni ni-wallet-fill" />
                            </a>
                        </li>
                        <li>
                            <div className="drodown">
                                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="link-list-opt no-bdr">
                                        <li><a href="" onClick={(e) => {
                                            e.preventDefault();
                                            onRemoveDebtTransaction(_id);
                                        }}><em class="icon ni ni-property-remove"></em><span>Hủy nhắc nợ này</span></a></li>
                                        <li className="divider" />
                                        <li><a href="#"><em className="icon ni ni-na" /><span>Chặn người nhắc</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>}
            </td>
        </tr>
    );
}

export default connect(state => {
    return {
        user: state.userReducer
    }
}, dispatch => {
    return {
        onGetOTPTransaction: (transactionId) => dispatch(onGetOTPTransaction(transactionId)),
        onRemoveDebtTransaction: (_id) => dispatch(onRemoveDebtTransaction(_id))
    }
})(Transaction);