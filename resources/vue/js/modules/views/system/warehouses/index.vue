<template>
    <i-content :spin-show="loading">
        <i-search v-model="search">
            <FormItem :label-width="1">
                <Button type="primary" icon="ios-search" @click="getLists(1)" size="small">搜索</Button>
            </FormItem>
        </i-search>

        <i-table :current="page.current" :table="table" :total="page.total" @on-page-change="pageChange">
            <template slot-scope="{ row, index }" slot="name">
                <span>{{ row.name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="warehouse_name">
                <span>{{ row.warehouse.name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="customs_code">
                <span>{{ row.customs_code }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="customs_name">
                <span>{{ row.customs_name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="dxpid">
                <span>{{ row.dxpid }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="deliver">
                <span>{{ row.deliver.name }}</span>
            </template>
            <template slot-scope="{row , index}" slot="action">
                <Button type="warning" size="small" @click="routerPush('system.authority.update', {id: row.id})">编辑</Button>
            </template>
        </i-table>
    </i-content>
</template>

<script>
    import IContent from "../../../components/content/index";
    import ISearch from "../../../components/content/search";
    import ITable from "../../../components/content/table";
    import contentListPage from "../../../mixins/content-list-page";

    export default {
        name: "index",
        components: {IContent, ISearch, ITable},
        mixins: [contentListPage],
        data() {
            return {
                search: {},
                table: {
                    columns: [ {
                        title: '仓库名称',
                        slot: 'name'
                    },{
                        title: '对接仓库',
                        slot: 'warehouse_name'
                    },{
                        title: '海关10位编码',
                        slot: 'customs_code'
                    },{
                        title: '海关企业备案名称',
                        slot: 'customs_name'
                    },{
                        title: 'dxpid',
                        slot: 'dxpid'
                    },{
                        title: '快递方式',
                        slot: 'deliver'
                    },
                    {
                        title: '操作',
                        slot: 'action'
                    }
                    ]
                }
            }
        },
        mounted() {
            this.loading = false;
        },
        methods: {
            getLists(page) {
                this.loading = true;
                this.$http.get(`system/warehouses`, {
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