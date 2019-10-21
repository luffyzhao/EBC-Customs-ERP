<template>
    <Select v-model="defaultValue" filterable>
        <Option v-for="item in unitLists" :value="item.code" :key="item.code">{{item.code}} - {{ item.name }}</Option>
    </Select>
</template>

<script>
    import Emitter from 'iview/src/mixins/emitter';
    const units = () => import('../../../data/units.json');
    export default {
        name: "unit",
        mixins: [Emitter],
        props:{
            value:{
                type: String,
                default: ''
            }
        },
        data(){
            return {

                unitLists: []
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
            units().then(res => {
                this.unitLists = res.default;
            });
        }
    }
</script>

<style scoped>

</style>