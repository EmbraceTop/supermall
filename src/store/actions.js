
export default {
  addCart({state,getters,commit},payload) {
    return new Promise((resolve) => {
      let oldProduct = state.cartList.find(item => item.iid === payload.iid);

    if (oldProduct) {
      commit('addCounter',oldProduct);
      resolve('添加成功，商品数量+1~');
    }else{
      payload.count = 1;
      commit('addToCart',payload);
      resolve('添加成功，在购物车等亲~');
    }
    })
  }
}
