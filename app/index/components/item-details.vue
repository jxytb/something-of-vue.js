<template>
    <div class="details_form">
       {{$route.params.id}}
       <br>
       T1:<input class="div_item" v-model="t1" id="{{$route.params.t1}}" value="{{$route.params.t1}}">
       T2:<input class="div_item" v-model="t2" id="{{$route.params.t2}}" value="{{$route.params.t2}}">
       <input type="button" value="submit" @click="submitClick">
    </div>
</template>

<script>
export default {
    data () {

        return{
            t1:"",
            t2:""
        }

    },
    methods:{
        submitClick(){
            this.$router.go({name: 'table',params: {id:this.$route.params.id,t1:this.t1,t2:this.t2}});
        }
    },
    props:['detail'],
    watch:{

    }
}
</script>

<style>
    .details_form{
        width:300px;
        height:150px;
        background:#119900;
    }
    .div_item{
        display:block;
    }
</style>