<template>
  <div class="dashboard-container">
    <el-row>
      <el-col>
        <router-link to="middleend/trade-center"><el-button icon="el-icon-edit">交易中心</el-button></router-link>
        <router-link to="middleend/payment-center"><el-button icon="el-icon-goods">支付中心</el-button></router-link>
        <router-link to="middleend/marketing-center"><el-button icon="el-icon-phone-outline">营销中心</el-button></router-link>
        <router-link to="middleend/clearing-center"><el-button icon="el-icon-document-checked">清算中心</el-button></router-link>
      </el-col>
      <el-col>
        <router-link to="middleend/log-center"><el-button icon="el-icon-document">日志中心</el-button></router-link>
        <router-link to="middleend/configuration-center"><el-button icon="el-icon-setting">配置中心</el-button></router-link>
        <router-link to="middleend/user-center"><el-button icon="el-icon-user">用户中心</el-button></router-link>
        <router-link to="middleend/account-center"><el-button icon="el-icon-bank-card">账户中心</el-button></router-link>
      </el-col>
      <el-col>
        <router-link to="middleend/product-center"><el-button icon="el-icon-cold-drink">产品中心</el-button></router-link>
        <router-link to="middleend/equity-center"><el-button icon="el-icon-chat-square">权益中心</el-button></router-link>
        <router-link to="middleend/foundation-center"><el-button icon="el-icon-house">基础中心</el-button></router-link>
        <router-link to="middleend/sequence-center"><el-button icon="el-icon-files">序列中心</el-button></router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-button {
  color: #ffffff;
  background-color: #409eff;
  border-radius: 10px;
  padding: 40px;
  margin: 20px;
}
.el-button:hover {
  color: #ffffff;
  background-color: rgb(151, 202, 253);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-button:active {
  color: #ffffff;
  background-color: rgb(38, 147, 255);
}
.el-col {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
