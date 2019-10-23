(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/select-json.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/components/form/select-json.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "select-json",
  mixins: [iview_src_mixins_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    value: {
      type: String,
      "default": ''
    },
    type: {
      type: String,
      "default": 'unit'
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      lists: []
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

    this.jsonData().then(function (res) {
      _this.lists = res["default"];
    });
  },
  methods: {
    jsonData: function jsonData() {
      return __webpack_require__("./resources/vue/js/data lazy recursive ^\\.\\/.*\\.json$")("./".concat(this.type, ".json"));
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/select-json.vue?vue&type=template&id=3f0f113a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/components/form/select-json.vue?vue&type=template&id=3f0f113a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      attrs: { disabled: _vm.disabled, filterable: "" },
      model: {
        value: _vm.defaultValue,
        callback: function($$v) {
          _vm.defaultValue = $$v
        },
        expression: "defaultValue"
      }
    },
    _vm._l(_vm.lists, function(item) {
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

/***/ "./resources/vue/js/data lazy recursive ^\\.\\/.*\\.json$":
/*!********************************************************************!*\
  !*** ./resources/vue/js/data lazy ^\.\/.*\.json$ namespace object ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./country.json": [
		"./resources/vue/js/data/country.json",
		29
	],
	"./currency.json": [
		"./resources/vue/js/data/currency.json",
		30
	],
	"./hs_code.json": [
		"./resources/vue/js/data/hs_code.json",
		5
	],
	"./unit.json": [
		"./resources/vue/js/data/unit.json",
		31
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/vue/js/data lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/vue/js/modules/components/form/select-json.vue":
/*!******************************************************************!*\
  !*** ./resources/vue/js/modules/components/form/select-json.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_json_vue_vue_type_template_id_3f0f113a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-json.vue?vue&type=template&id=3f0f113a&scoped=true& */ "./resources/vue/js/modules/components/form/select-json.vue?vue&type=template&id=3f0f113a&scoped=true&");
/* harmony import */ var _select_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-json.vue?vue&type=script&lang=js& */ "./resources/vue/js/modules/components/form/select-json.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _select_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _select_json_vue_vue_type_template_id_3f0f113a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _select_json_vue_vue_type_template_id_3f0f113a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3f0f113a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/js/modules/components/form/select-json.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vue/js/modules/components/form/select-json.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/vue/js/modules/components/form/select-json.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./select-json.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/select-json.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/js/modules/components/form/select-json.vue?vue&type=template&id=3f0f113a&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/vue/js/modules/components/form/select-json.vue?vue&type=template&id=3f0f113a&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_json_vue_vue_type_template_id_3f0f113a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./select-json.vue?vue&type=template&id=3f0f113a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/components/form/select-json.vue?vue&type=template&id=3f0f113a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_json_vue_vue_type_template_id_3f0f113a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_json_vue_vue_type_template_id_3f0f113a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/vue/js/modules/views/product/lists/goods.js":
/*!***************************************************************!*\
  !*** ./resources/vue/js/modules/views/product/lists/goods.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hsCodes = [];

var findHsCode = function findHsCode(code) {
  return new Promise(function (resolve, reject) {
    if (hsCodes.length === 0) {
      __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! ../../../../data/hs_code.json */ "./resources/vue/js/data/hs_code.json", 3)).then(function (item) {
        var hs = item["default"].find(function (value, index) {
          return value.code === code;
        });

        if (hs) {
          resolve(hs);
        } else {
          reject("".concat(code, " \u6D77\u5173\u7F16\u7801\u4E0D\u5B58\u5728"));
        }
      });
    } else {
      var hs = hsCodes.find(function (value, index) {
        return value.code === code;
      });

      if (hs) {
        resolve(hs);
      } else {
        reject("".concat(code, " \u6D77\u5173\u7F16\u7801\u4E0D\u5B58\u5728"));
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      specModal: false,
      specValues: [],
      ruleValidate: {
        name: [{
          required: true,
          message: '商品名称必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 1,
          max: 255,
          message: '商品名称字符长度是1-255个字符',
          trigger: 'blur'
        }],
        sku: [{
          required: true,
          message: '商品SKU必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 1,
          max: 64,
          message: '商品SKU字符长度是1-64个字符',
          trigger: 'blur'
        }],
        barcode: [{
          required: true,
          message: '商品条码必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 1,
          max: 64,
          message: '商品条码字符长度是1-64个字符',
          trigger: 'blur'
        }],
        brand: [{
          required: true,
          message: '商品品牌必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 1,
          max: 255,
          message: '商品品牌字符长度是1-255个字符',
          trigger: 'blur'
        }],
        weight: [{
          required: true,
          type: 'number',
          message: '商品毛重必须填写并且必须是数值类型',
          trigger: 'blur'
        }],
        net_weight: [{
          required: true,
          type: 'number',
          message: '商品毛重必须填写并且必须是数值类型',
          trigger: 'blur'
        }],
        "product_customer.customer_code": [{
          required: true,
          message: '商品海关编码必须填写',
          trigger: 'blur'
        }, {
          asyncValidator: function asyncValidator(rule, value) {
            return findHsCode(value);
          }
        }],
        "product_customer.customer_name": [{
          required: true,
          message: '商品品名必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 1,
          max: 255,
          message: '商品品名字符长度是1-255个字符',
          trigger: 'blur'
        }],
        "product_customer.specs": [{
          required: true,
          message: '商品规格型号必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 1,
          max: 255,
          message: '商品规格型号长度是1-255个字符',
          trigger: 'blur'
        }],
        "product_customer.origin_country_code": [{
          required: true,
          message: '商品原产国必须填写',
          trigger: 'change'
        }],
        "product_customer.unit_code": [{
          required: true,
          message: '申报单位必须填写',
          trigger: 'change'
        }],
        "product_customer.qty1": [{
          required: true,
          type: 'number',
          message: '法1数量必须填写并且必须是数值类型',
          trigger: 'blur'
        }],
        "product_customer.qty2": [{
          type: 'number',
          message: '法2数量必须是数值类型',
          trigger: 'blur'
        }],
        "product_customer.currency_code": [{
          required: true,
          message: '币制必须填写',
          trigger: 'change'
        }],
        "product_customer.price": [{
          required: true,
          type: 'number',
          message: '商品单价必须填写并且必须是数值类型',
          trigger: 'blur'
        }]
      },
      data: {
        product_customer: {
          customs_hs_code: {}
        }
      }
    };
  },
  computed: {
    specElements: function specElements() {
      var elements = this.data.product_customer.customs_hs_code.elements;

      if (elements) {
        return JSON.parse(elements);
      } else {
        return [];
      }
    }
  },
  methods: {
    setHsCode: function setHsCode(event, hsCode) {
      var _this = this;

      if (this.data.product_customer.customs_hs_code.code === hsCode) {
        return;
      }

      findHsCode(hsCode).then(function (code) {
        _this.data.product_customer.customer_name = code.name;
        _this.data.product_customer.customs_hs_code = code;
        _this.specValues = [];
      })["catch"](function (code) {
        _this.data.product_customer.customs_hs_code = {};
        _this.specValues = [];
      });
    },
    setSpecModal: function setSpecModal(status) {
      this.specModal = status;
    },
    specModalOk: function specModalOk() {
      var _this2 = this;

      this.data.product_customer.specs = '';
      this.specElements.forEach(function (item, index) {
        if (_typeof(_this2.specValues[index]) !== undefined) {
          _this2.data.product_customer.specs += _this2.specValues[index];
        }

        _this2.data.product_customer.specs += '|';
      });
    },
    specModalCancel: function specModalCancel() {
      this.data.product_customer.specs = '';
    }
  }
});

/***/ })

}]);