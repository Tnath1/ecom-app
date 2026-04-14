import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdHeart } from "react-icons/io";
import "./css/loved.css";
import { removeLikedProduct } from "../data/likedSlice";

const Loved = () => {
  const dispatch = useDispatch();
  const lovedItems = useSelector((state) => state.liked.items);

  return (
    <main className="loved-page">
      <section className="loved-hero">
        <p className="loved-eyebrow">Saved Products</p>
        {/* <h1>Everything you have liked in one place.</h1> */}
        <p className="loved-copy">
          Keep track of products you want to come back to and remove them any
          time.
        </p>
      </section>

      {lovedItems.length > 0 ? (
        <section className="loved-grid">
          {lovedItems.map((item) => (
            <article className="loved-card" key={item.id}>
              <div className="loved-image-wrap">
                <img src={item.thumbnail} alt={item.title} />
                <button
                  type="button"
                  className="loved-remove-button"
                  onClick={() => dispatch(removeLikedProduct(item.id))}
                >
                  <IoMdHeart />
                </button>
              </div>

              <div className="loved-card-body">
                <p className="loved-stock">{item.availabilityStatus}</p>
                <h2>{item.title}</h2>
                <p className="loved-description">{item.description}</p>

                <div className="loved-meta">
                  <span>${item.price}</span>
                  <p>{item.reviewsCount} reviews</p>
                </div>

                <div className="loved-actions">
                  <Link to={`/product/${item.id}`} className="loved-view-link">
                    View Product
                  </Link>
                  <button
                    type="button"
                    className="loved-text-button"
                    onClick={() => dispatch(removeLikedProduct(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="loved-empty-state">
          <h2>No liked products yet</h2>
          <p>
            Tap the heart icon on a product page and your saved items will show
            up here.
          </p>
          <Link to="/shop" className="loved-shop-link">
            Explore Products
          </Link>
        </section>
      )}
    </main>
  );
};

export default Loved;
