import React from "react";

export default function BodyItems({ bodyItems }) {
  return (
    <div className="container marketing my-5">
      <div className="row my-5">
        {bodyItems?.map((bodyItem, index) => {
          return (
            <div className="col-lg-4 text-center my-5 text-muted" key={index}>
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 140x140"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>{bodyItem?.carousels?.upperBodyHead}</h2>
              <p>{bodyItem?.carousels?.upperBodyText}</p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details »
                </a>
              </p>
            </div>
          );
        })}
      </div>

      <hr className="featurette-divider my-5" />

      {bodyItems?.map((bodyItem, index) => {
        return (
          <div key={index}>
            <div className="row featurette d-flex justify-content-center align-items-center my-5">
              <div
                className={`${
                  index === 0
                    ? "col-md-7 text-start"
                    : index === 1
                    ? "col-md-7 order-md-2"
                    : "col-md-7"
                } my-4 px-3`}
              >
                <h2 className="featurette-heading">
                  {bodyItem?.carousels?.midBodyHeadFirst}{" "}
                  <span className="text-muted">
                    {bodyItem?.carousels?.midBodyHeadSecond}.
                  </span>
                </h2>
                <p className="lead">
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </div>
              <div
                className={`${
                  index === 0
                    ? "col-md-5"
                    : index === 1
                    ? "col-md-5 order-md-1"
                    : "col-md-5"
                } my-4 px-3`}
              >
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: 500x500"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#eee"></rect>
                  <text x="50%" y="50%" fill="#aaa" dy=".3em">
                    500x500
                  </text>
                </svg>
              </div>
            </div>

            <hr className="featurette-divider my-5" />
          </div>
        );
      })}
    </div>
  );
}
