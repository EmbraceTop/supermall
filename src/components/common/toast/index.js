import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器,导入的Toast包含模板等属性
  const toastConstructor = Vue.extend(Toast);

  // 2.用new的方式，根据组件构造器，可以创建出一个组件对象
  const toast = new toastConstructor();

  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'));

  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el);

  // 5.给Vue的原型加一个属性
  Vue.prototype.$toast = toast
}

export default obj
