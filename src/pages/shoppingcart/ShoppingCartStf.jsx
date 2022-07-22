import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartStl from './ShoppingCartStl';
import ProductService from '../../core/services/ProductsService';

const ShoppingCartStf = () => {
  const [myOrder, setMyOrder] = useState({
    shopCart: [],
    items: [],
    total: 0,
  });

  const shoppingCart = useSelector((state) => state.shoppingCart);
  console.log(shoppingCart);
  const getOrder = async () => {
    let arrayProducts = [];
    let shopCart = [];
    let totalCart = 0;
    for (let index = 0; index < shoppingCart.length; index++) {
      const productId = shoppingCart[index]['id'];
      const quantity = shoppingCart[index]['quantity'];
      const productResponse = await ProductService.getById(productId);
      if (productResponse.success) {
        const productTemp = productResponse.data;
        productTemp.quantity = quantity;
        productTemp.price = parseFloat(productTemp.salePrice);
        productTemp.total = parseFloat(
          parseFloat(quantity) * parseFloat(productTemp.salePrice)
        );
        totalCart = productTemp.total + totalCart;
        arrayProducts.push(productTemp);
        shopCart.push({
          productId: productId,
          quantity,
          total: productTemp.total,
        });
      }
    }
    setMyOrder({
      shopCart: shopCart,
      items: arrayProducts,
      total: totalCart,
    });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return myOrder.items.length > 0 ? (
    <ShoppingCartStl products={myOrder.items} totalCart={myOrder.total} />
  ) : (
    <h1>Cargando...</h1>
  );
};

export default ShoppingCartStf;
