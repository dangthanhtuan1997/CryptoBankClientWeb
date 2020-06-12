import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { onLogin } from '../actions';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
    loading: false
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  handleLogin = (event) => {
    const { onLogin } = this.props;
    event.preventDefault();
    this.setState({ loading: true });
    onLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="nk-app-root">
        <div className="nk-split nk-split-page nk-split-md">
          <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
            <div className="absolute-top-right d-lg-none p-3 p-sm-5">
              <a href="#" className="toggle btn-white btn btn-icon btn-light" data-target="athPromo"><em className="icon ni ni-info" /></a>
            </div>
            <div className="nk-block nk-block-middle nk-auth-body">
              <div className="brand-logo pb-5">
                {/* <a href="html/general/index.html" className="logo-link">
                  <img className="logo-light logo-img logo-img-lg" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                  <img className="logo-dark logo-img logo-img-lg" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                </a> */}
              </div>
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <h5 className="nk-block-title">Đăng nhập</h5>
                </div>
              </div>{/* .nk-block-head */}
              <form>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">Tài khoản</label>
                    <a className="link link-primary link-sm" tabIndex={-1} href="#">Trợ giúp?</a>
                  </div>
                  <input value={this.state.username} onChange={e => this.onChangeText('username', e.target.value)} type="text" className="form-control form-control-lg" id="default-01" placeholder="Enter your email address or username" />
                </div>{/* .foem-group */}
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="password">Mật khẩu</label>
                    <a className="link link-primary link-sm" tabIndex={-1} href="html/general/pages/auths/auth-reset.html">Quên mật khẩu?</a>
                  </div>
                  <div className="form-control-wrap">
                    <a tabIndex={-1} href="#" className="form-icon form-icon-right passcode-switch" data-target="password">
                      <em className="passcode-icon icon-show icon ni ni-eye" />
                      <em className="passcode-icon icon-hide icon ni ni-eye-off" />
                    </a>
                    <input value={this.state.password} onChange={e => this.onChangeText('password', e.target.value)} type="password" className="form-control form-control-lg" id="password" placeholder="Enter your passcode" />
                  </div>
                </div>{/* .foem-group */}
                <div className="form-group">
                  <button onClick={(event) => this.handleLogin(event)} className="btn btn-lg btn-primary btn-block" disabled={this.state.loading}>
                    {this.state.loading ? <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : null}
                    <span>Sign in</span></button>
                </div>
              </form>{/* form */}
              <div className="form-note-s2 pt-4"> Chưa có tài khoản? <a href="html/general/pages/auths/auth-register.html">Đăng ký</a>
              </div>
              <div className="text-center pt-4 pb-3">
                <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
              </div>
              <ul className="nav justify-center gx-4">
                <li className="nav-item"><a className="nav-link" href="#">Facebook</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Google</a></li>
              </ul>
            </div>{/* .nk-block */}
            <div className="nk-block nk-auth-footer">
              <div className="nk-block-between">
                <ul className="nav nav-sm">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Terms &amp; Condition</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Privacy Policy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Help</a>
                  </li>
                  <li className="nav-item dropup">
                    <a className="dropdown-toggle dropdown-indicator has-indicator nav-link" data-toggle="dropdown" data-offset="0,10"><small>English</small></a>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                      <ul className="language-list">
                        <li>
                          <a href="#" className="language-item">
                            <img src="./images/flags/english.png" alt="" className="language-flag" />
                            <span className="language-name">English</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="language-item">
                            <img src="./images/flags/spanish.png" alt="" className="language-flag" />
                            <span className="language-name">Español</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="language-item">
                            <img src="./images/flags/french.png" alt="" className="language-flag" />
                            <span className="language-name">Français</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="language-item">
                            <img src="./images/flags/turkey.png" alt="" className="language-flag" />
                            <span className="language-name">Türkçe</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>{/* .nav */}
              </div>
              <div className="mt-3">
                <p>© 2019 DashLite. All Rights Reserved.</p>
              </div>
            </div>{/* .nk-block */}
          </div>{/* .nk-split-content */}
          <div className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
            <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
              <div className="slider-init" data-slick="{&quot;dots&quot;:true, &quot;arrows&quot;:false}">
                <div className="slider-item">
                  <div className="nk-feature nk-feature-center">
                    <div className="nk-feature-img">
                      <img className="round" src="./images/slides/promo-a.png" srcSet="./images/slides/promo-a2x.png 2x" alt="" />
                    </div>
                    <div className="nk-feature-content py-4 p-sm-5">
                      <h4>Dashlite</h4>
                      <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                    </div>
                  </div>
                </div>{/* .slider-item */}
                <div className="slider-item">
                  <div className="nk-feature nk-feature-center">
                    <div className="nk-feature-img">
                      <img className="round" src="./images/slides/promo-b.png" srcSet="./images/slides/promo-b2x.png 2x" alt="" />
                    </div>
                    <div className="nk-feature-content py-4 p-sm-5">
                      <h4>Dashlite</h4>
                      <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                    </div>
                  </div>
                </div>{/* .slider-item */}
                <div className="slider-item">
                  <div className="nk-feature nk-feature-center">
                    <div className="nk-feature-img">
                      <img className="round" src="./images/slides/promo-c.png" srcSet="./images/slides/promo-c2x.png 2x" alt="" />
                    </div>
                    <div className="nk-feature-content py-4 p-sm-5">
                      <h4>Dashlite</h4>
                      <p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
                    </div>
                  </div>
                </div>{/* .slider-item */}
              </div>{/* .slider-init */}
              <div className="slider-dots" />
              <div className="slider-arrows" />
            </div>{/* .slider-wrap */}
          </div>{/* .nk-split-content */}
        </div>{/* .nk-split */}
      </div>
    );
  }
}

export default connect(state => {
  return {
    user: state.userReducer
  }
}, dispatch => {
  return {
    onLogin: (username, password) => dispatch(onLogin(username, password)),
  }
})(LoginPage);