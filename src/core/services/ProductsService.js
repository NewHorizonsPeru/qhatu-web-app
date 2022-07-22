import instance from '../axios/instance';

const getAll = async () => {
  try {
    const productsReponse = await instance.get('/product/getAll');
    return {
      success: productsReponse.status === 200,
      data: productsReponse.data,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
};

const getById = async (productId) => {
  try {
    const productsReponse = await instance.get(`/product/getById/${productId}`);
    return {
      success: productsReponse.status === 200,
      data: productsReponse.data,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
};

const ProductsService = {
  getAll: getAll,
  getById: getById,
};

export default ProductsService;
