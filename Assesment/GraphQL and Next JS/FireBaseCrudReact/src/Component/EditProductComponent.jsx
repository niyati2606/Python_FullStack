import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/MyState";
import Header from "../Common/Header";

function EditProductComponent() {

  const context = useContext(MyContext)
  // console.log(context)

  const { products, setProducts, editProduct } = context;

  const setValues = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value
    })
    console.log(products)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct();
  };

  return (

    <div>
      <Header />
      <div className="container py-4" style={{ maxWidth: 720 }}>
        {/* Top bar */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">Edit product</h4>
          <button type="button" className="btn btn-outline-secondary btn-sm">
            ← Back to products
          </button>
        </div>

        <div className="card shadow-sm">
          <div className="card-body p-4">
            <form>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Product name</label>
                <input
                  id="name"
                  value={products.product_name}
                  name="product_name"
                  onChange={setValues}
                  type="text"
                  className="form-control"
                />
              </div>

              {/* Price + Category */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input
                      id="price"
                      value={products.product_price}
                      name="product_price"
                      onChange={setValues} type="number"
                      min="0"
                      className="form-control"

                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <input
                    id="category"
                    type="text"
                    className="form-control"
                    value={products.product_category}
                    name="product_category"
                    onChange={setValues}
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input
                  id="image"
                  value={products.product_img}
                  name="product_img"
                  onChange={setValues} type="url"
                  className="form-control" />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  onChange={setValues}
                  value={products.prodcut_description}
                  name="prodcut_description" rows={4}
                  className="form-control" />
              </div>

              {/* Actions */}
              <div className="d-flex justify-content-end gap-2">
                <Link to="/" type="button" className="btn btn-outline-secondary">Cancel</Link>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Update product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductComponent