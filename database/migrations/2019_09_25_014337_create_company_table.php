<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 50)->comment('公司名称');
            $table->string('phone')->comment('负责人手机号码');
            $table->unsignedTinyInteger('status')->default(1)
                ->comment('状态 0 关闭 1 开启');
            $table->string('description')->comment('店铺说明');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE `company` comment '公司表'");


        Schema::create('company_warehouses', function (Blueprint $table){
            $table->unsignedBigInteger('company_id')->comment('公司ID');
            $table->unsignedBigInteger('warehouse_id')->comment('仓库ID');
            $table->char('customs_code', 10)->comment('海关十位代码');
            $table->string('customs_name', 255)->comment('海关企业备案名称');
            $table->string('dxpid')->comment('dxpid');
            $table->unsignedBigInteger('deliver_id')->comment('仓库快递方式');
            $table->primary(['company_id', 'warehouse_id']);
        });
        DB::statement("ALTER TABLE `company_warehouses` comment '公司仓库表'");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company');
        Schema::dropIfExists('company_warehouses');
    }
}
