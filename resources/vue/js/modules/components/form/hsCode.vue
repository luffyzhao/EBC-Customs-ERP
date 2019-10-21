<template>
    <Select v-model="defaultValue" filterable>
        <Option v-for="item in hsCodes" :value="item.code" :key="item.code">{{item.code}} - {{ item.name }}</Option>
    </Select>
</template>

<script>
    import Emitter from 'iview/src/mixins/emitter';
    const hsCodes = () => import('../../../data/hs_codes.json');
    export default {
        name: "hsCode",
        mixins: [Emitter],
        props:{
            value:{
                type: String,
                default: ''
            }
        },
        data(){
            return {
                hsCodes: []
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
            hsCodes().then(res => {
                this.hsCodes = res.default;
            });
        }
    }
</script>

<style scoped>

</style>