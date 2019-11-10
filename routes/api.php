<?php

use Illuminate\Support\Facades\Route;

Route::group(
    ['prefix' => '{company}', 'middleware' => ['company', 'api', 'rbac']],
    function () {

        Route::group(
            ['prefix' => 'system', 'namespace'=>'System'],
            function () {
                Route::get(
                    'customs_currency',
                    'CustomsCurrencyController@index'
                )->name('system.customs_currency');

                Route::get(
                    'customs_country',
                    'CustomsCountryController@index'
                )->name('system.customs_country');

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

                Route::get('warehouses', 'WarehouseController@index')->name('warehouses.index');

            }
        );

        Route::put('product/{product}/examine', 'Product\IndexController@examine')->name('product.examine');
        Route::resource('product', 'Product\IndexController', [
            'names' => [
                'create' => 'product.store',
                'edit' => 'product.update',
            ],
        ]);


    }
);