<template>
    <i-content :spin-show="loading">
        <i-search v-model="search">
            <FormItem label="商品编码">
                <Input v-model="search.code" placeholder="商品编码" size="small"></Input>
            </FormItem>
            <FormItem label="商品名称">
                <Input v-model="search.name" placeholder="商品名称" size="small"></Input>
            </FormItem>
            <FormItem :label-width="1">
                <Button type="primary" icon="ios-search" @click="getLists(1)" size="small">搜索</Button>
            </FormItem>
        </i-search>
        <i-table :current="page.current" :table="table" :total="page.total" @on-page-change="pageChange">
            <template slot-scope="{ row, index }" slot="code">
                <span>{{ row.code }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="name">
                <span>{{ row.name }}</span>
            </template>
            <template slot-scope="{row,index}" slot="unit1">
                <spin>{{row.unit1}}</spin>
            </template>
            <template slot-scope="{row,index}" slot="unit2">
                <spin>{{row.unit2}}</spin>
            </template>
            <template slot-scope="{row, index}" slot="describe">
                <span>{{row.describe}}</span>
            </template>
        </i-table>
    </i-content>
</template>

<script>
    import IContent from "../../../components/content/index";
    import contentListPage from "../../../mixins/content-list-page";
    import ISearch from "../../../components/content/search";
    import ITable from "../../../components/content/table";

    export default {
        name: "hsCode",
        mixins: [contentListPage],
        components: {ITable, ISearch, IContent},
        data(){
            return {
                search: {},
                table: {
                    columns: [{
                        title: 'hs编码',
                        slot: 'code'
                    },{
                        title: '商品名称',
                        slot: 'name'
                    },{
                        title: '法定单位一',
                        slot: 'unit1'
                    },{
                        title: '法定单位二',
                        slot: 'unit2'
                    },{
                        title: '商品描述',
                        slot: 'describe'
                    }
                    ]
                }
            }
        },
        mounted() {
            this.loading = false;
        },
        methods:{
            getLists(page){
                this.loading = true;
                this.$http.get(`system/customs_hs_code`, {
                    params: Object.assign({}, this.search, {page: page})
                }).then((data) => {
                    this.table.data = data.data
                    this.page.total = data.total
                    this.page.current = data.current_page
                }).finally(() => {
                    this.loading = false;
                });
            }
        }
    }
</script>

<style scoped>

</style>