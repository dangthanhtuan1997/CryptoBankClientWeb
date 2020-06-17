import React, { useState, useEffect } from 'react';
import { onGetUserInfo, onGetTransactions } from '../actions';
import { connect } from 'react-redux';
import Transaction from '../components/Transaction';

function TransactionsPage(props) {
    const { user, transaction, onGetTransactions, onGetUserInfo } = props;

    useEffect(() => {
        if (!user.userInfo) {
            onGetUserInfo();
        }

        if (user.userInfo && !transaction.data) {
            onGetTransactions();
        }
    });

    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="components-preview wide-md mx-auto">
                            <div className="nk-block-head nk-block-head-lg wide-sm">
                                <div className="nk-block-head-content">
                                    <h2 className="nk-block-title fw-normal">Lịch sử giao dịch</h2>
                                </div>
                            </div>{/* .nk-block-head */}
                            <div className="nk-block nk-block-lg">
                                <div className="card card-bordered card-preview">
                                    <div className="card-inner">
                                        <table id="test" className="datatable-init nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                                            <thead>
                                                <tr className="nk-tb-item nk-tb-head">
                                                    <th className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid" />
                                                            <label className="custom-control-label" htmlFor="uid" />
                                                        </div>
                                                    </th>
                                                    <th className="nk-tb-col"><span className="sub-text">Người chuyển</span></th>
                                                    <th className="nk-tb-col tb-col-mb"><span className="sub-text">Người nhận</span></th>
                                                    <th className="nk-tb-col tb-col-md"><span className="sub-text">Số tiền</span></th>
                                                    <th className="nk-tb-col tb-col-lg"><span className="sub-text">Thời gian</span></th>
                                                    <th className="nk-tb-col tb-col-md"><span className="sub-text">Ghi chú</span></th>
                                                    <th className="nk-tb-col tb-col-md"><span className="sub-text">Loại</span></th>
                                                    <th className="nk-tb-col nk-tb-col-tools text-right">
                                                        <div className="dropdown">
                                                            <a href="#" className="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-toggle="dropdown" data-offset="0,5"><em className="icon ni ni-plus" /></a>
                                                            <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                                <ul className="link-tidy sm no-bdr">
                                                                    <li>
                                                                        <div className="custom-control custom-control-sm custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" defaultChecked id="bl" />
                                                                            <label className="custom-control-label" htmlFor="bl">Balance</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="custom-control custom-control-sm custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" defaultChecked id="ph" />
                                                                            <label className="custom-control-label" htmlFor="ph">Phone</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="custom-control custom-control-sm custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="vri" />
                                                                            <label className="custom-control-label" htmlFor="vri">Verified</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="custom-control custom-control-sm custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="st" />
                                                                            <label className="custom-control-label" htmlFor="st">Status</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transaction.data ? transaction.data.map((item, index) => <Transaction data={item} index={index} />) : <tr></tr>}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>{/* .card-preview */}
                            </div> {/* nk-block */}
                        </div>{/* .components-preview */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer,
        transaction: state.transactionReducer
    }
}, dispatch => {
    return {
        onGetUserInfo: () => dispatch(onGetUserInfo()),
        onGetTransactions: () => dispatch(onGetTransactions())
    }
})(TransactionsPage);