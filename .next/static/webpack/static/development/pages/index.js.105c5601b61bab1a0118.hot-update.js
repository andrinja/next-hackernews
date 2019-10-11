webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/andrinja/Sites/next-hacker/components/StoryList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "jsx-1383482030" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-1383482030" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1383482030" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("a", {
      href: story.url,
      className: "jsx-1383482030",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), __jsx("span", {
      className: "jsx-1383482030" + " " + "story-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, story.points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1383482030",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, story.comments_count || 0, " comments")));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1383482030",
    __self: this
  }, ".story-list.jsx-1383482030{padding:0 1em;}.story.jsx-1383482030{padding:1em 0;}.story-title.jsx-1383482030{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-1383482030 a.jsx-1383482030{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-1383482030 a.jsx-1383482030:hover,.story-details.jsx-1383482030 a.jsx-1383482030:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-1383482030{font-size:0.8rem;font-weight:bold;}.story-details.jsx-1383482030 span.jsx-1383482030{margin-right:1em;}.story-details.jsx-1383482030 a.jsx-1383482030{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaW5qYS9TaXRlcy9uZXh0LWhhY2tlci9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBRytCLEFBR0EsQUFHQyxBQU1KLEFBSWUsQUFHVCxBQUlBLEFBR0gsV0FiTyxHQVp6QixBQUdBLEFBd0JELENBckJxQixFQWFDLEFBSXJCLGNBaEJhLEdBYWIsTUFad0Isb0JBQ3hCLEFBT0EsQ0FIQSxHQWNBIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyaW5qYS9TaXRlcy9uZXh0LWhhY2tlci9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxuICAgICAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeVwiIGtleT17c3RvcnkuaWR9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdG9yeS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8YT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKSl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zdG9yeS1saXN0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yeSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciwgLnN0b3J5LWRldGFpbHMgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktZGV0YWlscyBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yeS1kZXRhaWxzIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjYwMGZmO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDsiXX0= */\n/*@ sourceURL=/Users/andrinja/Sites/next-hacker/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.105c5601b61bab1a0118.hot-update.js.map