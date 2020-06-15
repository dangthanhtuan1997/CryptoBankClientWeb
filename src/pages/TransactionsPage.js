import React, { useState, useEffect } from 'react';
import { onGetUserInfo } from '../actions';
import { connect } from 'react-redux';

function TransactionsPage(props) {
    useEffect(() => {
        const { onGetUserInfo } = props;
        onGetUserInfo();
    }, []);

    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="components-preview wide-md mx-auto">
                            <div className="nk-block-head nk-block-head-lg wide-sm">
                                <div className="nk-block-head-content">
                                    <h2 className="nk-block-title fw-normal">Lịch sử giao dịch</h2>
                                    {/* <div className="nk-block-des">
                                        <p className="lead">Using <a href="https://datatables.net/" target="_blank">DataTables</a>, add advanced interaction controls to your HTML tables. It is a highly flexible tool and all advanced features allow you to display table instantly and nice way.</p>
                                        <p>Check out the <a href="https://datatables.net/" target="_blank">documentation</a> for a full overview.</p>
                                    </div> */}
                                </div>
                            </div>{/* .nk-block-head */}
                             <div className="nk-block nk-block-lg">
                                <div className="nk-block-head">
                                    <div className="nk-block-head-content">
                                        <h4 className="nk-block-title">Data Table</h4>
                                        <div className="nk-block-des">
                                            <p>Using the most basic table markup, here’s how <code className="code-class">.table</code> based tables look by default.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-bordered card-preview">
                                    <div className="card-inner">
                                        <table className="datatable-init nk-tb-list nk-tb-ulist" data-auto-responsive="false">
                                            <thead>
                                                <tr className="nk-tb-item nk-tb-head">
                                                    <th className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid" />
                                                            <label className="custom-control-label" htmlFor="uid" />
                                                        </div>
                                                    </th>
                                                    <th className="nk-tb-col"><span className="sub-text">User</span></th>
                                                    <th className="nk-tb-col tb-col-mb"><span className="sub-text">Balance</span></th>
                                                    <th className="nk-tb-col tb-col-md"><span className="sub-text">Phone</span></th>
                                                    <th className="nk-tb-col tb-col-lg"><span className="sub-text">Verified</span></th>
                                                    <th className="nk-tb-col tb-col-lg"><span className="sub-text">Last Login</span></th>
                                                    <th className="nk-tb-col tb-col-md"><span className="sub-text">Status</span></th>
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
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid1" />
                                                            <label className="custom-control-label" htmlFor="uid1" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-dim-primary d-none d-sm-flex">
                                                                <span>AB</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Abu Bin Ishtiyak <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>info@softnio.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">35040.34 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+811 847-4958</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>05 Oct 2019</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-success">Active</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid2" />
                                                            <label className="custom-control-label" htmlFor="uid2" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-success d-none d-sm-flex">
                                                                <span>AL</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Ashley Lawson <span className="dot dot-warning d-md-none ml-1" /></span>
                                                                <span>ashley@softnio.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">580.00 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+124 394-1787</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-info ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>07 Feb 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-warning">Pending</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid3" />
                                                            <label className="custom-control-label" htmlFor="uid3" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-info d-none d-sm-flex">
                                                                <span>JL</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Joe Larson <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>larson@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">32,000.34 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+168 603-2320</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-success ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>04 Feb 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-success">Active</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid4" />
                                                            <label className="custom-control-label" htmlFor="uid4" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-danger d-none d-sm-flex">
                                                                <span>JM</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Jane Montgomery <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>jane84@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">0.00 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+439 271-5360</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>01 Feb 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-danger">Suspend</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid5" />
                                                            <label className="custom-control-label" htmlFor="uid5" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-purple d-none d-sm-flex">
                                                                <span>FB</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Frances Burns <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>info@softnio.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">42.50 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+639 130-3150</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-info ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>31 Jan 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-success">Active</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid6" />
                                                            <label className="custom-control-label" htmlFor="uid6" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-dark d-none d-sm-flex">
                                                                <span>AB</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Alan Butler<span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>butler@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">440.34 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+963 309-1706</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-info ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-warning ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>18 Jan 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-info">Inactive</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid7" />
                                                            <label className="custom-control-label" htmlFor="uid7" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-warning d-none d-sm-flex">
                                                                <span>VL</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Victoria Lynch <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>victoria@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">59,400.68 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+811 985-4846</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-success ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>15 Jan 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-success">Active</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid8" />
                                                            <label className="custom-control-label" htmlFor="uid8" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-success d-none d-sm-flex">
                                                                <span>PN</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Patrick Newman <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>patrick@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">30.00 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+942 238-4474</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-info ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>08 Jan 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-success">Active</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid3" />
                                                            <label className="custom-control-label" htmlFor="uid3" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-info d-none d-sm-flex">
                                                                <span>JL</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Joe Larson <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>larson@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">32,000.34 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+168 603-2320</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-success ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>04 Feb 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-success">Active</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid2" />
                                                            <label className="custom-control-label" htmlFor="uid2" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-success d-none d-sm-flex">
                                                                <span>AL</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Ashley Lawson <span className="dot dot-warning d-md-none ml-1" /></span>
                                                                <span>ashley@softnio.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">580.00 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+124 394-1787</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-success ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-info ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>07 Feb 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-warning">Pending</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid4" />
                                                            <label className="custom-control-label" htmlFor="uid4" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-danger d-none d-sm-flex">
                                                                <span>JM</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Jane Montgomery <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>jane84@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">0.00 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+439 271-5360</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>01 Feb 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-danger">Suspend</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid5" />
                                                            <label className="custom-control-label" htmlFor="uid5" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-purple d-none d-sm-flex">
                                                                <span>FB</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Frances Burns <span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>info@softnio.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">42.50 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+639 130-3150</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-info ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>31 Jan 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-success">Active</span>
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
                                                </tr>{/* .nk-tb-item  */}
                                                <tr className="nk-tb-item">
                                                    <td className="nk-tb-col nk-tb-col-check">
                                                        <div className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input" id="uid6" />
                                                            <label className="custom-control-label" htmlFor="uid6" />
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col">
                                                        <div className="user-card">
                                                            <div className="user-avatar bg-dark d-none d-sm-flex">
                                                                <span>AB</span>
                                                            </div>
                                                            <div className="user-info">
                                                                <span className="tb-lead">Alan Butler<span className="dot dot-success d-md-none ml-1" /></span>
                                                                <span>butler@example.com</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-mb">
                                                        <span className="tb-amount">440.34 <span className="currency">USD</span></span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span>+963 309-1706</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <ul className="list-status">
                                                            <li><em className="icon text-info ni ni-check-circle" /> <span>Email</span></li>
                                                            <li><em className="icon text-warning ni ni-alert-circle" /> <span>KYC</span></li>
                                                        </ul>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-lg">
                                                        <span>18 Jan 2020</span>
                                                    </td>
                                                    <td className="nk-tb-col tb-col-md">
                                                        <span className="tb-status text-info">Inactive</span>
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
                                                </tr>{/* .nk-tb-item  */}
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

    }
}, dispatch => {
    return {
        onGetUserInfo: () => dispatch(onGetUserInfo()),
    }
})(TransactionsPage);