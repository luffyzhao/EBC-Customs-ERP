<template>
    <i-cell :title="title" :width="width">{{defaultValue}}</i-cell>
</template>

<script>
    import Emitter from 'iview/src/mixins/emitter';
    import ICell from "./cell";
    export default {
        name: "i-cell-json",
        components: {ICell},
        mixins: [Emitter],
        props:{
            title: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'unit'
            },
            value:{
                type: String,
                default: ''
            },
            width: {
                type: Number,
                default: 1,
                isValid: (value) => {
                    return [1, 2, 3, 4].findIndex((val) => value === val) !== -1;
                }
            }
        },
        data(){
            return {
                lists: []
            }
        },
        computed:{
            defaultValue(){
                let value = '';
                this.lists.forEach((val) => {
                    if(val.code === this.value){
                        value = `${val.code} - ${val.name}`;
                    }
                });
                return value;
            }
        },
        mounted() {
            this.jsonData().then(res => {
                this.lists = res.default;
            });
        },
        methods:{
            jsonData(){
                return import(`../../../data/${this.type}.json`);
            }
        }
    }
</script>

<style scoped>

</style>