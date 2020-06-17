import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';

var summaryBalance = {
    labels: ["01 Nov", "02 Nov", "03 Nov", "04 Nov", "05 Nov", "06 Nov", "07 Nov", "08 Nov", "09 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov", "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
    dataUnit: 'VND',
    datasets: [{
        label: "Send",
        color: "#5ce0aa",
        data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90]
    }, {
        label: "Receive",
        color: "#f6ca3e",
        data: [80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82, 85, 60, 80, 54, 105, 120, 82, 85, 60, 85, 60]
    }]
};

function accountSummary() {

    var selectCanvas = document.getElementById('summaryBalance').getContext("2d");

    var chart_data = [];
    for (var i = 0; i < summaryBalance.datasets.length; i++) {
        chart_data.push({
            label: summaryBalance.datasets[i].label,
            tension: .4,
            backgroundColor: summaryBalance.datasets[i].color,
            borderWidth: 2,
            borderColor: summaryBalance.datasets[i].color,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: summaryBalance.datasets[i].color,
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 4,
            data: summaryBalance.datasets[i].data,
        });
    }
    var chart = new Chart(selectCanvas, {
        type: 'bar',
        data: {
            labels: summaryBalance.labels,
            datasets: chart_data,
        },
        options: {
            legend: {
                display: false,
            },
            maintainAspectRatio: false,
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + summaryBalance.dataUnit;
                    }
                },
                backgroundColor: '#eff6ff',
                titleFontSize: 13,
                titleFontColor: '#6783b8',
                titleMarginBottom: 6,
                bodyFontColor: '#9eaecf',
                bodyFontSize: 12,
                bodySpacing: 4,
                yPadding: 10,
                xPadding: 10,
                footerMarginTop: 0,
                displayColors: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        fontSize: 12,
                        fontColor: '#9eaecf',
                        padding: 10
                    },
                    gridLines: {
                        color: "#e5ecf8",
                        tickMarkLength: 0,
                        zeroLineColor: '#e5ecf8'
                    },
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 12,
                        fontColor: '#9eaecf',
                        source: 'auto',
                        padding: 5
                    },
                    gridLines: {
                        color: "transparent",
                        tickMarkLength: 20,
                        zeroLineColor: '#e5ecf8',
                        offsetGridLines: true,
                    }
                }]
            }
        }
    });
}

function Dashboard(props) {
    const { user } = props;

    useEffect(() => {
        accountSummary();
    }, [])

    return (
        <div className="nk-content nk-content-fluid">
            <div className="container-xl wide-lg">
                <div className="nk-content-body">
                    <div className="nk-block-head">
                        <div className="nk-block-head-sub"><span>Thông tin tài khoản</span></div>
                        <div className="nk-block-between-md g-4">
                            <div className="nk-block-head-content" >
                                {user.userInfo ? <h2 className="nk-block-title fw-normal">Số tài khoản: {user.userInfo.account_number} </h2> :
                                    <div class="d-flex justify-content-center">
                                        <div class="spinner-border text-dark" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>}
                            </div>
                            <div className="nk-block-head-content">
                                <ul className="nk-block-tools gx-3">
                                    <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-dim btn-warning btn-outline-light" data-toggle="modal" data-target="#remind-in-debt"><em className="icon ni ni-arrow-from-right" /></a><span className="btn-extext">Yêu cầu chuyển tiền</span></li>
                                    <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-success" data-toggle="modal" data-target="#new-transaction"><em className="icon ni ni-wallet-out" /></a><span className="btn-extext">Chuyển tiền</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>{/* .nk-block-head */}
                    <div className="nk-block">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="card-head ui-v2">
                                    <div className="card-title">
                                        <h5 className="title">Báo cáo tóm tắt</h5>
                                    </div>
                                    <div className="card-tools">
                                        <ul className="card-tools-nav">
                                            <li><a href="#">Tháng này</a></li>
                                            <li className="active"><a href="#">Năm</a></li>
                                        </ul>
                                    </div>
                                </div>{/* .card-head */}
                                <div className="nk-wg4">
                                    <div className="nk-wg4-group flex-lg-nowrap justify-between g-3">
                                        <div className="nk-wg4-item">
                                            <div className="nk-wg4-group g-3">
                                                <div className="nk-wg4-sub">
                                                    <div className="sub-text">
                                                        <div className="dot dot-lg sq" data-bg="#5ce0aa" /> <span>Chuyển tiền</span>
                                                    </div>
                                                    <div className="lead-text-lg">52.000.000 <span className="currency currency-btc">VND</span></div>
                                                </div>
                                                <div className="nk-wg4-sub">
                                                    <div className="sub-text">
                                                        <div className="dot dot-lg sq" data-bg="#f6ca3e" /><span>Nhận tiền</span>
                                                    </div>
                                                    <div className="lead-text-lg">76.000.000 <span className="currency currency-btc">VND</span></div>
                                                </div>
                                            </div>{/* .nk-wg4-group */}
                                        </div>{/* .nk-wg4-item */}
                                        <div className="nk-wg4-item text-lg-right">
                                            <ul className="nk-wg4-switcher">
                                                <li>
                                                    <div className="dropdown">
                                                        <a className="dropdown-indicator" href="#" data-toggle="dropdown">Tháng 6</a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <ul className="link-list-plain li-col5x text-center">
                                                                <li><a href="#">Tháng 1</a></li>
                                                                <li><a href="#">Tháng 2</a></li>
                                                                <li><a href="#">Tháng 3</a></li>
                                                                <li><a href="#">Tháng 4</a></li>
                                                                <li><a href="#">Tháng 5</a></li>
                                                                <li><a href="#">Tháng 6</a></li>
                                                                <li><a href="#">Tháng 7</a></li>
                                                                <li><a href="#">Tháng 8</a></li>
                                                                <li><a href="#">Tháng 9</a></li>
                                                                <li><a href="#">Tháng 10</a></li>
                                                                <li><a href="#">Tháng 11</a></li>
                                                                <li><a href="#">Tháng 12</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="dropdown">
                                                        <a className="dropdown-indicator" href="#" data-toggle="dropdown">2020</a>
                                                        <div className="dropdown-menu dropdown-menu-auto">
                                                            <ul className="link-list-plain sm text-center">
                                                                <li><a href="#">2019</a></li>
                                                                <li><a href="#">2018</a></li>
                                                                <li><a href="#">2017</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>{/* .nk-wg4-switcher */}
                                            <div className="nk-wg4-note">Tổng cộng <span>32</span> giao dịch</div>
                                        </div>{/* .nk-wg4-item */}
                                    </div>{/* .nk-wg4-group */}
                                </div>{/* .nk-wg4 */}
                                <div className="nk-ck2">
                                    <canvas className="chart-account-summary" id="summaryBalance" />
                                </div>{/* .nk-ck2 */}
                            </div>{/* .card-inner */}
                        </div>{/* .card */}
                    </div>{/* .nk-block */}
                </div>
            </div>
        </div>
    );
}

export default connect(state => {
    return {
        user: state.userReducer
    }
}, dispatch => {
    return {

    }
})(Dashboard);