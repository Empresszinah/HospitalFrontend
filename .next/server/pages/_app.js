(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./features/toggle/toggleSlice.js
var toggleSlice = __webpack_require__(2426);
;// CONCATENATED MODULE: ./features/filter/filterSlice.js

const initialState = {
    jobList: {
        keyword: "",
        location: "",
        destination: {
            min: 0,
            max: 100
        },
        category: "",
        jobType: [],
        jobTypeSelect: "",
        datePosted: "",
        experience: [],
        experienceSelect: "",
        salary: {
            min: 0,
            max: 20000
        },
        tag: ""
    },
    jobSort: {
        sort: "",
        perPage: {
            start: 0,
            end: 0
        }
    }
};
const filterSlice = (0,toolkit_.createSlice)({
    name: "filter",
    initialState,
    reducers: {
        addKeyword: (state, { payload  })=>{
            state.jobList.keyword = payload;
        },
        addLocation: (state, { payload  })=>{
            state.jobList.location = payload;
        },
        addDestination: (state, { payload  })=>{
            state.jobList.destination.min = payload.min;
            state.jobList.destination.max = payload.max;
        },
        addCategory: (state, { payload  })=>{
            state.jobList.category = payload;
        },
        addJobType: (state, { payload  })=>{
            const isExist = state.jobList.jobType.includes(payload);
            if (!isExist) {
                state.jobList.jobType.push(payload);
            } else {
                state.jobList.jobType = state.jobList.jobType.filter((item)=>item !== payload);
            }
        },
        clearJobType: (state)=>{
            state.jobList.jobType = [];
        },
        addJobTypeSelect: (state, { payload  })=>{
            state.jobList.jobTypeSelect = payload;
        },
        addDatePosted: (state, { payload  })=>{
            state.jobList.datePosted = payload;
        },
        addExperience: (state, { payload  })=>{
            const isExist = state.jobList.experience.includes(payload);
            if (!isExist) {
                state.jobList.experience.push(payload);
            } else {
                state.jobList.experience = state.jobList.experience.filter((item)=>item !== payload);
            }
        },
        addExperienceSelect: (state, { payload  })=>{
            state.jobList.experienceSelect = payload;
        },
        clearExperience: (state)=>{
            state.jobList.experience = [];
        },
        addSalary: (state, { payload  })=>{
            state.jobList.salary.min = payload.min;
            state.jobList.salary.max = payload.max;
        },
        addSort: (state, { payload  })=>{
            state.jobSort.sort = payload;
        },
        addTag: (state, { payload  })=>{
            state.jobList.tag = payload;
        },
        addPerPage: (state, { payload  })=>{
            state.jobSort.perPage.start = payload.start;
            state.jobSort.perPage.end = payload.end;
        }
    }
});
const { addKeyword , addLocation , addDestination , addCategory , addJobType , clearJobType , addJobTypeSelect , addDatePosted , addExperience , addExperienceSelect , clearExperience , addSalary , addTag , addSort , addPerPage  } = filterSlice.actions;
/* harmony default export */ const filter_filterSlice = (filterSlice.reducer);

;// CONCATENATED MODULE: ./app/store.js



const store = (0,toolkit_.configureStore)({
    reducer: {
        toggle: toggleSlice/* default */.ZP,
        filter: filter_filterSlice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat()
});


/***/ }),

/***/ 8937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ScrollToTop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ScrollToTop() {
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = ()=>{
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return ()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "scroll-to-top scroll-to-target",
                onClick: scrollToTop,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "fa fa-angle-up"
                })
            })
        })
    });
}


/***/ }),

/***/ 2426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "u": () => (/* binding */ menuToggle)
/* harmony export */ });
/* unused harmony exports toggleSlice, chatSidebarToggle */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    menu: false,
    chatSidebar: false
};
const toggleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "toggle",
    initialState,
    reducers: {
        menuToggle: (state)=>{
            state.menu = !state.menu;
        },
        chatSidebarToggle: (state)=>{
            state.chatSidebar = !state.chatSidebar;
        }
    }
});
const { menuToggle , chatSidebarToggle  } = toggleSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleSlice.reducer);


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1759);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1663);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8937);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(216);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_9__]);
react_toastify__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










if (false) {}
function MyApp({ Component , pageProps  }) {
    // aos animation activation
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_1___default().init({
            duration: 1400,
            once: true
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
        store: _app_store__WEBPACK_IMPORTED_MODULE_7__/* .store */ .h,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "page-wrapper",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_9__.ToastContainer, {
                    position: "bottom-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    newestOnTop: false,
                    closeOnClick: true,
                    rtl: false,
                    pauseOnFocusLoss: true,
                    draggable: true,
                    pauseOnHover: true,
                    theme: "colored"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ScrollTop__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1759:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 1663:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();