import product from '../../../api/product';

export const getProducts = ({
    commit
}) => {
    product.all().then((response) => {
        commit("SET_PRODUCTS", response.data);
    });
};

export const getProduct = ({
    commit
}, productId) => {
    product.show(productId).then((response) => {
        commit("SET_PRODUCT", response.data);
    });
};