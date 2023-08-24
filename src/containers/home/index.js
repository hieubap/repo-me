import React from "react";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="topNav">
          <div className="container">
            <div className="alignR">
              <div className="pull-left socialNw">
                <a href="#">
                  <span className="icon-twitter" />
                </a>
                <a href="#">
                  <span className="icon-facebook" />
                </a>
                <a href="#">
                  <span className="icon-youtube" />
                </a>
                <a href="#">
                  <span className="icon-tumblr" />
                </a>
              </div>
              <a href="index.html">
                {" "}
                <span className="icon-home" /> Home
              </a>
              <a href="#">
                <span className="icon-user" /> My Account
              </a>
              <a href="register.html">
                <span className="icon-edit" /> Free Register
              </a>
              <a href="contact.html">
                <span className="icon-envelope" /> Contact us
              </a>
              <a href="cart.html">
                <span className="icon-shopping-cart" /> 2 Item(s) -
                <span className="badge badge-warning"> $448.42</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*
Lower Header Section 
*/}
      <div className="container">
        <div id="gototop" />
        <Header></Header>
        {/*
Navigation Bar Section 
*/}
        <div className="navbar">
          <div className="navbar-inner">
            <div className="container">
              <a
                data-target=".nav-collapse"
                data-toggle="collapse"
                className="btn btn-navbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </a>
              <div className="nav-collapse">
                <ul className="nav">
                  <li className>
                    <a href="index.html">Home </a>
                  </li>
                  <li className>
                    <a href="list-view.html">List View</a>
                  </li>
                  <li className="active">
                    <a href="grid-view.html">Grid View</a>
                  </li>
                  <li className>
                    <a href="three-col.html">Three Column</a>
                  </li>
                  <li className>
                    <a href="four-col.html">Four Column</a>
                  </li>
                  <li className>
                    <a href="general.html">General Content</a>
                  </li>
                </ul>
                <form action="#" className="navbar-search pull-left">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-query span2"
                  />
                </form>
                <ul className="nav pull-right">
                  <li className="dropdown">
                    <a
                      data-toggle="dropdown"
                      className="dropdown-toggle"
                      href="#"
                    >
                      <span className="icon-lock" /> Login{" "}
                      <b className="caret" />
                    </a>
                    <div className="dropdown-menu">
                      <form className="form-horizontal loginFrm">
                        <div className="control-group">
                          <input
                            type="text"
                            className="span2"
                            id="inputEmail"
                            placeholder="Email"
                          />
                        </div>
                        <div className="control-group">
                          <input
                            type="password"
                            className="span2"
                            id="inputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="control-group">
                          <label className="checkbox">
                            <input type="checkbox" /> Remember me
                          </label>
                          <button type="submit" className="shopBtn btn-block">
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 
Body Section 
*/}
        <div className="row">
          <div id="sidebar" className="span3">
            <div className="well well-small">
              <ul className="nav nav-list">
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Watches
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Fine Jewelry
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Fashion Jewelry
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Engagement &amp; Wedding
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Men's Jewelry
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Vintage &amp; Antique
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Loose Diamonds
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    Loose Beads
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <span className="icon-chevron-right" />
                    See All Jewelry &amp; Watches
                  </a>
                </li>
                <li style={{ border: 0 }}>&nbsp;</li>
                <li>
                  <a className="totalInCart" href="cart.html">
                    <strong>
                      Total Amount
                      <span
                        className="badge badge-warning pull-right"
                        style={{ lineHeight: "18px" }}
                      >
                        $448.42
                      </span>
                    </strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="well well-small alert alert-warning cntr">
              <h2>50% Discount</h2>
              <p>
                only valid for online order. <br />
                <br />
                <a className="defaultBtn" href="#">
                  Click here
                </a>
              </p>
            </div>
            <div className="well well-small">
              <a href="#">
                <img src="assets/img/paypal.jpg" alt="payment method paypal" />
              </a>
            </div>
            <a className="shopBtn btn-block" href="#">
              Upcoming products <br />
              <small>Click to view</small>
            </a>
            <br />
            <br />
            <ul className="nav nav-list promowrapper">
              <li>
                <div className="thumbnail">
                  <a
                    className="zoomTool"
                    href="product_details.html"
                    title="add to cart"
                  >
                    <span className="icon-search" /> QUICK VIEW
                  </a>
                  <img
                    src="assets/img/bootstrap-ecommerce-templates.png"
                    alt="bootstrap ecommerce templates"
                  />
                  <div className="caption">
                    <h4>
                      <a className="defaultBtn" href="product_details.html">
                        VIEW
                      </a>
                      <span className="pull-right">$22.00</span>
                    </h4>
                  </div>
                </div>
              </li>
              <li style={{ border: 0 }}>&nbsp;</li>
              <li>
                <div className="thumbnail">
                  <a
                    className="zoomTool"
                    href="product_details.html"
                    title="add to cart"
                  >
                    <span className="icon-search" /> QUICK VIEW
                  </a>
                  <img
                    src="assets/img/shopping-cart-template.png"
                    alt="shopping cart template"
                  />
                  <div className="caption">
                    <h4>
                      <a className="defaultBtn" href="product_details.html">
                        VIEW
                      </a>
                      <span className="pull-right">$22.00</span>
                    </h4>
                  </div>
                </div>
              </li>
              <li style={{ border: 0 }}>&nbsp;</li>
              <li>
                <div className="thumbnail">
                  <a
                    className="zoomTool"
                    href="product_details.html"
                    title="add to cart"
                  >
                    <span className="icon-search" /> QUICK VIEW
                  </a>
                  <img
                    src="assets/img/bootstrap-template.png"
                    alt="bootstrap template"
                  />
                  <div className="caption">
                    <h4>
                      <a className="defaultBtn" href="product_details.html">
                        VIEW
                      </a>
                      <span className="pull-right">$22.00</span>
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="span9">
            {/*
New Products
*/}
            <div className="well well-small">
              <h3>Our Products</h3>
              <div className="row-fluid">
                <ul className="thumbnails">
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/a.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/b.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/c.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row-fluid">
                <ul className="thumbnails">
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/d.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/e.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/f.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row-fluid">
                <ul className="thumbnails">
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/g.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/h.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/i.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row-fluid">
                <ul className="thumbnails">
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/a.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/b.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                  <li className="span4">
                    <div className="thumbnail">
                      <a href="product_details.html" className="overlay" />
                      <a
                        className="zoomTool"
                        href="product_details.html"
                        title="add to cart"
                      >
                        <span className="icon-search" /> QUICK VIEW
                      </a>
                      <a href="product_details.html">
                        <img src="assets/img/c.jpg" alt="" />
                      </a>
                      <div className="caption cntr">
                        <p>Manicure &amp; Pedicure</p>
                        <p>
                          <strong> $22.00</strong>
                        </p>
                        <h4>
                          <a className="shopBtn" href="#" title="add to cart">
                            Add to cart
                          </a>
                        </h4>
                        <div className="actionList">
                          <a className="pull-left" href="#">
                            Add to Wish List{" "}
                          </a>
                          <a className="pull-left" href="#">
                            {" "}
                            Add to Compare{" "}
                          </a>
                        </div>
                        <br className="clr" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 
Clients 
*/}
        <section className="our_client">
          <hr className="soften" />
          <h4 className="title cntr">
            <span className="text">Manufactures</span>
          </h4>
          <hr className="soften" />
          <div className="row">
            <div className="span2">
              <a href="#">
                <img alt="" src="assets/img/1.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt="" src="assets/img/2.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt="" src="assets/img/3.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt="" src="assets/img/4.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt="" src="assets/img/5.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt="" src="assets/img/6.png" />
              </a>
            </div>
          </div>
        </section>
        {/*
Footer
*/}
        <footer className="footer">
          <div className="row-fluid">
            <div className="span2">
              <h5>Your Account</h5>
              <a href="#">YOUR ACCOUNT</a>
              <br />
              <a href="#">PERSONAL INFORMATION</a>
              <br />
              <a href="#">ADDRESSES</a>
              <br />
              <a href="#">DISCOUNT</a>
              <br />
              <a href="#">ORDER HISTORY</a>
              <br />
            </div>
            <div className="span2">
              <h5>Iinformation</h5>
              <a href="contact.html">CONTACT</a>
              <br />
              <a href="#">SITEMAP</a>
              <br />
              <a href="#">LEGAL NOTICE</a>
              <br />
              <a href="#">TERMS AND CONDITIONS</a>
              <br />
              <a href="#">ABOUT US</a>
              <br />
            </div>
            <div className="span2">
              <h5>Our Offer</h5>
              <a href="#">NEW PRODUCTS</a> <br />
              <a href="#">TOP SELLERS</a>
              <br />
              <a href="#">SPECIALS</a>
              <br />
              <a href="#">MANUFACTURERS</a>
              <br />
              <a href="#">SUPPLIERS</a> <br />
            </div>
            <div className="span6">
              <h5>The standard chunk of Lorem</h5>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </div>
          </div>
        </footer>
      </div>
      {/* /container */}
      <div className="copyright">
        <div className="container">
          <p className="pull-right">
            <a href="#">
              <img src="assets/img/maestro.png" alt="payment" />
            </a>
            <a href="#">
              <img src="assets/img/mc.png" alt="payment" />
            </a>
            <a href="#">
              <img src="assets/img/pp.png" alt="payment" />
            </a>
            <a href="#">
              <img src="assets/img/visa.png" alt="payment" />
            </a>
            <a href="#">
              <img src="assets/img/disc.png" alt="payment" />
            </a>
          </p>
          <span>
            Copyright © 2013
            <br />
            bootstrap ecommerce shopping template
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
