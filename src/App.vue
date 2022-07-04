<template>
  <div class="modal" v-if="modals == true" @click="modals = false">
    <div class="modal-bg">
      <h4>deatail</h4>
      <p>detail modal</p>
    </div>
  </div>

  <div class="menu">
    <h1 v-for="i in 3" :key="i" :class="text1">vuedongsan</h1>
  </div>

  <label :style="text1" v-for="i in 3" :key="i">{{ report }}</label>
  <button v-on:click="increase(), (modals = true)">
    {{ btn }}
  </button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      modals: false,
      report: 0,
      btn: "button",
      text1: {
        color: "red",
        fontfamily:
          '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
        margin: "20px",
      },
    };
  },
  methods: {
    increase() {
      this.report++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.modal {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.modal-bg {
  width: 50%;
  background: wheat;
  margin: 20% auto;
  padding: 30px;
  border-radius: 9px;
}

.menu {
  background-color: #2c3e50;
}

.menu h1 {
  color: orange;
}
</style>
