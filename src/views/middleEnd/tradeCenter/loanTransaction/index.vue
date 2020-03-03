<template>
  <div>
    <div style="padding:30px;">
      <router-link to="/middle-end/trade-center/loan-transaction">
        <el-alert :closable="false" title="Loan Transaction">
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