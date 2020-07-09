import product from '../api/product';
import cart from '../api/cart';

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

export const addProductToCart = ({
    commit
}, {
    product,
    quantity
}) => {
    commit('ADD_TO_CART', {
        product,
        quantity
    })
    cart.post({
        product_id: product.id,
        quantity
    });
};

export const getCartItems = ({
    commit
}) => {
    cart.all().then((response) => {
        commit("SET_CART", response.data);
    });
};

export const removeProductFromCart = ({
    commit
}, product) => {
    commit("REMOVE_PRODUCT_FROM_CART", product);
    cart.delete(product.id);
}

export const clearCartItems = ({
    commit
}) => {
    commit("CLEAR_CART_ITEMS");
    cart.deleteAll();
}