<template>
    <i-form :spin-show="loading" :width="980">
        <Form ref="formUpdate" :model="data" :label-width="100" :rules="ruleValidate">
            <Row>
                <Col :span="24">
                    <FormItem label="产品名称" prop="name">
                        <Input v-model="data.name"></Input>
                    </FormItem>
                </Col>
                <Col :span="12">
                    <FormItem label="产品SKU" prop="sku">
                        <Input v-model="data.sku"></Input>
                    </FormItem>
                </Col>
                <Col :span="12">
                    <FormItem label="产品条码" prop="barcode">
                        <Input v-model="data.barcode"></Input>
                    </FormItem>
                </Col>
                <Col :span="8">
                    <FormItem label="品牌名称" prop="brand">
                        <Input v-model="data.brand"></Input>
                    </FormItem>
                </Col>
                <Col :span="8">
                    <FormItem label="毛重" prop="weight">
                        <Input v-model="data.weight" number></Input>
                    </FormItem>
                </Col>
                <Col :span="8">
                    <FormItem label="净重" prop="net_weight">
                        <Input v-model="data.net_weight" number></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="海关代码" prop="product_customer.customer_code">
                        <Input v-model="data.product_customer.customer_code"
                               @on-enter="setHsCode($event, data.product_customer.customer_code)"
                               @on-blur="setHsCode($event, data.product_customer.customer_code)"
                        ></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="海关品名" prop="product_customer.customer_name">
                        <Input v-model="data.product_customer.customer_name"></Input>
                    </FormItem>
                </Col>
                <Col :span="12">
                    <FormItem label="规格型号" prop="product_customer.specs">
                        <Input v-model="data.product_customer.specs">
                            <Icon type="md-code-working" slot="suffix" @click="setSpecModal(true)"/>
                        </Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法1单位">
                        <SelectJson disabled type="unit" v-model="data.product_customer.customs_hs_code.unit1"></SelectJson>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法2单位">
                        <SelectJson disabled type="unit" v-model="data.product_customer.customs_hs_code.unit2"></SelectJson>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="原产地" prop="product_customer.origin_country_code">
                        <SelectJson type="country" v-model="data.product_customer.origin_country_code"></SelectJson>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="申报单位" prop="product_customer.unit_code">
                        <SelectJson v-model="data.product_customer.unit_code"></SelectJson>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法1数量" prop="product_customer.qty1">
                        <Input v-model="data.product_customer.qty1" number></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法2数量" prop="product_customer.qty2">
                        <Input v-model="data.product_customer.qty2" number></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="申报币种" prop="product_customer.currency_code">
                        <SelectJson type="currency" v-model="data.product_customer.currency_code"></SelectJson>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="申报价格" prop="product_customer.price">
                        <Input v-model="data.product_customer.price" number></Input>
                    </FormItem>
                </Col>
            </Row>
        </Form>
        <Modal title="规格型号" v-model="specModal" @on-ok="specModalOk" @on-cancel="specModalCancel">
            <Form :label-width="100">
                <FormItem v-for="(item, index) in specElements" :key="index" :label="item">
                    <Input v-model="specValues[index]"></Input>
                </FormItem>
            </Form>
        </Modal>
        <div slot="footer">
            <Button type="primary" icon="ios-add" @click="submit('formUpdate')">提交</Button>
            <Button type="warning" icon="md-log-out" @click="$router.go(-1)">返回</Button>
        </div>
    </i-form>
</template>

<script>
    import IForm from "../../../components/content/form";
    import contentDrawer from '../../../mixins/content-drawer';
    import Goods from './goods';
    import SelectJson from "../../../components/form/select-json";


    export default {
        name: "update",
        components: {SelectJson, IForm},
        mixins: [contentDrawer, Goods],
        mounted() {
            this.$http.get(`product/${this.$route.query.id}/edit`).then((res) => {
                this.data = res.row
                this.loading = false;
            }).finally(() => {
                this.loading = false;
            });
        },
        methods:{
            submit(name){
                this.validate(name).then(() => {
                    this.loading = true;
                    this.$http.put(`product/${this.$route.query.id}`,
                        this.data
                    ).then(() => {
                        this.$Message.success('更新成功')
                    }).finally(() => {
                        this.loading = false;
                    });
                })
            }
        }
    }
</script>

<style scoped>

</style>