import React, { useState, useRef } from 'react';
import ShoppingCartStl from './ShoppingCartStl';

const ShoppingCartStf = () => {
  const refComment = useRef(null);
  const [myOrder, setMyOrder] = useState({
    shopCart: [],
    items: [],
    total: 0,
  });

  return myOrder.items.length > 0 ? (
    <ShoppingCartStl
      products={myOrder.items}
      totalCart={myOrder.total}
      refComment={refComment}
    />
  ) : (
    <h1>Cargando...</h1>
  );
};

export default ShoppingCartStf;
