<template>
  <div>
    <iframe
      src="http://12.99.119.52:8091/swagger-ui.html"
      width="1200"
      height="2000"
      scrolling="0"
      frameborder="0"
    ></iframe>
    <div class="configuration-center-footer">
      <ul class="footer-list">
        <li>配置中心联系人</li>
        <li>胡文韬</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.configuration-center-footer {
  border-top: 1px solid #eaecef;
  color: #586069;
  font-size: 12px;
  /* margin-top: 40px; */
}
.footer-list {
  display: flex;
  list-style: none;
}
.footer-list li {
  margin-right: 16px;
}
</style>