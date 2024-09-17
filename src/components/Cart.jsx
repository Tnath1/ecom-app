import React from "react";
import "../components/css/cart.css";
import filledStar from "../components/imgcomponent/filled-star.png";
import emptyStar from "../components/imgcomponent/empty-star.png";
import Master from "../components/imgcomponent/Mastercard - png.png";
import Paystack from "../components/imgcomponent/Paystack - png.png";
import Visa from "../components/imgcomponent/Visa Inc. - png.png";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import BestSeller from "./BestSeller";

const Cart = () => {
  return (
    <div className="cart-container-wrapper">
      <div className="cart-container">
        <div className="shopping-cart">
          <div className="shopping-cart-container">
            <h2>Shopping Cart</h2>
            <div className="table-header">
              <p>Items Details</p>
              <div className="subtable-header">
                <p>Quantity</p>
                <p>price</p>
              </div>
            </div>
            {/* cart content  */}
            <div className="cart-content">
              <div className="table-content">
                <div className="image-section">
                  <div className="image"></div>
                  <div>
                    <h4 className="title">my title</h4>
                    <p className="in-stock">in stock</p>
                    <div className="star-container">
                      <div>
                        <img
                          src={filledStar}
                          alt="filledStar"
                          style={{ width: "12px", height: "12px" }}
                        />
                        <img
                          src={filledStar}
                          alt="filledStar"
                          style={{ width: "12px", height: "12px" }}
                        />
                        <img
                          src={filledStar}
                          alt="filledStar"
                          style={{ width: "12px", height: "12px" }}
                        />
                        <img
                          src={filledStar}
                          alt="filledStar"
                          style={{ width: "12px", height: "12px" }}
                        />
                        <img
                          src={emptyStar}
                          alt="filledStar"
                          style={{ width: "12px", height: "12px" }}
                        />
                      </div>
                      <p className="review-no">
                        <span className="review-no">28</span>reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className="subtable-body">
                  <div className="add-container">
                    <div className="minus">
                      <FiMinus />
                    </div>
                    <div className="result">
                      {" "}
                      <h6 className="h6">1</h6>
                    </div>
                    <div className="plus">
                      <GoPlus />
                    </div>
                  </div>
                  <div className="price">
                    <div className="amount-container">
                      <span>N</span>
                      <p>3000</p>
                    </div>
                    <div className="amount-containerr">
                      <p>
                        {" "}
                        <span>N</span>3000
                      </p>
                      <p> X</p>
                      <div className="multi-container">
                        <span>1</span> <p>item</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="delete-div">
                  <AiOutlineDelete />
                  <p className="remove">REMOVE</p>
                </div>
                <div className="div-line"></div>
              </div>
            </div>
            {/* cart content ends here  */}
          </div>
        </div>

        {/* order summary starts here */}
        <div className="order-summary">
          <div className="summary-container">
            <div className="h2-container">
              <h2 className=" heading-one">Order summary</h2>
              <div className="sumary-child">
                <p>
                  <span>4</span> items
                </p>
              </div>
            </div>

            <div className="h2-container-sec">
              <h2 className="heading-two">Order summary</h2>
              <p className="red-p">
                Add your delivery
                <br /> address to checkout to <br /> see delivery charges.
              </p>
            </div>
            <div className="underline-checkout-first"></div>
            <div className="h2-container-sec">
              <h2 className="heading-three">Subtotal</h2>
              <p>
                N <span>3000</span>
              </p>
            </div>
            <div className="underline-checkout"></div>
            <div className="h2-container-sec">
              <h2 className="heading-four">Total</h2>
              <p className="total-amnt">
                N <span>3000</span>
              </p>
            </div>
            <div className="underline-checkout"></div>
            <div className="div-last-div">
              <p className="last-p">
                Excluding Delivery
                <br /> Charges
              </p>
            </div>
          </div>
          <div className="btn-cont">
            <button>Proceed to Checkout</button>
          </div>

          <div className="last-hori-rule"></div>

          <div className="mastercard-container">
            <img src={Paystack} alt="Paystack" />
            <img src={Master} alt="Master" />
            <img src={Visa} alt="Visa" />
          </div>
        </div>
      </div>
      <div className="cart-bestseller">
        <BestSeller />
      </div>
    </div>
  );
};

export default Cart;
