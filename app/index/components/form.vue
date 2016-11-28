<template>
    <div class="main_form"><checkboxlist :checkitems="checklistitems" :single="'checkbox'"></checkboxlist></div>
    <div class="main_form"><checkboxlist :checkitems="checklistitems2" :single="'radio'"></checkboxlist></div>
</template>

<script>
import checkboxlist from './checklist'
export default {
    data () {
        return {
        checklistitems:[{
            id:'1',
            value:'test1'
            },{
            id:'2',
            value:'test2'
            },{
            id:'3',
            value:'test3'
            },{
            id:'4',
            value:'test4'
            }],
        checklistitems2:[{
            id:'21',
            value:'男'
            },{
            id:'22',
            value:'女'
            }],
        }
    },
    components: {
        checkboxlist
    }
}
</script>

<style>
    .main_form {
        background:#ff9900;
        width:100%;
        height:100px;
    }
</style>