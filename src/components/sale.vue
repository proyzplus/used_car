<template>
  <div class="sale">
    <div class="header">
      <div class="header_top">
        <headtop></headtop>
        <div class="header_search">
          <button class="but_one" @click="chose">{{country}}</button>
          <input type="text" name id="sss" />
          <button class="but_two">高价卖车</button>
        </div>
        <div class="display" v-if="address">
          <p v-for="item in city" :key="item" @click="dis(item.name)">{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="main_box">
      <div class="nox_head">
        <p>保卖服务</p>
      </div>
      <div class="nox_main">
        <div class="nox_list" v-for="(item,index) in salecar" :key="index">
          <div class="nox_img">
            <img :src="item.img" alt />
          </div>
          <p>{{item.w_a}}</p>
          <p style="font-size: 10px;">{{item.w_s}}</p>
          <p style="font-size: 10px;">{{item.w_t}}</p>
        </div>
      </div>
      <div class="nox_heads">
        <p>查看全部车型</p>
      </div>
    </div>
    <p class="but">通过我们的服务，已帮助9390664位车主成功售出爱车</p>
  </div>
</template>

<script>
import headtop from "./header";
export default {
  name: "sale",
  components: {
    headtop
  },
  data() {
    return {
      key: "",
      address: false,
      salecar: [
        {
          img: "https://x.autoimg.cn/2scimg/pc/web/20190316/icon08.png",
          w_a: "多渠道",
          w_s: "万千买家出价",
          w_t: "卖家卖出高价"
        },
        {
          img: "https://x.autoimg.cn/2scimg/pc/web/20190316/icon09.png",
          w_a: "零费用",
          w_s: "从登记信息到成交",
          w_t: "全程0费用"
        },
        {
          img: "https://x.autoimg.cn/2scimg/pc/web/20190316/icon10.png",
          w_a: "成交快",
          w_s: "高效检测上拍",
          w_t: "快至一天出售"
        }
      ],

      city: [
        {
          name: "北京"
        },
        {
          name: "天津"
        },
        {
          name: "武汉"
        },
        {
          name: "郑州"
        },
        {
          name: "广州"
        },
        {
          name: "上海"
        },
        {
          name: "杭州"
        },
        {
          name: "重庆"
        },
        {
          name: "成都"
        },
        {
          name: "福建"
        }
      ],
      country: "南阳"
    };
  },
  methods: {
    dis(val) {
      this.country = val;
      this.address = false;
    },
    chose() {
      this.address = true;
    },
    onSearch() {}
  }
};
</script>

<style scoped>
.but {
  position: relative;
  top: -100px;
  width: 320px;
  margin: auto;
  text-align: center;
}
.nox_heads:hover {
  background: #ff6900;
  color: #ffffff;
  cursor: pointer;
}
.nox_heads {
  text-align: center;
  line-height: 34px;
  font-size: 20px;
  width: 300px;
  height: 70px;
  border: 1px solid #ff6900;
  margin: auto;
  border-radius: 6px;
  position: relative;
  top: 54px;
}
.nox_list:hover {
  border-radius: 12px;
  margin-top: 6px;
}
.nox_list p {
  line-height: 10px;
}
.nox_img img:hover{
  width: 400px;
  height: 400px;
  margin-top: -180px;
}
.nox_img img {
  width: 100%;
  height: 100%;
}
.nox_img {
  width: 100%;
  height: 160px;
}
.nox_list {
  width: 30%;
  height: 260px;
  text-align: center;
  border: 1px solid rgb(231, 247, 160);
}
.nox_main {
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 30px;
  width: 80%;
  height: 240px;
}
.nox_head {
  text-align: center;
  line-height: 34px;
  font-size: 20px;
  width: 300px;
  height: 70px;
  border: 1px solid rgb(231, 247, 160);
  margin: auto;
  position: relative;
  top: 14px;
}
.main_box {
  width: 65%;
  height: 500px;
  margin: auto;
  z-index: 999;
  position: relative;
  top: -160px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.display {
  text-align: center;
  overflow-y: auto;
  width: 80px;
  margin-top: -12px;
  position: fixed;
  left: 18.5%;
  height: 200px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.but_two {
  width: 120px;
  height: 36px;
  border-radius: 8px;
  background-color: #ff6900;
  border: 0;
  color: #ffffff;
}
.but_one {
  width: 60px;
  height: 40px;
  border: 0;
}
#sss {
  width: 60%;
  height: 36px;
}
.header_top {
  width: 100%;
  height: 460px;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575990012441&di=6d368ac4303b3684e76563b5306979f6&imgtype=0&src=http%3A%2F%2Fimg2.iautos.cn%2Fupload%2F2016%2F11%2F21%2F615765161121092214.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.word_usedcar {
  width: 80%;
  margin: auto;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
}
.header_search {
  text-align: center;
  padding-top: 40px;
  width: 80%;
  margin: auto;
  height: 60px;
}
</style>
