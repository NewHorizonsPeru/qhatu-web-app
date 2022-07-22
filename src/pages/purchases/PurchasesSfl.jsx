import React, { useEffect, useState } from 'react';
import ProductsService from '../../core/services/ProductsService';
import PurchasesStl from './PurchasesStl';

const PurchasesSfl = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: undefined,
  });

  const getProducts = async () => {
    const productsReponse = await ProductsService.getAll();
    setProducts({
      data: productsReponse.data,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <PurchasesStl products={products} />;
};

export default PurchasesSfl;
