import api from './api';

const END_POINT = 'cart';

export default {
    all(){
        return api.get(END_POINT);
    },
    post(data){
        return api.post(END_POINT,data);
    },
    delete(productId){
        return api.delete(`${END_POINT}/${productId}`);
    },
    deleteAll(){
        return api.delete(END_POINT);
    }
}