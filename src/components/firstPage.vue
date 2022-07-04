<template>
  <div class="modal" v-if="modals == true" @click="modals = false">
    <div class="modal-bg">
      <h4>{{ modalTitle }}</h4>
      <p>{{ modalDetail }}</p>
      <div>
        <router-link to="/next">next</router-link>
      </div>
      <div>
        <router-link to="/hello">hello</router-link>
      </div>
    </div>
  </div>

  <div class="menu">
    <h1 :class="text1">vuedongsan</h1>
  </div>

  <div class="room" v-for="a in rooms" :key="a">
    <img :src="a.image" alt="" style="width: 100%" />
    <h4>{{ a.title }}</h4>
    <h4>{{ a.price }}</h4>
    <label :style="text1">{{ report }}</label>
    <button
      v-on:click="
        increase(),
          (modals = true),
          (modalDetail = a.content),
          (modalTitle = a.title)
      "
    >
      {{ btn }}
    </button>
  </div>
</template>

<script>
import room from "./data";

export default {
  name: "App",
  data() {
    return {
      rooms: room,
      modals: false,
      modalTitle: "modal title",
      modalDetail: "modal detail",
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
