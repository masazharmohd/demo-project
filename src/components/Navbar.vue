<template>
  <ul class="menu">
    <div
      class="menu-indicator"
      :style="{ width: '100%' }"
    ></div>
    <li
      class="menu-item"
      @click="sliderIndicator(1)"
    >
      <router-link
        class="menu-link"
        :class="selectedIndex === 1 ? 'active' : null"
        to="/"
        >Home</router-link
      >
    </li>
    <li
      class="menu-item"
      @click="sliderIndicator(2)"
    >
      <router-link
        class="menu-link"
        :class="selectedIndex === 2 ? 'active' : null"
        to="/cards"
        >Cards</router-link
      >
    </li>
    <li
      class="menu-item"
      @click="sliderIndicator(3)"
    >
      <router-link
        class="menu-link"
        :class="selectedIndex === 3 ? 'active' : null"
        to="/dark-and-light"
        >Dark and Light</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    sliderIndicator(id) {
      this.selectedIndex = id;
    },
  },
};
</script>

<style>
:root {
  --active-color: #ffee93;
  --link-text-color: #f1faee;
  --menu-background-color: #1d3557;
  --active-background-color: #132238;
}
/* ul */
.menu {
  padding: 0;
  margin: 0;
  position: relative;
  background-color: var(--menu-background-color);
  display: sflex;
  border-radius: 4px;
  list-style-type: none;
  overflow: hidden;
}
/* li */
.menu-item {
  display: inline-flex;
}
/* a */
.menu-link {
  padding: 0.75rem 1rem;
  display: inline-flex;
  align-items: center;
  color: var(--link-text-color);
  text-decoration: none;
}
.menu-link:hover,
.menu-link.active {
  color: var(--active-color);
  background-color: var(--active-background-color);
}
/* icon */
.menu-icon {
  height: 1.5rem;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin-right: 0.2rem;
}
/* slider */
.menu-indicator {
  position: absolute;
  height: 0.25rem;
  background-color: var(--active-color);
  bottom: 0;
  left: 0;
  margin: auto;
  width: 3rem;
  transition: all ease 0.5s;
}
</style>
