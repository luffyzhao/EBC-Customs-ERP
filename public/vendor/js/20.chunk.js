(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/views/authorities/menu/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/views/authorities/menu/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_content_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/content-drawer */ "./resources/js/modules/mixins/content-drawer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./resources/js/modules/views/authorities/menu/menu.js");
/* harmony import */ var _components_content_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/content/form */ "./resources/js/modules/components/content/form.vue");
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
    IForm: _components_content_form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_content_drawer__WEBPACK_IMPORTED_MODULE_0__["default"], _menu__WEBPACK_IMPORTED_MODULE_1__["default"]],
  mounted: function mounted() {
    var _this = this;

    this.$http.get("authorities/menu/create").then(function (res) {
      _this.authorities.data = res;
    })["finally"](function () {
      _this.loading = false;
    });
  },
  methods: {
    submit: function submit(name) {
      var _this2 = this;

      this.validate(name).then(function () {
        _this2.loading = true;

        _this2.$http.post("authorities/menu", _this2.data).then(function () {
          _this2.$store.dispatch('layout/remove', _this2.$route);
        })["finally"](function () {
          _this2.loading = false;
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/views/authorities/menu/create.vue?vue&type=template&id=3bf69287&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/views/authorities/menu/create.vue?vue&type=template&id=3bf69287&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "spin-show": _vm.loading } },
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
            "FormItem",
            { attrs: { label: "上级菜单" } },
            [
              _c("Input", {
                attrs: { value: _vm.$route.query.name, disabled: "" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "菜单名称", prop: "name" } },
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
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "菜单url", prop: "url" } },
            [
              _c("Input", {
                model: {
                  value: _vm.data.url,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "url", $$v)
                  },
                  expression: "data.url"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "菜单描述", prop: "description" } },
            [
              _c("Input", {
                attrs: { type: "textarea", rows: 4 },
                model: {
                  value: _vm.data.description,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "description", $$v)
                  },
                  expression: "data.description"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "排序", prop: "sort" } },
            [
              _c("Input", {
                attrs: { number: "" },
                model: {
                  value: _vm.data.sort,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "sort", $$v)
                  },
                  expression: "data.sort"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "分配权限" } },
            [
              _c("Transfer", {
                attrs: {
                  titles: ["可分配权限", "已有权限"],
                  "list-style": { width: "200px", height: "500px" },
                  data: _vm.authorities.data,
                  "target-keys": _vm.data.authorities
                },
                on: { "on-change": _vm.handleChange }
              })
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

/***/ "./resources/js/modules/views/authorities/menu/create.vue":
/*!****************************************************************!*\
  !*** ./resources/js/modules/views/authorities/menu/create.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_3bf69287_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=3bf69287&scoped=true& */ "./resources/js/modules/views/authorities/menu/create.vue?vue&type=template&id=3bf69287&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/modules/views/authorities/menu/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_3bf69287_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_3bf69287_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3bf69287",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/views/authorities/menu/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/views/authorities/menu/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/views/authorities/menu/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/views/authorities/menu/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/views/authorities/menu/create.vue?vue&type=template&id=3bf69287&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/modules/views/authorities/menu/create.vue?vue&type=template&id=3bf69287&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3bf69287_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=3bf69287&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/views/authorities/menu/create.vue?vue&type=template&id=3bf69287&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3bf69287_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3bf69287_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/views/authorities/menu/menu.js":
/*!*************************************************************!*\
  !*** ./resources/js/modules/views/authorities/menu/menu.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      data: {
        parent_id: this.$route.query.id,
        parent: {
          name: '顶级菜单'
        },
        authorities: []
      },
      authorities: {
        data: []
      },
      ruleValidate: {
        name: [{
          required: true,
          message: '菜单名称必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 2,
          max: 20,
          message: '菜单名称字符长度是2-20个字符',
          trigger: 'blur'
        }],
        url: [{
          required: true,
          message: '菜单url必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 2,
          max: 50,
          message: '菜单url字符长度是2-50个字符',
          trigger: 'blur'
        }],
        sort: [{
          required: true,
          type: 'number',
          message: '排序必须填写',
          trigger: 'blur'
        }, {
          type: 'number',
          min: 0,
          max: 99,
          message: '排序数值在0-99之间',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    handleChange: function handleChange(newTargetKeys) {
      this.data.authorities = newTargetKeys;
    }
  }
});

/***/ })

}]);