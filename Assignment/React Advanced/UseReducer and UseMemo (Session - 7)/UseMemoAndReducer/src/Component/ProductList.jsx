import React, { useMemo, useState, useCallback } from "react";
import LikeButton from "./LikeButton";

function ProductList() {
  const [search, setSearch] = useState("");

  // Generate 1000 products
  const products = useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (Math.random() * 5000 + 100).toFixed(2),
    }));
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Memoized like handler
  const handleLike = useCallback((productId) => {
    console.log("Liked product:", productId);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="text-muted">
        Showing {filteredProducts.length} products
      </p>

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>

                <p className="card-text">
                  Price: ₹{product.price}
                </p>

                <LikeButton
                  onLike={() => handleLike(product.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;


// import React from "react";

// function ProductList() {
//   // Create 1000 products
//   const products = Array.from({ length: 1000 }, (_, index) => ({
//     id: index + 1,
//     name: `Product ${index + 1}`,
//     price: (index + 1) * 100,
//   }));

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-3">Product List</h2>

//       <div
//         className="border rounded p-3"
//         style={{
//           height: "500px",
//           overflowY: "scroll",
//         }}
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="card mb-2 p-3 shadow-sm"
//           >
//             <div className="d-flex justify-content-between">
//               <h5 className="mb-0">{product.name}</h5>
//               <span className="fw-bold text-success">
//                 ₹{product.price}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;
