(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_content_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/content-drawer */ "./resources/vue/js/modules/mixins/content-drawer.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./resources/vue/js/modules/views/authorities/user/user.js");
/* harmony import */ var _components_content_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/content/form */ "./resources/vue/js/modules/components/content/form.vue");
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
    IForm: _components_content_form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_content_drawer__WEBPACK_IMPORTED_MODULE_0__["default"], _user__WEBPACK_IMPORTED_MODULE_1__["default"]],
  mounted: function mounted() {
    var _this = this;

    this.$http("authorities/user/".concat(this.$route.query.id, "/edit")).then(function (res) {
      _this.data = res.row;
      _this.roles.data = res.roles;
      _this.loading = false;
    });
  },
  methods: {
    submit: function submit(name) {
      var _this2 = this;

      this.loading = true;
      this.validate(name).then(function () {
        _this2.$http.put("authorities/user/".concat(_this2.$route.query.id), _this2.data).then(function () {
          _this2.$Message.success('更新成功');
        })["finally"](function () {
          _this2.loading = false;
        });
      })["catch"]();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=template&id=f2ba705e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=template&id=f2ba705e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "用户添加", width: 620, "spin-show": _vm.loading } },
    [
      _c(
        "Form",
        {
          ref: "formUpdate",
          attrs: {
            model: _vm.data,
            "label-width": 100,
            rules: _vm.ruleValidate
          }
        },
        [
          _c(
            "FormItem",
            { attrs: { label: "姓名", prop: "name" } },
            [
              _c("Input", {
                attrs: { placeholder: "请输入姓名" },
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
            { attrs: { label: "邮箱", prop: "email" } },
            [
              _c("Input", {
                attrs: { placeholder: "请输入邮箱" },
                model: {
                  value: _vm.data.email,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "email", $$v)
                  },
                  expression: "data.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Row",
            [
              _c(
                "Col",
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "手机号码", prop: "phone" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "手机号码" },
                        model: {
                          value: _vm.data.phone,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "phone", $$v)
                          },
                          expression: "data.phone"
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
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "用户状态", prop: "status" } },
                    [
                      _c(
                        "i-switch",
                        {
                          attrs: {
                            "true-value": "on",
                            "false-value": "off",
                            size: "large"
                          },
                          model: {
                            value: _vm.data.status,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "status", $$v)
                            },
                            expression: "data.status"
                          }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "open" }, slot: "open" },
                            [_vm._v("开启")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { attrs: { slot: "close" }, slot: "close" },
                            [_vm._v("关闭")]
                          )
                        ]
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
            "Row",
            [
              _c(
                "Col",
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "出生日期", prop: "birthday" } },
                    [
                      _c("DatePicker", {
                        attrs: {
                          placeholder: "出生日期",
                          value: _vm.data.birthday,
                          format: "yyyy-MM-dd"
                        },
                        on: {
                          "on-change": function(val) {
                            return (_vm.data.birthday = val)
                          }
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
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "用户性别", prop: "sex" } },
                    [
                      _c(
                        "i-switch",
                        {
                          attrs: {
                            "true-value": "man",
                            "false-value": "women",
                            size: "large"
                          },
                          model: {
                            value: _vm.data.sex,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "sex", $$v)
                            },
                            expression: "data.sex"
                          }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "open" }, slot: "open" },
                            [_vm._v("男")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { attrs: { slot: "close" }, slot: "close" },
                            [_vm._v("女")]
                          )
                        ]
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
            "Row",
            [
              _c(
                "Col",
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "入职时间", prop: "entryday" } },
                    [
                      _c("DatePicker", {
                        attrs: {
                          placeholder: "入职时间",
                          value: _vm.data.entryday,
                          format: "yyyy-MM-dd"
                        },
                        on: {
                          "on-change": function(val) {
                            return (_vm.data.entryday = val)
                          }
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
                { attrs: { span: "12" } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "所属部门", prop: "department_id" } },
                    [
                      _c(
                        "Select",
                        {
                          model: {
                            value: _vm.data.role_id,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "role_id", $$v)
                            },
                            expression: "data.role_id"
                          }
                        },
                        _vm._l(_vm.roles.data, function(item) {
                          return _c(
                            "Option",
                            { key: item.id, attrs: { value: item.id } },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.name) +
                                  "\n                        "
                              )
                            ]
                          )
                        }),
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
            "FormItem",
            { attrs: { label: "密码", prop: "password" } },
            [
              _c("Input", {
                attrs: { placeholder: "请输入密码", type: "password" },
                model: {
                  value: _vm.data.password,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "password", $$v)
                  },
                  expression: "data.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: "确认密码", prop: "password_confirmation" } },
            [
              _c("Input", {
                attrs: { placeholder: "请输入确认密码", type: "password" },
                model: {
                  value: _vm.data.password_confirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.data, "password_confirmation", $$v)
                  },
                  expression: "data.password_confirmation"
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
        "div",
        { attrs: { slot: "footer" }, slot: "footer" },
        [
          _c(
            "Button",
            {
              attrs: { type: "primary", icon: "ios-add" },
              on: {
                click: function($event) {
                  return _vm.submit("formUpdate")
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

/***/ "./resources/vue/js/modules/views/authorities/user/update.vue":
/*!********************************************************************!*\
  !*** ./resources/vue/js/modules/views/authorities/user/update.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_vue_vue_type_template_id_f2ba705e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.vue?vue&type=template&id=f2ba705e&scoped=true& */ "./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=template&id=f2ba705e&scoped=true&");
/* harmony import */ var _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.vue?vue&type=script&lang=js& */ "./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_vue_vue_type_template_id_f2ba705e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _update_vue_vue_type_template_id_f2ba705e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2ba705e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/js/modules/views/authorities/user/update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=template&id=f2ba705e&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=template&id=f2ba705e&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_f2ba705e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=template&id=f2ba705e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/js/modules/views/authorities/user/update.vue?vue&type=template&id=f2ba705e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_f2ba705e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_f2ba705e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/vue/js/modules/views/authorities/user/user.js":
/*!*****************************************************************!*\
  !*** ./resources/vue/js/modules/views/authorities/user/user.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      data: {
        sex: 'women',
        status: 'on'
      },
      departments: {
        data: []
      },
      roles: {
        data: []
      },
      ruleValidate: {
        name: [{
          required: true,
          message: '用户姓名必须填写',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 2,
          max: 20,
          message: '用户姓名字符长度是2-20个字符',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: '用户邮箱不能为空',
          trigger: 'blur'
        }, {
          type: 'email',
          message: '用户邮箱格式不正确',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          message: '手机号码必须填写',
          trigger: 'blur'
        }, {
          pattern: /^1[34578]\d{9}$/,
          message: '手机号码格式不正确',
          trigger: 'blur'
        }],
        role_id: [{
          required: true,
          type: 'number',
          message: '所属部门不能为空',
          trigger: 'change'
        }],
        status: [{
          required: true,
          type: 'enum',
          "enum": ['off', 'on'],
          message: '用户状态不能为空'
        }],
        sex: [{
          required: true,
          type: 'enum',
          "enum": ['women', 'man'],
          message: '性别状态不能为空'
        }]
      }
    };
  }
});

/***/ })

}]);