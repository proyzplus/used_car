<template>
  <div class="index">
    <div class="header">
      <div class="header_top">
        <headtop></headtop>
        <div class="header_search">
          <van-search
            style="border-radius: 8px;"
            v-model="key"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
          >
            <div style="cursor: pointer;" slot="action" @click="onSearch">搜索</div>
          </van-search>
        </div>
      </div>
    </div>
    <div class="main_box">
      <div class="main_word">
        <p @mouseenter="enter('buy')">我要买车</p>
        <p @mouseenter="enter('sale')">我要卖车</p>
      </div>
      <div class="main_Car" v-show="buy">
        <div class="car_list">
          <div class="list_img" v-for="(item,index) in buy_car" :key="index">
            <img :src="item.img" />
            <p>{{item.name}}</p>
          </div>
        </div>
        <div class="car_lista">
          <div class="list_imgs" v-for="(item,index) in buy_car_word" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <div class="main_Car" v-show="sale">
        <div class="form">
          <div class="form_left">
            <p>
              本站已经成功交易买卖车
              <span style="color:#ff6900;">10865</span>次
            </p>
            <div>
              <input type="text" name id placeholder="请输入手机号,我们会有专业人员联系你" />
              <div>
                <button style="background-color: #ff6900;">快速卖车</button>
                <button style="background-color: #ff5689;">快速估值</button>
              </div>
            </div>
          </div>
          <div class="form_right"></div>
        </div>
      </div>
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="width: 100%;height: 650px;border-radius: 12px;" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import headtop from "./header";
export default {
  name: "index",
  components: {
    headtop
  },
  data() {
    return {
      key: "",
      buy: true,
      sale: false,
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576584697&di=62c20499ab33723e49d03a45eab41232&imgtype=jpg&er=1&src=http%3A%2F%2Fd.ifengimg.com%2Fq100%2Fimg1.ugc.ifeng.com%2Fnewugc%2F20180301%2F22%2Fwemedia%2F3e546eae3b21a5a70ebedbcbeffa6bab123b55e3_size457_w1920_h1080.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575990012441&di=6d368ac4303b3684e76563b5306979f6&imgtype=0&src=http%3A%2F%2Fimg2.iautos.cn%2Fupload%2F2016%2F11%2F21%2F615765161121092214.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575990036076&di=30561e47cbdc99ead5576fb14c12270e&imgtype=0&src=http%3A%2F%2Fimg3.bitautoimg.com%2FVideo%2F2015%2F06%2F18%2F201561810412375.jpg"
      ],
      buy_car: [
        {
          name: "丰田",
          img: "//x.autoimg.cn/m/news/brand/3.jpg"
        },
        {
          name: "宝马",
          img: "//x.autoimg.cn/m/news/brand/15.jpg"
        },
        {
          name: "本田",
          img: "//x.autoimg.cn/m/news/brand/14.jpg"
        },
        {
          name: "奔驰",
          img: "//x.autoimg.cn/m/news/brand/36.jpg"
        },
        {
          name: "奥迪",
          img: "//x.autoimg.cn/m/news/brand/33.jpg"
        },
        {
          name: "大众",
          img: "//x.autoimg.cn/m/news/brand/1.jpg"
        },
        {
          name: "雷克萨斯",
          img: "//x.autoimg.cn/m/news/brand/52.jpg"
        },
        {
          name: "保时捷",
          img: "//x.autoimg.cn/m/news/brand/40.jpg"
        }
      ],
      buy_car_word: [
        {
          name: "分期购"
        },
        {
          name: "1成购车"
        },
        {
          name: "5万以下"
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
        }
      ]
    };
  },
  methods: {
    onSearch() {},
    enter(val) {
      if (val == "buy") {
        this.buy = true;
        this.sale = false;
      } else {
        this.buy = false;
        this.sale = true;
      }
    }
  }
};
</script>

<style scoped>
.form_left {
  width: 300px;
  height: 150px;
}
input {
  border-radius: 6px;
  font-size: 14px;
  line-height: 36px;
  border: 1px solid gray;
  outline: none;
  width: 300px;
}
button {
  border: 0;
  color: #ffffff;
  border-radius: 6px;
  width: 120px;
  height: 40px;
  margin-top: 20px;
}
.swiper {
  width: 90%;
  height: 450px;
  margin: auto;
  margin-top: 24px;
  border-radius: 12px;
}
.car_list {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
}
.car_lista {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-around;
}
.list_imgs:hover {
  cursor: pointer;
  color: #ff6900;
  border-bottom: 2px solid #ff6900;
}
.list_img:hover {
  width: 98px;
  height: 98px;
  border: 1px solid #ff6900;
  border-radius: 50%;
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
.main_Car {
  width: 95%;
  height: 240px;
  margin: auto;
}
.main_word {
  padding-top: 12px;
  width: 100%;
  display: flex;
}
.main_word p:hover {
  background-color: #ff6900;
  color: #ffffff;
}
.main_word p {
  cursor: pointer;
  border-radius: 12px;
  margin-left: 20px;
  width: 140px;
  text-align: center;
  border: 1px solid #ff6900;
  padding: 12px 10px 12px 12px;
}
.main_box {
  width: 80%;
  height: 260px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: -120px;
}
.index {
  width: 100%;
  height: 100%;
}
.header_top {
  width: 100%;
  height: 360px;
  background-image: url("https://image.guazistatic.com/gz01190923/17/53/9c2d7bfaed19709bbbb9cb305e1ddffe.jpg");
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
  padding-top: 40px;
  width: 80%;
  margin: auto;
  height: 60px;
}
</style>
