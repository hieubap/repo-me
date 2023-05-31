import React from "react";

function ConfirmCreate() {
  return (
    <div id="app-content">
      <div className="app os-mac mouse-user-styles">
        <div className="onboarding-app-header">
          <div className="onboarding-app-header__contents">
            <div
              className="onboarding-app-header__logo-container"
              data-testid="app-header-logo"
            >
              <svg
                height={30}
                viewBox="0 0 1311 242"
                width={162}
                xmlns="http://www.w3.org/2000/svg"
                className="onboarding-app-header__metafox-logo--horizontal"
              >
                <g fill="none">
                  <g
                    fill="var(--color-text-default)"
                    transform="translate(361 61)"
                  >
                    <path d="m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z" />
                    <path d="m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z" />
                    <path d="m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z" />
                    <path d="m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z" />
                    <path d="m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z" />
                    <path d="m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z" />
                    <path d="m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z" />
                    <path d="m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z" />
                  </g>
                  <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(1 1)"
                  >
                    <path
                      d="m246.1.2-101.1 75 18.8-44.2z"
                      fill="#e17726"
                      stroke="#e17726"
                    />
                    <g fill="#e27625" stroke="#e27625" transform="translate(2)">
                      <path d="m10.9.2 100.2 75.7-17.9-44.9z" />
                      <path d="m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z" />
                      <path d="m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z" />
                      <path d="m71 104.5-16 24.2 57 2.6-1.9-61.5z" />
                      <path d="m184 104.5-39.7-35.4-1.3 62.2 57-2.6z" />
                      <path d="m74.1 215.3 34.5-16.7-29.7-23.2z" />
                      <path d="m146.4 198.6 34.4 16.7-4.7-39.9z" />
                    </g>
                    <g
                      fill="#d5bfb2"
                      stroke="#d5bfb2"
                      transform="translate(76 198)"
                    >
                      <path d="m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z" />
                      <path d="m.1 17.3 32 15.2-.2-9.5 2.7-22.4z" />
                    </g>
                    <path
                      d="m108.7 160.6-28.6-8.4 20.2-9.3z"
                      fill="#233447"
                      stroke="#233447"
                    />
                    <path
                      d="m150.3 160.6 8.4-17.7 20.3 9.3z"
                      fill="#233447"
                      stroke="#233447"
                    />
                    <g
                      fill="#cc6228"
                      stroke="#cc6228"
                      transform="translate(49 128)"
                    >
                      <path d="m27.1 87.3 5-41.2-31.8.9z" />
                      <path d="m128.9 46.1 4.9 41.2 26.9-40.3z" />
                      <path d="m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z" />
                      <path d="m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z" />
                    </g>
                    <g
                      fill="#e27525"
                      stroke="#e27525"
                      transform="translate(57 128)"
                    >
                      <path d="m0 .7 23.9 46.7-.8-23.2z" />
                      <path d="m122 24.2-.9 23.2 23.9-46.7z" />
                      <path d="m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z" />
                      <path d="m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z" />
                    </g>
                    <path
                      d="m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z"
                      fill="#f5841f"
                      stroke="#f5841f"
                    />
                    <path
                      d="m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z"
                      fill="#f5841f"
                      stroke="#f5841f"
                    />
                    <path
                      d="m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z"
                      fill="#c0ac9d"
                      stroke="#c0ac9d"
                    />
                    <path
                      d="m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z"
                      fill="#161616"
                      stroke="#161616"
                    />
                    <g fill="#763e1a" stroke="#763e1a">
                      <path d="m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z" />
                      <path d="m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z" />
                    </g>
                    <g fill="#f5841f" stroke="#f5841f">
                      <path d="m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z" />
                      <path d="m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z" />
                      <path d="m145 131.3 3.4-58.6 15.4-41.7h-68.6l15.4 41.7 3.4 58.6 1.3 18.4.1 45.5h28.2l.1-45.5z" />
                    </g>
                  </g>
                </g>
              </svg>
              <img
                src="chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/images/logo/metamask-fox.svg"
                className="onboarding-app-header__metafox-logo--icon"
                alt=""
              />
            </div>
            <div className="dropdown">
              <select className="dropdown__select">
                <option value="am">አማርኛ</option>
                <option value="ar">العربية</option>
                <option value="bg">български</option>
                <option value="bn">বাংলা</option>
                <option value="ca">Català</option>
                <option value="cs">Čeština</option>
                <option value="da">Dansk</option>
                <option value="de">Deutsch</option>
                <option value="el">ελληνικά</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="es_419">Español (Latin America)</option>
                <option value="et">Estonian</option>
                <option value="fa">فارسی</option>
                <option value="fi">Suomi</option>
                <option value="fil">Filipino</option>
                <option value="fr">Français</option>
                <option value="gu">ગુજરાત</option>
                <option value="he">עברית</option>
                <option value="hi">मानक हिन्दी</option>
                <option value="hn">हिन्दी</option>
                <option value="hr">Hrvatski</option>
                <option value="ht">Kreyòl ayisyen</option>
                <option value="hu">Magyar</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="it">Italiano</option>
                <option value="ja">日本語</option>
                <option value="kn">ಕನ್ನಡ</option>
                <option value="ko">한국어</option>
                <option value="lt">Lietuviškai</option>
                <option value="lv">Latvian</option>
                <option value="ml">മലയാളം</option>
                <option value="mr">मराठी</option>
                <option value="ms">Malay</option>
                <option value="nl">Nederlands</option>
                <option value="no">Norwegian</option>
                <option value="ph">Pilipino</option>
                <option value="pl">Polskie</option>
                <option value="pt">Português</option>
                <option value="pt_BR">Português (Brazillian)</option>
                <option value="pt_PT">Português (European)</option>
                <option value="ro">Limba română</option>
                <option value="ru">Русский</option>
                <option value="sk">Slovenčina</option>
                <option value="sl">Slovenščina</option>
                <option value="sr">српски</option>
                <option value="sv">Svenska</option>
                <option value="sw">Swahili</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="th">ไทย</option>
                <option value="tl">Wikang Tagalog</option>
                <option value="tr">Türkçe</option>
                <option value="uk">Українська мова</option>
                <option value="vi">Tiếng Việt</option>
                <option value="zh_CN">中文(简体)</option>
                <option value="zh_TW">中文(繁體)</option>
              </select>
              <div
                className="box dropdown__icon-caret-down mm-icon mm-icon--size-sm box--flex-direction-row box--color-inherit"
                style={{
                  WebkitMaskImage: 'url("./images/icons/arrow-down.svg")',
                }}
              />
            </div>
          </div>
        </div>
        <div className="main-container-wrapper">
          <div className="onboarding-flow">
            <div className="onboarding-flow__wrapper">
              <div
                className="onboarding-metametrics"
                data-testid="onboarding-metametrics"
              >
                <h2 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--h2 typography--weight-bold typography--style-normal typography--align-center typography--color-text-default">
                  Giúp chúng tôi cải thiện MetaMask
                </h2>
                <p className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography onboarding-metametrics__desc typography--p typography--weight-normal typography--style-normal typography--align-center typography--color-text-default">
                  MetaMask muốn thu thập dữ liệu sử dụng để hiểu rõ hơn cách
                  người dùng tương tác với MetaMask. Dữ liệu này sẽ được sử dụng
                  để cung cấp dịch vụ, bao gồm cả cải thiện dịch vụ dựa trên quá
                  trình sử dụng của bạn.
                </p>
                <p className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography onboarding-metametrics__desc typography--p typography--weight-normal typography--style-normal typography--align-center typography--color-text-default">
                  MetaMask sẽ...
                </p>
                <ul>
                  <li>
                    <i className="fa fa-check" />
                    Luôn cho phép bạn chọn không tham gia thông qua phần Cài đặt
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Gửi các lượt nhấn và xem trang đã được ẩn danh
                  </li>
                  <li>
                    <i className="fa fa-times" />
                    <span>
                      {" "}
                      <p className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--p typography--weight-bold typography--style-normal typography--color-text-default">
                        Không bao giờ
                      </p>{" "}
                      thu thập các thông tin mà chúng tôi không cần để cung cấp
                      dịch vụ (chẳng hạn như khóa, địa chỉ, mã băm giao dịch
                      hoặc số dư){" "}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-times" />
                    <span>
                      {" "}
                      <p className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--p typography--weight-bold typography--style-normal typography--color-text-default">
                        Không bao giờ
                      </p>{" "}
                      thu thập địa chỉ IP đầy đủ của bạn*{" "}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-times" />
                    <span>
                      {" "}
                      <p className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography typography--p typography--weight-bold typography--style-normal typography--color-text-default">
                        Không bao giờ
                      </p>{" "}
                      bán dữ liệu. Tuyệt đối không bao giờ!{" "}
                    </span>
                  </li>
                </ul>
                <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography onboarding-metametrics__terms typography--h6 typography--weight-normal typography--style-normal typography--align-center typography--color-text-alternative">
                  Do đó, dữ liệu này được tổng hợp và ẩn danh theo các mục đích
                  của Quy định bảo vệ dữ liệu chung (EU) 2016/679.
                </h6>
                <h6 className="box box--margin-top-1 box--margin-bottom-1 box--flex-direction-row typography onboarding-metametrics__terms typography--h6 typography--weight-normal typography--style-normal typography--align-center typography--color-text-alternative">
                  <span>
                    {" "}
                    * Khi bạn sử dụng Infura làm nhà cung cấp RPC mặc định trong
                    MetaMask, Infura sẽ thu thập địa chỉ IP và địa chỉ ví
                    Ethereum của bạn khi bạn gửi giao dịch. Chúng tôi không lưu
                    trữ thông tin này để cho phép hệ thống của chúng tôi liên
                    kết hai loại dữ liệu đó. Để biết thêm thông tin về cách
                    MetaMask và Infura tương tác trong việc thu thập dữ liệu,
                    hãy xem bản cập nhật{" "}
                    <a
                      href="https://consensys.net/blog/news/consensys-data-retention-update/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tại đây
                    </a>{" "}
                    của chúng tôi. Để biết thêm thông tin về các phương pháp bảo
                    vệ quyền riêng tư của chúng tôi nói chung, hãy xem{" "}
                    <a
                      href="https://metamask.io/privacy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chính sách quyền riêng tư tại đây
                    </a>
                    .{" "}
                  </span>
                </h6>
                <div className="onboarding-metametrics__buttons">
                  <button
                    className="button btn--rounded btn-primary btn--large"
                    data-testid="metametrics-i-agree"
                    role="button"
                    tabIndex={0}
                  >
                    Tôi đồng ý
                  </button>
                  <button
                    className="button btn--rounded btn-secondary btn--large"
                    data-testid="metametrics-no-thanks"
                    role="button"
                    tabIndex={0}
                  >
                    Không, cảm ơn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCreate;