import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className="item-list">
      <div className="product-section">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;