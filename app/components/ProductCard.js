// "use client";

// export default function ProductCard({ product }) {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} className="product-image" />
//       <div className="product-info">
//         <h2>Price: ${product.price}</h2>
//         <h2>{product.title}</h2>
//         <h3>Category: {product.category}</h3>
//         <p>{product.description}</p>
//       </div>
//       <style jsx>{`
//         .product-card {
//           border: 1px solid #e2e8f0;
//           border-radius: 8px;
//           padding: 15px;
//           text-align: left;
//           background-color: white;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
//         }

//         .product-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//         }

//         .product-image {
//           width: 100%;
//           height: auto;
//           max-height: 200px;
//           object-fit: contain;
//           border-bottom: 1px solid #e2e8f0;
//           margin-bottom: 10px;
//         }

//         .product-info {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         h2,
//         h3 {
//           margin: 0;
//           font-size: 1rem;
//           color: #2d3748;
//         }

//         p {
//           font-size: 0.9rem;
//           color: #4a5568;
//         }
//       `}</style>
//     </div>
//   );
// }

