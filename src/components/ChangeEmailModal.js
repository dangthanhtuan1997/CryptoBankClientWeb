import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { onUpdateEmail } from '../actions';

function ChangeEmailModal({ onUpdateEmail, user }) {
    const [email, setEmail] = useState('');

    useEffect(()=>{
        if (user.userInfo?.email){
            setEmail(user.userInfo?.email);
        }
    }, [user.userInfo?.email]);

    function handleUpdateEmail() {
        if (!email) {
            return;
        }

        onUpdateEmail(email);
    }

    return (
        <div className="modal fade" tabIndex={-1} role="dialog" id="email-edit">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <a href="#" className="close" data-dismiss="modal"><em className="icon ni ni-cross-sm" /></a>
                    <div className="modal-body modal-body-lg">
                        <h5 className="title mb-5">Cập nhật Email</h5>

                        <div className="tab-pane active" id="personal">
                            <div className="row gy-4">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" htmlFor="email">Email</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={email ? "form-control form-control-lg" : "form-control form-control-lg error"} id="email" placeholder="Email của bạn" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                        <li>
                                            <a href="" onClick={() => handleUpdateEmail()} className="btn btn-lg btn-primary" data-dismiss="modal">Xác nhận</a>
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
        onUpdateEmail: (email) => dispatch(onUpdateEmail(email))
    }
})(ChangeEmailModal);