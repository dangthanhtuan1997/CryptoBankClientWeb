import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

function Transaction(props) {
    const { depositor, receiver, amount, createdAt, note } = props.data;
    const time = moment(createdAt).format('HH:mm:ss DD/MM/YYYY');

    return (
        <tr className="nk-tb-item">
            <td className="nk-tb-col">
                <div className="user-card">
                    <div className="user-avatar bg-dim-primary d-none d-sm-flex">
                        <span>ĐT</span>
                    </div>
                    <div className="user-info">
                        <span className="tb-lead">{depositor.full_name}<span className="dot dot-success d-md-none ml-1" /></span>
                        <span>{depositor.account_number}</span>
                    </div>
                </div>
            </td>
            <td className="nk-tb-col">
                <div className="user-card">
                    <div className="user-avatar bg-success d-none d-sm-flex">
                        <span>NV</span>
                    </div>
                    <div className="user-info">
                        <span className="tb-lead">{receiver.full_name}<span className="dot dot-success d-md-none ml-1" /></span>
                        <span>{receiver.account_number}</span>
                    </div>
                </div>
            </td>
            <td className="nk-tb-col tb-col-md">
                <span>{amount.toLocaleString('en-US', { currency: 'VND' })}</span>
            </td>
            <td className="nk-tb-col tb-col-lg">
                    <span>{time}</span>
            </td>
            <td className="nk-tb-col tb-col-lg">
                <span>{note}</span>
            </td>
            <td className="nk-tb-col tb-col-md">
                <span className="tb-status text-success">Chuyển tiền</span>
            </td>
            <td className="nk-tb-col nk-tb-col-tools">
                <ul className="nk-tb-actions gx-1">
                    <li className="nk-tb-action-hidden">
                        <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Wallet">
                            <em className="icon ni ni-wallet-fill" />
                        </a>
                    </li>
                    <li className="nk-tb-action-hidden">
                        <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Send Email">
                            <em className="icon ni ni-mail-fill" />
                        </a>
                    </li>
                    <li className="nk-tb-action-hidden">
                        <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title="Suspend">
                            <em className="icon ni ni-user-cross-fill" />
                        </a>
                    </li>
                    <li>
                        <div className="drodown">
                            <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="link-list-opt no-bdr">
                                    <li><a href="#"><em className="icon ni ni-focus" /><span>Quick View</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-repeat" /><span>Transaction</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-activity-round" /><span>Activities</span></a></li>
                                    <li className="divider" />
                                    <li><a href="#"><em className="icon ni ni-shield-star" /><span>Reset Pass</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-shield-off" /><span>Reset 2FA</span></a></li>
                                    <li><a href="#"><em className="icon ni ni-na" /><span>Suspend User</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
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
    }
})(Transaction);