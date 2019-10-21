<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsForAuth extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users',function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->after('role_id')->default(1);
        });

        Schema::table('roles',function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->after('id')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('company_id');
        });
        Schema::table('roles', function (Blueprint $table) {
            $table->dropColumn('company_id');
        });
    }
}
