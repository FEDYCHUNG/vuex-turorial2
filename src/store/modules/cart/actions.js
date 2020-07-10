import cart from '../../../api/cart';

export const addProductToCart = ({
    commit,
    dispatch
}, {
    product,
    quantity
}) => {
    commit('ADD_TO_CART', {
        product,
        quantity
    });

    dispatch("addNotification", {
        type: 'success',
        message: 'Product added to cart.'
    }, {
        root: true
    });

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