import React from "react";

export default function () {
  return (
    <div className="main-container-wrapper">
      <div className="page-container">
        <div
          className="page-container__header send__header"
          data-testid="page-container__header"
        >
          <div className="page-container__title page-container__title--no-margin-right">
            Chuyển tiền
          </div>
        </div>
        <div className="ens-input send__to-row">
          <div className="ens-input__wrapper ens-input__wrapper--valid">
            <i
              className="ens-input__wrapper__status-icon fa fa-check-circle"
              style={{ color: "var(--color-success-default)" }}
            />
            <div className="ens-input__wrapper__input ens-input__wrapper__input--selected">
              <div className="ens-input__selected-input__title">Account 3</div>
              <div className="ens-input__selected-input__subtitle">
                0x53bFEbAFEF3581EB3169b149D99F50a527f32cB1
              </div>
            </div>
            <button className="ens-input__wrapper__action-icon-button">
              <i
                className="fa fa-times"
                title="Đóng"
                style={{ color: "var(--color-icon-default)" }}
              />
            </button>
          </div>
        </div>
        <div className="page-container__content">
          <div className="send-v2__form">
            <div className="send-v2__form-row">
              <div className="send-v2__form-label">Tài sản:</div>
              <div className="send-v2__form-field">
                <div className="send-v2__asset-dropdown">
                  <div className="send-v2__asset-dropdown__input-wrapper">
                    <div className="send-v2__asset-dropdown__asset">
                      <div className="send-v2__asset-dropdown__asset-icon">
                        <div className>
                          <div
                            className="identicon"
                            style={{
                              height: "36px",
                              width: "36px",
                              borderRadius: "18px",
                            }}
                          >
                            <div
                              style={{
                                borderRadius: "50px",
                                overflow: "hidden",
                                padding: "0px",
                                margin: "0px",
                                width: "36px",
                                height: "36px",
                                display: "inline-block",
                                background: "rgb(24, 151, 242)",
                              }}
                            >
                              <svg x={0} y={0} width={36} height={36}>
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(4.037996457891582 -6.001099451137713) rotate(458.4 18 18)"
                                  fill="#2362E1"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(-17.283891700856486 8.991395589922462) rotate(268.8 18 18)"
                                  fill="#F94301"
                                />
                                <rect
                                  x={0}
                                  y={0}
                                  width={36}
                                  height={36}
                                  transform="translate(-10.2107858392141 33.165017865768796) rotate(117.3 18 18)"
                                  fill="#FA7900"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="send-v2__asset-dropdown__asset-data">
                        <div className="send-v2__asset-dropdown__symbol">
                          tBNB
                        </div>
                        <div className="send-v2__asset-dropdown__name">
                          <span className="send-v2__asset-dropdown__name__label">
                            Số dư:
                          </span>
                          <div
                            className="currency-display-component"
                            title="3.00763535 TBNB"
                          >
                            <span className="currency-display-component__prefix" />
                            <span className="currency-display-component__text">
                              3.00763535
                            </span>
                            <span className="currency-display-component__suffix">
                              TBNB
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <i className="fa fa-caret-down fa-lg send-v2__asset-dropdown__caret" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="send-v2__form-row">
              <div className="send-v2__form-label">
                Số tiền:
                {/* <button className="send-v2__amount-max">
                  <input type="checkbox" readOnly />
                  <div className="send-v2__amount-max__button">Tối đa</div>
                </button> */}
              </div>
              <div className="send-v2__form-field-container">
                <div className="send-v2__form-field">
                  <div className="unit-input">
                    <div className="unit-input__inputs">
                      <div className="unit-input__input-container">
                        <input
                          data-testid="currency-input"
                          type="number"
                          dir="ltr"
                          className="unit-input__input"
                          placeholder={0}
                          value={0.01}
                          style={{ width: 100 }}
                        />
                        <div
                          style={{ marginLeft: "auto" }}
                          className="unit-input__suffix"
                        >
                          tBNB
                        </div>
                      </div>
                      {/* <div className="currency-input__conversion-component">
                        Không có sẵn tỷ lệ quy đổi nào
                      </div> */}
                    </div>
                    {/* <button
                      className="currency-input__swap-component"
                      data-testid="currency-swap"
                    >
                      <i className="fa fa-retweet fa-lg" />
                    </button> */}
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div className="send-v2__form-row">
              <div className="send-v2__form-label" />
              <div className="send-v2__form-field">
                <div className="advanced-gas-inputs__gas-edit-rows">
                  <div className="advanced-gas-inputs__gas-edit-row">
                    <div className="advanced-gas-inputs__gas-edit-row__label">
                      Giá gas (GWEI)
                      <div>
                        <div
                          className
                          tabIndex={0}
                          data-tooltipped
                          aria-describedby="tippy-tooltip-11"
                          data-original-title="Giá gas xác định khoản Ether mà bạn sẵn sàng thanh toán cho mỗi đơn vị gas."
                          style={{ display: "inline" }}
                        >
                          <i className="fa fa-info-circle" />
                        </div>
                      </div>
                    </div>
                    <div className="advanced-gas-inputs__gas-edit-row__input-wrapper">
                      <input
                        className="advanced-gas-inputs__gas-edit-row__input"
                        type="number"
                        min={0}
                        data-testid="gas-price"
                        defaultValue={10}
                      />
                      {/* <div className="advanced-gas-inputs__gas-edit-row__input-arrows">
                        <div className="advanced-gas-inputs__gas-edit-row__input-arrows__i-wrap">
                          <i className="fa fa-sm fa-angle-up" />
                        </div>
                        <div className="advanced-gas-inputs__gas-edit-row__input-arrows__i-wrap">
                          <i className="fa fa-sm fa-angle-down" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="advanced-gas-inputs__gas-edit-row">
                    <div className="advanced-gas-inputs__gas-edit-row__label">
                      Giới hạn gas
                      <div>
                        <div
                          className
                          tabIndex={0}
                          data-tooltipped
                          aria-describedby="tippy-tooltip-12"
                          data-original-title="Giới hạn gas là số lượng đơn vị gas tối đa mà bạn sẵn sàng chi tiêu."
                          style={{ display: "inline" }}
                        >
                          <i className="fa fa-info-circle" />
                        </div>
                      </div>
                    </div>
                    <div className="advanced-gas-inputs__gas-edit-row__input-wrapper">
                      <input
                        className="advanced-gas-inputs__gas-edit-row__input"
                        type="number"
                        min={0}
                        data-testid="gas-limit"
                        defaultValue={21000}
                      />
                      {/* <div className="advanced-gas-inputs__gas-edit-row__input-arrows">
                        <div className="advanced-gas-inputs__gas-edit-row__input-arrows__i-wrap">
                          <i className="fa fa-sm fa-angle-up" />
                        </div>
                        <div className="advanced-gas-inputs__gas-edit-row__input-arrows__i-wrap">
                          <i className="fa fa-sm fa-angle-down" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box gas-display box--flex-direction-row">
              <div className="transaction-detail">
                <div className="transaction-detail-rows">
                  <div className="transaction-detail-item">
                    <div className="transaction-detail-item__row">
                      <h6 className="box box--margin-top-1 box--margin-bottom-1 box--display-flex box--flex-direction-row box--flex-wrap-nowrap box--align-items-center typography typography--h6 typography--weight-bold typography--style-normal typography--color-text-default">
                        <div className="box box--display-flex box--flex-direction-row">
                          <div className="box box--margin-right-1 box--flex-direction-row">
                            Gas
                          </div>
                          <span className="box box--margin-bottom-1 box--flex-direction-row typography gas-display__title__estimate typography--p typography--weight-normal typography--style-italic typography--color-text-muted">
                            (ước tính)
                          </span>
                          <div className="info-tooltip">
                            <div>
                              <div
                                className="info-tooltip__tooltip-container"
                                tabIndex={0}
                                data-tooltipped
                                aria-describedby="tippy-tooltip-13"
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
                        </div>
                      </h6>
                      <div className="transaction-detail-item__detail-values">
                        <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--h6 typography--weight-normal typography--style-normal typography--color-text-alternative">
                          <div className="box gas-display__currency-container box--flex-direction-row">
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
                          <div className="box gas-display__currency-container box--flex-direction-row">
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
                        <div className="box gas-display__gas-fee-label box--display-inline-flex box--flex-direction-row">
                          <div
                            className="loading-heartbeat"
                            style={{
                              backgroundColor:
                                "var(--color-background-default)",
                            }}
                          />
                          <div className="box box--margin-right-1 box--flex-direction-row">
                            <strong>Phí tối đa:</strong>
                          </div>
                          <div className="box gas-display__currency-container box--flex-direction-row">
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
                        </div>
                      </h6>
                    </div>
                  </div>
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
              Hủy
            </button>
            <button
              className="button btn--rounded btn-primary page-container__footer-button"
              data-testid="page-container-footer-next"
              role="button"
              tabIndex={0}
            >
              Chuyển
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
