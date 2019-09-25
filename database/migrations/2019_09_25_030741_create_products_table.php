<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('customer_id', false)->comment('客户id');
            $table->string('barcode', 64)->comment('条码');
            $table->string('sku', 64)->comment('sku');
            $table->string('name', 255)->comment('产品名称');
            $table->string('brand', 255)->comment('品牌名称');
            $table->string('customer_name', 255)->comment('海关品名');
            $table->string('customer_code', 10)->comment('海关代码');
            $table->double('weight', 9, 5)->comment('毛重');
            $table->double('net_weight', 9, 5)->comment('净重');
            $table->char('origin_country_code', 3)->comment('原产地');
            $table->char('unit_code', 3)->comment('申报单位');
            $table->char('currency_code', 3)->comment('申报币种');
            $table->decimal('price', 9, 5)->comment('申报价格');
            $table->tinyInteger('status', false, true)
                ->default(0)->comment('状态:0草稿 1待审核 2已审核');
            $table->timestamps();
        });

        Schema::create('product_customers', function (Blueprint $table){
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id', false)->comment('产品ID');
            $table->string('specs', 255)->comment('规格型号');
            $table->char('unit', 3)->comment('法1单位');
            $table->double('qty1', 9, 5)->comment('法1数量');
            $table->char('unit2', 3)->comment('法2单位');
            $table->double('qty2', 9, 5)->comment('法2数量');
            $table->timestamps();
        });

        Schema::create('product_inventory', function (Blueprint $table){
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id', false)->comment('产品ID');
            $table->unsignedBigInteger('warehouse_id', false)->comment('仓库ID');
            $table->unsignedBigInteger('sellable', false)->comment('可销售');
            $table->unsignedBigInteger('unsellable', false)->comment('不良品');
            $table->unsignedBigInteger('reserved', false)->comment('冻结');
            $table->unsignedBigInteger('shipped', false)->comment('出库');
            $table->unsignedBigInteger('expired', false)->comment('过期');
            $table->timestamps();
        });

        Schema::create('product_batch_inventory', function (Blueprint $table){
            $table->bigIncrements('id');
            $table->unsignedBigInteger('receiving_id', false)->comment('收货单ID');
            $table->unsignedBigInteger('shelve_id', false)->comment('货架ID');
            $table->unsignedBigInteger('product_id', false)->comment('产品ID');
            $table->unsignedBigInteger('warehouse_id', false)->comment('仓库ID');
            $table->unsignedBigInteger('quantity', false)->comment('库存');
            $table->tinyInteger('expire')->default(0)->comment('是否过期 0 否 1 是');
            $table->date('production_date')->default(null)->nullable()->comment('生产日期');
            $table->unsignedInteger('life_days')->default(null)->nullable()->comment('保质时间');
            $table->date('expiry_date')->default(null)->nullable()->comment('有效期限');
            $table->tinyInteger('unsellable')->comment('是否不良品');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
        Schema::dropIfExists('product_customers');
    }
}
