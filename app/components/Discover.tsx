import React from 'react';
import './Discover.css';

const ProductSection: React.FC = () => {
  return (
    <div className="product-section">
      <header className="product-header">
        <h1 className="title">DISCOVER OUR PRODUCTS</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </header>
      <div className="product-footer">
        <span className="item-count">3425 ITEMS</span>
        <button className="filter-toggle">HIDE FILTER</button>
        {/* <div style={styles.headerActions}>
            <span> Items</span>
            <select style={styles.dropdown}>
              <option value="recommended">Recommended</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
            </select>
          </div> */}
      </div>
    </div>
  );
};
export default ProductSection;
