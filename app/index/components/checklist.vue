<template>
    <div>
    <template v-for="checkitem in checkitems">
       <input type="{{single}}" name="checkboxlist" v-model="picked" id="{{checkitem.id}}" value="{{checkitem.value}}">{{checkitem.value}}
    </template>
    <br>
    <span>Picked: {{ picked }}</span>
    </div>
</template>

<script>
export default {
    data () {

        return{
            picked:[]
        }

    },
    props:['checkitems','single'],
    watch:{

    }
}
</script>

<style>
</style>