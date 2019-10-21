(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/unit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/components/form/unit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var iview_src_mixins_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iview/src/mixins/emitter */ "./node_modules/iview/src/mixins/emitter.js");
//
//
//
//
//
//


var units = function units() {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.t.bind(null, /*! ../../../data/units.json */ "./resources/vue/js/data/units.json", 3));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "unit",
  mixins: [iview_src_mixins_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    value: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      unitLists: []
    };
  },
  computed: {
    defaultValue: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
        this.dispatch('FormItem', 'on-form-change', value);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    units().then(function (res) {
      _this.unitLists = res["default"];
    });
  }
});

/***/ }),

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
/* harmony import */ var _components_form_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/form/unit */ "./resources/vue/js/modules/components/form/unit.vue");
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
    Unit: _components_form_unit__WEBPACK_IMPORTED_MODULE_3__["default"],
    IForm: _components_content_form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_content_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], _goods__WEBPACK_IMPORTED_MODULE_2__["default"]],
  mounted: function mounted() {
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/iview/src/mixins/emitter.js":
/*!**************************************************!*\
  !*** ./node_modules/iview/src/mixins/emitter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/unit.vue?vue&type=template&id=37cc939a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/components/form/unit.vue?vue&type=template&id=37cc939a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "Select",
    {
      attrs: { filterable: "" },
      model: {
        value: _vm.defaultValue,
        callback: function($$v) {
          _vm.defaultValue = $$v
        },
        expression: "defaultValue"
      }
    },
    _vm._l(_vm.unitLists, function(item) {
      return _c("Option", { key: item.code, attrs: { value: item.code } }, [
        _vm._v(_vm._s(item.code) + " - " + _vm._s(item.name))
      ])
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
                      _c("Input", {
                        model: {
                          value: _vm.data.product_customer.specs,
                          callback: function($$v) {
                            _vm.$set(_vm.data.product_customer, "specs", $$v)
                          },
                          expression: "data.product_customer.specs"
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
                    { attrs: { label: "法1单位" } },
                    [
                      _c("Input", {
                        attrs: { disabled: "" },
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
                      _c("Input", {
                        attrs: { disabled: "" },
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
                      _c("Input", {
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
                      _c("Input", {
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
                      _c("Unit", {
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
                      _c("Unit", {
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
                      _c("Input", {
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

/***/ "./resources/vue/js/modules/components/form/unit.vue":
/*!***********************************************************!*\
  !*** ./resources/vue/js/modules/components/form/unit.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unit_vue_vue_type_template_id_37cc939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit.vue?vue&type=template&id=37cc939a&scoped=true& */ "./resources/vue/js/modules/components/form/unit.vue?vue&type=template&id=37cc939a&scoped=true&");
/* harmony import */ var _unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit.vue?vue&type=script&lang=js& */ "./resources/vue/js/modules/components/form/unit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _unit_vue_vue_type_template_id_37cc939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _unit_vue_vue_type_template_id_37cc939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "37cc939a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/js/modules/components/form/unit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vue/js/modules/components/form/unit.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/vue/js/modules/components/form/unit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./unit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/unit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/js/modules/components/form/unit.vue?vue&type=template&id=37cc939a&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/vue/js/modules/components/form/unit.vue?vue&type=template&id=37cc939a&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unit_vue_vue_type_template_id_37cc939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./unit.vue?vue&type=template&id=37cc939a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/unit.vue?vue&type=template&id=37cc939a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unit_vue_vue_type_template_id_37cc939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unit_vue_vue_type_template_id_37cc939a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vue/js/modules/mixins/content-drawer.js":
/*!***********************************************************!*\
  !*** ./resources/vue/js/modules/mixins/content-drawer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _from_submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-submit */ "./resources/vue/js/modules/mixins/from-submit.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_from_submit__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    props: null
  },
  data: function data() {
    return {
      drawer: {
        value: true
      }
    };
  },
  methods: {
    closeDrawer: function closeDrawer(v) {
      if (v === false) {
        this.drawer.value = false;
        this.drawer.props = null;
        this.$emit('on-close', false);
        this.$emit('on-refresh');
      }
    }
  }
});

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



/***/ }),

/***/ "./resources/vue/js/modules/views/product/lists/goods.js":
/*!***************************************************************!*\
  !*** ./resources/vue/js/modules/views/product/lists/goods.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      ruleValidate: {},
      data: {
        product_customer: {
          customs_hs_code: {}
        }
      }
    };
  }
});

/***/ })

}]);