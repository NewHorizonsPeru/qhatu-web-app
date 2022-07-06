import React, { useState } from 'react';
import PurchasesStl from './PurchasesStl';

const PurchasesSfl = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: undefined,
  });

  return <PurchasesStl products={products} />;
};

export default PurchasesSfl;
