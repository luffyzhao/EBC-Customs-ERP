<template>
    <Modal :value="true" @on-visible-change="change" :transfer="false" :footer-hide="footer" :mask-closable="false"
            :width="width">
        <p slot="header" style="color:#f60;text-align:center">
            <slot name="title"><span>{{title}}</span></slot>
        </p>
        <div class="modal-body">
            <slot></slot>
        </div>
        <div slot="footer" v-if="!footer">
            <slot name="footer"></slot>
        </div>
        <Spin size="large" fix v-if="loading"></Spin>
    </Modal>
</template>

<script>
    export default {
        name: "i-modal",
        props: {
            title: {
                type: String,
                default: '弹窗'
            },
            width: {
                type: Number,
                default: 720
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            footer(){
                return this.$slots['footer'] !== undefined;
            }
        },
        methods: {
            change(v) {
                this.$parent.closeDrawer(v)
            }
        }
    }
</script>

<style scoped>
    .modal-body {
        height: calc(100% - 53px);
        overflow-y: auto;
        margin-right: -16px;
        padding-right: 16px;
    }
    .compon-drawer-footer{
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
    .compon-drawer-footer *{
        text-align: right;
    }
</style>