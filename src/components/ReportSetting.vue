<template>
    <div id="app">
        <div class="pageTitle">
            리포트 설정
            <span class="addContainer" v-on:click="addReportBtn">
                <i class="addBtn fas fa-plus fa" aria-hidden="true"></i>
            </span>
            <span class="addContainer" v-on:click="modifyReportBtn">
                <i class="fas fa-pencil-alt" aria-hidden="true"></i>
            </span>
            <span class="addContainer" v-on:click="deleteReportBtn">
                <i class="fas fa-trash-alt" aria-hidden="true"></i>
            </span>
        </div>
        

        <!-- 리포트 설정 팝업 -->
        <ReportModal v-if="reportSetModal" v-on:close="reportSetModal = false">
            <h4 slot="header">리포트 추가
                <i class="closeModalBtn fas fa-times" v-on:click="reportSetModal = false" aria-hidden="true"></i>
            </h4>

            <div slot="body">
                <div>리포트 정보</div>
                <div>이름</div>
                <div>주기</div>
            </div>
            <div slot="body">

            </div>

            <span slot="footer" v-on:click="reportSetModal = false">
                <button v-on:click="addReport" >추가</button>
                <button aria-hidden="true">취소</button>
            </span>
        </ReportModal>
        <table>
            <colgroup>
                <col width="1%">
            </colgroup>
            <thead>
                <tr class="title">
                    <th>v</th>
                    <th>이름</th>
                    <th>주기</th>
                    <th>이벤트 타입</th>
                    <th></th>
                </tr>
                <!-- <tr v-for="val in values" :key="val">
                    <td><input type="checkbox" /></td>
                    <td>{{val.name}}</td>
                    <td>{{val.period}}</td>
                    <td>{{val.eType}}</td>
                    <td>{{val.download}}</td>
                </tr> -->
            </thead>
        </table>
        
    </div>
</template>

<script>
import ReportModal from './common/ReportModal.vue'

export default {
    data(){
        return{
            // report data
            // values:[
            //     {name:"화재 보고", period:"월간", eType:"화재", download:"□"},
            //     {name:"화재 보고", period:"주간", eType:"화재", download:"□"}
            // ],
            // addReport data
            reportSetModal:false
        }
    },
    methods:{
        addReportBtn(){
            this.reportSetModal = !this.reportSetModal;
        },
        addReport(){

        },
        modifyReportBtn(){
            alert("리포트 수정");
        },
        deleteReportBtn(){
            alert("리포트 삭제");
        }
    },
    components:{
        ReportModal: ReportModal
    }
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    border: 1px solid black;
    text-align:center;
    table-layout: fixed;
}
.title {
    border-bottom: 1px solid ;
}
.pageTitle{
    font-size:2em;
}
.addContainer{
    font-size:0.8em;
}
</style>