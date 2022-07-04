<template>
  <div class="menu">
    <h1 v-for="i in 3" :key="i" :class="text1">vuedongsan</h1>
  </div>

  <div class="modal">
    <div class="modal-bg"></div>
  </div>

  <label :style="text1">{{ report }}</label>
  <button v-on:click="increase">
    {{ btn }}
  </button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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

.menu {
  background-color: #2c3e50;
}

.menu h1 {
  color: orange;
}
</style>
