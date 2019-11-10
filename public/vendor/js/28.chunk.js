(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/product/lists/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/views/product/lists/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_content_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/content/form */ "./resources/vue/js/modules/components/content/form.vue");
/* harmony import */ var _mixins_content_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/content-drawer */ "./resources/vue/js/modules/mixins/content-drawer.js");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods */ "./resources/vue/js/modules/views/product/lists/goods.js");
/* harmony import */ var _components_form_select_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/form/select-json */ "./resources/vue/js/modules/components/form/select-json.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  components: {
    SelectJson: _components_form_select_json__WEBPACK_IMPORTED_MODULE_3__["default"],
    IForm: _components_content_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_content_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], _goods__WEBPACK_IMPORTED_MODULE_2__["default"]],
  mounted: function mounted() {
    this.loading = false;
  },
  methods: {
    submit: function submit(name) {
      var _this = this;

      this.validate(name).then(function () {
        _this.loading = true;

        _this.$http.post("product", _this.data).then(function () {
          _this.$store.dispatch('layout/remove', _this.$route);
        })["finally"](function () {
          _this.loading = false;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/product/lists/create.vue?vue&type=template&id=003a6894&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/views/product/lists/create.vue?vue&type=template&id=003a6894&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "i-form",
    { attrs: { "spin-show": _vm.loading, width: 980 } },
    [
      _c(
        "Form",
        {
          ref: "formCreate",
          attrs: {
            model: _vm.data,
            "label-width": 100,
            rules: _vm.ruleValidate
          }
        },
        [
          _c(
            "Row",
            [
              _c(
                "Col",
                { attrs: { span: 24 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "产品名称", prop: "name" } },
                    [
                      _c("Input", {
                        model: {
                          value: _vm.data.name,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "name", $$v)
                          },
                          expression: "data.name"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 12 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "产品SKU", prop: "sku" } },
                    [
                      _c("Input", {
                        model: {
                          value: _vm.data.sku,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "sku", $$v)
                          },
                          expression: "data.sku"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 12 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "产品条码", prop: "barcode" } },
                    [
                      _c("Input", {
                        model: {
                          value: _vm.data.barcode,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "barcode", $$v)
                          },
                          expression: "data.barcode"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 8 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "品牌名称", prop: "brand" } },
                    [
                      _c("Input", {
                        model: {
                          value: _vm.data.brand,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "brand", $$v)
                          },
                          expression: "data.brand"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 8 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "毛重", prop: "weight" } },
                    [
                      _c("Input", {
                        attrs: { number: "" },
                        model: {
                          value: _vm.data.weight,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "weight", $$v)
                          },
                          expression: "data.weight"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 8 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "净重", prop: "net_weight" } },
                    [
                      _c("Input", {
                        attrs: { number: "" },
                        model: {
                          value: _vm.data.net_weight,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "net_weight", $$v)
                          },
                          expression: "data.net_weight"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "海关代码",
                        prop: "product_customer.customer_code"
                      }
                    },
                    [
                      _c("Input", {
                        on: {
                          "on-enter": function($event) {
                            return _vm.setHsCode(
                              $event,
                              _vm.data.product_customer.customer_code
                            )
                          },
                          "on-blur": function($event) {
                            return _vm.setHsCode(
                              $event,
                              _vm.data.product_customer.customer_code
                            )
                          }
                        },
                        model: {
                          value: _vm.data.product_customer.customer_code,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.data.product_customer,
                              "customer_code",
                              $$v
                            )
                          },
                          expression: "data.product_customer.customer_code"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "海关品名",
                        prop: "product_customer.customer_name"
                      }
                    },
                    [
                      _c("Input", {
                        model: {
                          value: _vm.data.product_customer.customer_name,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.data.product_customer,
                              "customer_name",
                              $$v
                            )
                          },
                          expression: "data.product_customer.customer_name"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 12 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "规格型号",
                        prop: "product_customer.specs"
                      }
                    },
                    [
                      _c(
                        "Input",
                        {
                          model: {
                            value: _vm.data.product_customer.specs,
                            callback: function($$v) {
                              _vm.$set(_vm.data.product_customer, "specs", $$v)
                            },
                            expression: "data.product_customer.specs"
                          }
                        },
                        [
                          _c("Icon", {
                            attrs: { slot: "suffix", type: "md-code-working" },
                            on: {
                              click: function($event) {
                                return _vm.setSpecModal(true)
                              }
                            },
                            slot: "suffix"
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "法1单位" } },
                    [
                      _c("SelectJson", {
                        attrs: { disabled: "", type: "unit" },
                        model: {
                          value:
                            _vm.data.product_customer.customs_hs_code.unit1,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.data.product_customer.customs_hs_code,
                              "unit1",
                              $$v
                            )
                          },
                          expression:
                            "data.product_customer.customs_hs_code.unit1"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "法2单位" } },
                    [
                      _c("SelectJson", {
                        attrs: { disabled: "", type: "unit" },
                        model: {
                          value:
                            _vm.data.product_customer.customs_hs_code.unit2,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.data.product_customer.customs_hs_code,
                              "unit2",
                              $$v
                            )
                          },
                          expression:
                            "data.product_customer.customs_hs_code.unit2"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "原产地",
                        prop: "product_customer.origin_country_code"
                      }
                    },
                    [
                      _c("SelectJson", {
                        attrs: { type: "country" },
                        model: {
                          value: _vm.data.product_customer.origin_country_code,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.data.product_customer,
                              "origin_country_code",
                              $$v
                            )
                          },
                          expression:
                            "data.product_customer.origin_country_code"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "申报单位",
                        prop: "product_customer.unit_code"
                      }
                    },
                    [
                      _c("SelectJson", {
                        model: {
                          value: _vm.data.product_customer.unit_code,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.data.product_customer,
                              "unit_code",
                              $$v
                            )
                          },
                          expression: "data.product_customer.unit_code"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: { label: "法1数量", prop: "product_customer.qty1" }
                    },
                    [
                      _c("Input", {
                        attrs: { number: "" },
                        model: {
                          value: _vm.data.product_customer.qty1,
                          callback: function($$v) {
                            _vm.$set(_vm.data.product_customer, "qty1", $$v)
                          },
                          expression: "data.product_customer.qty1"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: { label: "法2数量", prop: "product_customer.qty2" }
                    },
                    [
                      _c("Input", {
                        attrs: { number: "" },
                        model: {
                          value: _vm.data.product_customer.qty2,
                          callback: function($$v) {
                            _vm.$set(_vm.data.product_customer, "qty2", $$v)
                          },
                          expression: "data.product_customer.qty2"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "申报币种",
                        prop: "product_customer.currency_code"
                      }
                    },
                    [
                      _c("SelectJson", {
                        attrs: { type: "currency" },
                        model: {
                          value: _vm.data.product_customer.currency_code,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.data.product_customer,
                              "currency_code",
                              $$v
                            )
                          },
                          expression: "data.product_customer.currency_code"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: 6 } },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "申报价格",
                        prop: "product_customer.price"
                      }
                    },
                    [
                      _c("Input", {
                        attrs: { number: "" },
                        model: {
                          value: _vm.data.product_customer.price,
                          callback: function($$v) {
                            _vm.$set(_vm.data.product_customer, "price", $$v)
                          },
                          expression: "data.product_customer.price"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "规格型号" },
          on: { "on-ok": _vm.specModalOk, "on-cancel": _vm.specModalCancel },
          model: {
            value: _vm.specModal,
            callback: function($$v) {
              _vm.specModal = $$v
            },
            expression: "specModal"
          }
        },
        [
          _c(
            "Form",
            { attrs: { "label-width": 100 } },
            _vm._l(_vm.specElements, function(item, index) {
              return _c(
                "FormItem",
                { key: index, attrs: { label: item } },
                [
                  _c("Input", {
                    model: {
                      value: _vm.specValues[index],
                      callback: function($$v) {
                        _vm.$set(_vm.specValues, index, $$v)
                      },
                      expression: "specValues[index]"
                    }
                  })
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { slot: "footer" }, slot: "footer" },
        [
          _c(
            "Button",
            {
              attrs: { type: "primary", icon: "ios-add" },
              on: {
                click: function($event) {
                  return _vm.submit("formCreate")
                }
              }
            },
            [_vm._v("提交")]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "warning", icon: "md-log-out" },
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [_vm._v("返回")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vue/js/modules/views/product/lists/create.vue":
/*!*****************************************************************!*\
  !*** ./resources/vue/js/modules/views/product/lists/create.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_003a6894_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=003a6894&scoped=true& */ "./resources/vue/js/modules/views/product/lists/create.vue?vue&type=template&id=003a6894&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/vue/js/modules/views/product/lists/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_003a6894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_003a6894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "003a6894",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/js/modules/views/product/lists/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vue/js/modules/views/product/lists/create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/vue/js/modules/views/product/lists/create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/product/lists/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/js/modules/views/product/lists/create.vue?vue&type=template&id=003a6894&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/vue/js/modules/views/product/lists/create.vue?vue&type=template&id=003a6894&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_003a6894_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=003a6894&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/product/lists/create.vue?vue&type=template&id=003a6894&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_003a6894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_003a6894_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);