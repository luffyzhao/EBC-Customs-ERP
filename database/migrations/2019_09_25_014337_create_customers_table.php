<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 50)->comment('客户名称');
            $table->char('customs_code', 10)->comment('海关十位代码');
            $table->string('customs_name', 255)->comment('海关企业备案名称');
            $table->tinyInteger('status', false, true)
                ->default(1)->comment('状态 0 关闭 1 开户');
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
        Schema::dropIfExists('customers');
    }
}
