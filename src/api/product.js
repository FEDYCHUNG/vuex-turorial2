import api from './api';

const END_POINT = 'products';

export default {
    all(){
        return api.get(END_POINT);
    },
    show(productId){
        return api.get(`${END_POINT}/${productId}`);
    }
}