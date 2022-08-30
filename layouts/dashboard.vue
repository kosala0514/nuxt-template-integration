<template>
  <div class="wrapper">
    <MainHeader/>
    <Sidebar/>
    <div class="main-panel">
      <Nuxt/>
      <Footer/>
    </div>
  </div>
</template>
<script>
  export default{
    name:"dashboard",
  }
</script>
