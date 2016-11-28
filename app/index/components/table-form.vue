<template>
    <div class="table_form">
        <template v-for="item in tableitems">
        {{item.id}}
        <br>
        T1:<div class="table_item" id="{{item.id}}">{{item.t1}}</div>    T2:<div class="table_item" id="{{item.id}}_2">{{item.t2}}</div>
        <input type="button" value="change" @click="changeClick(item)">
        <br>
        </template>
    </div>
</template>

<script>
import details from './item-details'
export default {
    data () {
        return {
        tableitems:[{
            id:'1',
            t1:'test1_1',
            t2:'test1_2'
            },{
            id:'2',
            t1:'test2_1',
            t2:'test2_2'
            },{
            id:'3',
            t1:'test3_1',
            t2:'test3_2'
            },{
            id:'4',
            t1:'test4_1',
            t2:'test4_2'
            }],
            selected:[]
        }
    },
    ready(){
        if(this.$route.params.id!=undefined)
        {
            this.tableitems.forEach(d=>{
                if(d.id == this.$route.params.id){
                    d.t1 = this.$route.params.t1;
                    d.t2 = this.$route.params.t2;
                }
            }

            )
        }
    },
    methods: {
        changeClick(val){
            this.selected = val;
            this.$router.go({name: 'detail',params: {id:this.selected.id,t1:this.selected.t1,t2:this.selected.t2}});

        }
    },
    computed:{
        change_item(){
            return this.selected;
        }
    },
    components:{
        
    }
}
</script>

<style>
    .table_form {
        background:#ff9900;
        width:100%;
        height:100%;
    }
    .table_item{
        display:inline;
    }
</style>