import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onUpdatePassword } from '../actions';

function ChangePasswordModal(props) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    function handleUpdatePassword() {
        if (!oldPassword || !newPassword || !confirmNewPassword) {
            return;
        }

        if (newPassword !== confirmNewPassword) {
            return;
        }

        props.onUpdatePassword(oldPassword, newPassword);
    }

    return (
        <div className="modal fade" tabIndex={-1} role="dialog" id="password-edit">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <a href="#" className="close" data-dismiss="modal"><em className="icon ni ni-cross-sm" /></a>
                    <div className="modal-body modal-body-lg">
                        <h5 className="title mb-5">Đổi mật khẩu</h5>

                        <div className="tab-pane active" id="personal">
                            <div className="row gy-4">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="confirm-new-password">Mật khẩu cũ</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <a tabIndex={-1} href="#" className="form-icon form-icon-right passcode-switch" data-target="old-password">
                                                <em className="passcode-icon icon-show icon ni ni-eye" />
                                                <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                                            </a>
                                            {oldPassword ? <input type="password" onChange={(e) => setOldPassword(e.target.value)} className="form-control form-control-lg" id="old-password" placeholder="******" /> :
                                                <input type="password" onChange={(e) => setOldPassword(e.target.value)} className="form-control form-control-lg error" id="old-password" placeholder="******" />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="confirm-new-password">Mật khẩu mới</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <a tabIndex={-1} href="#" className="form-icon form-icon-right passcode-switch" data-target="new-password">
                                                <em className="passcode-icon icon-show icon ni ni-eye" />
                                                <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                                            </a>
                                            {newPassword ? <input type="password" onChange={(e) => setNewPassword(e.target.value)} className="form-control form-control-lg" id="new-password" placeholder="******" /> :
                                                <input type="password" onChange={(e) => setNewPassword(e.target.value)} className="form-control form-control-lg error" id="new-password" placeholder="******" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="confirm-new-password">Nhập lại mật khẩu mới</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <a tabIndex={-1} href="#" className="form-icon form-icon-right passcode-switch" data-target="confirm-new-password">
                                                <em className="passcode-icon icon-show icon ni ni-eye" />
                                                <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                                            </a>
                                            {confirmNewPassword && newPassword === confirmNewPassword ? <input type="password" onChange={(e) => setConfirmNewPassword(e.target.value)} className="form-control form-control-lg" id="confirm-new-password" placeholder="******" /> :
                                                <input type="password" onChange={(e) => setConfirmNewPassword(e.target.value)} className="form-control form-control-lg error" id="confirm-new-password" placeholder="******" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                        <li>
                                            <a href="" onClick={() => handleUpdatePassword()} className="btn btn-lg btn-primary" data-dismiss="modal">Xác nhận</a>
                                        </li>
                                        <li>
                                            <a href="#" data-dismiss="modal" className="link link-light">Hủy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/* .tab-pane */}
                    </div>{/* .modal-body */}
                </div>{/* .modal-content */}
            </div>{/* .modal-dialog */}
        </div>
    )
}

export default connect(state => {
    return {
        user: state.userReducer,
    }
}, dispatch => {
    return {
        onUpdatePassword: (oldPassword, newPassword) => dispatch(onUpdatePassword(oldPassword, newPassword))
    }
})(ChangePasswordModal);