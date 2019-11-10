import fromSubmit from './from-submit'

export default {
    mixins: [fromSubmit],
    data(){
        return {
            page: {
                current: 1,
                total: 100
            },
            table: {
                columns: [],
                data: [],
                selections: []
            },
            component: {
                is: '',
                prop: null
            },
            loading: true
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.getLists();
        });
    },
    methods: {
        pageChange(v){
            this.getLists(v);
        },
        openComponent(is, prop = null){
            this.component.is = is;
            this.component.prop = prop;
        },
        closeComponent(){
            this.component.is = '';
            this.component.prop = null;
        },
        routerPush(name, query = {}) {
            this.$router.push({
                name,
                query
            });
        },
        getLists(){},
        onSelectionChange(selection){
            this.table.selections = selection;
        },
        batchCallback(callback){
            if(this.table.selections.length === 0){
                this.$Message.error('没有选择任何数据，请先选择数据！');
            }else{
                this.table.selections.forEach((row) => {
                    this[callback](row);
                });
                this.getLists();
            }
        }
    }
}