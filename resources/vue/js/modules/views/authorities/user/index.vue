<template>
    <i-content :spin-show="loading">
        <i-search v-model="search">
            <FormItem label="姓名">
                <Input v-model="search.name" placeholder="姓名" size="small"></Input>
            </FormItem>
            <FormItem :label-width="1">
                <Button type="primary" icon="ios-search" @click="getLists" size="small">搜索</Button>
                <Button type="success" icon="ios-add" @click="routerPush('authorities.user.create')" size="small">添加</Button>
            </FormItem>
        </i-search>
        <i-table :current="page.current" :total="page.total" :table="table" @on-page-change="pageChange">
            <template slot-scope="{ row, index }" slot="name">
                <span>{{ row.name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="email">
                <span>{{ row.email }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="phone">
                <span>{{ row.phone }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="role">
                <span>{{ row.role.name }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="sex">
                <span>{{ row.sex }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="birthday">
                <span>{{ row.birthday }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="entryday">
                <span>{{ row.entryday }}</span>
            </template>
            <template slot-scope="{ row, index }" slot="status">
                <Poptip
                        transfer
                        confirm
                        title="你确定要更改这个用户的状态吗？"
                        @on-ok="status(row)">
                    <Button :type="row.status === 'off' ? 'error' : 'success'" size="small">{{row.status === 'off' ?
                        '关闭' : '开启'}}
                    </Button>
                </Poptip>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="warning" size="small" @click="routerPush('authorities.user.update', {id: row.id})">编辑</Button>
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
        mixins: [contentListPage],
        components: {ITable, ISearch, IContent},
        data() {
            return {
                search: {},
                table: {
                    columns: [
                        {
                            title: '姓名',
                            slot: 'name'
                        },
                        {
                            title: '邮箱',
                            slot: 'email'
                        },
                        {
                            title: '手机号码',
                            slot: 'phone'
                        },
                        {
                            title: '所属部门',
                            slot: 'role'
                        },
                        {
                            title: '性别',
                            slot: 'sex'
                        },
                        {
                            title: '生日',
                            slot: 'birthday'
                        },
                        {
                            title: '入职时间',
                            slot: 'entryday'
                        },
                        {
                            title: '状态',
                            slot: 'status'
                        },
                        {
                            title: '操作',
                            slot: 'action'
                        }
                    ]
                },
                loading: true
            }
        },
        methods: {
            getLists(page = 1) {
                this.loading = true;
                this.$http.get(`authorities/user`, {
                    params: Object.assign({}, this.search, {page: page})
                }).then((data) => {
                    this.table.data = data.data
                    this.page.total = data.total
                    this.page.current = data.current_page
                }).finally(() => {
                    this.loading = false;
                });
            },
            status(data) {
                this.loading = true;
                this.$http.put(`authorities/user/${data.id}/status`, {status: data.status === 'on' ? 'off' : 'on'})
                    .then(() => {
                        this.getLists(this.page.current)
                    });
            }
        }
    }
</script>

<style scoped>

</style>