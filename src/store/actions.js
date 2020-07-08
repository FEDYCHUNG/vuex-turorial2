import axios from "axios";

export const getProducts = ({
    commit
}) => {
    axios.get("http://localhost:8000/api/products").then((response) => {
        commit("SET_PRODUCTS", response.data);
    });
};

export const getProduct = ({
    commit
}, productId) => {
    axios.get(`http://localhost:8000/api/products/${productId}`).then((response) => {
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
};