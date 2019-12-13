<template>
  <div class="information">
    <div class="header">
      <div class="header_top">
        <headtop></headtop>
      </div>
    </div>
    <div class="main">
      <div class="main_one">
        <div class="top_left">
          <p>集团介绍</p>
        </div>
        <div class="top_right">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二手汽车集团，中国领军的汽车消费服务站式平台，旗下拥有二手车，养车、车速拍四大主力品牌，金融、车好多保险、租车三大协同业务，为用户提供新车手车交易服务、汽车金融、售后保障、汽车维修保养等全产业链服务。一站式满足用户汽车全生命周期的所有需求。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于大数据与人工智能技术，二手汽车构建了围绕汽车消费服务产业的Al生态，致力于通过技术推动产业升级，提升产业效率与用户体验，满足中国消费者日益增长的汽车消费服务需求，让每个家庭都拥有更好的车。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;截至日前，二手汽车业务遍布全国200多个城市，累计获得发展资金38亿美元，居国内汽车消费服务平台之首。主要投资方包括软银愿景基金、红杉资本中国基金H CAPITAL、腾讯、经纬创投、DST Global. 山行资本、今日资本、云锋基金、招银电信新趋势股权投资基金、方源资本、GIC、工银国际、IDG资本等。</p>
        </div>
      </div>
      <div class="main_two">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </div>
      <div class="main_three">
        <div class="top_lefts">
          <p>联系我们</p>
        </div>
        <div class="top_rights">
          <div>
            <p>公司注册名称</p>
            <p>二手汽车服务有限公司</p>
          </div>
          <div>
            <p>公司注册地址</p>
            <p>南阳师范学院</p>
          </div>
          <div>
            <p>商务联系方式联系邮箱</p>
            <p>www.nysf.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import headtop from "./header";
export default {
  name: "information",
  components: {
    videoPlayer,
    headtop
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: "../../static/movie/mda-imiwy17sj97i46rz.mp4",
            // "http://vd4.bdstatic.com/mda-imiwy17sj97i46rz/hd/mda-imiwy17sj97i46rz.mp4", // 路径
            type: "video/mp4" // 类型
          },
          {
            src: "//path/to/video.webm",
            type: "video/webm"
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.top_lefts p {
  width: 100px;
  margin: auto;
  margin-top: 30px;
  height: 36px;
  line-height: 36px;
  border: 1px solid black;
  text-align: center;
}
.top_rights div {
  margin-left: 12px;
}
.top_rights {
  width: 600px;
  height: 140px;
  display: flex;
}
.top_lefts {
  width: 120px;
  height: 140px;
}
.main_three {
  width: 98%;
  margin: auto;
  height: 140px;
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  margin: 6px;
}
.main_two {
  width: 100%;
  height: 300px;
}
.main_one {
  width: 98%;
  margin: auto;
  height: 300px;
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #000;
  margin: 6px;
}
.top_right {
  width: 600px;
  height: 300px;
}
.top_left {
  width: 120px;
  height: 300px;
}
.top_left p {
  width: 100px;
  margin: auto;
  margin-top: 30px;
  height: 36px;
  line-height: 36px;
  border: 1px solid black;
  text-align: center;
}
.main {
  width: 65%;
  margin: auto;
  height: 800px;
  margin-top: 32px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.header_top {
  width: 100%;
  height: 60px;
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
