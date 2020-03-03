<template>
  <div>
    <div style="padding:30px;">
      <router-link to="/middle-end/trade-center">
        <el-alert :closable="false" title="Trade Center">
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