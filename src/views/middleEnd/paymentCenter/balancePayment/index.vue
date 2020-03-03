<template>
  <div>
    <div style="padding:30px;">
      <router-link to="/middle-end/payment-center/balance-panment">
        <el-alert :closable="false" title="Balance Payment">
          <router-view />
        </el-alert>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>