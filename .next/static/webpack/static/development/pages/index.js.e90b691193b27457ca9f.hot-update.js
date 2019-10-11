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
    className: "jsx-2065119018" + " " + "story-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-2065119018" + " " + "story",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2065119018" + " " + "story-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("a", {
      href: story.url,
      className: "jsx-2065119018",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, story.title)), __jsx("span", {
      className: "jsx-2065119018" + " " + "story-details",
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
      className: "jsx-2065119018",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, story.comments_count || 0, " comments")));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2065119018",
    __self: this
  }, ".story-list.jsx-2065119018{padding:0 1em;}.story.jsx-2065119018{padding:1em 0;}.story-title.jsx-2065119018{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}.story-title.jsx-2065119018 a.jsx-2065119018{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2065119018 a.jsx-2065119018:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyaW5qYS9TaXRlcy9uZXh0LWhhY2tlci9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBRytCLEFBR0EsQUFHQyxBQU1KLEFBSWUsV0FITCxHQVp6QixBQUdBLENBR29CLGdCQUNQLFNBQ1csb0JBQ3hCLEFBT0EsQ0FIQSIsImZpbGUiOiIvVXNlcnMvYW5kcmluamEvU2l0ZXMvbmV4dC1oYWNrZXIvY29tcG9uZW50cy9TdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTdG9yeUxpc3QgPSAoeyBzdG9yaWVzIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWxpc3RcIj5cbiAgICAgICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlcIiBrZXk9e3N0b3J5LmlkfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RvcnktZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICB7c3RvcnkucG9pbnRzIHx8IDB9IHBvaW50c1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc3RvcnktbGlzdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0b3J5LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcnktdGl0bGUgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0b3J5LXRpdGxlIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDsiXX0= */\n/*@ sourceURL=/Users/andrinja/Sites/next-hacker/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.e90b691193b27457ca9f.hot-update.js.map