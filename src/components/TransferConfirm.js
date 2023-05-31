export default function () {
  return (
    <div className="main-container-wrapper" style={{ marginTop: 100,marginBottom: 100 }}>
      <div className="page-container" data-testid="page-container">
        <div
          className="confirm-page-container-navigation"
          style={{ display: "none" }}
        >
          <div
            className="confirm-page-container-navigation__container"
            data-testid="navigation-container"
            style={{ visibility: "hidden" }}
          >
            <button
              className="confirm-page-container-navigation__arrow"
              data-testid="first-page"
            >
              <i className="fa fa-angle-double-left fa-2x" />
            </button>
            <button
              className="confirm-page-container-navigation__arrow"
              data-testid="previous-page"
            >
              <i className="fa fa-angle-left fa-2x" />
            </button>
          </div>
          <div className="confirm-page-container-navigation__textcontainer">
            <div className="confirm-page-container-navigation__navtext">
              1 trên 1
            </div>
            <div className="confirm-page-container-navigation__longtext">
              yêu cầu đang chờ xác nhận
            </div>
          </div>
          <div
            className="confirm-page-container-navigation__container"
            style={{ visibility: "hidden" }}
          >
            <button
              className="confirm-page-container-navigation__arrow"
              data-testid="next-page"
            >
              <i className="fa fa-angle-right fa-2x" />
            </button>
            <button
              className="confirm-page-container-navigation__arrow"
              data-testid="last-page"
            >
              <i className="fa fa-angle-double-right fa-2x" />
            </button>
          </div>
        </div>
        <div
          className="confirm-page-container-header"
          data-testid="header-container"
        >
          <div className="confirm-page-container-header__row">
            <div
              className="confirm-page-container-header__back-button-container"
              style={{ visibility: "initial" }}
            >
              <svg
                width={24}
                height={24}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="m335 113c8 8 8 22 0 30l-113 113 113 113c8 8 8 22 0 30-8 8-22 8-30 0l-128-128c-8-8-8-22 0-30l128-128c8-8 22-8 30 0z" />
              </svg>
              <span
                data-testid="confirm-page-back-edit-button"
                className="confirm-page-container-header__back-button"
              >
                Chỉnh sửa
              </span>
            </div>
          </div>
          <div
            className="sender-to-recipient sender-to-recipient--default"
            data-testid="sender-to-recipient"
          >
            <div className="sender-to-recipient__party sender-to-recipient__party--sender">
              <div className="sender-to-recipient__sender-icon">
                <div className>
                  <div
                    className="identicon"
                    style={{
                      height: "24px",
                      width: "24px",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        overflow: "hidden",
                        padding: "0px",
                        margin: "0px",
                        width: "24px",
                        height: "24px",
                        display: "inline-block",
                        background: "rgb(3, 67, 94)",
                      }}
                    >
                      <svg x={0} y={0} width={24} height={24}>
                        <rect
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                          transform="translate(5.857630926341814 3.708138633363562) rotate(198.0 12 12)"
                          fill="#FA9A00"
                        />
                        <rect
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                          transform="translate(-10.090103454298688 -2.939608944563389) rotate(289.6 12 12)"
                          fill="#C81432"
                        />
                        <rect
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                          transform="translate(12.643631526139407 10.746983182374825) rotate(187.8 12 12)"
                          fill="#F2C202"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sender-to-recipient__tooltip-wrapper">
                <div
                  className="sender-to-recipient__tooltip-container"
                  tabIndex={0}
                  data-tooltipped
                  aria-describedby="tippy-tooltip-14"
                  data-original-title="null"
                  style={{ display: "inline" }}
                >
                  <div className="sender-to-recipient__name">Account 5</div>
                </div>
              </div>
            </div>
            <div className="sender-to-recipient__arrow-container">
              <div className="sender-to-recipient__arrow-circle">
                <i className="fa fa-arrow-right sender-to-recipient__arrow-circle__icon" />
              </div>
            </div>
            <div className="sender-to-recipient__party sender-to-recipient__party--recipient sender-to-recipient__party--recipient-with-address">
              <div className="sender-to-recipient__sender-icon">
                <div className>
                  <div
                    className="identicon"
                    style={{
                      height: "24px",
                      width: "24px",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        overflow: "hidden",
                        padding: "0px",
                        margin: "0px",
                        width: "24px",
                        height: "24px",
                        display: "inline-block",
                        background: "rgb(242, 178, 2)",
                      }}
                    >
                      <svg x={0} y={0} width={24} height={24}>
                        <rect
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                          transform="translate(5.985281972043258 2.9953480401015575) rotate(159.1 12 12)"
                          fill="#F95401"
                        />
                        <rect
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                          transform="translate(-10.650065528005582 -3.807957861097753) rotate(231.6 12 12)"
                          fill="#C8143E"
                        />
                        <rect
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                          transform="translate(9.967699026111115 17.394635824289097) rotate(179.2 12 12)"
                          fill="#017E8E"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sender-to-recipient__tooltip-wrapper">
                <div
                  className="sender-to-recipient__tooltip-container"
                  tabIndex={0}
                  data-tooltipped
                  aria-describedby="tippy-tooltip-15"
                  data-original-title="null"
                  style={{ display: "inline" }}
                >
                  <div
                    className="sender-to-recipient__name"
                    data-testid="sender-to-recipient__name"
                  >
                    Account 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="confirm-page-container-content">
          <div className="confirm-page-container-summary confirm-page-container-summary--border">
            <div className="confirm-page-container-summary__action-row">
              <div className="confirm-page-container-summary__action">
                <span className="confirm-page-container-summary__action__name">
                  Gửi tBNB
                </span>
              </div>
            </div>
            <div className="confirm-page-container-summary__title">
              <h3 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography confirm-page-container-summary__title-text typography--h3 typography--weight-normal typography--style-normal typography--color-text-default">
                <div className="currency-display-component" title="0.01">
                  <span className="currency-display-component__prefix" />
                  <span className="currency-display-component__text">0.01</span>
                </div>
              </h3>
            </div>
          </div>
          <div className="confirm-page-container-content__details">
            <div className="transaction-alerts" />
            <div className="transaction-detail">
              <div className="transaction-detail-edit">
                <button>Chỉnh sửa</button>
              </div>
              <div className="transaction-detail-rows">
                <div className="transaction-detail-item">
                  <div className="transaction-detail-item__row">
                    <h6 className="box box--margin-top-1 box--margin-bottom-1 box--display-flex box--flex-direction-row box--flex-wrap-nowrap box--align-items-center typography typography--h6 typography--weight-bold typography--style-normal typography--color-text-default">
                      Phí gas ước tính
                      <div className="info-tooltip">
                        <div>
                          <div
                            className="info-tooltip__tooltip-container"
                            tabIndex={0}
                            data-tooltipped
                            aria-describedby="tippy-tooltip-16"
                            data-original-title="null"
                            style={{ display: "inline" }}
                          >
                            <svg
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z"
                                fill="var(--color-icon-alternative)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </h6>
                    <div className="transaction-detail-item__detail-values">
                      <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--h6 typography--weight-normal typography--style-normal typography--color-text-alternative">
                        <div className="confirm-page-container-content__currency-container test">
                          <div
                            className="loading-heartbeat"
                            style={{
                              backgroundColor:
                                "var(--color-background-default)",
                            }}
                          />
                          <div
                            className="currency-display-component"
                            title="0.00021"
                          >
                            <span className="currency-display-component__prefix" />
                            <span className="currency-display-component__text">
                              0.00021
                            </span>
                          </div>
                        </div>
                      </h6>
                      <h6 className="box box--margin-top-1 box--margin-bottom-1 box--margin-left-1 box--flex-direction-row box--text-align-right typography typography--h6 typography--weight-bold typography--style-normal typography--color-text-default">
                        <div className="confirm-page-container-content__currency-container">
                          <div
                            className="loading-heartbeat"
                            style={{
                              backgroundColor:
                                "var(--color-background-default)",
                            }}
                          />
                          <div
                            className="currency-display-component"
                            title="0.00021 TBNB"
                          >
                            <span className="currency-display-component__prefix" />
                            <span className="currency-display-component__text">
                              0.00021
                            </span>
                            <span className="currency-display-component__suffix">
                              TBNB
                            </span>
                          </div>
                        </div>
                      </h6>
                    </div>
                  </div>
                  <div className="transaction-detail-item__row">
                    <div />
                    <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography transaction-detail-item__row-subText typography--h7 typography--weight-normal typography--style-normal typography--align-end typography--color-text-alternative">
                      <strong>Phí tối đa:</strong>
                      <div className="confirm-page-container-content__currency-container">
                        <div
                          className="loading-heartbeat"
                          style={{
                            backgroundColor: "var(--color-background-default)",
                          }}
                        />
                        <div
                          className="currency-display-component"
                          title="0.00021 TBNB"
                        >
                          <span className="currency-display-component__prefix" />
                          <span className="currency-display-component__text">
                            0.00021
                          </span>
                          <span className="currency-display-component__suffix">
                            TBNB
                          </span>
                        </div>
                      </div>
                    </h6>
                  </div>
                </div>
                <div className="transaction-detail-item">
                  <div className="transaction-detail-item__row">
                    <h6 className="box box--margin-top-1 box--margin-bottom-1 box--display-flex box--flex-direction-row box--flex-wrap-nowrap box--align-items-center typography typography--h6 typography--weight-bold typography--style-normal typography--color-text-default">
                      Tổng
                    </h6>
                    <div className="transaction-detail-item__detail-values">
                      <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--h6 typography--weight-normal typography--style-normal typography--color-text-alternative">
                        <div className="confirm-page-container-content__total-value">
                          <div
                            className="loading-heartbeat"
                            style={{
                              backgroundColor:
                                "var(--color-background-default)",
                            }}
                          />
                          <div
                            className="currency-display-component"
                            title="0.01021"
                          >
                            <span className="currency-display-component__prefix" />
                            <span className="currency-display-component__text">
                              0.01021
                            </span>
                          </div>
                        </div>
                      </h6>
                      <h6 className="box box--margin-top-1 box--margin-bottom-1 box--margin-left-1 box--flex-direction-row box--text-align-right typography typography--h6 typography--weight-bold typography--style-normal typography--color-text-default">
                        <div className="confirm-page-container-content__total-value">
                          <div
                            className="loading-heartbeat"
                            style={{
                              backgroundColor:
                                "var(--color-background-default)",
                            }}
                          />
                          <div
                            className="currency-display-component"
                            title="0.01021 TBNB"
                          >
                            <span className="currency-display-component__prefix" />
                            <span className="currency-display-component__text">
                              0.01021
                            </span>
                            <span className="currency-display-component__suffix">
                              TBNB
                            </span>
                          </div>
                        </div>
                      </h6>
                    </div>
                  </div>
                  <div className="transaction-detail-item__row">
                    <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--h7 typography--weight-normal typography--style-normal typography--color-text-alternative">
                      Số lượng + phí gas
                    </h6>
                    <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography transaction-detail-item__row-subText typography--h7 typography--weight-normal typography--style-normal typography--align-end typography--color-text-alternative">
                      <div className="confirm-page-container-content__total-amount">
                        <div
                          className="loading-heartbeat"
                          style={{
                            backgroundColor: "var(--color-background-default)",
                          }}
                        />
                        <strong>Số lượng tối đa:</strong>{" "}
                        <div
                          className="currency-display-component"
                          title="0.01021 TBNB"
                        >
                          <span className="currency-display-component__prefix" />
                          <span className="currency-display-component__text">
                            0.01021
                          </span>
                          <span className="currency-display-component__suffix">
                            TBNB
                          </span>
                        </div>
                      </div>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-container__footer">
            <footer>
              <button
                className="button btn--rounded btn-secondary page-container__footer-button"
                data-testid="page-container-footer-cancel"
                role="button"
                tabIndex={0}
              >
                Từ chối
              </button>
              <button
                className="button btn--rounded btn-primary page-container__footer-button"
                data-testid="page-container-footer-next"
                role="button"
                tabIndex={0}
              >
                Xác nhận
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
