(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/async-validator/lib/util.js":
/*!**************************************************!*\
  !*** ./node_modules/async-validator/lib/util.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.convertFieldsError = convertFieldsError;
exports.format = format;
exports.isEmptyValue = isEmptyValue;
exports.isEmptyObject = isEmptyObject;
exports.asyncMap = asyncMap;
exports.complementError = complementError;
exports.deepMerge = deepMerge;
/* eslint no-console:0 */

var formatRegExp = /%[sdj%]/g;

var warning = exports.warning = function warning() {};

// don't print warning message when in production env or node runtime
if ( true && typeof window !== 'undefined' && typeof document !== 'undefined') {
  exports.warning = warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({ errors: results, fields: convertFieldsError(results) }) : resolve();
      }
    };
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending['catch'](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/***/ }),

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
		31
	],
	"./currency.json": [
		"./resources/vue/js/data/currency.json",
		32
	],
	"./hs_code.json": [
		"./resources/vue/js/data/hs_code.json",
		5
	],
	"./unit.json": [
		"./resources/vue/js/data/unit.json",
		33
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

var _util = __webpack_require__(/*! async-validator/lib/util */ "./node_modules/async-validator/lib/util.js");

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
    var _this = this;

    return {
      loading: true,
      specModal: false,
      specValues: [],
      data: {
        product_customer: {
          customs_hs_code: {}
        }
      },
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
          asyncValidator: function asyncValidator(rule, value, callback) {
            if (_util.isEmptyValue(_this.data.product_customer.customs_hs_code.unit2, 'string')) {
              if (!_util.isEmptyValue(value, 'string')) {
                callback(new Error('第二法定单位为空时，第二法定数量也必须为空！'));
              }
            } else {
              if (_util.isEmptyValue(value, 'string')) {
                callback(new Error('第二法定单位不为空时，第二法定数量也不能为空！'));
              }
            }

            callback();
          },
          trigger: 'blur'
        }, {
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
      var _this2 = this;

      if (this.data.product_customer.customs_hs_code.code === hsCode) {
        return;
      }

      findHsCode(hsCode).then(function (code) {
        _this2.data.product_customer.customer_name = code.name;
        _this2.data.product_customer.customs_hs_code = code;
        _this2.specValues = [];
      })["catch"](function (code) {
        _this2.data.product_customer.customs_hs_code = {};
        _this2.specValues = [];
      });
    },
    setSpecModal: function setSpecModal(status) {
      this.specValues = this.data.product_customer.specs.split('|');
      this.specModal = status;
    },
    specModalOk: function specModalOk() {
      var _this3 = this;

      this.data.product_customer.specs = '';
      this.specElements.forEach(function (item, index) {
        if (_typeof(_this3.specValues[index]) !== undefined) {
          _this3.data.product_customer.specs += _this3.specValues[index];
        }

        _this3.data.product_customer.specs += '|';
      });
      this.specValues = [];
    },
    specModalCancel: function specModalCancel() {// this.data.product_customer.specs = '';
    }
  }
});

/***/ })

}]);