(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/modules/views/authorities/role/role.js":
/*!*************************************************************!*\
  !*** ./resources/js/modules/views/authorities/role/role.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      current: 0,
      loading: true,
      data: {
        authorities: [],
        menus: []
      },
      authorities: {
        data: []
      },
      menus: {
        data: []
      },
      ruleValidate: {
        name: [{
          required: true,
          message: '部门名称不能为空',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 2,
          max: 20,
          message: '权限名称字符长度是2-20个字符',
          trigger: 'blur'
        }],
        description: [{
          type: 'string',
          max: 255,
          message: '权限描述最长255个字符',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    handleChange: function handleChange(newTargetKeys) {
      this.data.authorities = newTargetKeys;
    },
    getAuthorities: function getAuthorities() {
      var _this = this;

      this.$http.get("authorities/menu/authority", {
        params: {
          ids: this.data.menus
        }
      }).then(function (res) {
        _this.authorities.data = _this.toTransfer(res);
      });
    },
    next: function next(name) {
      var _this2 = this;

      if (this.current === 0) {
        this.validate(name).then(function () {
          _this2.getAuthorities();

          _this2.current = ++_this2.current;
        })["catch"]();
      } else {
        this.current = --this.current;
      }
    },
    toTransfer: function toTransfer(data) {
      var lists = [];
      data.forEach(function (item) {
        item.authorities.forEach(function (val) {
          if (lists.findIndex(function (v) {
            return v.key === val.id;
          }) === -1) {
            lists.push({
              key: val.id,
              label: "".concat(val.name)
            });
          }
        });
      });
      return lists;
    }
  }
});

/***/ })

}]);