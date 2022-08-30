<template>
  <div
    :class="theme === 'light' ? 'light-theme' : 'dark-theme'"
    class="main-body"
  >
    <div style="padding: 5px">
      <div class="text">Press the Button for change the theme</div>
      <button class="btn" @click="changeTheme">
        {{ button ? "Dark" : "Light" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      button: true,
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.button = !this.button;
    },
  },
};
</script>

<style scoped>
.main-body {
  height: 100vh;
  padding: 0 2px 0 2px;
}
.light-theme {
  background-color: white;
  color: black;
}
.dark-theme {
  background-color: black;
  color: white;
}
.text {
  margin-top: 20px;
  margin-bottom: 20px;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
}
.btn {
  background: darkblue;
  color: white;
  font-size: 20px;
  font-weight: 600;
  height: 40px;
  width: 100px;
  border-radius: 10px;
  border: none;
}
</style>