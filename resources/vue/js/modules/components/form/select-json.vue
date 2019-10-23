<template>
    <Select :disabled="disabled" v-model="defaultValue" filterable>
        <Option v-for="item in lists" :value="item.code" :key="item.code">{{item.code}} - {{ item.name }}</Option>
    </Select>
</template>

<script>
    import Emitter from 'iview/src/mixins/emitter';
    export default {
        name: "select-json",
        mixins: [Emitter],
        props:{
            value:{
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'unit'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                lists: []
            }
        },
        computed:{
            defaultValue: {
                get(){
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                    this.dispatch('FormItem', 'on-form-change', value);
                }
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