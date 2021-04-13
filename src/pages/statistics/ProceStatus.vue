<template>

<div div id="app">
    <div class="pageTitle"> 
        처리 현황 통계
        {{cctvs}}
        {{controllersIdArr}}
        {{controllersNameArr}}
        {{controllers}}
    </div>
    <div>
        검색기간
    </div>
    <div>
        CCTV
        <select name="selectingCCTV" v-model="cctv">
            <option v-for="(cctvs, index) in getCCTVs" :key="index">
                {{cctvs.cctv}}
            </option>
        </select>
        <button v-on:click="addCCTV(cctv)">추가</button>
    </div>

    <span v-for="(cctv,index) in cctvs" :key="cctv">
        {{cctv}}
        <span class="cctvRemove" type="button" v-on:click="removeCCTV(index)">
            <i class="closeBtn fas fa-times"></i>
        </span>
    </span>

    <div>
        관제사
        <select name="selectingCCTV" v-model="controllerId" >
            <option v-for="(controllers, index) in getControllers" :key="index" v-bind:value="controllers.id">
                {{controllers.firstName + controllers.lastName + controllers.id}}
            </option>
        </select>
        <button v-on:click="addController(controllerId)">추가</button>
        <div class="searchBtn">
            <button v-on:click="searchProcess()">
                조회
            </button>
            <button>
                내보내기
            </button>
        </div>
    </div>

    <span v-for="(controller, index) in controllers" :key="index" >
        {{controller}}
        <span class="cctvRemove" type="button" v-on:click="removeController(index)">
            <i class="closeBtn fas fa-times"></i>
        </span>
    </span>
    
    
    

    
    
    <div>
        <table class="firstTable">
            <thead>
                <tr class="tTitle1">
                    <th>CCTV</th>
                    <th>관제사</th>
                    <th>이벤트 타입</th>
                    <th>처리 상황</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tBody1">
                    <td>CCTV</td>
                    <td>관제사</td>
                    <td>이벤트 타입</td>
                    <td>처리상황</td>
                </tr>
            </tbody>
        </table>
        <table class="secondTable">
            <thead>
                <tr class="tTitle2">
                    <th>차트</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tBody2">
                    <td>s</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>

<script>
// import PieChart from './PieChart.js'

export default {
    data(){
        return{
            cctv:'',
            cctvs:[],
            controllerId:'',
            controllersIdArr:[],
            controllersNameArr:[],
            controllers:[],
            getCCTVs:[],
            getControllers:[]
        }
    },
    methods:{
        getCCTVsToJson(){
            this.$http.get('http://localhost:3000/cctvs')
            .then((res) => {
                console.log('getCCTVs:', res.data)
                this.getCCTVs = res.data
            })            
        },
        getControllerToJson(){
            this.$http.get('http://localhost:3000/staData')
            .then((res) => {
                console.log('getCotrollers:', res.data)
                this.getControllers = res.data
            })
        },
        isExistCCTV(cctv){
            let returnFlag = false;
            for(let i in this.cctvs){
                if(this.cctvs[i] == cctv){
                    returnFlag = true;
                }
            }
            console.log(returnFlag);
            return returnFlag;
        },
        isExistController(controllerId){
            let returnFlag = false;
            for(var i in this.controllersIdArr){
                if(this.controllersIdArr[i] == controllerId){
                    returnFlag = true;
                }
            }
            console.log(returnFlag);
            return returnFlag;
        },
        addCCTV(cctv){
            if(!this.isExistCCTV(cctv)){
                this.cctvs.push(cctv);
                this.cctvs.sort();
            }else{
                alert("이미 선택한 CCTV그룹입니다.");
            }
        },
        addController(controllerId){
            if(!this.isExistController(controllerId)){
                this.controllersIdArr.push(controllerId);
                this.controllersIdArr.sort();
                for(let i=0; i<this.getControllers.length; i++){
                    console.log("id : " + this.getControllers[i].id);
                    console.log("sendId:"+controllerId);
                    if(controllerId==this.getControllers[i].id){
                        this.controllersNameArr[controllerId-1] = this.getControllers[i].firstName+this.getControllers[i].lastName;
                        this.controllers[controllerId-1] = this.controllersNameArr[i]+controllerId;
                    }
                }
            }else{
                alert("이미 선택한 관제사입니다.");
            }
        },
        removeCCTV(index){
            this.cctvs.splice(index,1);
        },
        removeController(index){
            this.controllersIdArr.splice(index,1);
            this.controllersNameArr.splice(index,1);
            this.controllers.splice(index,1);
        }
    },
    components:{
        
    },
    mounted(){
        this.getCCTVsToJson();
        this.getControllerToJson();
    }

}

</script>

<style scoped>

table {
    width:100%;
    border-collapse: collapse;
    border: 1px solid black;
    text-align:center;
    table-layout: fixed;
}
tr{
    vertical-align : top;
    
}
.searchBtn{
    float: right;
}
.tTitle1 {
    border-left: 1px solid;
    border-bottom: 1px solid ;
}
.tTitle2{
    border-bottom: 1px solid ;
}
.tBody2{
    border-left: 1px solid;
}
.firstTable{
    width:60%;
    float:left;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
}
.secondTable{
    width:40%;
    float:right;
    border-left: 1px;
    border-bottom: 1px solid;
}
</style>
