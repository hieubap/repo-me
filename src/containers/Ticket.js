import React from "react";
import QRCode from "react-qr-code";

function Ticket() {
  const data = {
    title: "Galadinner",
    time: "Jul 25, 2023, 2:00 PM GMT+7",
    address:
      "Novotel Hanoi Thai Ha, 2 P. Thái Hà, Str, Wd, Hà Nội 100000, Vietnam",
  };
  return (
    <div id="__next">
      <div className="jsx-2566509379 page-wrapper">
        <meta name="theme-color" content="#d5e7f6" />
        <div
          className="jsx-2199152940 background animated mounted"
          style={{
            background:
              "linear-gradient(rgba(62, 174, 237, 0.2) 0%,rgba(89, 191, 223, 0.1) 50%,rgba(248, 243, 215, 0) 100%)",
          }}
        />
        <div className="jsx-2199152940 nav-wrapper animated">
          <nav className="jsx-2199152940 flex-center spread">
            {/* <a
              aria-label="Luma Home"
              href="https://lu.ma/"
              target="_self"
              className="logo-wrapper"
            >
              <div className="jsx-2199152940 logo flex-center animated wordmark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 724 264">
                  <g fill="currentColor">
                    <path d="M38.53 260.65H.43V27.86h38.1zM124.99 263.42c-42.25 0-66.48-22.96-66.48-63V89.33h38.1v108.28c0 23.61 8.7 32.39 32.12 32.39 30.35 0 42.73-14.54 42.73-50.17v-90.5h38.1v171.33h-36.54v-29.91c-4.99 22.98-27.12 32.67-48.03 32.67zm347.2-2.77H434.4V149.87c0-22.5-7.01-30.87-25.88-30.87-24.28 0-37.11 14.45-37.11 41.79v99.86h-37.79V149.87c0-21.93-7.23-30.87-24.94-30.87-31.59 0-38.05 32.96-38.05 41.79v99.86h-38.1V89.33h36.54v29.96c6.49-21.02 27.02-33.71 47.72-33.71 20.69 0 38.09 7.9 45.64 33.71 10.13-26.76 28.35-33.71 50.15-33.71 37.88 0 59.61 18.88 59.61 51.81v123.26zm76.65 2.77c-52.62 0-61.55-33.45-61.55-50.52 0-20.1 8.83-38.21 27.93-45.55 8.41-3.11 16.52-5.43 24.84-7.1 7.33-1.47 18.64-3.03 26.91-4.17l2.73-.38c14.38-2 29.67-9.21 29.67-18.62 0-16-20.51-18.39-32.74-18.39-13.87 0-23.64 3.57-27.53 10.05-3.49 6.46-3.73 7.97-4.62 13.6l-.62 4.43h-38.1l.68-5.61c1.35-11.14 3.41-19.03 6.48-24.83 10.54-20.39 31.77-30.75 63.08-30.75 26.11 0 44.63 8.23 53.26 15.94 5.31 4.6 9.1 9.84 11.89 16.46 5.84 12.36 6.32 20.63 6.32 29.4v86.43c0 8.07.78 14.97 2.31 20.5l1.76 6.35h-38.91l-.7-4.19c-.5-2.96-.67-19.75-.88-26.23-8.99 23.61-28.27 33.18-52.21 33.18zm50.53-93.72c-7.97 6.11-20.47 9.6-38.62 13.23-31.27 5.78-36.54 13.06-36.54 27.22 0 12.5 10.63 20.26 27.75 20.26 33.23 0 47.41-15.48 47.41-51.77v-8.94zM723.57 64.19C688.46 64.19 660 35.73 660 .62c0 35.11-28.46 63.57-63.57 63.57 35.11 0 63.57 28.46 63.57 63.57 0-35.11 28.46-63.57 63.57-63.57Z" />
                  </g>
                </svg>
              </div>
            </a>
            <div className="jsx-2199152940 center-and-right">
              <div className="jsx-2199152940" />
              <div className="jsx-2199152940 right-wrapper">
                <div className="time fs-sm mono-number relative">
                  4:11 PM GMT+7
                </div>
                <div className="jsx-4084108654">
                  <a
                    href="https://lu.ma/signin?next=%2Fe%2Fticket%2Fevt-EQ7FcOcLtZnQjPx%3Fpk%3Dg-aDn4nBYXYF6EGQb"
                    target="_self"
                    className="btn luma-button flex-center small light solid round no-icon"
                  >
                    <div className="label">Sign In</div>
                  </a>
                </div>
              </div>
            </div> */}
          </nav>
        </div>
        <div className="jsx-2566509379 page-content">
          <div className="jsx-3558694423 zm-container">
            <div className="jsx-3558694423 ticket-container">
              <div className="jsx-3558694423 ticket-top">
                <div className="jsx-146954525 pill light variant-color-primary tiny">
                  <div className="jsx-146954525">​</div>
                  <div className="jsx-146954525 pill-label">TICKET</div>
                </div>
                <a className="text-primary" href="https://lu.ma/xhavn0m4">
                  <div className="jsx-3558694423 event-name">{data.title}</div>
                </a>
                <div className="jsx-3558694423 info text-secondary-alpha">
                  <div className="jsx-3558694423 mb-1">{data.time}</div>
                  <div className="jsx-3558694423">{data.address}</div>
                </div>
              </div>
              <div className="jsx-3558694423 divider" />
              <div className="jsx-3558694423 flex-center-center qr-wrapper">
                <div className="jsx-3063903717 qr-code-container">
                  <QRCode
                    size={256}
                    style={{ height: "auto", width: 250 }}
                    value={
                      '{hoTen:"Tạ Thị Kim Huệ", email:"kimhueta@gmail.com", sdt: "0123456789"}'
                    }
                    viewBox={`0 0 256 256`}
                  />
                  {/* <svg height={250} width={250} viewBox="0 0 45 45">
                    <path
                      fill="transparent"
                      d="M0,0 h45v45H0z"
                      shapeRendering="crispEdges"
                    />
                    <path
                      fill="var(--primary-color)"
                      d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM13 0h5v1H13zM20 0h1v1H20zM23 0h1v1H23zM25 0h1v1H25zM27 0h1v1H27zM29 0h2v1H29zM33 0h1v1H33zM36 0h1v1H36zM38,0 h7v1H38zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM10 1h1v1H10zM12 1h1v1H12zM15 1h1v1H15zM19 1h1v1H19zM24 1h1v1H24zM27 1h7v1H27zM35 1h1v1H35zM38 1h1v1H38zM44,1 h1v1H44zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h1v1H9zM12 2h1v1H12zM17 2h2v1H17zM20 2h2v1H20zM23 2h2v1H23zM26 2h3v1H26zM30 2h1v1H30zM32 2h1v1H32zM35 2h1v1H35zM38 2h1v1H38zM40 2h3v1H40zM44,2 h1v1H44zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h1v1H12zM14 3h1v1H14zM17 3h3v1H17zM22 3h1v1H22zM25 3h2v1H25zM33 3h1v1H33zM35 3h2v1H35zM38 3h1v1H38zM40 3h3v1H40zM44,3 h1v1H44zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM12 4h1v1H12zM15 4h3v1H15zM20 4h5v1H20zM26 4h1v1H26zM28 4h3v1H28zM32 4h5v1H32zM38 4h1v1H38zM40 4h3v1H40zM44,4 h1v1H44zM0 5h1v1H0zM6 5h1v1H6zM8 5h4v1H8zM13 5h3v1H13zM19 5h2v1H19zM24 5h3v1H24zM29 5h4v1H29zM38 5h1v1H38zM44,5 h1v1H44zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38,6 h7v1H38zM12 7h2v1H12zM15 7h1v1H15zM17 7h1v1H17zM19 7h2v1H19zM24 7h2v1H24zM29 7h2v1H29zM3 8h1v1H3zM6 8h1v1H6zM16 8h12v1H16zM29 8h1v1H29zM31 8h1v1H31zM33 8h1v1H33zM39 8h3v1H39zM43,8 h2v1H43zM0 9h1v1H0zM2 9h1v1H2zM4 9h1v1H4zM7 9h1v1H7zM9 9h1v1H9zM11 9h2v1H11zM16 9h2v1H16zM20 9h2v1H20zM23 9h2v1H23zM26 9h1v1H26zM28 9h1v1H28zM33 9h1v1H33zM35 9h1v1H35zM43,9 h2v1H43zM2 10h12v1H2zM15 10h3v1H15zM19 10h3v1H19zM23 10h3v1H23zM28 10h1v1H28zM31 10h2v1H31zM34 10h2v1H34zM38 10h1v1H38zM40 10h1v1H40zM42 10h1v1H42zM44,10 h1v1H44zM0 11h2v1H0zM4 11h2v1H4zM7 11h2v1H7zM12 11h7v1H12zM20 11h1v1H20zM22 11h1v1H22zM26 11h1v1H26zM29 11h1v1H29zM32 11h1v1H32zM34 11h1v1H34zM36 11h3v1H36zM40 11h2v1H40zM44,11 h1v1H44zM0 12h1v1H0zM3 12h2v1H3zM6 12h2v1H6zM10 12h2v1H10zM15 12h4v1H15zM20 12h1v1H20zM22 12h1v1H22zM25 12h1v1H25zM27 12h2v1H27zM30 12h5v1H30zM36 12h1v1H36zM38 12h1v1H38zM40 12h1v1H40zM44,12 h1v1H44zM1 13h2v1H1zM8 13h1v1H8zM10 13h2v1H10zM13 13h5v1H13zM19 13h2v1H19zM22 13h1v1H22zM26 13h3v1H26zM34 13h1v1H34zM37 13h1v1H37zM39 13h4v1H39zM44,13 h1v1H44zM0 14h2v1H0zM3 14h2v1H3zM6 14h2v1H6zM9 14h4v1H9zM14 14h1v1H14zM17 14h3v1H17zM24 14h1v1H24zM27 14h3v1H27zM31 14h1v1H31zM37 14h2v1H37zM41 14h2v1H41zM1 15h1v1H1zM4 15h2v1H4zM7 15h2v1H7zM10 15h1v1H10zM15 15h1v1H15zM20 15h2v1H20zM25 15h2v1H25zM28 15h2v1H28zM31 15h2v1H31zM34 15h2v1H34zM40 15h1v1H40zM43 15h1v1H43zM0 16h2v1H0zM3 16h1v1H3zM6 16h2v1H6zM11 16h4v1H11zM17 16h2v1H17zM24 16h2v1H24zM27 16h2v1H27zM32 16h3v1H32zM38 16h1v1H38zM41 16h1v1H41zM44,16 h1v1H44zM0 17h1v1H0zM4 17h1v1H4zM7 17h2v1H7zM11 17h8v1H11zM20 17h2v1H20zM25 17h1v1H25zM27 17h2v1H27zM38 17h1v1H38zM41 17h3v1H41zM0 18h5v1H0zM6 18h1v1H6zM10 18h4v1H10zM16 18h1v1H16zM18 18h1v1H18zM20 18h2v1H20zM24 18h1v1H24zM30 18h2v1H30zM35 18h1v1H35zM40 18h2v1H40zM44,18 h1v1H44zM0 19h2v1H0zM7 19h3v1H7zM11 19h5v1H11zM18 19h3v1H18zM24 19h3v1H24zM28 19h1v1H28zM30 19h1v1H30zM32 19h1v1H32zM35 19h3v1H35zM39 19h1v1H39zM43 19h1v1H43zM0 20h2v1H0zM3 20h6v1H3zM11 20h1v1H11zM13 20h1v1H13zM15 20h2v1H15zM18 20h8v1H18zM29 20h1v1H29zM33 20h9v1H33zM0 21h1v1H0zM3 21h2v1H3zM8 21h3v1H8zM14 21h3v1H14zM20 21h1v1H20zM24 21h1v1H24zM30 21h1v1H30zM36 21h1v1H36zM40 21h1v1H40zM42,21 h3v1H42zM0 22h2v1H0zM3 22h2v1H3zM6 22h1v1H6zM8 22h1v1H8zM11 22h1v1H11zM13 22h1v1H13zM15 22h1v1H15zM17 22h4v1H17zM22 22h1v1H22zM24 22h1v1H24zM28 22h1v1H28zM30 22h1v1H30zM32 22h1v1H32zM34 22h1v1H34zM36 22h1v1H36zM38 22h1v1H38zM40 22h3v1H40zM44,22 h1v1H44zM2 23h1v1H2zM4 23h1v1H4zM8 23h1v1H8zM10 23h1v1H10zM13 23h2v1H13zM16 23h1v1H16zM18 23h1v1H18zM20 23h1v1H20zM24 23h3v1H24zM28 23h1v1H28zM30 23h1v1H30zM32 23h1v1H32zM36 23h1v1H36zM40 23h2v1H40zM2 24h1v1H2zM4 24h5v1H4zM10 24h2v1H10zM13 24h1v1H13zM15 24h2v1H15zM20 24h5v1H20zM27 24h6v1H27zM36 24h5v1H36zM42 24h2v1H42zM1 25h5v1H1zM8 25h1v1H8zM11 25h6v1H11zM18 25h2v1H18zM23 25h2v1H23zM26 25h2v1H26zM31 25h2v1H31zM34 25h1v1H34zM37 25h2v1H37zM40,25 h5v1H40zM5 26h2v1H5zM10 26h1v1H10zM12 26h1v1H12zM14 26h1v1H14zM16 26h1v1H16zM19 26h1v1H19zM21 26h1v1H21zM23 26h1v1H23zM25 26h1v1H25zM28 26h1v1H28zM30 26h2v1H30zM34 26h1v1H34zM36 26h2v1H36zM40 26h2v1H40zM1 27h1v1H1zM3 27h1v1H3zM5 27h1v1H5zM8 27h1v1H8zM10 27h5v1H10zM16 27h1v1H16zM18 27h1v1H18zM24 27h1v1H24zM26 27h1v1H26zM28 27h1v1H28zM30 27h3v1H30zM34 27h4v1H34zM39 27h2v1H39zM43,27 h2v1H43zM0 28h4v1H0zM5 28h2v1H5zM11 28h2v1H11zM14 28h1v1H14zM16 28h1v1H16zM19 28h1v1H19zM21 28h1v1H21zM25 28h1v1H25zM27 28h2v1H27zM32 28h3v1H32zM39 28h4v1H39zM0 29h2v1H0zM3 29h1v1H3zM12 29h1v1H12zM17 29h2v1H17zM21 29h2v1H21zM24 29h3v1H24zM29 29h1v1H29zM32 29h1v1H32zM41 29h2v1H41zM44,29 h1v1H44zM0 30h1v1H0zM2 30h1v1H2zM6 30h1v1H6zM8 30h9v1H8zM18 30h1v1H18zM20 30h4v1H20zM25 30h2v1H25zM30 30h2v1H30zM35 30h4v1H35zM40 30h1v1H40zM43,30 h2v1H43zM0 31h3v1H0zM4 31h2v1H4zM9 31h1v1H9zM11 31h2v1H11zM14 31h1v1H14zM16 31h3v1H16zM20 31h1v1H20zM22 31h1v1H22zM26 31h2v1H26zM29 31h5v1H29zM36 31h3v1H36zM40 31h1v1H40zM44,31 h1v1H44zM0 32h2v1H0zM3 32h1v1H3zM5 32h9v1H5zM15 32h2v1H15zM18 32h1v1H18zM20 32h2v1H20zM25 32h1v1H25zM30 32h2v1H30zM33 32h4v1H33zM38,32 h7v1H38zM0 33h4v1H0zM7 33h1v1H7zM11 33h1v1H11zM13 33h4v1H13zM19 33h1v1H19zM22 33h1v1H22zM25 33h2v1H25zM29 33h1v1H29zM31 33h1v1H31zM35 33h1v1H35zM37 33h1v1H37zM44,33 h1v1H44zM4 34h1v1H4zM6 34h3v1H6zM10 34h1v1H10zM13 34h3v1H13zM17 34h1v1H17zM21 34h3v1H21zM27 34h1v1H27zM29 34h2v1H29zM34 34h1v1H34zM36 34h1v1H36zM38 34h1v1H38zM40 34h1v1H40zM42 34h1v1H42zM44,34 h1v1H44zM1 35h4v1H1zM7 35h2v1H7zM11 35h1v1H11zM13 35h3v1H13zM17 35h1v1H17zM19 35h2v1H19zM23 35h3v1H23zM28 35h2v1H28zM31 35h1v1H31zM33 35h1v1H33zM35 35h2v1H35zM38 35h2v1H38zM41 35h1v1H41zM43 35h1v1H43zM0 36h1v1H0zM3 36h2v1H3zM6 36h5v1H6zM15 36h2v1H15zM20 36h5v1H20zM27 36h1v1H27zM30 36h1v1H30zM32 36h2v1H32zM36 36h6v1H36zM43,36 h2v1H43zM8 37h4v1H8zM13 37h2v1H13zM17 37h1v1H17zM19 37h2v1H19zM24 37h3v1H24zM28 37h1v1H28zM30 37h1v1H30zM32 37h1v1H32zM34 37h3v1H34zM40 37h2v1H40zM44,37 h1v1H44zM0 38h7v1H0zM9 38h1v1H9zM11 38h2v1H11zM14 38h2v1H14zM18 38h1v1H18zM20 38h1v1H20zM22 38h1v1H22zM24 38h3v1H24zM30 38h3v1H30zM34 38h1v1H34zM36 38h1v1H36zM38 38h1v1H38zM40 38h1v1H40zM43 38h1v1H43zM0 39h1v1H0zM6 39h1v1H6zM11 39h6v1H11zM18 39h1v1H18zM20 39h1v1H20zM24 39h1v1H24zM26 39h4v1H26zM32 39h1v1H32zM36 39h1v1H36zM40 39h1v1H40zM0 40h1v1H0zM2 40h3v1H2zM6 40h1v1H6zM10 40h2v1H10zM13 40h2v1H13zM16 40h2v1H16zM20 40h8v1H20zM30 40h1v1H30zM32 40h3v1H32zM36 40h5v1H36zM0 41h1v1H0zM2 41h3v1H2zM6 41h1v1H6zM8 41h1v1H8zM10 41h2v1H10zM13 41h1v1H13zM20 41h3v1H20zM24 41h4v1H24zM30 41h4v1H30zM36 41h3v1H36zM40 41h2v1H40zM0 42h1v1H0zM2 42h3v1H2zM6 42h1v1H6zM9 42h6v1H9zM16 42h4v1H16zM22 42h1v1H22zM25 42h4v1H25zM31 42h1v1H31zM35 42h3v1H35zM39 42h4v1H39zM44,42 h1v1H44zM0 43h1v1H0zM6 43h1v1H6zM9 43h1v1H9zM11 43h2v1H11zM15 43h2v1H15zM18 43h1v1H18zM20 43h2v1H20zM24 43h3v1H24zM28 43h1v1H28zM30 43h1v1H30zM34 43h1v1H34zM36 43h1v1H36zM39 43h2v1H39zM0 44h7v1H0zM13 44h6v1H13zM20 44h1v1H20zM24 44h4v1H24zM29 44h1v1H29zM31 44h1v1H31zM33 44h6v1H33zM40 44h1v1H40zM42 44h2v1H42z"
                      shapeRendering="crispEdges"
                    />
                  </svg> */}
                </div>
              </div>
              <div className="jsx-3558694423 divider" />
              <div className="jsx-3558694423 ticket-middle">
                <div className="jsx-3558694423">
                  <div className="jsx-3558694423 text-tertiary-alpha fs-xs">
                    Guest
                  </div>
                  <div className="jsx-3558694423 fw-medium text-ellipses">
                    Tạ Thị Kim Huệ
                  </div>
                </div>
                <div className="jsx-3558694423">
                  <div className="jsx-3558694423 text-tertiary-alpha fs-xs">
                    Status
                  </div>
                  <div className="jsx-3558694423 fw-medium text-ellipses text-green">
                    Approved
                  </div>
                </div>
              </div>
              <div className="jsx-3558694423 divider" />
              <div className="jsx-3558694423 flex-center gap-2 buttons">
                {/* <button
                  className="btn luma-button flex-center medium primary solid full-width icon-left"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M10.68 1.078a.81.81 0 0 0-.693 0L6.013 2.934a.81.81 0 0 1-.693 0L1.64 1.215a.41.41 0 0 0-.436.055.576.576 0 0 0-.204.454v10.442c0 .446.232.847.587 1.012l3.733 1.744a.81.81 0 0 0 .693 0l3.974-1.856a.81.81 0 0 1 .693 0l3.68 1.716a.41.41 0 0 0 .436-.055.576.576 0 0 0 .204-.454V3.833c0-.445-.232-.846-.587-1.011L10.68 1.078ZM5.5 3v11M10.5 2v11" />
                    </g>
                  </svg>
                  <div className="label">Get Directions</div>
                </button> */}
                {/* <button
                  className="btn luma-button flex-center medium primary solid full-width icon-left"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 750 750"
                  >
                    <defs>
                      <path
                        id="applewallet_svg__a"
                        d="M51.877 0C11.905 0 0 23.955 0 53.713v62.74c0-29.757 11.905-53.712 51.877-53.712H635.67c39.972 0 51.877 23.955 51.877 53.712v-62.74C687.547 23.955 675.642 0 635.67 0H51.877Z"
                      />
                      <path
                        id="applewallet_svg__c"
                        d="M51.877 0C11.905 0 0 23.955 0 53.713v62.74c0-29.757 11.905-53.712 51.877-53.712H635.67c39.972 0 51.877 23.955 51.877 53.712v-62.74C687.547 23.955 675.642 0 635.67 0H51.877Z"
                      />
                      <path
                        id="applewallet_svg__e"
                        d="M51.877 0C11.905 0 0 23.955 0 53.713v62.74c0-29.757 11.905-53.712 51.877-53.712H635.67c39.972 0 51.877 23.955 51.877 53.712v-62.74C687.547 23.955 675.642 0 635.67 0H51.877Z"
                      />
                      <linearGradient
                        id="applewallet_svg__g"
                        x1="0%"
                        x2="0%"
                        y1="100%"
                        y2="48.168%"
                      >
                        <stop offset="0%" stopColor="#CBC9BE" />
                        <stop
                          offset="100%"
                          stopColor="#C8C5BB"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="applewallet_svg__h"
                        x1="0%"
                        x2="0%"
                        y1="100%"
                        y2="48.168%"
                      >
                        <stop offset="0%" stopColor="#CBC9BE" />
                        <stop
                          offset="100%"
                          stopColor="#C8C5BB"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="#D9D6CC"
                        fillRule="nonzero"
                        d="M77.023 93C26.523 93 0 123.817 0 170.023V579.13c0 46.207 26.523 77.023 77.023 77.023h595.954c50.5 0 77.023-30.816 77.023-77.023V170.023C750 123.817 723.477 93 672.977 93H77.023Z"
                      />
                      <path
                        fill="#F16D5E"
                        fillRule="nonzero"
                        d="M83.104 124.576c-39.973 0-51.877 23.956-51.877 53.713v195.828l176.408.326c47.13.088 66.427 19.048 86.066 45.579 5.002 6.756 11.086 15.914 17.028 21.86 17.74 17.759 41.005 26.63 64.271 26.63s46.53-8.871 64.272-26.63c5.941-5.946 12.025-15.104 17.027-21.86 19.639-26.53 38.937-45.491 86.066-45.579l176.408-.326V178.29c0-29.757-11.904-53.713-51.876-53.713H83.104Z"
                      />
                      <path
                        fill="#3295C9"
                        fillRule="nonzero"
                        d="M83.104 124.576c-39.973 0-51.877 23.956-51.877 53.713v62.74c0-29.757 11.904-53.712 51.877-53.712h583.793c39.972 0 51.876 23.955 51.876 53.713v-62.74c0-29.758-11.904-53.714-51.876-53.714H83.104Z"
                      />
                      <g transform="translate(31.227 124.576)">
                        <mask id="applewallet_svg__b" fill="#fff">
                          <use xlinkHref="#applewallet_svg__a" />
                        </mask>
                        <path
                          fill="#000"
                          fillOpacity="0.318"
                          fillRule="nonzero"
                          d="M51.877 62.74C11.905 62.74 0 86.697 0 116.454v62.741c0-29.757 11.905-53.713 51.877-53.713H635.67c39.972 0 51.877 23.956 51.877 53.713v-62.74c0-29.758-11.905-53.713-51.877-53.713H51.877Z"
                          mask="url(#applewallet_svg__b)"
                        />
                      </g>
                      <path
                        fill="#FCAD00"
                        fillRule="nonzero"
                        d="M83.104 187.317c-39.973 0-51.877 23.955-51.877 53.713v62.74c0-29.757 11.904-53.713 51.877-53.713h583.793c39.972 0 51.876 23.956 51.876 53.713v-62.74c0-29.758-11.904-53.713-51.876-53.713H83.104Z"
                      />
                      <g transform="translate(31.227 124.576)">
                        <mask id="applewallet_svg__d" fill="#fff">
                          <use xlinkHref="#applewallet_svg__c" />
                        </mask>
                        <path
                          fill="#000"
                          fillOpacity="0.314"
                          fillRule="nonzero"
                          d="M51.877 125.481C11.905 125.481 0 149.437 0 179.194v62.74c0-29.757 11.905-53.712 51.877-53.712H635.67c39.972 0 51.877 23.955 51.877 53.713v-62.74c0-29.758-11.905-53.714-51.877-53.714H51.877Z"
                          mask="url(#applewallet_svg__d)"
                        />
                      </g>
                      <path
                        fill="#50BE3D"
                        fillRule="nonzero"
                        d="M83.104 250.057c-39.973 0-51.877 23.956-51.877 53.713v62.74c0-29.757 11.904-53.712 51.877-53.712h583.793c39.972 0 51.876 23.955 51.876 53.713v-62.74c0-29.758-11.904-53.714-51.876-53.714H83.104Z"
                      />
                      <g transform="translate(31.227 124.576)">
                        <mask id="applewallet_svg__f" fill="#fff">
                          <use xlinkHref="#applewallet_svg__e" />
                        </mask>
                        <path
                          fill="#000"
                          fillOpacity="0.314"
                          fillRule="nonzero"
                          d="M51.877 188.222C11.905 188.222 0 212.177 0 241.935v62.74c0-29.757 11.905-53.713 51.877-53.713H635.67c39.972 0 51.877 23.956 51.877 53.713v-62.74c0-29.758-11.905-53.713-51.877-53.713H51.877Z"
                          mask="url(#applewallet_svg__f)"
                        />
                      </g>
                      <path
                        fill="url(#applewallet_svg__g)"
                        fillRule="nonzero"
                        d="M0 235.148h31.227v45.969H0z"
                        transform="translate(0 93)"
                      />
                      <path
                        fill="url(#applewallet_svg__h)"
                        fillRule="nonzero"
                        d="M718.773 235.148H750v45.969h-31.227z"
                        transform="translate(0 93)"
                      />
                    </g>
                  </svg>
                  <div className="label">Add to Wallet</div>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
