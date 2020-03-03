<template>
  <div>
    <div style="padding:30px;">
      <router-link to="/middle-end/payment-center/red-envelope">
        <el-alert :closable="false" title="Red Envelope">
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