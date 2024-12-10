"use client";

import React, { useEffect, useState } from "react";
import "./FilterSection.css";
import "./product.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const filters = [
  { label: "IDEAL FOR", value: "All" },
  { label: "OCCASION", value: "All" },
  { label: "WORK", value: "All" },
  { label: "FABRIC", value: "All" },
  { label: "SEGMENT", value: "All" },
  { label: "SUITABLE FOR", value: "All" },
  { label: "RAW MATERIALS", value: "All" },
  { label: "PATTERN", value: "All" },
];

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Keeps original products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // For filtered data
  const [loading, setLoading] = useState<boolean>(true);
  const [sort, setSort] = useState<string>("recommended");
  const [expandedFilters, setExpandedFilters] = useState<Set<string>>(new Set());

  // Fetch products and initialize states
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          cache: "no-store", // Fetch fresh data
        });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();
        setProducts(data); // Save the original products list
        setFilteredProducts(data); // Initialize filtered products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle sorting functionality
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (value === "price_low_high") {
        return a.price - b.price;
      } else if (value === "price_high_low") {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sorted);
  };

  // Toggle filters
  const toggleFilter = (label: string) => {
    const newExpandedFilters = new Set(expandedFilters);
    if (newExpandedFilters.has(label)) {
      newExpandedFilters.delete(label);
    } else {
      newExpandedFilters.add(label);
    }
    setExpandedFilters(newExpandedFilters);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }
  const resetFilters = () => {
    setFilteredProducts(products); // Reset to the original list
  };
  
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="filter-section">
          <div className="filter-item">
            <label>
              <input type="checkbox" />
              CUSTOMIZABLE
            </label>
          </div>
          <hr />
          {filters.map((filter) => (
            <div key={filter.label} className="filter-item">
              <div className="filter-header" onClick={() => toggleFilter(filter.label)}>
                <span>{filter.label}</span>
                <span className="toggle-icon">{expandedFilters.has(filter.label) ? "▲" : "▼"}</span>
              </div>
              {expandedFilters.has(filter.label) && (
                <div className="filter-content">
                  <span>{filter.value}</span>
                </div>
              )}
              <hr />
            </div>
          ))}
            <button onClick={resetFilters}>Reset Filters</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="header-actions">
            <span>{filteredProducts.length} Items</span>

            <select value={sort} onChange={handleSort} className="dropdown">
              <option value="recommended">Recommended</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
            </select>
          </div>
        </header>

        <section className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h4 className="product-title">{product.title}</h4>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
