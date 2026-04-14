import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/css/cart.css";
import filledStar from "../components/imgcomponent/filled-star.png";
import emptyStar from "../components/imgcomponent/empty-star.png";
import Master from "../components/imgcomponent/Mastercard - png.png";
import Paystack from "../components/imgcomponent/Paystack - png.png";
import Visa from "../components/imgcomponent/Visa Inc. - png.png";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoCheckmark, IoClose } from "react-icons/io5";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../data/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    number: "",
    expiry: "",
    cvv: "",
  });
  const [paymentSummary, setPaymentSummary] = useState({
    items: 0,
    total: 0,
  });

  const totalItems = cartItems.length;
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  useEffect(() => {
    if (paymentStatus !== "processing") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      dispatch(clearCart());
      setPaymentStatus("success");
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [paymentStatus]);

  const handleCheckoutOpen = () => {
    if (cartItems.length === 0) {
      return;
    }

    setIsPaymentOpen(true);
    setPaymentStatus("idle");
  };

  const handlePaymentClose = () => {
    setIsPaymentOpen(false);
    setPaymentStatus("idle");
    setPaymentDetails({
      name: "",
      email: "",
      number: "",
      expiry: "",
      cvv: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPaymentDetails((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    setPaymentSummary({
      items: totalItems,
      total,
    });
    setPaymentStatus("processing");
  };

  const renderStars = (rating) => {
    const filledCount = Math.round(rating || 0);

    return Array.from({ length: 5 }, (_, index) => {
      const starSrc = index < filledCount ? filledStar : emptyStar;
      const altText = index < filledCount ? "filledStar" : "emptyStar";

      return (
        <img
          key={`${altText}-${index}`}
          src={starSrc}
          alt={altText}
          style={{ width: "12px", height: "12px" }}
        />
      );
    });
  };

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

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="cart-content" key={item.id}>
                  <div className="table-content">
                    <div className="image-section">
                      <div className="image">
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div>
                        <h4 className="title">{item.title}</h4>
                        <p className="in-stock">{item.availabilityStatus}</p>
                        <div className="star-container">
                          <div>{renderStars(item.rating)}</div>
                          <p className="review-no">
                            <span className="review-no">
                              {item.reviewsCount}
                            </span>
                            reviews
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="subtable-body">
                      <div className="add-container">
                        <button
                          type="button"
                          className="quantity-control minus"
                          disabled={item.quantity === 1}
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          <FiMinus />
                        </button>
                        <div className="result">
                          <h6 className="h6">{item.quantity}</h6>
                        </div>
                        <button
                          type="button"
                          className="quantity-control plus"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          <GoPlus />
                        </button>
                      </div>
                      <div className="price">
                        <div className="amount-container">
                          <span>$</span>
                          <p>{item.price.toFixed(2)}</p>
                        </div>
                        <div className="amount-containerr">
                          <p>
                            <span>$</span>
                            {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p>X</p>
                          <div className="multi-container">
                            <span>{item.quantity}</span>
                            <p>{item.quantity === 1 ? "item" : "items"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="delete-div"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <AiOutlineDelete />
                      <p className="remove">REMOVE</p>
                    </div>
                    <div className="div-line"></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="cart-empty-state">
                <h3>Your cart is empty</h3>
                <p>
                  Add a product from the product page and it will show up here.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="order-summary">
          <div className="summary-container">
            <div className="h2-container">
              <h2 className="heading-one">Order summary</h2>
              <div className="sumary-child">
                <p>
                  <span>{totalItems}</span> items
                </p>
              </div>
            </div>

            <div className="underline-checkout-first"></div>
            <div className="h2-container-sec">
              <h2 className="heading-three">Subtotal</h2>
              <p>
                $ <span>{subtotal.toFixed(2)}</span>
              </p>
            </div>
            <div className="underline-checkout"></div>
            <div className="h2-container-sec">
              <h2 className="heading-three">Tax Fee</h2>
              <p>
                $ <span>{tax.toFixed(2)}</span>
              </p>
            </div>
            <div className="underline-checkout"></div>
            <div className="h2-container-sec">
              <h2 className="heading-four">Total</h2>
              <p className="total-amnt">
                $ <span>{total.toFixed(2)}</span>
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
            <button
              type="button"
              disabled={cartItems.length === 0}
              onClick={handleCheckoutOpen}
            >
              Proceed to Checkout
            </button>
          </div>

          <div className="last-hori-rule"></div>

          <div className="mastercard-container">
            <img src={Paystack} alt="Paystack" />
            <img src={Master} alt="Master" />
            <img src={Visa} alt="Visa" />
          </div>
        </div>
      </div>
      <div className="cart-bestseller"></div>

      {isPaymentOpen && (
        <div className="payment-modal-backdrop" onClick={handlePaymentClose}>
          <div
            className="payment-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="payment-modal-header">
              <div>
                <p className="payment-modal-label">Demo Checkout</p>
                <h2>Secure payment preview</h2>
              </div>
              <button
                type="button"
                className="payment-close-button"
                onClick={handlePaymentClose}
                aria-label="Close payment modal"
              >
                <IoClose />
              </button>
            </div>

            {paymentStatus === "success" ? (
              <div className="payment-success-state">
                <div className="payment-success-icon">
                  <IoCheckmark />
                </div>
                <h3>Payment approved</h3>
                <p>
                  This was a demo payment simulation. No real transaction was
                  made and no card was charged.
                </p>
                <div className="payment-success-summary">
                  <div>
                    <span>Total paid</span>
                    <strong>${paymentSummary.total.toFixed(2)}</strong>
                  </div>
                  <div>
                    <span>Items processed</span>
                    <strong>{paymentSummary.items}</strong>
                  </div>
                  <div>
                    <span>Reference</span>
                    <strong>BDG-DEMO-2026</strong>
                  </div>
                </div>
                <button
                  type="button"
                  className="payment-primary-button"
                  onClick={handlePaymentClose}
                >
                  Back to Cart
                </button>
              </div>
            ) : (
              <div className="payment-modal-body">
                <div className="payment-card-panel">
                  <div className="payment-chip-row">
                    <span className="payment-chip">Card</span>
                    <div className="payment-brand-row">
                      <img src={Paystack} alt="Paystack" />
                      <img src={Master} alt="Mastercard" />
                      <img src={Visa} alt="Visa" />
                    </div>
                  </div>
                  <p className="payment-demo-note">
                    Demo mode only. Fill the form to simulate a successful
                    checkout experience.
                  </p>
                  <div className="payment-total-row">
                    <span>Amount to pay</span>
                    <strong>${total.toFixed(2)}</strong>
                  </div>
                </div>

                <form className="payment-form" onSubmit={handlePaymentSubmit}>
                  <div className="payment-field-group">
                    <label htmlFor="payment-name">Cardholder name</label>
                    <input
                      id="payment-name"
                      name="name"
                      type="text"
                      placeholder="Arome Ukpoju"
                      value={paymentDetails.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="payment-field-group">
                    <label htmlFor="payment-email">Email address</label>
                    <input
                      id="payment-email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={paymentDetails.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="payment-field-group">
                    <label htmlFor="payment-number">Card number</label>
                    <input
                      id="payment-number"
                      name="number"
                      type="text"
                      inputMode="numeric"
                      placeholder="4242 4242 4242 4242"
                      value={paymentDetails.number}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="payment-inline-fields">
                    <div className="payment-field-group">
                      <label htmlFor="payment-expiry">Expiry</label>
                      <input
                        id="payment-expiry"
                        name="expiry"
                        type="text"
                        placeholder="08/28"
                        value={paymentDetails.expiry}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="payment-field-group">
                      <label htmlFor="payment-cvv">CVV</label>
                      <input
                        id="payment-cvv"
                        name="cvv"
                        type="password"
                        inputMode="numeric"
                        placeholder="123"
                        value={paymentDetails.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="payment-primary-button"
                    disabled={paymentStatus === "processing"}
                  >
                    {paymentStatus === "processing"
                      ? "Processing Payment..."
                      : `Pay $${total.toFixed(2)}`}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
