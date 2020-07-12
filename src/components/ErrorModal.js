import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearPopup } from '../actions';

const errorTransactionTitle = 'Chuyển tiền thất bại!';

const errorUpdatePasswordTitle = 'Đổi mật khẩu thất bại!';

const errorRemindDebtTitle = 'Gửi yêu cầu thanh toán nợ thất bại!';

const errorUpdateFriendsTitle = 'Cập nhật người thụ hưởng thất bại!';

const errorDeleteFriendsTitle = 'Xóa người thụ hưởng thất bại!';

const errorRemoveDebtTransactionTitle = 'Xóa nhắc nợ thất bại!';

const listTitle = ['error-transaction', 'error-update-password', 'error-debt-remind', 'error-update-friends', 'error-delete-friends', 'error-remove-debt-transaction']

function ErrorModal(props) {
    const [title, setTitle] = useState('');

    function close() {
        props.clearPopup();
        setTitle('');
    }

    if (props.popup.status !== 'error' || listTitle.indexOf(props.popup.title) === -1) {
        return null;
    }
    else {
        if (!title) {
            switch (props.popup.title) {
                case 'error-transaction': {
                    setTitle(errorTransactionTitle);
                }
                    break;
                case 'error-update-password': {
                    setTitle(errorUpdatePasswordTitle);
                }
                    break;
                case 'error-debt-remind': {
                    setTitle(errorRemindDebtTitle);
                }
                    break;
                case 'error-update-friends': {
                    setTitle(errorUpdateFriendsTitle);
                }
                    break;

                case 'error-delete-friends': {
                    setTitle(errorDeleteFriendsTitle);
                }
                    break;
                    
                case 'error-remove-debt-transaction': {
                    setTitle(errorRemoveDebtTransactionTitle);
                }
                    break;
                default:
            }
        }
    }

    return (
        <div className="modal fade show" tabIndex={-1} id="failed-transaction" style={{ display: 'block' }} aria-modal="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-body modal-body-md text-center">
                        <div className="nk-modal">
                            <em className="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-cross bg-danger" />
                            <h4 className="nk-modal-title">{title}</h4>
                            <div className="nk-modal-text">
                                <p className="lead">{props.popup.detail}</p>
                                <p className="text-soft">Hotline hỗ trợ: xxxx.xxxx</p>
                            </div>
                            <div className="nk-modal-action-lg">
                                <a onClick={() => close()} className="btn btn-mw btn-light" data-dismiss="modal">Trở về</a>
                            </div>
                        </div>
                    </div>{/* .modal-body */}
                </div>
            </div>
        </div>
    );
}

export default connect(state => {
    return {
        popup: state.popupReducer
    }
}, dispatch => {
    return {
        clearPopup: () => dispatch(clearPopup()),
    }
})(ErrorModal);