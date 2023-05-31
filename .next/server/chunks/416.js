"use strict";
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BreadCrumb = ({ title =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "upper-title-box",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text",
                children: "Get started with us."
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumb);


/***/ }),

/***/ 9773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CopyrightFooter = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "copyright-text",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [
                "\xa9 ",
                new Date().getFullYear(),
                " Strydes Hospital. All Right Reserved."
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyrightFooter);


/***/ }),

/***/ 4107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_toggle_toggleSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2426);



const MenuToggler = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    // menu togggle handler
    const menuToggleHandler = ()=>{
        dispatch((0,_features_toggle_toggleSlice__WEBPACK_IMPORTED_MODULE_2__/* .menuToggle */ .u)());
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-4 ms-0 show-1023",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: menuToggleHandler,
            type: "button",
            className: "theme-btn toggle-filters",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "flaticon-menu-1"
                }),
                " Menu"
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuToggler);


/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_syMenuData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(597);
/* harmony import */ var _data_syMenuData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_syMenuData__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderNavContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1730);
/* harmony import */ var _utils_linkActiveChecker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(736);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);








const DashboardsyHeader = ()=>{
    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const changeBackground = ()=>{
        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        window.addEventListener("scroll", changeBackground);
    }, []);
    return(// <!-- Main Header-->
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `main-header header-shaddow  ${navbar ? "fixed-header " : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main-box",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "nav-outer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "logo-box",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            alt: "brand",
                                            src: "/images/logo.svg",
                                            width: 154,
                                            height: 50,
                                            priority: true
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderNavContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "outer-box",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "menu-btn",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "count",
                                        children: "1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon la la-heart-o"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "menu-btn",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon la la-bell"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "dropdown dashboard-option",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "dropdown-toggle",
                                        role: "button",
                                        "data-bs-toggle": "dropdown",
                                        "aria-expanded": "false",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                alt: "avatar",
                                                className: "thumb",
                                                src: "/images/resource/candidate-1.png",
                                                width: 50,
                                                height: 50
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "name",
                                                children: "My Account"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "dropdown-menu",
                                        children: _data_syMenuData__WEBPACK_IMPORTED_MODULE_4___default().map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: `${(0,_utils_linkActiveChecker__WEBPACK_IMPORTED_MODULE_7__/* .isActiveLink */ .H_)(item.routePath, router.asPath) ? "active" : ""} mb-1`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: item.routePath,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `la ${item.icon}`
                                                        }),
                                                        " ",
                                                        item.name
                                                    ]
                                                })
                                            }, item.id))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardsyHeader);


/***/ }),

/***/ 1760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1121);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_syMenuData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(597);
/* harmony import */ var _data_syMenuData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_syMenuData__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_linkActiveChecker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(736);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _features_toggle_toggleSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2426);









const DashboardsySidebar = ()=>{
    const { menu  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.toggle);
    const percentage = 30;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    // menu togggle handler
    const menuToggleHandler = ()=>{
        dispatch((0,_features_toggle_toggleSlice__WEBPACK_IMPORTED_MODULE_7__/* .menuToggle */ .u)());
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `user-sidebar ${menu ? "sidebar_open" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pro-header text-end pb-0 mb-0 show-1023",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fix-icon",
                    onClick: menuToggleHandler,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flaticon-close"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sidebar-inner",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "navigation",
                        children: _data_syMenuData__WEBPACK_IMPORTED_MODULE_4___default().map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${(0,_utils_linkActiveChecker__WEBPACK_IMPORTED_MODULE_8__/* .isActiveLink */ .H_)(item.routePath, router.asPath) ? "active" : ""} mb-1`,
                                onClick: menuToggleHandler,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: item.routePath,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: `la ${item.icon}`
                                        }),
                                        " ",
                                        item.name
                                    ]
                                })
                            }, item.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "Patients-Percentage",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "In-Patients Details"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "`The percentage of ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "In-Patient"
                                    }),
                                    " to the Total number of available",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: " Patients"
                                    }),
                                    "`"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: 200,
                                    height: 200,
                                    margin: "auto"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressbar, {
                                    background: true,
                                    backgroundPadding: 6,
                                    styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__.buildStyles)({
                                        backgroundColor: "#7367F0",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                    }),
                                    value: percentage,
                                    text: `${percentage}%`
                                })
                            }),
                            " "
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardsySidebar);


/***/ }),

/***/ 597:
/***/ ((module) => {


module.exports = [
    {
        id: 1,
        name: "Dashboard",
        icon: "la-home",
        routePath: "/dashboard/dashboard",
        active: "active"
    },
    {
        id: 2,
        name: "My Profile",
        icon: "la-user-tie",
        routePath: "/dashboard/my-profile",
        active: ""
    },
    {
        id: 3,
        name: "patients",
        icon: "la-user-tie",
        routePath: "/dashboard/patients",
        active: ""
    },
    {
        id: 4,
        name: "pharmacy",
        icon: "la-first-aid",
        routePath: "/dashboard/pharmacy",
        active: ""
    },
    {
        id: 5,
        name: "lab",
        icon: "la-user-nurse",
        routePath: "/dashboard/lab",
        active: ""
    },
    {
        id: 7,
        name: "records",
        icon: "la la-file-invoice",
        routePath: "/dashboard/records",
        active: ""
    },
    {
        id: 9,
        name: "Change Password",
        icon: "la-lock",
        routePath: "/dashboard/change-password",
        active: ""
    },
    {
        id: 10,
        name: "Logout",
        icon: "la-sign-out",
        routePath: "/login",
        active: ""
    },
    {
        id: 11,
        name: "Delete Profile",
        icon: "la-trash",
        routePath: "/",
        active: ""
    }
];


/***/ }),

/***/ 2426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;