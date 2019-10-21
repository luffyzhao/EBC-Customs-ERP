<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function productCustomer(){
        return $this->hasOne(ProductCustomer::class, 'product_id', 'id');
    }
}