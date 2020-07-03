import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearPopup } from '../actions';

const successTransactionTitle = 'Chuyển tiền thành công!';
const successTransactionContent = 'Lệnh chuyển tiền của đã được xử lý. Đừng lo lắng khi chưa nhận được tiền ngay, điều này có thể kéo dài đến 15 phút tùy thuộc vào ngân hàng đối tác.';

const successUpdatePasswordTitle = 'Đổi mật khẩu thành công!';
const successUpdatePasswordContent = 'Mật khẩu của bạn đã được cập nhật, vui lòng sử dụng mật khẩu mới khi đăng nhập lại.';

const successRemindDebtTitle = 'Gửi yêu cầu thanh toán nợ thành công!';
const successRemindDebtContent = 'Một thông báo đã được gửi tới người nhận, bạn sẽ nhận được tiền khi người đó thanh toán cho bạn.';

function SuccessfulModal(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function close() {
        props.clearPopup();
    }

    if (props.popup.status !== 'success' || (props.popup.title !== 'success-transaction' && props.popup.title !== 'success-update-password' && props.popup.title !== 'success-debt-remind')) {
        return null;
    }
    else {
        if (!title && !content) {
            switch (props.popup.title) {
                case 'success-transaction': {
                    setTitle(successTransactionTitle);
                    setContent(successTransactionContent);
                }
                    break;
                case 'success-update-password': {
                    setTitle(successUpdatePasswordTitle);
                    setContent(successUpdatePasswordContent);
                }
                    break;
                case 'success-debt-remind': {
                    setTitle(successRemindDebtTitle);
                    setContent(successRemindDebtContent);
                }
                    break;
                default:
            }
        }
    }

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} id="confirmed-transaction" aria-modal="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-body modal-body-md text-center">
                        <div className="nk-modal">
                            <em className="nk-modal-icon icon icon-circle icon-circle-xxl ni ni-check bg-success" />
                            <h4 className="nk-modal-title">{title}</h4>
                            <div className="nk-modal-text">
                                <p>{content}</p>
                            </div>
                            <div className="nk-modal-action-lg">
                                <a onClick={() => close()} className="btn btn-mw btn-light" data-dismiss="modal">Trở về</a>
                            </div>
                        </div>
                    </div>{/* .modal-body */}
                </div>{/* .modal-content */}
            </div>{/* .modla-dialog */}
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
})(SuccessfulModal);