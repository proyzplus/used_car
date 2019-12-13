<template>
  <div class="service">
    <div class="header">
      <div class="header_top">
        <headtop></headtop>
        <p class="top">遍布全国多地259项全车检测-安全</p>
        <div class="checked">
          <div class="checked_list" v-for="(item,index) in checked" :key="index">
            <img :src="item.img" style="width: 100p%;height: 414px;" alt />
            <p>{{item.word}}</p>
            <p>{{item.wod}}</p>
          </div>
        </div>
        <div class="main_box">
          <div class="box_img">
            <img
              src="https://jr-sta.guazistatic.com/finance_web/focus1.118eca4787e68b850609b5d06e1ef4ae.jpg"
              alt
            />
          </div>
          <div class="box_word">
            <p>30天可退最高2年售后保障—无忧</p>
            <p>担心买到重大事故车、水泡车、火烧车、命案车？</p>
            <p>30天可退，瓜子二手车提供平台保障</p>
            <p>2年或4万公里售后保障，买后无担忧</p>
            <p>*部分车辆不享受上述服务，具体以合同约定为准</p>
            <p>为保障交易安全，在瓜子二手车进行交易必须签署正式的电子交易合同。</p>
            <p>交易合同签署过程中，请您务必提供所需交易资料和信息，</p>
            <p>仔细观看签约告知视频，严格进行人脸识别，认真阅读合同后确认签署。</p>
          </div>
        </div>
        <div class="last_button">
          <div class="but_top">
            <p>轻松四步 开走爱车</p>
          </div>
          <div class="box_list">
            <div class="box">
              <img
                style="width: 50px;padding: 30px;background:#ffffff;border-radius: 50%;"
                src="http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F29aab46afc89a9981d37b350dfeeb768.png"
                alt
              />
              <p style="color: #ffffff;">在线选车</p>
            </div>
            <div class="box">
              <img
                style="width: 50px;padding: 30px;background:#ffffff;border-radius: 50%;"
                src="http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F29aab46afc89a9981d37b350dfeeb768.png"
                alt
              />
              <p style="color: #ffffff;">快速信亩</p>
            </div>
            <div class="box">
              <img
                style="width: 50px;padding: 30px;background:#ffffff;border-radius: 50%;"
                src="http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F29aab46afc89a9981d37b350dfeeb768.png"
                alt
              />
              <p style="color: #ffffff;">刺刁苜款</p>
            </div>
            <div class="box">
              <img
                style="width: 50px;padding: 30px;background:#ffffff;border-radius: 50%;"
                src="http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F29aab46afc89a9981d37b350dfeeb768.png"
                alt
              />
              <p style="color: #ffffff;">无忧提车</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import headtop from "./header";
export default {
  name: "service",
  components: {
    headtop
  },
  data() {
    return {
      checked: [
        {
          img:
            "//sta.guazistatic.com/node_web/save-one.ac661b2dbdab562b51c68f16f589d9fd.jpg",
          word: "259项专业检测",
          wod: "原奥迪中国二手车业务总监，领衔定制"
        },
        {
          img:
            "//sta.guazistatic.com/node_web/save-two.b46c3dc7edd14bff6bb1d0db9e8606a2.jpg",
          word: "完备的检测流程",
          wod: "交易前完成车况检测"
        },
        {
          img:
            "//sta.guazistatic.com/node_web/save-three.8d9e0bf441d2d7dc2c1fcc1e2e85e8bd.jpg",
          word: "专业的评估师团队",
          wod: "岗前培训，考核上岗，经验丰富"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.box_list {
  width: 80%;
  height: 160px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.box {
  width: 24%;
  text-align: center;
  height: 200px;
  margin: auto;
}

.but_top {
  width: 100%;
  display: block;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
}
.last_button {
  width: 70%;
  height: 360px;
  margin: auto;
  background: #24c488;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  margin-bottom: 40px;
}
.box_img {
  margin-top: 36px;
}
.box_word {
  margin-top: 60px;
}
.main_box {
  width: 70%;
  height: 460px;
  margin: auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
}
.checked_list {
  margin-top: 20px;
  width: 30%;
  height: 450px;
}
.checked {
  width: 70%;
  height: 560px;
  margin: auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
}
.top {
  padding-top: 48px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  font-size: 26px;
  letter-spacing: 4px;
  padding-bottom: 20px;
}
.header_top {
  width: 100%;
  height: 560px;
  background-image: url("https://image.guazistatic.com/gz01180530/16/59/044e4dd26cfb9273092f6a4dd4e02f43.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
