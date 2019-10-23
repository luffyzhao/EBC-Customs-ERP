<?php


namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class StoreRequest extends FormRequest
{
    /**
     * @return array
     * @author luffyzhao@vip.126.com
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'min:1', 'max:255'],
            'sku' => ['required', 'min:1', 'max:64', Rule::unique('products', 'sku')->where('company_id', $this->input('company_id'))],
            'barcode' => ['required', 'min:1', 'max:64', Rule::unique('products', 'barcode')->where('company_id', $this->input('company_id'))],
            'brand' => ['required', 'min:1', 'max:255'],
            'weight' => ['required', 'numeric'],
            'net_weight' => ['required', 'numeric'],
            'product_customer' => ['required', 'array', 'min:8', 'min:9'],
            'product_customer.customer_code'=> ['required', 'size:10'],
            'product_customer.customer_name'=> ['required', 'max:255'],
            'product_customer.currency_code'=> ['required', 'size:3'],
            'product_customer.origin_country_code'=> ['required', 'size:3'],
            'product_customer.price'=> ['required', 'numeric'],
            'product_customer.qty1'=> ['required', 'numeric'],
            'product_customer.qty2'=> ['nullable', 'numeric'],
            'product_customer.specs'=> ['required', 'max:255'],
            'product_customer.unit_code'=> ['required', 'size:3'],
        ];
    }

    /**
     * @return array
     * @author luffyzhao@vip.126.com
     */
    public function attributes(): array
    {
        return [
            'name' => '产品名称',
            'sku' => '产品名称',
            'barcode' => '产品名称',
            'brand' => '产品名称',
            'weight' => '产品名称',
            'net_weight' => '产品名称',
            'product_customer' => '备案数据',
            'product_customer.customer_code' => '海关编码',
            'product_customer.customer_name' => '海关品名',
            'product_customer.currency_code' => '申报币制',
            'product_customer.origin_country_code' => '产品原产地',
            'product_customer.price' => '申报价格',
            'product_customer.qty1' => '第一法定单位',
            'product_customer.qty2' => '第二法定单位',
            'product_customer.specs' => '规格型号',
            'product_customer.unit_code' => '申报单位',
        ];
    }

    /**
     * 配置验证器实例.
     *
     * @param  Validator  $validator
     * @return void
     */
    public function withValidator(Validator $validator)
    {
        $validator->after(function (Validator $validator) {
            if (!$this->weightGeNetWeight()) {
                $validator->errors()->add('weight', '毛重必须大于净重');
            }
        });
    }

    /**
     * 判断净重是否大于毛重
     * @author luffyzhao@vip.126.com
     */
    protected function weightGeNetWeight(){
        return $this->input('weight') > $this->input('net_weight');
    }

}