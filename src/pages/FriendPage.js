import React, { useState, useEffect } from 'react';
import { onUpdateFriends, onSetTemplateTransaction } from '../actions';
import { connect } from 'react-redux';

function FriendPage(props) {
    const { user, onUpdateFriends, onSetTemplateTransaction } = props;
    const [edit, setEdit] = useState(false);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        if (user.userInfo) {
            setFriends(user.userInfo.friends);
        }
    });

    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="nk-block-head nk-block-head-sm">
                            <div className="nk-block-between g-3">
                                <div className="nk-block-head-content">
                                    <h2 className="nk-block-title fw-normal">Danh sách người thụ hưởng <span class="badge badge-primary">{friends.length}</span></h2>
                                </div>{/* .nk-block-head-content */}
                                <div className="nk-block-head-content">
                                    <div className="toggle-wrap nk-block-tools-toggle">
                                        <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-menu-alt-r" /></a>
                                        <div className="toggle-expand-content" data-content="pageMenu">
                                            <ul className="nk-block-tools g-3">
                                                <li className="nk-block-tools-opt">
                                                    <div className="drodown">
                                                        <a href="#" className="dropdown-toggle btn btn-icon btn-primary" data-toggle="dropdown"><em className="icon ni ni-plus" /></a>
                                                        {/* <div className="dropdown-menu dropdown-menu-right">
                                                            <ul className="link-list-opt no-bdr">
                                                                <li><a href="#"><span>Add Tranx</span></a></li>
                                                                <li><a href="#"><span>Add Deposit</span></a></li>
                                                                <li><a href="#"><span>Add Withdraw</span></a></li>
                                                            </ul>
                                                        </div> */}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>{/* .nk-block-head-content */}
                            </div>{/* .nk-block-between */}
                        </div>{/* .nk-block-head */}
                        <div className="nk-block">
                            <div className="card card-bordered card-stretch">
                                <div className="card-inner-group">
                                    <div className="card-inner">
                                        <div className="card-title-group">
                                            <div className="card-title">
                                                <h5 className="title">Tất cả người thụ hưởng bạn đã lưu</h5>
                                            </div>
                                            <div className="card-tools mr-n1">
                                                <ul className="btn-toolbar gx-1">
                                                    <li>
                                                        <a href="#" className="search-toggle toggle-search btn btn-icon" data-target="search"><em className="icon ni ni-search" /></a>
                                                    </li>{/* li */}
                                                    <li className="btn-toolbar-sep" />{/* li */}
                                                    <li>
                                                        <div className="dropdown">
                                                            <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                <div className="badge badge-circle badge-primary">4</div>
                                                                <em className="icon ni ni-filter-alt" />
                                                            </a>
                                                            <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-right" style={{}}>
                                                                <div className="dropdown-head">
                                                                    <span className="sub-title dropdown-title">Advance Filter</span>
                                                                    <div className="dropdown">
                                                                        <a href="#" className="link link-light">
                                                                            <em className="icon ni ni-more-h" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="dropdown-body dropdown-body-rg">
                                                                    <div className="row gx-6 gy-4">
                                                                        <div className="col-6">
                                                                            <div className="form-group">
                                                                                <label className="overline-title overline-title-alt">Type</label>
                                                                                <select className="form-select form-select-sm select2-hidden-accessible" tabIndex={-1} aria-hidden="true">
                                                                                    <option value="any">Any Type</option>
                                                                                    <option value="deposit">Deposit</option>
                                                                                    <option value="buy">Buy Coin</option>
                                                                                    <option value="sell">Sell Coin</option>
                                                                                    <option value="transfer">Transfer</option>
                                                                                    <option value="withdraw">Withdraw</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="form-group">
                                                                                <label className="overline-title overline-title-alt">Status</label>
                                                                                <select className="form-select form-select-sm select2-hidden-accessible" data-select2-id={4} tabIndex={-1} aria-hidden="true">
                                                                                    <option value="any" data-select2-id={6}>Any Status</option>
                                                                                    <option value="pending">Pending</option>
                                                                                    <option value="cancel">Cancel</option>
                                                                                    <option value="process">Process</option>
                                                                                    <option value="completed">Completed</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="form-group">
                                                                                <label className="overline-title overline-title-alt">Pay Currency</label>
                                                                                <select className="form-select form-select-sm select2-hidden-accessible" data-select2-id={7} tabIndex={-1} aria-hidden="true">
                                                                                    <option value="any" data-select2-id={9}>Any Coin</option>
                                                                                    <option value="bitcoin">Bitcoin</option>
                                                                                    <option value="ethereum">Ethereum</option>
                                                                                    <option value="litecoin">Litecoin</option>
                                                                                </select>                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="form-group">
                                                                                <label className="overline-title overline-title-alt">Method</label>
                                                                                <select className="form-select form-select-sm select2-hidden-accessible" data-select2-id={10} tabIndex={-1} aria-hidden="true">
                                                                                    <option value="any" data-select2-id={12}>Any Method</option>
                                                                                    <option value="paypal">PayPal</option>
                                                                                    <option value="bank">Bank</option>
                                                                                </select>                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="form-group">
                                                                                <div className="custom-control custom-control-sm custom-checkbox">
                                                                                    <input type="checkbox" className="custom-control-input" id="includeDel" />
                                                                                    <label className="custom-control-label" htmlFor="includeDel"> Including Deleted</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="form-group">
                                                                                <button type="button" className="btn btn-secondary">Filter</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="dropdown-foot between">
                                                                    <a className="clickable" href="#">Reset Filter</a>
                                                                    <a href="#savedFilter" data-toggle="modal">Save Filter</a>
                                                                </div>
                                                            </div>{/* .filter-wg */}
                                                        </div>{/* .dropdown */}
                                                    </li>{/* li */}
                                                    <li>
                                                        <div className="dropdown">
                                                            <a href="#" className="btn btn-trigger btn-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                                <em className="icon ni ni-setting" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right" style={{}}>
                                                                <ul className="link-check">
                                                                    <li><span>Show</span></li>
                                                                    <li className="active"><a href="#">10</a></li>
                                                                    <li><a href="#">20</a></li>
                                                                    <li><a href="#">50</a></li>
                                                                </ul>
                                                                <ul className="link-check">
                                                                    <li><span>Order</span></li>
                                                                    <li className="active"><a href="#">DESC</a></li>
                                                                    <li><a href="#">ASC</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>{/* .dropdown */}
                                                    </li>{/* li */}
                                                </ul>{/* .btn-toolbar */}
                                            </div>{/* .card-tools */}
                                            <div className="card-search search-wrap" data-search="search">
                                                <div className="search-content">
                                                    <a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left" /></a>
                                                    <input type="text" className="form-control border-transparent form-focus-none" placeholder="Quick search by transaction" />
                                                    <button className="search-submit btn btn-icon"><em className="icon ni ni-search" /></button>
                                                </div>
                                            </div>{/* .card-search */}
                                        </div>{/* .card-title-group */}
                                    </div>{/* .card-inner */}
                                    <div className="card-inner p-0">
                                        <div className="nk-tb-list nk-tb-tnx">
                                            <div className="nk-tb-item nk-tb-head">
                                                <div className="nk-tb-col"><span>#</span></div>
                                                <div className="nk-tb-col"><span>Họ tên</span></div>
                                                <div className="nk-tb-col"><span>Biệt danh</span></div>
                                                <div className="nk-tb-col"><span>Số tài khoản</span></div>
                                                <div className="nk-tb-col"><span>Ngân hàng</span></div>
                                                <div className="nk-tb-col nk-tb-col-tools" />
                                            </div>{/* .nk-tb-item */}
                                            {friends.map((item, index) =>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col tb-col-lg">
                                                        <span className="tb-lead">{index + 1}</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg">
                                                        <span className="tb-lead">{item.full_name}</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg">
                                                        <input disabled={!edit} className="form-control tb-lead" type='text' value={item.nick_name} onChange={(e) => {
                                                            setFriends([...friends, friends[index].nick_name = e.target.value]);
                                                        }}></input>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg">
                                                        <span className="tb-lead">{item.account_number}</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg">
                                                        <span className="tb-lead">{item.bank}</span>
                                                    </div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-2">
                                                            <li className="nk-tb-action-hidden">
                                                                <a href="" onClick={(e) => {
                                                                    e.preventDefault();
                                                                    onSetTemplateTransaction(item);
                                                                }} data-toggle="modal" data-target="#new-transaction-with-data" className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip" title data-original-title="Details"><em class="icon ni ni-wallet-out"></em></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <a href="#" className="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon" data-toggle="dropdown" aria-expanded="false"><em className="icon ni ni-more-h" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-right" style={{}}>
                                                                        <ul className="link-list-opt">
                                                                            <li>
                                                                                <a className="btn" onClick={() => {
                                                                                    if (edit) {
                                                                                        onUpdateFriends(friends, 'update');
                                                                                    }
                                                                                    setEdit(!edit);
                                                                                }}>
                                                                                    {edit ? <>
                                                                                        <em class="icon ni ni-check-round-cut" />
                                                                                        <span>Lưu</span>
                                                                                    </> :
                                                                                        <>
                                                                                            <em class="icon ni ni-edit-fill" />
                                                                                            <span>Chỉnh sửa</span>
                                                                                        </>}
                                                                                </a>
                                                                            </li>
                                                                            <li><a className="btn" onClick={() => {
                                                                                setFriends([...friends.splice(index, 1)]);
                                                                                onUpdateFriends(friends, 'delete');
                                                                            }}><em className="icon ni ni-cross-round" /><span>Xóa</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>)}
                                        </div>{/* .nk-tb-list */}
                                    </div>{/* .card-inner */}
                                    <div className="card-inner">
                                        <ul className="pagination justify-content-center justify-content-md-start">
                                            <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>
                                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                                            <li className="page-item"><a className="page-link" href="#">7</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </div>{/* .card-inner */}
                                </div>{/* .card-inner-group */}
                            </div>{/* .card */}
                        </div>{/* .nk-block */}
                    </div>
                </div>
            </div>
        </div>);
}

export default connect(state => {
    return {
        user: state.userReducer,
    }
}, dispatch => {
    return {
        onUpdateFriends: (friends, type) => dispatch(onUpdateFriends(friends, type)),
        onSetTemplateTransaction: (template) => dispatch(onSetTemplateTransaction(template))
    }
})(FriendPage);