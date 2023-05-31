"use strict";
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 4273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_footer_CopyrightFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/footer/common-footer/Social.jsx

const Social = ()=>{
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
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: socialContent.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: item.link,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: `fab ${item.icon}`
                })
            }, item.id))
    });
};
/* harmony default export */ const common_footer_Social = (Social);

;// CONCATENATED MODULE: ./components/footer/common-footer/CopyrightFooter.jsx


const CopyrightFooter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer-bottom",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "auto-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "outer-box",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "copyright-text",
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Strydes Hospital. All Right Reserved."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "social-links",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(common_footer_Social, {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const common_footer_CopyrightFooter = (CopyrightFooter);


/***/ })

};
;