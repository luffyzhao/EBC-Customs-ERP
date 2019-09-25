<?php

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
        Schema::create('regional_enterprises', function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('name', 100)->comment('企业名称');
            $table->char('customs_code', 10)->comment('海关十位代码');
            $table->string('customs_name', 255)->comment('海关企业备案名称');
            $table->string('dxpid', 100)->comment('dxpId');
            $table->string('emsno')->comment('账册号');
            $table->timestamps();
        });

        Schema::create('warehouse', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 100)->comment('仓库名称');
            $table->char('customs_districts_code', '5')->comment('关区代码');
            $table->unsignedBigInteger('regional_enterprises_id', false)->comment('关联区内企业');
            $table->string('areas')->comment('仓库地区');
            $table->string('address')->comment('仓库详细地址');
            $table->string('description')->comment('仓库说明');
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
        Schema::dropIfExists('warehouse');
        Schema::dropIfExists('regional_enterprises');
    }
}
