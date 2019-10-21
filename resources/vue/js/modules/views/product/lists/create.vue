<template>
    <i-form :spin-show="loading" :width="980">
        <Form ref="formCreate" :model="data" :label-width="100" :rules="ruleValidate">
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
                        <Input v-model="data.weight"></Input>
                    </FormItem>
                </Col>
                <Col :span="8">
                    <FormItem label="净重" prop="net_weight">
                        <Input v-model="data.net_weight"></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="海关代码" prop="product_customer.customer_code">
                        <Input v-model="data.product_customer.customer_code"></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="海关品名" prop="product_customer.customer_name">
                        <Input v-model="data.product_customer.customer_name"></Input>
                    </FormItem>
                </Col>
                <Col :span="12">
                    <FormItem label="规格型号" prop="product_customer.specs">
                        <Input v-model="data.product_customer.specs"></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法1单位">
                        <Input disabled v-model="data.product_customer.customs_hs_code.unit1"></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法2单位">
                        <Input disabled v-model="data.product_customer.customs_hs_code.unit2"></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="原产地" prop="product_customer.origin_country_code">
                        <Input v-model="data.product_customer.origin_country_code"></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="申报单位" prop="product_customer.unit_code">
                        <Unit v-model="data.product_customer.unit_code"></Unit>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法1数量" prop="product_customer.qty1">
                        <Unit v-model="data.product_customer.qty1"></Unit>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="法2数量" prop="product_customer.qty2">
                        <Unit v-model="data.product_customer.qty2"></Unit>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="申报币种" prop="product_customer.currency_code">
                        <Input v-model="data.product_customer.currency_code"></Input>
                    </FormItem>
                </Col>
                <Col :span="6">
                    <FormItem label="申报价格" prop="product_customer.price">
                        <Input v-model="data.product_customer.price"></Input>
                    </FormItem>
                </Col>

            </Row>
        </Form>
        <div slot="footer">
            <Button type="primary" icon="ios-add" @click="submit('formCreate')">提交</Button>
            <Button type="warning" icon="md-log-out" @click="$router.go(-1)">返回</Button>
        </div>
    </i-form>
</template>

<script>
    import IForm from "../../../components/content/form";
    import contentDrawer from '../../../mixins/content-drawer';
    import Goods from './goods';
    import Unit from "../../../components/form/unit";

    export default {
        name: "create",
        components: {Unit, IForm},
        mixins: [contentDrawer, Goods],
        mounted() {
            this.loading = false;
        }
    }
</script>

<style scoped>

</style>