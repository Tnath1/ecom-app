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
import BestSeller from "./BestSeller";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../data/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.length;
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
              <h2 className=" heading-one">Order summary</h2>
              <div className="sumary-child">
                <p>
                  <span>{totalItems}</span> items
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
                $ <span>{subtotal.toFixed(2)}</span>
              </p>
            </div>
            <div className="underline-checkout"></div>
            <div className="h2-container-sec">
              <h2 className="heading-four">Total</h2>
              <p className="total-amnt">
                $ <span>{subtotal.toFixed(2)}</span>
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
            <button disabled={cartItems.length === 0}>Proceed to Checkout</button>
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
