<template>
    <i-content :spin-show="loading">
        <i-search v-model="search">
            <FormItem label="计量单位代码" :label-width="100">
                <Input v-model="search.code" placeholder="计量单位代码" size="small"></Input>
            </FormItem>
            <FormItem label="计量单位名称" :label-width="100">
                <Input v-model="search.name" placeholder="计量单位名称" size="small"></Input>
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
    import contentListPage from "../../../mixins/content-list-page";
    import ISearch from "../../../components/content/search";
    import ITable from "../../../components/content/table";

    export default {
        name: "units",
        mixins: [contentListPage],
        components: {ITable, ISearch, IContent},
        data() {
            return {
                search: {},
                table: {
                    columns: [{
                        title: '计量单位代码',
                        slot: 'code'
                    }, {
                        title: '计量单位名称',
                        slot: 'name'
                    }]
                }
            };
        },
        mounted() {
            this.loading = false;
        },
        methods:{
            getLists(page){
                this.loading = true;
                this.$http.get(`system/customs_unit`, {
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