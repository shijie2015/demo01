<template>
  <div>
    <div style="padding:30px;">
      <router-link to="/middle-end">
        <el-alert :closable="false" title="Middle End">
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