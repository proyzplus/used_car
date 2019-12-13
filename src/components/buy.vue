<template>
  <div class="buy">
    <div class="buycar_header">
      <div class="header_top">
        <div class="return">
          <button @click="slae">我要卖车</button>
        </div>
        <div class="return">
          <button @click="service">服 务</button>
        </div>
      </div>
      <div class="buycar_input">
        <div class="buycar">
          <div class="buycar_left">
            <p>品牌</p>
          </div>
          <div class="buycar_right">
            <div class="car_list">
              <div class="list_img" v-for="(item,index) in buy_car" :key="index">
                <img :src="item.img" />
              </div>
            </div>
          </div>
        </div>
        <div class="buycar">
          <div class="buycar_left">
            <p>车系</p>
          </div>
          <div class="buycar_right">
            <div class="car_list">
              <div class="list_img" v-for="(item,index) in car_list" :key="index">
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="buycar">
          <div class="buycar_left">
            <p>价格</p>
          </div>
          <div class="buycar_right">
            <div class="car_list">
              <div class="list_img" v-for="(item,index) in price" :key="index">
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total">
      <div class="total_top">
        <button>查看全部</button>
      </div>
      <div class="total_list">
        <div class="list_car" v-for="(item,index) in list" :key="index">
          <div class="car_img">
            <img :src="item.img" style="width: 100%;height:240px" alt />
          </div>
          <div class="car_info">
            <p style="margin-left: 12px;">{{item.title}}</p>
            <p style="margin-left: 12px;">
              <span style="font-size: 12px;color: lightgray;">{{item.detail}}</span>
              <span style="font-size:  20px;color: #ff6900;">{{item.price}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buy",
  data() {
    return {
      buy_car: [
        {
          img: "//x.autoimg.cn/m/news/brand/3.jpg"
        },
        {
          img: "//x.autoimg.cn/m/news/brand/15.jpg"
        },
        {
          img: "//x.autoimg.cn/m/news/brand/14.jpg"
        },
        {
          img: "//x.autoimg.cn/m/news/brand/36.jpg"
        },
        {
          img: "//x.autoimg.cn/m/news/brand/33.jpg"
        },
        {
          img: "//x.autoimg.cn/m/news/brand/1.jpg"
        },
        {
          img: "//x.autoimg.cn/m/news/brand/52.jpg"
        },
        {
          img: "//x.autoimg.cn/m/news/brand/40.jpg"
        }
      ],
      car_list: [
        {
          name: "奔驰C级"
        },
        {
          name: "奔驰E级"
        },
        {
          name: "朗逸"
        },
        {
          name: "高尔夫"
        },
        {
          name: "大众POLO"
        },
        {
          name: "卡罗拉"
        },
        {
          name: "速腾"
        },
        {
          name: "迈腾"
        }
      ],
      price: [
        {
          name: "1-3万"
        },
        {
          name: "5万一下"
        },
        {
          name: "5-10万"
        },
        {
          name: "10-15万"
        },
        {
          name: "15-20万"
        },
        {
          name: "20-30万"
        },
        {
          name: "30-50万"
        },
        {
          name: "50-100万"
        }
      ],
      list: [
        {
          img:
            "https://image1.guazistatic.com/qn1912111919187e862ea6408279917e065962127d2b64.jpg",
          title: "奥迪Q5 2014款 1.6L 手动智尚型",
          detail: "2016年 | 2.7万公里 | 到店服务",
          price: "26.59万"
        },
        {
          img:
            "https://car-image.guazistatic.com/evaluates-bucket/eva6f6b0a87-ff2d-44fc-ad77-d4fd0a881d42.jpg",
          title: "海马S5 2014款 1.6L 手动智尚型",
          detail: "2016年 | 2.7万公里 | 到店服务",
          price: "4.63万"
        },
        {
          img:
            "https://image1.guazistatic.com/qn1912111425383fb9218994a6239e69aacb6918529b41.jpg",
          title: "陆风X7 2015款 2.0T 全景尊贵版",
          detail: "2016年 | 2.7万公里 | 到店服务",
          price: "7.34万"
        },
        {
          img:
            "https://image1.guazistatic.com/qn1912111552428d0f05f75b94ff78661938b16258be83.jpg",
          title: "大众 途观 2012款 1.8TSI 自动两驱风尚版",
          detail: "2013年 | 8.8万公里 | 到店服务",
          price: "9.65万"
        },
        {
          img:
            "https://car-image.guazistatic.com/evaluates-bucket/eva5f7ef7ad-5f9f-4942-b9fd-db95f8ddd87d.jpg",
          title: "菲亚特 致悦 2014款 1.4T 自动运动版",
          detail: "2016年 | 6.8万公里 | 到店服务",
          price: "6.49万"
        },
        {
          img:
            "https://image1.guazistatic.com/qn191211192951b5cda54dea1526b436abc92811904c73.jpg",
          title: "众泰T600 2015款 家用版 2.0T 手动豪华型",
          detail: "2018年 | 1.8万公里 | 到店服务",
          price: "6.66万"
        },
        {
          img:
            "https://car-image.guazistatic.com/evaluates-bucket/evae35d407d-b046-4a45-ac2b-4a6e332c4cbe.jpg",
          title: "Jeep 自由光 2019款 2.4L 领先版",
          detail: "2019年 | 0.8万公里 | 到店服务",
          price: "22.89万"
        },
        {
          img:
            "https://image.guazistatic.com/gz01191209/17/42/7779dbf51077e3f543f80ba8df0bfcc8.jpg",
          title: "别克 君威 2010款 2.0L 世博版",
          detail: "2018年 | 1.8万公里 | 到店服务",
          price: "5.21万"
        },
        {
          img:
            "https://image1.guazistatic.com/qn1912111919187e862ea6408279917e065962127d2b64.jpg",
          title: "奥迪Q5 2014款 1.6L 手动智尚型",
          detail: "2016年 | 2.7万公里 | 到店服务",
          price: "26.59万"
        },
        {
          img:
            "https://car-image.guazistatic.com/evaluates-bucket/eva6f6b0a87-ff2d-44fc-ad77-d4fd0a881d42.jpg",
          title: "海马S5 2014款 1.6L 手动智尚型",
          detail: "2016年 | 2.7万公里 | 到店服务",
          price: "4.63万"
        },
        {
          img:
            "https://image1.guazistatic.com/qn1912111425383fb9218994a6239e69aacb6918529b41.jpg",
          title: "陆风X7 2015款 2.0T 全景尊贵版",
          detail: "2016年 | 2.7万公里 | 到店服务",
          price: "7.34万"
        },
        {
          img:
            "https://image1.guazistatic.com/qn1912111552428d0f05f75b94ff78661938b16258be83.jpg",
          title: "大众 途观 2012款 1.8TSI 自动两驱风尚版",
          detail: "2013年 | 8.8万公里 | 到店服务",
          price: "9.65万"
        },
        {
          img:
            "https://car-image.guazistatic.com/evaluates-bucket/eva5f7ef7ad-5f9f-4942-b9fd-db95f8ddd87d.jpg",
          title: "菲亚特 致悦 2014款 1.4T 自动运动版",
          detail: "2016年 | 6.8万公里 | 到店服务",
          price: "6.49万"
        },
        {
          img:
            "https://image1.guazistatic.com/qn191211192951b5cda54dea1526b436abc92811904c73.jpg",
          title: "众泰T600 2015款 家用版 2.0T 手动豪华型",
          detail: "2018年 | 1.8万公里 | 到店服务",
          price: "6.66万"
        },
        {
          img:
            "https://car-image.guazistatic.com/evaluates-bucket/evae35d407d-b046-4a45-ac2b-4a6e332c4cbe.jpg",
          title: "Jeep 自由光 2019款 2.4L 领先版",
          detail: "2019年 | 0.8万公里 | 到店服务",
          price: "22.89万"
        },
        {
          img:
            "https://image.guazistatic.com/gz01191209/17/42/7779dbf51077e3f543f80ba8df0bfcc8.jpg",
          title: "别克 君威 2010款 2.0L 世博版",
          detail: "2018年 | 1.8万公里 | 到店服务",
          price: "5.21万"
        }
      ]
    };
  },
  methods: {
    slae() {
      this.$router.push({ name: "sale" });
    },
    service() {
      this.$router.push({ name: "service" });
    }
  }
};
</script>

<style scoped>
.buycar_input {
  margin-top: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.car_img {
  width: 100%;
  height: 240px;
}
.car_info {
  width: 100%;
  height: 110px;
  margin-top: 5px;
}
.list_car {
  width: 22%;
  height: 360px;
  border: 1px solid lightgray;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 12px;
}
.total_list {
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.total_top {
  width: 90%;
  height: 50px;
  margin: auto;
}
.total_top button:hover {
  background-color: #ff6900;
  color: #ffffff;
}
.total_top button {
  width: 120px;
  height: 48px;
  border: 0;
  border-radius: 12px;
  background-color: #ffffff;
  color: black;
  text-align: center;
}
.total {
  width: 80%;
  margin: auto;
  height: 100%;
  padding-bottom: 40px;
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}
.buycar {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.buycar_left {
  width: 10%;
  text-align: center;
}
.buycar_right {
  width: 75%;
}
.list_img {
  cursor: pointer;
  text-align: center;
  width: 100px;
  height: 100px;
}
.list_img p {
  line-height: 0px;
}
.list_img img {
  padding-top: 8px;
  width: 40px;
  height: 40px;
}
.car_list {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
}
.return {
  width: 120px;
  height: 36px;
}
.return button:hover {
  color: #ffffff;
  background-color: #ff6900;
}
.return button {
  width: 120px;
  height: 36px;
  text-align: center;
  border: 0;
  border-radius: 8px;
  color: black;
  background-color: #ffffff;
}
.header_top {
  width: 90%;
  margin: auto;
  height: 36px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.buycar_header {
  width: 80%;
  height: 260px;
  margin: auto;
}
.buy {
  width: 100%;
  height: 100%;
}
</style>
