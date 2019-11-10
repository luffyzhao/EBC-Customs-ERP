<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWarehouseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('warehouse_code', 5)->comment('仓库代码');
            $table->string('name', 100)->comment('仓库名称');
            $table->string('areas')->comment('仓库地区 ps: 湖南省 长沙市 长沙县');
            $table->string('address')->comment('仓库详细地址');
            $table->string('description')->comment('仓库说明');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE `warehouses` comment '仓库表'");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('warehouses');
    }
}
