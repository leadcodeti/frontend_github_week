"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Input/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Input/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": function() { return /* binding */ Input; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reakit_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reakit/Form */ \"./node_modules/reakit/es/Form/index.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Input/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Input(param) {\n    var name = param.name, placeholder = param.placeholder, type = param.type, htmlFor = param.htmlFor;\n    _s();\n    var form = (0,reakit_Form__WEBPACK_IMPORTED_MODULE_1__.unstable_useFormState)({\n        values: {\n            name: \"\"\n        },\n        onValidate: function(values) {\n            if (!values.name) {\n                var errors = {\n                    name: \"Field is required\"\n                };\n                throw errors;\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inputContent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reakit_Form__WEBPACK_IMPORTED_MODULE_1__.unstable_FormLabel, _objectSpread({}, form, {\n                name: \"name\",\n                children: htm\n            }), void 0, false, {\n                fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\components\\\\Input\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reakit_Form__WEBPACK_IMPORTED_MODULE_1__.unstable_FormInput, _objectSpread({\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input)\n            }, form, {\n                name: \"name\",\n                type: type,\n                placeholder: placeholder\n            }), void 0, false, {\n                fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\components\\\\Input\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reakit_Form__WEBPACK_IMPORTED_MODULE_1__.unstable_FormMessage, _objectSpread({}, form, {\n                name: \"name\"\n            }), void 0, false, {\n                fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\components\\\\Input\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\components\\\\Input\\\\index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n} // import { useFormContext } from 'react-hook-form';\n // import styles from './styles.module.scss'\n // interface InputProps {\n //     placeholder: string;\n //     type: string;\n //     name:string,\n //     htmlFor: string;\n // }\n // export function Input({ name, placeholder, type, htmlFor } : InputProps)  {\n //     const { register, formState: { errors }} = useFormContext();\n //     return (\n //         <div className={styles.inputContent}>  \n //             <label htmlFor={htmlFor}>{htmlFor}:</label>\n //             <input\n //                 className={styles.input}\n //                 {...register(name, { required: true })}\n //                 placeholder={placeholder}\n //                 name={name}\n //                 type={type}\n //             />\n //         </div>\n //     )\n // }\n_s(Input, \"P7KH6XxE1+KhS9UTXxyCO/cH5sA=\", false, function() {\n    return [\n        reakit_Form__WEBPACK_IMPORTED_MODULE_1__.unstable_useFormState\n    ];\n});\n_c = Input;\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnB1dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3VCO0FBRW9COztBQVNwQyxTQUFTUyxLQUFLLENBQUMsS0FBZ0QsRUFBRTtRQUFoREMsSUFBSSxHQUFOLEtBQWdELENBQTlDQSxJQUFJLEVBQUVDLFdBQVcsR0FBbkIsS0FBZ0QsQ0FBeENBLFdBQVcsRUFBRUMsSUFBSSxHQUF6QixLQUFnRCxDQUEzQkEsSUFBSSxFQUFFQyxPQUFPLEdBQWxDLEtBQWdELENBQXJCQSxPQUFPOztJQUVwRCxJQUFNQyxJQUFJLEdBQUdiLGtFQUFZLENBQUM7UUFDMUJjLE1BQU0sRUFBRTtZQUFFTCxJQUFJLEVBQUUsRUFBRTtTQUFFO1FBQ3BCTSxVQUFVLEVBQUUsU0FBQ0QsTUFBTSxFQUFLO1lBQ3RCLElBQUksQ0FBQ0EsTUFBTSxDQUFDTCxJQUFJLEVBQUU7Z0JBQ2hCLElBQU1PLE1BQU0sR0FBRztvQkFDYlAsSUFBSSxFQUFFLG1CQUFtQjtpQkFDMUI7Z0JBQ0QsTUFBTU8sTUFBTSxDQUFDO2FBQ2Q7U0FDRjtLQUNGLENBQUM7SUFFQSxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVYLHlFQUFtQjs7MEJBQ2pDLDhEQUFDTCwyREFBUyxvQkFBS1csSUFBSTtnQkFBRUosSUFBSSxFQUFDLE1BQU07MEJBQUVXLEdBQUc7Ozs7O29CQUFhOzBCQUNsRCw4REFBQ2hCLDJEQUFTO2dCQUFDYyxTQUFTLEVBQUVYLGtFQUFZO2VBQU1NLElBQUk7Z0JBQUVKLElBQUksRUFBQyxNQUFNO2dCQUFDRSxJQUFJLEVBQUVBLElBQUk7Z0JBQUVELFdBQVcsRUFBRUEsV0FBVzs7Ozs7b0JBQUk7MEJBQ2xHLDhEQUFDSiw2REFBVyxvQkFBS08sSUFBSTtnQkFBRUosSUFBSSxFQUFDLE1BQU07Ozs7O29CQUFHOzs7Ozs7WUFDakMsQ0FDVDtDQUNKLENBR0Qsb0RBQW9EO0NBQ3BELDRDQUE0QztDQUU1Qyx5QkFBeUI7Q0FDekIsMkJBQTJCO0NBQzNCLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLElBQUk7Q0FFSiw4RUFBOEU7Q0FFOUUsbUVBQW1FO0NBRW5FLGVBQWU7Q0FDZixrREFBa0Q7Q0FDbEQsMERBQTBEO0NBQzFELHFCQUFxQjtDQUNyQiwyQ0FBMkM7Q0FDM0MsMERBQTBEO0NBQzFELDRDQUE0QztDQUM1Qyw4QkFBOEI7Q0FDOUIsOEJBQThCO0NBQzlCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FFakIsUUFBUTtDQUNSLElBQUk7R0FuRFlELEtBQUs7O1FBRUpSLDhEQUFZOzs7QUFGYlEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbnB1dC9pbmRleC50c3g/NWE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHVuc3RhYmxlX3VzZUZvcm1TdGF0ZSBhcyB1c2VGb3JtU3RhdGUsXHJcbiAgICB1bnN0YWJsZV9Gb3JtTGFiZWwgYXMgRm9ybUxhYmVsLFxyXG4gICAgdW5zdGFibGVfRm9ybUlucHV0IGFzIEZvcm1JbnB1dCxcclxuICAgIHVuc3RhYmxlX0Zvcm1NZXNzYWdlIGFzIEZvcm1NZXNzYWdlLFxyXG4gIH0gZnJvbSBcInJlYWtpdC9Gb3JtXCI7XHJcblxyXG4gIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG4gIGludGVyZmFjZSBJbnB1dFByb3BzIHtcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBuYW1lOnN0cmluZyxcclxuICAgIGh0bWxGb3I6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0KHsgbmFtZSwgcGxhY2Vob2xkZXIsIHR5cGUsIGh0bWxGb3J9IDogSW5wdXRQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtU3RhdGUoe1xyXG4gICAgdmFsdWVzOiB7IG5hbWU6IFwiXCIgfSxcclxuICAgIG9uVmFsaWRhdGU6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZXMubmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IHtcclxuICAgICAgICAgIG5hbWU6IFwiRmllbGQgaXMgcmVxdWlyZWRcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRocm93IGVycm9ycztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250ZW50fT4gIFxyXG4gICAgICAgICAgPEZvcm1MYWJlbCB7Li4uZm9ybX0gbmFtZT1cIm5hbWVcIj57aHRtfTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPEZvcm1JbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gey4uLmZvcm19IG5hbWU9XCJuYW1lXCIgdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgICAgICAgPEZvcm1NZXNzYWdlIHsuLi5mb3JtfSBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBpbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG4vLyBpbnRlcmZhY2UgSW5wdXRQcm9wcyB7XHJcbi8vICAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4vLyAgICAgdHlwZTogc3RyaW5nO1xyXG4vLyAgICAgbmFtZTpzdHJpbmcsXHJcbi8vICAgICBodG1sRm9yOiBzdHJpbmc7XHJcbi8vIH1cclxuICBcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIElucHV0KHsgbmFtZSwgcGxhY2Vob2xkZXIsIHR5cGUsIGh0bWxGb3IgfSA6IElucHV0UHJvcHMpICB7XHJcblxyXG4vLyAgICAgY29uc3QgeyByZWdpc3RlciwgZm9ybVN0YXRlOiB7IGVycm9ycyB9fSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGVudH0+ICBcclxuLy8gICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2h0bWxGb3J9PntodG1sRm9yfTo8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4vLyAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKG5hbWUsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbi8vICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuLy8gICAgIClcclxuLy8gfSJdLCJuYW1lcyI6WyJ1bnN0YWJsZV91c2VGb3JtU3RhdGUiLCJ1c2VGb3JtU3RhdGUiLCJ1bnN0YWJsZV9Gb3JtTGFiZWwiLCJGb3JtTGFiZWwiLCJ1bnN0YWJsZV9Gb3JtSW5wdXQiLCJGb3JtSW5wdXQiLCJ1bnN0YWJsZV9Gb3JtTWVzc2FnZSIsIkZvcm1NZXNzYWdlIiwic3R5bGVzIiwiSW5wdXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiaHRtbEZvciIsImZvcm0iLCJ2YWx1ZXMiLCJvblZhbGlkYXRlIiwiZXJyb3JzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXRDb250ZW50IiwiaHRtIiwiaW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Input/index.tsx\n");

/***/ })

});