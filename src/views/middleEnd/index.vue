<template>
  <div class="middle-end-container">
    <div class="first-line-blank"></div>
    <el-row>
      <el-col>
        <router-link to="trade-center">
          <el-button icon="el-icon-edit">交易中心</el-button>
        </router-link>
        <router-link to="payment-center">
          <el-button icon="el-icon-goods">支付中心</el-button>
        </router-link>
        <router-link to="marketing-center">
          <el-button icon="el-icon-phone-outline">营销中心</el-button>
        </router-link>
        <router-link to="clearing-center">
          <el-button icon="el-icon-document-checked">清算中心</el-button>
        </router-link>
      </el-col>
      <el-col>
        <router-link to="log-center">
          <el-button icon="el-icon-document">日志中心</el-button>
        </router-link>
        <router-link to="configuration-center">
          <el-button icon="el-icon-setting">配置中心</el-button>
        </router-link>
        <router-link to="user-center">
          <el-button icon="el-icon-user">用户中心</el-button>
        </router-link>
        <router-link to="account-center">
          <el-button icon="el-icon-bank-card">账户中心</el-button>
        </router-link>
      </el-col>
      <el-col>
        <router-link to="product-center">
          <el-button icon="el-icon-cold-drink">产品中心</el-button>
        </router-link>
        <router-link to="equity-center">
          <el-button icon="el-icon-chat-square">权益中心</el-button>
        </router-link>
        <router-link to="foundation-center">
          <el-button icon="el-icon-house">基础中心</el-button>
        </router-link>
        <router-link to="sequence-center">
          <el-button icon="el-icon-files">序列中心</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-button {
  background-color: #f19443;
  border-color: #f19443;
  border-radius: 10px;
  color: #ffffff;
  padding: 40px;
  margin: 40px;
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
.middle-end-container {
  background-color: rgb(240, 242, 245);
  height: 800px;
}
</style>

<style lang="scss" scoped>
.first-line-blank {
  height: 40px;
  // border: 1px solid #f19443;
}
</style>