<template>
  <div id="app">
    <!-- <SystemInfo></SystemInfo> -->
    <!-- <ReportSetting></ReportSetting> -->
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import SystemInfo from './pages/SystemInfo'
import ReportSetting from './pages/ReportSetting'
import UserInfo from './pages/UserInfo'
export default{
  components:{
    // 'SystemInfo' : SystemInfo
    // 'ReportSetting':ReportSetting
    'UserInfo':UserInfo
  }
}
</script>

<style>

</style>