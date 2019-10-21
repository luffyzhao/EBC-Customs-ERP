<template>
    <i-content :spin-show="loading">
        <i-search v-model="search">
            <FormItem label="关区代码">
                <Input v-model="search.code" placeholder="关区代码" size="small"></Input>
            </FormItem>
            <FormItem label="关区名称">
                <Input v-model="search.name" placeholder="关区名称" size="small"></Input>
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
        </i-table>
    </i-content>
</template>

<script>
    import IContent from "../../../components/content/index";
    import ISearch from "../../../components/content/search";
    import ITable from "../../../components/content/table";
    import contentListPage from "../../../mixins/content-list-page";

    export default {
        name: "districts",
        mixins: [contentListPage],
        components: {ITable, ISearch, IContent},
        data() {
            return {
                search: {},
                table: {
                    columns: [{
                        title: '关区代码',
                        slot: 'code'
                    },{
                        title: '关区名称',
                        slot: 'name'
                    }]
                }
            }
        },
        mounted() {
            this.loading = false;
        },
        methods:{
            getLists(page){
                this.loading = true;
                this.$http.get(`system/customs_district`, {
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