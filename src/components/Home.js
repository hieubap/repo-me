import React from "react";
import "./css/index.css";

function MetamaskWallet({ balance }) {
  return (
    <div id="app-content">
      <div className="app os-mac mouse-user-styles">
        <div className="app-header">
          <div className="app-header__contents">
            <div
              className="app-header__logo-container app-header__logo-container--clickable"
              data-testid="app-header-logo"
            >
              {/* <img
                src="chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/images/logo/metamask-fox.svg"
                className="app-header__metafox-logo--icon"
                alt=""
              /> */}
            </div>
            <div className="app-header__account-menu-container">
              <div className="app-header__network-component-wrapper">
                <div
                  data-testid="network-display"
                  className="network-display network-display--clickable chip chip--with-left-icon chip--with-right-icon chip--border-color-border-default chip--background-color-undefined chip--max-content"
                  role="button"
                  tabIndex="0"
                >
                  <div className="chip__left-icon">
                    <div
                      className="color-indicator color-indicator--filled color-indicator--color-icon-muted color-indicator--size-lg"
                      data-testid="color-icon-icon-muted"
                    >
                      <i className="color-indicator__icon fa fa-question"></i>
                    </div>
                  </div>
                  <span className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography chip__label typography--h7 typography--weight-normal typography--style-normal typography--color-text-alternative">
                    Binance Smart Chain Testnet
                  </span>
                  <div className="chip__right-icon">
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="network-display__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="m399 177c-8-8-22-8-30 0l-113 113-113-113c-8-8-22-8-30 0-8 8-8 22 0 30l128 128c8 8 22 8 30 0l128-128c8-8 8-22 0-30z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <button
                data-testid="account-menu-icon"
                className="account-menu__icon"
              >
                <div
                  className="identicon__address-wrapper"
                  style={{ height: 40, width: 40, borderRadius: 20 }}
                >
                  <div
                    className="identicon"
                    style={{ height: 32, width: 32, borderRadius: 16 }}
                  >
                    <div
                      style={{
                        borderRadius: 50,
                        overflow: "hidden",
                        padding: 0,
                        margin: 0,
                        width: 32,
                        height: 32,
                        display: "inline-block",
                        background: "rgb(3, 67, 94)",
                      }}
                    >
                      <svg x="0" y="0" width="32" height="32">
                        <rect
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                          transform="translate(7.810174568455751 4.944184844484749) rotate(198.0 16 16)"
                          fill="#FA9A00"
                        ></rect>
                        <rect
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                          transform="translate(-13.453471272398252 -3.9194785927511853) rotate(289.6 16 16)"
                          fill="#C81432"
                        ></rect>
                        <rect
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                          transform="translate(16.858175368185876 14.329310909833099) rotate(187.8 16 16)"
                          fill="#F2C202"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className="menu-droppo-container network-droppo"
          data-testid="network-droppo"
          style={{ position: "absolute", top: 58, width: 309, zIndex: 55 }}
        ></div>
        <div className="main-container-wrapper">
          <div className="main-container">
            <div className="home__container">
              <div className="home__main-view">
                <div className="menu-bar">
                  <div className="selected-account">
                    <div className="selected-account__tooltip-wrapper">
                      <div
                        className=""
                        tabIndex="0"
                        data-tooltipped=""
                        aria-describedby="tippy-tooltip-1"
                        data-original-title="Sao chép vào bộ nhớ đệm"
                        style={{ display: "inline" }}
                      >
                        <button
                          className="selected-account__clickable"
                          data-testid="selected-account-click"
                        >
                          <div className="selected-account__name">Account 1</div>
                          <div className="selected-account__address">
                            0xd43...ec71
                            <div className="selected-account__copy">
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0 0H1H9V1H1V9H0V0ZM2 2H11V11H2V2ZM3 3H10V10H3V3Z"
                                  fill="var(--color-icon-alternative)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="fas fa-ellipsis-v menu-bar__account-options"
                    data-testid="account-options-menu-button"
                    title="Tùy chọn tài khoản"
                  ></button>
                </div>
                <div className="home__balance-wrapper">
                  <div className="wallet-overview">
                    <div className="wallet-overview__balance">
                      <div
                        className="identicon__image-border"
                        style={{ height: 32, width: 32, borderRadius: 16 }}
                      ></div>
                      <div>
                        <div
                          title=""
                          className=""
                          tabIndex="0"
                          style={{ display: "inline" }}
                        >
                          <div className="eth-overview__balance">
                            <div className="eth-overview__primary-container">
                              <div
                                className="currency-display-component eth-overview__primary-balance"
                                data-testid="eth-overview__primary-currency"
                              >
                                <span className="currency-display-component__prefix"></span>
                                <span className="currency-display-component__text">
                                  {balance || "0"}
                                </span>
                                <span className="currency-display-component__suffix">
                                  BNBT
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wallet-overview__buttons">
                      {/* <button
                        className="icon-button eth-overview__button icon-button--disabled"
                        disabled=""
                      >
                        <div className="icon-button__circle">
                          <svg
                            width="17"
                            height="21"
                            viewBox="0 0 17 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.62829 14.3216C8.65369 14.2947 8.67756 14.2664 8.69978 14.2368L12.8311 10.1286C13.0886 9.87975 13.1913 9.51233 13.1 9.16703C13.0087 8.82174 12.7375 8.55207 12.3903 8.46129C12.0431 8.37051 11.6736 8.47268 11.4233 8.72869L8.89913 11.2387L8.89913 1.3293C8.90647 0.970874 8.71837 0.636511 8.40739 0.455161C8.0964 0.273811 7.71112 0.27381 7.40014 0.45516C7.08915 0.636511 6.90105 0.970873 6.90839 1.3293L6.90839 11.2387L4.38422 8.72869C4.13396 8.47268 3.76446 8.37051 3.41722 8.46129C3.06998 8.55207 2.79879 8.82174 2.7075 9.16703C2.61621 9.51233 2.71896 9.87975 2.97641 10.1286L7.11049 14.2395C7.28724 14.4717 7.55784 14.6148 7.85026 14.6306C8.14268 14.6464 8.42727 14.5333 8.62829 14.3216Z"
                              fill="white"
                            ></path>
                            <rect
                              x="0.260986"
                              y="15.75"
                              width="15.8387"
                              height="2.25"
                              rx="1"
                              fill="white"
                            ></rect>
                          </svg>
                        </div>
                        <span>Mua</span>
                      </button> */}
                      <button
                        className="icon-button eth-overview__button"
                        data-testid="eth-overview-send"
                      >
                        <div className="icon-button__circle">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.6827 0.889329C13.6458 0.890495 13.609 0.893722 13.5725 0.898996H7.76263C7.40564 0.893947 7.07358 1.08151 6.89361 1.38986C6.71364 1.69821 6.71364 2.07958 6.89361 2.38793C7.07358 2.69628 7.40564 2.88384 7.76263 2.87879H11.3124L1.12335 13.0678C0.864749 13.3161 0.760577 13.6848 0.851011 14.0315C0.941446 14.3786 1.21235 14.6495 1.55926 14.7399C1.90616 14.8303 2.27485 14.7262 2.52313 14.4676L12.7121 4.27857V7.82829C12.7071 8.18528 12.8946 8.51734 13.203 8.69731C13.5113 8.87728 13.8927 8.87728 14.2011 8.69731C14.5094 8.51734 14.697 8.18528 14.6919 7.82829V2.01457C14.7318 1.7261 14.6427 1.43469 14.4483 1.2179C14.2538 1.00111 13.9738 0.880924 13.6827 0.889329Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                        <span>Chuyển tiền</span>
                      </button>
                      {/* <button
                        className="icon-button eth-overview__button icon-button--disabled"
                        disabled=""
                      >
                        <div>
                          <div
                            className=""
                            tabIndex="0"
                            data-tooltipped=""
                            aria-describedby="tippy-tooltip-2"
                            data-original-title="Không có sẵn trên mạng này"
                            style={{ display: "inline" }}
                          >
                            <div className="icon-button__circle">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.1714 9.66035V12.3786H4.68253C4.51685 12.3786 4.38253 12.2443 4.38253 12.0786V10.5478C4.38253 10.1888 3.94605 10.0116 3.69574 10.269L0.978328 13.0641C0.827392 13.2193 0.827392 13.4665 0.978328 13.6217L3.69573 16.4168C3.94604 16.6742 4.38253 16.497 4.38253 16.1379V14.6072C4.38253 14.4415 4.51685 14.3072 4.68253 14.3072H14.9992H15.0492V14.2572V9.66035C15.0492 9.14182 14.6288 8.72146 14.1103 8.72146C13.5918 8.72146 13.1714 9.14182 13.1714 9.66035ZM2.55476 2.55003H2.50476V2.60003V7.19686C2.50476 7.71539 2.92511 8.13575 3.44364 8.13575C3.96218 8.13575 4.38253 7.71539 4.38253 7.19686V4.70619C4.38253 4.5805 4.48443 4.47861 4.61012 4.47861H12.8714C13.0371 4.47861 13.1714 4.61292 13.1714 4.77861V6.30937C13.1714 6.66845 13.6079 6.84566 13.8582 6.5882L16.5756 3.79315C16.7266 3.6379 16.7266 3.39074 16.5756 3.23549L13.8582 0.440443C13.6079 0.182981 13.1714 0.360188 13.1714 0.719273V2.25004C13.1714 2.41572 13.0371 2.55003 12.8714 2.55003H2.55476Z"
                                  fill="white"
                                  stroke="white"
                                  stroke-width="0.1"
                                ></path>
                              </svg>
                            </div>
                            <span>Hoán đổi</span>
                          </div>
                        </div>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="tabs">
                  {/* <ul className="tabs__list home__tabs">
                    <li
                      className="tab home__tab tab--active home__tab--active"
                      data-testid="home__asset-tab"
                    >
                      <button>Tài sản</button>
                    </li>
                    <li className="tab home__tab" data-testid="home__activity-tab">
                      <button>Hoạt động</button>
                    </li>
                  </ul> */}
                  <div>
                    <div
                      className=""
                      tabIndex="0"
                      data-tooltipped=""
                      aria-describedby="tippy-tooltip-3"
                      data-original-title="null"
                      style={{ display: "inline" }}
                    >
                      {/* <div className="home__subheader-link">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 9.375C1.5 9.58125 1.66781 9.75 1.875 9.75H11.25C11.6648 9.75 12 10.0852 12 10.5C12 10.9148 11.6648 11.25 11.25 11.25H1.875C0.839531 11.25 0 10.4109 0 9.375V1.5C0 1.08586 0.335859 0.75 0.75 0.75C1.16414 0.75 1.5 1.08586 1.5 1.5V9.375ZM8.02969 6.52969C7.73672 6.82266 7.26328 6.82266 6.97031 6.52969L5.625 5.18672L3.52969 7.27969C3.23672 7.57266 2.76328 7.57266 2.47031 7.27969C2.17688 6.98672 2.17688 6.51328 2.47031 6.22031L5.09531 3.59531C5.38828 3.30234 5.86172 3.30234 6.15469 3.59531L7.5 4.93828L9.97031 2.47031C10.2633 2.17687 10.7367 2.17687 11.0297 2.47031C11.3227 2.76328 11.3227 3.23672 11.0297 3.52969L8.02969 6.52969Z"
                            fill="var(--color-primary-default)"
                          ></path>
                        </svg>
                        <div
                          className="home__subheader-link--text"
                          data-testid="home__portfolio-site"
                        >
                          Trang web danh mục đầu tư
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="tabs__content">
                    <div
                      className="list-item asset-list-item list-item--single-content-row"
                      data-testid="wallet-balance"
                      role="button"
                      tabIndex="0"
                    >
                      <div className="list-item__icon">
                        <div
                          className="identicon__image-border"
                          style={{
                            height: "32px",
                            width: "32px",
                            borderRadius: "16px",
                          }}
                        ></div>
                      </div>
                      <div className="list-item__heading">
                        <button
                          className="asset-list-item__token-button"
                          data-testid="token-button"
                          title="0.2076 TBNB"
                        >
                          <h2>
                            <span className="asset-list-item__token-value">
                              {balance || "0"}
                            </span>
                            <span className="asset-list-item__token-symbol">
                              TBNB
                            </span>
                          </h2>
                        </button>
                      </div>
                      <div className="list-item__right-content">
                        <i className="fas fa-chevron-right asset-list-item__chevron-right"></i>
                      </div>
                    </div>
                    {/* <div>
                      <div
                        className="list-item asset-list-item token-cell list-item--single-content-row"
                        role="button"
                        tabIndex="0"
                      >
                        <div className="list-item__icon">
                          <div className="">
                            <div
                              className="identicon token-cell__icon"
                              style={{
                                height: "32px",
                                width: "32px",
                                borderRadius: "16px",
                              }}
                            >
                              <div
                                style={{
                                  borderRadius: 50,
                                  overflow: "hidden",
                                  padding: 0,
                                  margin: 0,
                                  width: 32,
                                  height: 32,
                                  display: "inline-block",
                                  background: "rgb(3, 83, 94)",
                                }}
                              >
                                <svg x="0" y="0" width="32" height="32">
                                  <rect
                                    x="0"
                                    y="0"
                                    width="32"
                                    height="32"
                                    transform="translate(-7.066666001767776 5.202139113935595) rotate(216.3 16 16)"
                                    fill="#18A2F2"
                                  ></rect>
                                  <rect
                                    x="0"
                                    y="0"
                                    width="32"
                                    height="32"
                                    transform="translate(-16.357153494085093 -6.404822574344779) rotate(272.3 16 16)"
                                    fill="#F5BC00"
                                  ></rect>
                                  <rect
                                    x="0"
                                    y="0"
                                    width="32"
                                    height="32"
                                    transform="translate(30.069937645107508 -4.566608479778868) rotate(502.8 16 16)"
                                    fill="#236CE1"
                                  ></rect>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-item__heading">
                          <button
                            className="asset-list-item__token-button"
                            data-testid="token-button"
                            title="28.13000000000000001 IHI"
                          >
                            <h2>
                              <span className="asset-list-item__token-value">
                                28.13000000000000001
                              </span>
                              <span className="asset-list-item__token-symbol">
                                IHI
                              </span>
                            </h2>
                          </button>
                        </div>
                        <div className="list-item__right-content">
                          <i className="fas fa-chevron-right asset-list-item__chevron-right"></i>
                          <a
                            className="button btn-link asset-list-item__send-token-button"
                            role="button"
                            tabIndex="0"
                          >
                            Gửi IHI
                          </a>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="box box--margin-top-4 box--flex-direction-row">
                      <div className="box box--flex-direction-row box--justify-content-center box--display-flex">
                        <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--h6 typography--weight-normal typography--style-normal typography--color-text-alternative">
                          Không thấy token của mình?
                        </h6>
                      </div>
                      <div className="box import-token-link box--flex-direction-row box--text-align-center">
                        <a
                          className="button btn-link import-token-link__link"
                          data-testid="import-token-button"
                          role="button"
                          tabIndex="0"
                        >
                          Nhập token
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="home__support">
                  {/* <span>
                    Bạn cần trợ giúp? Liên hệ
                    <a
                      href="https://support.metamask.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hỗ trợ về MetaMask
                    </a>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetamaskWallet;
