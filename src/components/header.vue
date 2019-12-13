<template>
  <div class="head">
    <ul>
      <li v-for="(item,index) in head" :key="index">
        <p @click="goTo(item.id)">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "head",
  data() {
    return {
      head: [
        {
          id: 0,
          name: "首页"
        },
        {
          id: 1,
          name: "我要卖车"
        },
        {
          id: 2,
          name: "我要买车"
        },
        {
          id: 3,
          name: "服务"
        },
        {
          id: 4,
          name: "金融"
        },
        {
          id: 5,
          name: "集团介绍"
        }
      ]
    };
  },
  methods: {
    goTo(i) {
      if (i == 0) {
        this.$router.push({ name: "index" });
      } else if (i == 1) {
        this.$router.push({ name: "sale" });
      } else if (i == 2) {
        this.$router.push({ name: "buy" });
      } else if (i == 3) {
        this.$router.push({ name: "service" });
      } else if (i == 4) {
        this.$router.push({ name: "money" });
      } else if (i == 5) {
        this.$router.push({ name: "info" });
      }
    }
  }
};
</script>
<style scoped>
ul {
  width: 80%;
  height: 60px;
  margin: auto;
  list-style: none;
  display: flex;
  justify-content: space-around;
}
li {
  width: 140px;
  float: left;
}
li p {
  color: black;
  cursor: pointer;
  text-align: center;
}
</style>