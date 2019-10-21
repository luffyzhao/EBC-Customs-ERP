<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeliverTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deliver', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', 10)->comment('物流代码; 用于程序调用');
            $table->string('name')->comment('物流名称');
            $table->string('description')->comment('物流说明');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE `deliver` comment '物流表'");

        Schema::create('deliver_warehouse', function (Blueprint $table){
            $table->unsignedBigInteger('deliver_id');
            $table->unsignedBigInteger('warehouse_id');
            $table->string('code', 100)->comment('仓库物流代码');
        });
        DB::statement("ALTER TABLE `deliver` comment '物流仓库对应表'");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deliver');
    }
}
