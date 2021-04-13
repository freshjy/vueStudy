<template>
  <div id="app">
    <!-- <SystemInfo></SystemInfo> -->
    <!-- <ReportSetting></ReportSetting> -->
    <!-- <UserInfo></UserInfo> -->
    <ProceStatus></ProceStatus>
  </div>
</template>

<script>
import SystemInfo from './pages/SystemInfo'
import ReportSetting from './pages/ReportSetting'
import UserInfo from './pages/UserInfo'
import ProceStatus from './pages/statistics/ProceStatus'
export default{
  components:{
    // 'SystemInfo' : SystemInfo
    // 'ReportSetting':ReportSetting
    // 'UserInfo':UserInfo
    'ProceStatus':ProceStatus
  }
}
</script>

<style>

</style>