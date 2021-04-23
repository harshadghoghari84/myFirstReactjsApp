import React from "react";
import { NavLink } from "react-router-dom";

const Common = ({ title, btnName, img }) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {title}
                    <strong className="brand-name"> BeBrand </strong>
                  </h1>
                  <h2 className="my-3">we are the team of BeBrand developer</h2>
                  <div className="mt-3">
                    <NavLink to="/services" className="btn-get-started">
                      {btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={img}
                    className="img-fluid animated"
                    alt="home image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
