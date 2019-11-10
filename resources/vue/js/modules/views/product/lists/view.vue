<template>
    <i-modal title="查看产品详情" :width="960" :loading="loading">
        <Row>
            <i-cell title="产品名称" :width="2">{{data.name}}</i-cell>
            <i-cell title="产品sku">{{data.sku}}</i-cell>
            <i-cell title="产品条码">{{data.barcode}}</i-cell>
            <i-cell title="产品品牌">{{data.brand}}</i-cell>
            <i-cell title="产品净重">{{data.net_weight}}</i-cell>
            <i-cell title="产品毛重">{{data.weight}}</i-cell>
            <i-cell title="创建时间">{{data.created_at}}</i-cell>
            <i-cell title="海关编码">{{data.product_customer.customer_code}}</i-cell>
            <i-cell title="海关品名">{{data.product_customer.customer_name}}</i-cell>
            <i-cell-json title="法一单位" :value="data.product_customer.customs_hs_code.unit1"></i-cell-json>
            <i-cell-json title="法二单位" :value="data.product_customer.customs_hs_code.unit2"></i-cell-json>
            <i-cell-json title="申报币种" :value="data.product_customer.currency_code" type="currency"></i-cell-json>
            <i-cell title="申报价格">{{data.product_customer.price}}</i-cell>
            <i-cell title="法一数量">{{data.product_customer.qty1}}</i-cell>
            <i-cell title="法二数量">{{data.product_customer.qty2}}</i-cell>
            <i-cell-json title="原始国" :value="data.product_customer.origin_country_code" type="country"></i-cell-json>
            <i-cell-json title="申报单位" :value="data.product_customer.unit_code"></i-cell-json>
            <i-cell title="产品规格" :width="4">{{data.product_customer.specs}}</i-cell>
        </Row>
    </i-modal>
</template>

<script>
    import IModal from "../../../components/content/modal";
    import contentDrawer from '../../../mixins/content-drawer'
    import ICell from "../../../components/content/cell";
    import ICellJson from "../../../components/content/cellJson";

    export default {
        name: "view.vue",
        components: {ICellJson, ICell, IModal},
        mixins: [contentDrawer],
        data(){
            return {
                data: {
                    product_customer: {
                        customs_hs_code: {}
                    }
                },
                loading: true
            }
        },
        mounted(){
            this.$http.get(`product/${this.props.id}`).then((res) => {
                this.data = res.row;
                this.loading = false;
            });
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>