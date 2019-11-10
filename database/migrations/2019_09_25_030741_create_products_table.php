<?php

use Illuminate\Support\Facades\DB;
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
            $table->unsignedBigInteger('company_id', false)->comment('客户id');
            $table->string('barcode', 64)->comment('条码');
            $table->string('sku', 64)->comment('sku');
            $table->string('name', 255)->comment('产品名称');
            $table->string('brand', 255)->comment('品牌名称');
            $table->double('weight', 9, 5)->comment('毛重');
            $table->double('net_weight', 9, 5)->comment('净重');
            $table->tinyInteger('status', false, true)
                ->default(0)->comment('状态:0草稿 1已审核');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE `products` comment '产品基本信息表'");

        Schema::create('product_customers', function (Blueprint $table){
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id', false)->comment('产品ID');
            $table->string('customer_code', 10)->comment('海关代码');
            $table->string('customer_name', 255)->comment('海关品名');
            $table->char('origin_country_code', 3)->comment('原产地');
            $table->char('unit_code', 3)->comment('申报单位');
            $table->char('currency_code', 3)->comment('申报币种');
            $table->decimal('price', 9, 5)->comment('申报价格');
            $table->double('qty1', 19, 5)->comment('法1数量');
            $table->double('qty2', 19, 5)->nullable()->comment('法2数量');
            $table->text('specs')->comment('规格型号');
            $table->timestamps();
        });

        DB::statement("ALTER TABLE `product_customers` comment '产品海关信息表'");

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
