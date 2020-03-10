<template>
  <div class="middle-end-container">
    <div class="first-line-blank"></div>
    <el-row>
      <el-col>
        <router-link to="middle-end/trade-center" class="middle-end-button">
          <el-button icon="el-icon-edit">交易中心</el-button>
        </router-link>
        <router-link to="middle-end/payment-center" class="middle-end-button">
          <el-button icon="el-icon-goods">支付中心</el-button>
        </router-link>
        <router-link to="middle-end/marketing-center" class="middle-end-button">
          <el-button icon="el-icon-phone-outline">营销中心</el-button>
        </router-link>
        <router-link to="middle-end/clearing-center" class="middle-end-button">
          <el-button icon="el-icon-document-checked">清算中心</el-button>
        </router-link>
      </el-col>
      <el-col>
        <router-link to="middle-end/log-center" class="middle-end-button">
          <el-button icon="el-icon-document">日志中心</el-button>
        </router-link>
        <router-link to="middle-end/configuration-center" class="middle-end-button">
          <el-button icon="el-icon-setting">配置中心</el-button>
        </router-link>
        <router-link to="middle-end/user-center" class="middle-end-button">
          <el-button icon="el-icon-user">用户中心</el-button>
        </router-link>
        <router-link to="middle-end/account-center" class="middle-end-button">
          <el-button icon="el-icon-bank-card">账户中心</el-button>
        </router-link>
      </el-col>
      <el-col>
        <router-link to="middle-end/product-center" class="middle-end-button">
          <el-button icon="el-icon-cold-drink">产品中心</el-button>
        </router-link>
        <router-link to="middle-end/equity-center" class="middle-end-button">
          <el-button icon="el-icon-chat-square">权益中心</el-button>
        </router-link>
        <router-link to="middle-end/foundation-center" class="middle-end-button">
          <el-button icon="el-icon-house">基础中心</el-button>
        </router-link>
        <router-link to="middle-end/sequence-center" class="middle-end-button">
          <el-button icon="el-icon-files">序列中心</el-button>
        </router-link>
      </el-col>
    </el-row>
    <div class="middle-end-footer">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-button {
  background-color: #f19443;
  border-color: #f19443;
  border-radius: 5px;
  color: #ffffff;
  padding: 50px 40px;
}
.el-button:hover {
  background-color: #ff9d47;
  border-color: #ff9d47;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #ffffff;
  transform: scale(1.015);
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
}
.el-button:active {
  background-color: #c27736;
  border-color: #c27736;
  color: #ffffff;
}
.el-col {
  display: flex;
  justify-content: center;
  padding: 0px;
}
.middle-end-button {
  margin: 35px 40px;
}
.middle-end-container {
  background-color: rgb(240, 242, 245);
}
.middle-end-footer {
  border-top: 1px solid #eaecef;
  color: #586069;
  font-size: 12px;
  margin-top: 40px;
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>

<style lang="scss" scoped>
.first-line-blank {
  height: 40px;
}
</style>