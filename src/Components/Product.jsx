import React, { useState } from "react";
import "./Style.css";
const Product = ({ setobj, obj, setvalue, value }) => {
  const [cartStatus, setCartStatus] = useState({});

  const cartAdd = (productId) => {
    setCartStatus({ ...cartStatus, [productId]: true });
    setvalue((val) => val + 1);
  };
  const cartRemove = (productId) => {
    setCartStatus({ ...cartStatus, [productId]: false });
    setvalue((val) => val - 1);
  };
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {obj.map((element, index) => {
              return (
                <div key={element.id} className="col mb-5">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{element.item}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className={element.star}></div>
                          <div className={element.star}></div>
                          <div className={element.star}></div>
                          <div className={element.star}></div>
                          <div className={element.star}></div>
                        </div>
                        <strike>{element.money.old}</strike>-{element.money.new}
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        {cartStatus[element.id] ? (
                          <a
                            className="btn removeButton btn-outline-dark mt-auto"
                            onClick={() => cartRemove(element.id)}
                          >
                            Remove from cart
                          </a>
                        ) : (
                          <a
                            className="btn addButton btn-outline-dark mt-auto"
                            onClick={() => cartAdd(element.id)}
                          >
                            Add to cart
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
