<template>
  <div class="money">
    <div class="header">
      <div class="header_top">
        <headtop></headtop>
      </div>
    </div>
    <div class="header_to">
      <div class="to_box">
        <p>法拉利带回家</p>
        <p>首付仅需十万元</p>
      </div>
    </div>
    <div class="bingo">
      <div class="bingo_img" @mouseenter="enter" @mouseleave="leave">
        <transition name="fade">
          <img
            v-if="showa"
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2361626026,1599347939&fm=26&gp=0.jpg"
            alt
          />
        </transition>
        <transition name="fade">
          <div v-if="showb">
            <p>每辆 法拉利汽车 都是独一无二的。但是作为整体，</p>
            <p>它们共同构成了一个拥有60多年经验积累的工程和</p>
            <p>驾驶性能专业知识的大家庭。</p>
            <p>每辆 法拉利汽车 每辆法拉利汽车的设计灵感都源</p>
            <p>于F1赛场上的Scuderia Ferrari赛车、GT赛车或跑车原型。</p>
            <p>我们创造的所有 跑车车型 都基于相同的出发点 –</p>
            <p>激发法拉利自身技术和设计进步的比赛热情。</p>
            <p>法拉利的热情和严格的质量标准被广泛分享和传递。</p>
            <p>我们的车辆认证计划将帮助您传递我们共享的热情，</p>
            <p>并将确保您坚守定义法拉利的宝贵价值。</p>
          </div>
        </transition>
      </div>
      <div class="bingo_img" @mouseenter="enters" @mouseleave="leaves">
        <transition name="fade">
          <img
            v-if="showc"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576078814934&di=ebbe91a94f7992ba5742d3aac1b5a468&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2191234122%2C2528285067%26fm%3D214%26gp%3D0.jpg"
            alt
          />
        </transition>
        <transition name="fade">
          <div v-if="showd">
            <p>在法拉利世界中，没有什么能够比有机会设计并构建</p>
            <p>自己的车型更显珍贵。“Atelier”、“Tailor-made”和</p>
            <p>“One-off”是我们的三项卓越的量身定制服务。我们的</p>
            <p>座右铭十分简单：只提供最好的引擎、设计和定制服</p>
            <p>务。对车迷们来说，法拉利很快便能成为一种生活方式。</p>
            <p>法拉利不仅为一级方程式制造专门赛车。</p>
            <p>极致的V8涡轮增压轿跑车488 GTB，实际上也是488</p>
            <p>Challenge和488 GT这两种车款的基础，法拉利在GTE</p>
            <p>和GT3两款车型中，特别为需要参加竞赛活动的客户</p>
            <p>准备了三款车型。</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="moneybuy">
      <p class="mon">分期问答</p>
      <div class="mon_ques">
        <div class="que_list" v-for="(item,index) in list_one" :key="index">
          <p style="font-size: 26px;">{{item.title}}</p>
          <div style="font-size: 14px;">
            <p>{{item.wa}}</p>
            <p>{{item.wt}}</p>
          </div>
        </div>
      </div>
      <div class="mon_ques">
        <div class="que_list" v-for="(item,index) in list_ones" :key="index">
          <p style="font-size: 26px;">{{item.title}}</p>
          <div style="font-size: 14px;">
            <p>{{item.wa}}</p>
            <p>{{item.wt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headtop from "./header";
export default {
  name: "money",
  components: {
    headtop
  },
  data() {
    return {
      list_one: [
        {
          title: "Q1.买车如何申请分期？",
          wa: "您可以在官网上点击“分期购车”详细了解分期服务并在线提交申请",
          wt:
            "也可拨打金融客服热线400-062-5503进行咨询；或者咨询线下顾问办理分期。"
        },
        {
          title: "Q2.申请分期购车是否划算？",
          wa:
            "付个小首付、月还负担小。人人车与上百家金融机构合作，产品丰富，多种方案可选。",
          wt: "可在线提交申请，金融顾问一对一专属沟通，定制金融方案。"
        },
        {
          title: "Q3.申请分期流程是否麻烦？",
          wa:
            "申请简单、最快当天放款。人人车部分金融产品仅需身份证、驾驶证和银行卡即可申请，",
          wt: "审批通过后金融顾问全程服务，具体以线下金融顾问告知为准。"
        }
      ],
      list_ones: [
        {
          title: "Q4.办理分期后，如何还款呢？",
          wa: "您办理分期成功后，只要按照签订的融资合同上的每月还款日期，",
          wt:
            "将每月还款金额提前打到绑定的还款银行卡上即可，系统会自动按时扣款。"
        },
        {
          title: "Q5.申请办理分期还能砍价吗？",
          wa:
            "当然可以，办理分期不会影响您的线下砍价以及换车等，可以边申请边看车。",
          wt: "可在线提交申请，金融顾问一对一专属沟通，定制金融方案。"
        },
        {
          title: "Q6.所有的车都可以申请分期吗？",
          wa:
            "不是的，新能源汽车以及车龄、车价超出限制的车不能申请分期，具体以顾问告知为准。",
          wt: "审批通过后金融顾问全程服务，具体以线下金融顾问告知为准。"
        }
      ],
      showa: true,
      showb: false,
      showc: true,
      showd: false
    };
  },
  methods: {
    enter() {
      this.showa = true;
      this.showc = false;
      this.showd = true;
    },
    leave() {
      this.showa = true;
      this.showc = true;
      this.showd = false;
    },
    enters() {
      this.showa = false;
      this.showb = true;
    },
    leaves() {
      this.showa = true;
      this.showb = false;
      this.showc = true;
      this.showd = false;
    }
  }
};
</script>

<style scoped>
.que_list {
  width: 30%;
}
.mon_ques {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.mon {
  width: 100%;
  padding-top: 20px;
  padding-left: 60px;
  font-size: 26px;
}
.moneybuy {
  width: 85%;
  height: 580px;
  margin: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  margin-bottom: 20px;
  border-radius: 8px;
}
/* .bingo_img img:hover {
  margin-top: 6px;
} */
.bingo {
  width: 90%;
  height: 420px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
}
.bingo_img {
  width: 48%;
  height: 420px;
  text-align: center;
}
img {
  width: 100%;
  height: 420px;
}
.to_box {
  width: 200px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  margin: 40px;
  text-align: center;
  line-height: 40px;
}
.header_to {
  width: 90%;
  height: 700px;
  margin: auto;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dcc387284077c3b243089ab?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF");
}
.header {
  margin-bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.05;
}
</style>
