"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 4362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ login_FormContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/common/form/login/LoginWithSocial.jsx

const LoginWithSocial = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "btn-box row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 col-md-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "/dashboard/dashboard",
                    className: "theme-btn social-btn-two facebook-btn",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fab fa-facebook-f"
                        }),
                        " Log In via Facebook"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 col-md-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "/dashboard/dashboard",
                    className: "theme-btn social-btn-two google-btn",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fab fa-google"
                        }),
                        " Log In via Gmail"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const login_LoginWithSocial = (LoginWithSocial);

;// CONCATENATED MODULE: ./components/common/form/login/FormContent.jsx



const FormContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "form-inner",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Login to Strydes"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                method: "post",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "Username"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "username",
                                placeholder: "Username",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "password",
                                name: "password",
                                placeholder: "Password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "field-outer",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-group checkboxes square",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "checkbox",
                                            name: "remember-me",
                                            id: "remember"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            htmlFor: "remember",
                                            className: "remember",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "custom-checkbox"
                                                }),
                                                " Remember me"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "pwd",
                                    children: "Forgot password?"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/dashboard",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "theme-btn btn-style-one",
                                type: "submit",
                                name: "log-in",
                                children: "Log In"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bottom-box",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text",
                        children: [
                            "Don't have an account?",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/register",
                                children: "Signup"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "divider",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "or"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(login_LoginWithSocial, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const login_FormContent = (FormContent);


/***/ }),

/***/ 1804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _register_Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1516);
/* harmony import */ var _FormContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4362);



const LoginPopup = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade",
                id: "loginPopupModal",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "closed-modal",
                                "data-bs-dismiss": "modal"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "modal-body",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "login-modal",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "login-form default-form",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal fade",
                id: "registerModal",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "closed-modal",
                                "data-bs-dismiss": "modal"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "modal-body",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "login-modal",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "login-form default-form",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_register_Register__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPopup);


/***/ }),

/***/ 1516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ register_Register)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(5973);
;// CONCATENATED MODULE: ./components/common/form/register/LoginWithSocial.jsx

const LoginWithSocial = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "btn-box row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 col-md-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    className: "theme-btn social-btn-two facebook-btn",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fab fa-facebook-f"
                        }),
                        " Log In via Facebook"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 col-md-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "#",
                    className: "theme-btn social-btn-two google-btn",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fab fa-google"
                        }),
                        " Log In via Gmail"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const register_LoginWithSocial = (LoginWithSocial);

;// CONCATENATED MODULE: ./components/common/form/register/FormContent.jsx

const FormContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        method: "post",
        action: "add-parcel.html",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Email Address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        name: "username",
                        placeholder: "Username",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: "Password"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "password-field",
                        type: "password",
                        name: "password",
                        placeholder: "Password"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "theme-btn btn-style-one",
                    type: "submit",
                    children: "Register"
                })
            })
        ]
    });
};
/* harmony default export */ const register_FormContent = (FormContent);

;// CONCATENATED MODULE: ./components/common/form/register/Register.jsx




const Register = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "form-inner",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Create a Stryde Account"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_.Tabs, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-group register-dual",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_.TabList, {
                            className: "btn-box row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.Tab, {
                                    className: "col-lg-6 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "theme-btn btn-style-four",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "la la-user"
                                            }),
                                            " Doctor"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.Tab, {
                                    className: "col-lg-6 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "theme-btn btn-style-four",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "la la-briefcase"
                                            }),
                                            " Admin"
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(register_FormContent, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(register_FormContent, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bottom-box",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "divider",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "or"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(register_LoginWithSocial, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const register_Register = (Register);


/***/ }),

/***/ 3505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_MobileMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-pro-sidebar"
var external_react_pro_sidebar_ = __webpack_require__(1981);
;// CONCATENATED MODULE: ./data/mobileMenuData.js
/* harmony default export */ const mobileMenuData = ([
    {
        id: 1,
        label: "Home",
        items: [
            {
                name: "Login/signup",
                routePath: "/login"
            }
        ]
    }
]);

;// CONCATENATED MODULE: ./components/header/mobile-sidebar/SidebarFooter.jsx

const SidebarFooter = ()=>{
    const socialContent = [
        {
            id: 1,
            icon: "fa-facebook-f",
            link: "https://www.facebook.com/"
        },
        {
            id: 2,
            icon: "fa-twitter",
            link: "https://www.twitter.com/"
        },
        {
            id: 3,
            icon: "fa-instagram",
            link: "https://www.instagram.com/"
        },
        {
            id: 4,
            icon: "fa-linkedin-in",
            link: "https://www.linkedin.com/"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mm-add-listing mm-listitem pro-footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "theme-btn btn-style-one mm-listitem__text",
                children: "Dashboard"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mm-listitem__text",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "contact-info",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "phone-num",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Call us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "tel:1234567890",
                                        children: "123 456 7890"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "address",
                                children: [
                                    "Lagos ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Nigeria."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:support@strydeshospital.com",
                                className: "email",
                                children: "support@strydeshospital.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "social-links",
                        children: socialContent.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: item.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: `fab ${item.icon}`
                                })
                            }, item.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const mobile_sidebar_SidebarFooter = (SidebarFooter);

;// CONCATENATED MODULE: ./components/header/mobile-sidebar/SidebarHeader.jsx


const SidebarHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pro-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/logo.svg",
                    alt: "brand"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fix-icon",
                "data-bs-dismiss": "offcanvas",
                "aria-label": "Close",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "flaticon-close"
                })
            })
        ]
    });
};
/* harmony default export */ const mobile_sidebar_SidebarHeader = (SidebarHeader);

// EXTERNAL MODULE: ./utils/linkActiveChecker.js
var linkActiveChecker = __webpack_require__(736);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/header/mobile-sidebar/index.jsx
"use client";








const Index = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "offcanvas offcanvas-start mobile_menu-contnet",
        tabIndex: "-1",
        id: "offcanvasMenu",
        "data-bs-scroll": "true",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_sidebar_SidebarHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_pro_sidebar_.ProSidebarProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_pro_sidebar_.Sidebar, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_pro_sidebar_.Menu, {
                        children: mobileMenuData.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_pro_sidebar_.SubMenu, {
                                className: (0,linkActiveChecker/* isActiveParentChaild */.LK)(item.items, router.asPath) ? "menu-active" : "",
                                label: item.label,
                                children: item.items.map((menuItem, i)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_pro_sidebar_.MenuItem, {
                                        className: (0,linkActiveChecker/* isActiveLink */.H_)(menuItem.routePath, router.asPath) ? "menu-active-link" : "",
                                        routerLink: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: menuItem.routePath
                                        }),
                                        children: menuItem.name
                                    }, i))
                            }, item.id))
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_sidebar_SidebarFooter, {})
        ]
    });
};
/* harmony default export */ const mobile_sidebar = (Index);

;// CONCATENATED MODULE: ./components/header/MobileMenu.jsx



const MobileMenu = ()=>{
    return(// <!-- Main Header-->
    /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "main-header main-header-mobile",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "auto-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inner-box",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nav-outer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/logo.svg",
                                            alt: "brand"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(mobile_sidebar, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "outer-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "login-box",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "call-modal",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#loginPopupModal",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon icon-user"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "mobile-nav-toggler",
                                "data-bs-toggle": "offcanvas",
                                "data-bs-target": "#offcanvasMenu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "flaticon-menu-1"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const header_MobileMenu = (MobileMenu);


/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ isActiveLink),
/* harmony export */   "LK": () => (/* binding */ isActiveParentChaild)
/* harmony export */ });
/* unused harmony export isActiveParent */
// is active parent check
const isActiveParent = (data = [], path)=>{
    if (data?.length !== 0) {
        return data?.some(({ items  })=>items?.some((menu)=>menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, "")));
    }
};
// is active parent childe check
const isActiveParentChaild = (data = [], path)=>{
    if (data?.length !== 0) {
        return data?.some((menu)=>menu.routePath.replace(/\/\d+/, "") === path.replace(/\/\d+/, ""));
    }
};
// is active link check
const isActiveLink = (menuPath, routePath)=>{
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
    }
};


/***/ })

};
;