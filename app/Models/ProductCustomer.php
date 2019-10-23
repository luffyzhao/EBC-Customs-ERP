<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ProductCustomer extends Model
{
    protected $fillable = ['product_id', 'customer_code', 'customer_name', 'origin_country_code', 'unit_code', 'currency_code', 'price', 'qty1', 'qty2', 'specs'];

    public $timestamps = false;

    public function product(){
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    public function customsHsCode(){
        return $this->belongsTo(CustomsHsCode::class, 'customer_code', 'code');
    }
}