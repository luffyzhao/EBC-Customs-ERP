<?php

use Illuminate\Support\Facades\Route;

Route::group(
    ['prefix' => '{company}', 'middleware' => ['company', 'api']],
    function () {

        Route::group(
            ['middleware' => 'rbac', 'prefix' => 'system', 'namespace'=>'System'],
            function () {
                Route::get(
                    'customs_currency',
                    'CustomsCurrencyController@index'
                )->name('system.customs_currency');


                Route::get(
                    'customs_district',
                    'CustomsDistrictController@index'
                )->name('system.customs_district');

                Route::get(
                    'customs_hs_code',
                    'CustomsHsCodeController@index'
                )->name('system.customs_hs_code');

                Route::get(
                    'customs_unit',
                    'CustomsUnitController@index'
                )->name('system.customs_unit');

            }
        );

        Route::group(
            ['middleware' => 'rbac', 'prefix' => 'goods', 'namespace'=>'Product'],
            function () {
                Route::get(
                    'index',
                    'IndexController@index'
                )->name('product.index');
            }
        );
    }
);