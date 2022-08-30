<template>
  <div v-if="loader == true" class="loader">
    <Loader />
  </div>
  <div id="table-scroll" class="table-scroll">
    <table v-if="loader == false" id="main-table" class="main-table">
      <thead>
        <tr>
          <th scope="col">API</th>
          <th scope="col">Auth</th>
          <th scope="col">Category</th>
          <th scope="col">Cors</th>
          <th scope="col">Description</th>
          <th scope="col">HTTPS</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data.entries" :key="{index}">
        <tr>
          <th>{{item.API}}</th>
          <td>
            {{item.Auth}}
          </td>
          <td>{{item.Category}}</td>
          <td>{{item.Cors}}</td>
          <td>{{item.Description}}</td>
          <td>{{item.HTTPS}}</td>
          <td>{{item.Link}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>{{data.count}}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Loader from "./Loader.vue"
// import Vue from 'vue';
import axios from "axios";
// import VueAxios from 'vue-axios';
// const app = Vue.createApp()
// app.use(VueAxios, axios)

export default {
  name: "HelloWorld",
  components:{
    Loader,    
  },
  data() {
    return {
      data: [],
      loader: true,
    };
  },
  async mounted() {
    let result = await axios.get("https://api.publicapis.org/entries");
    this.data = result.data;
    console.log(this.data.count, this.data.entries[0].API);
    this.loader = false;
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
.table-scroll {
  position: relative;
  width: 100%;
  z-index: 1;
  margin: auto;
  overflow: auto;
  height: 350px;
}
.table-scroll table {
  width: 100%;
  min-width: 1280px;
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
}
.table-wrap {
  position: relative;
}
.table-scroll th,
.table-scroll td {
  padding: 5px 10px;
  border: 1px solid #000;
  background: #fff;
  vertical-align: top;
}
.table-scroll thead th {
  background: #333;
  color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
/* safari and ios need the tfoot itself to be position:sticky also */
.table-scroll tfoot,
.table-scroll tfoot th,
.table-scroll tfoot td {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background: #666;
  color: #fff;
  z-index: 4;
}

a:focus {
  background: red;
} /* testing links*/

th:first-child {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 2;
  background: #ccc;
}
thead th:first-child,
tfoot th:first-child {
  z-index: 5;
}

/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
