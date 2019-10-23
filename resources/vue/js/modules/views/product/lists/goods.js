let hsCodes = [];

const findHsCode = (code) => {
    return new Promise((resolve, reject) => {
        if (hsCodes.length === 0) {
            import(`../../../../data/hs_code.json`).then((item) => {
                let hs = item.default.find((value, index) => {
                    return value.code === code;
                });
                if (hs) {
                    resolve(hs)
                } else {
                    reject(`${code} 海关编码不存在`)
                }
            });
        } else {
            let hs = hsCodes.find((value, index) => {
                return value.code === code;
            });
            if (hs) {
                resolve(hs)
            } else {
                reject(`${code} 海关编码不存在`)
            }
        }

    });
};

export default {
    data() {
        return {
            loading: true,
            specModal: false,
            specValues: [],
            ruleValidate: {
                name: [
                    {required: true, message: '商品名称必须填写', trigger: 'blur'},
                    {type: 'string', min: 1, max: 255, message: '商品名称字符长度是1-255个字符', trigger: 'blur'}
                ],
                sku: [
                    {required: true, message: '商品SKU必须填写', trigger: 'blur'},
                    {type: 'string', min: 1, max: 64, message: '商品SKU字符长度是1-64个字符', trigger: 'blur'}
                ],
                barcode: [
                    {required: true, message: '商品条码必须填写', trigger: 'blur'},
                    {type: 'string', min: 1, max: 64, message: '商品条码字符长度是1-64个字符', trigger: 'blur'}
                ],
                brand: [
                    {required: true, message: '商品品牌必须填写', trigger: 'blur'},
                    {type: 'string', min: 1, max: 255, message: '商品品牌字符长度是1-255个字符', trigger: 'blur'}
                ],
                weight: [
                    {required: true, type: 'number',message: '商品毛重必须填写并且必须是数值类型', trigger: 'blur'},
                ],
                net_weight: [
                    {required: true,type: 'number', message: '商品毛重必须填写并且必须是数值类型', trigger: 'blur'},
                ],
                "product_customer.customer_code": [
                    {required: true, message: '商品海关编码必须填写', trigger: 'blur'},
                    {
                        asyncValidator: (rule, value) => {
                            return findHsCode(value);
                        }
                    }
                ],
                "product_customer.customer_name": [
                    {required: true, message: '商品品名必须填写', trigger: 'blur'},
                    {type: 'string', min: 1, max: 255, message: '商品品名字符长度是1-255个字符', trigger: 'blur'}
                ],
                "product_customer.specs": [
                    {required: true, message: '商品规格型号必须填写', trigger: 'blur'},
                    {type: 'string', min: 1, max: 255, message: '商品规格型号长度是1-255个字符', trigger: 'blur'}
                ],
                "product_customer.origin_country_code": [
                    {required: true, message: '商品原产国必须填写', trigger: 'change'},
                ],
                "product_customer.unit_code": [
                    {required: true, message: '申报单位必须填写', trigger: 'change'},
                ],
                "product_customer.qty1": [
                    {required: true, type: 'number', message: '法1数量必须填写并且必须是数值类型', trigger: 'blur'},
                ],
                "product_customer.qty2": [
                    {type: 'number', message: '法2数量必须是数值类型', trigger: 'blur'},
                ],
                "product_customer.currency_code": [
                    {required: true, message: '币制必须填写', trigger: 'change'},
                ],
                "product_customer.price": [
                    {required: true, type: 'number', message: '商品单价必须填写并且必须是数值类型', trigger: 'blur'},
                ]
            },
            data: {
                product_customer: {
                    customs_hs_code: {}
                }
            },
        }
    },
    computed: {
        specElements() {
            let {elements} = this.data.product_customer.customs_hs_code;
            if (elements) {
                return JSON.parse(elements);
            } else {
                return [];
            }
        }
    },
    methods: {
        setHsCode(event, hsCode) {
            if(this.data.product_customer.customs_hs_code.code === hsCode){
                return;
            }
            findHsCode(hsCode).then((code) => {
                this.data.product_customer.customer_name = code.name;
                this.data.product_customer.customs_hs_code = code;
                this.specValues = [];
            }).catch((code) => {
                this.data.product_customer.customs_hs_code = {};
                this.specValues = [];
            });
        },
        setSpecModal(status) {
            this.specModal = status;
        },
        specModalOk() {
            this.data.product_customer.specs = '';
            this.specElements.forEach((item, index) => {
                if (typeof this.specValues[index] !== undefined) {
                    this.data.product_customer.specs += this.specValues[index];
                }
                this.data.product_customer.specs += '|';
            })
        },
        specModalCancel() {
            this.data.product_customer.specs = '';
        }
    }
}