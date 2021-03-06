<template>
    <i-content :spin-show="loading">
        <i-search v-model="search">
            <FormItem label="产品货号">
                <Input v-model="search.sku" placeholder="产品货号" size="small"></Input>
            </FormItem>
            <FormItem label="产品条码">
                <Input v-model="search.barcode" placeholder="产品条码" size="small"></Input>
            </FormItem>
            <FormItem label="海关代码">
                <Input v-model="search.customer_code" placeholder="海关代码" size="small"></Input>
            </FormItem>
            <FormItem label="产品品牌">
                <Input v-model="search.brand" placeholder="产品品牌" size="small"></Input>
            </FormItem>
            <FormItem label="产品名称">
                <Input v-model="search.name" placeholder="产品名称" size="small"></Input>
            </FormItem>
            <FormItem :label-width="1">
                <Button type="primary" icon="ios-search" @click="getLists(1)" size="small">搜索</Button>
                <Button type="success" icon="ios-add" @click="routerPush('product.lists.create')" size="small">添加</Button>
                <Button type="warning" icon="md-checkbox-outline" @click="batchCallback('examine')" size="small">批量审核</Button>
            </FormItem>
        </i-search>
        <i-table :current="page.current" :table="table" :total="page.total" @on-page-change="pageChange" @on-selection-change="onSelectionChange">
            <template slot-scope="{ row, index }" slot="sku">
                <a @click="openComponent('ProductView', row)" v-if="row.status === 1">{{ row.sku }}</a>
                <a @click="routerPush('product.lists.update', {id: row.id})" v-else>{{ row.sku }}</a>
            </template>
            <template slot-scope="{ row, index }" slot="barcode">
                <span>{{ row.barcode }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="brand">
                <span>{{ row.brand }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="name">
                <span>{{ row.name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="weight">
                <span>{{ row.weight }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="net_weight">
                <span>{{ row.net_weight }}</span>
            </template>
            <template slot-scope="{row, index}" slot="status">
                <span>{{ row.status }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="customer_code">
                <span>{{ row.product_customer.customer_code }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="origin_country_code">
                <span>{{ row.product_customer.origin_country_code }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="unit_code">
                <span>{{ row.product_customer.unit_code }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="currency_code">
                <span>{{ row.product_customer.currency_code }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="price">
                <span>{{ row.product_customer.price }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="status">
                <span v-if="row.status === 0">草稿</span>
                <span v-else>审核通过</span>
            </template>
        </i-table>
        <component v-bind:is="component.is" :props="component.prop" @on-close="closeComponent"
                   @on-refresh="getLists(1)"></component>
    </i-content>
</template>

<script>
    import IContent from "../../../components/content/index";
    import contentListPage from "../../../mixins/content-list-page";
    import ISearch from "../../../components/content/search";
    import ITable from "../../../components/content/table";
    import ProductView from "./view";

    export default {
        name: "index",
        components: {ITable, ISearch, IContent, ProductView},
        mixins: [contentListPage],
        data(){
            return {
                search: {},
                table: {
                    columns: [{
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },{
                        title: '商品货号',
                        slot: 'sku',
                        width: 120
                    },{
                        title: '商品名称',
                        slot: 'name',
                        width: 350
                    },{
                        title: '商品条码',
                        slot: 'barcode',
                        width: 120
                    },{
                        title: '海关编码',
                        slot: 'customer_code',
                        width: 120
                    },{
                        title: '商品品牌',
                        slot: 'brand',
                        width: 120
                    },{
                        title: '毛重',
                        slot: 'weight',
                        width: 80
                    },{
                        title: '净重',
                        slot: 'net_weight',
                        width: 80
                    }, {
                        title: '原产地',
                        slot: 'origin_country_code',
                        width: 100
                    }, {
                        title: '申报单位',
                        slot: 'unit_code',
                        width: 100
                    }, {
                        title: '申报价值',
                        slot: 'price',
                        width: 100
                    }, {
                        title: '状态',
                        slot: 'status',
                        width: 100
                    }
                    ]
                }
            }
        },
        mounted() {
            this.loading = false
        },
        methods:{
            getLists(page){
                this.loading = true;
                this.$http.get(`product`, {
                    params: Object.assign({}, this.search, {page: page})
                }).then((data) => {
                    this.table.data = data.data
                    this.page.total = data.total
                    this.page.current = data.current_page
                }).finally(() => {
                    this.loading = false;
                });
            },
            examine(row){
                this.$http.put(`product/${row.id}/examine`).then((res) => {
                    this.$Message.success(`${row.sku} 审核通过!`);
                }).catch((err) => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped>

</style>