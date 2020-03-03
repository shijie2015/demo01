<template>
  <div>
    <div style="padding:30px;">
      <router-link to="/middle-end/payment-center/cash-payment">
        <el-alert :closable="false" title="Cash Payment">
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