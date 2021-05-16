<template>
  <div class="toast" v-show="toastShow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toastShow: false,
      message: ''
    }
  },
  methods: {
    show(message,duration) {

      this.toastShow = true;
      this.message = message;

      setTimeout(() => {
        this.toastShow = false;
        this.message = ''
      },duration)
    }
  }
}
</script>

<style>
.toast {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 45px;
  width: 195px;
  left: 50%;
  top: 70%;
  z-index: 12;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.7);
}
.toast p {
  color: #fff;
}
</style>
