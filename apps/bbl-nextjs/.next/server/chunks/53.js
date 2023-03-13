exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 8036:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2380));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6566, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4927));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5364))

/***/ }),

/***/ 5399:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4774, 23))

/***/ }),

/***/ 3218:
/***/ ((module) => {

// Exports
module.exports = {
	"burger": "menu-button_burger__dmad_"
};


/***/ }),

/***/ 8227:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "mobile-menus_menu__LGHW_",
	"menuRendered": "mobile-menus_menuRendered__zMky7",
	"dark": "mobile-menus_dark__WqJuz"
};


/***/ }),

/***/ 6576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "generateMetadata": () => (/* binding */ generateMetadata)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7315);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(719);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/script.js
var script = __webpack_require__(7037);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/libs/env.ts
const ENV_TYPE = "production";
const GTM_ID = "G-TZZNKPFDD5" ?? 0;
const envByType = {
    production: {
        FIREBASE_CONFIG: {
            apiKey: "AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU",
            authDomain: "myspace-c3805.firebaseapp.com",
            databaseURL: "https://myspace-c3805.firebaseio.com",
            projectId: "myspace-c3805",
            storageBucket: "myspace-c3805.appspot.com",
            messagingSenderId: "757274443049",
            appId: "1:757274443049:web:cea92b2efec4f7f685cb38",
            measurementId: "G-Q9PE71EK7F"
        },
        GTM_ID
    },
    staging: {
        FIREBASE_CONFIG: {
            apiKey: "AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU",
            authDomain: "myspace-c3805.firebaseapp.com",
            databaseURL: "https://myspace-c3805.firebaseio.com",
            projectId: "myspace-c3805",
            storageBucket: "myspace-c3805.appspot.com",
            messagingSenderId: "757274443049",
            appId: "1:757274443049:web:cea92b2efec4f7f685cb38",
            measurementId: "G-Q9PE71EK7F"
        },
        GTM_ID
    }
};
const isProduction = ()=>ENV_TYPE === "production";
const env = envByType[ENV_TYPE];

// EXTERNAL MODULE: ./app/theme-provider.tsx
var theme_provider = __webpack_require__(16);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(8728);
// EXTERNAL MODULE: ./src/components/ui/nav.tsx
var nav = __webpack_require__(1754);
var nav_default = /*#__PURE__*/__webpack_require__.n(nav);
// EXTERNAL MODULE: ./src/components/ui/nav-footer.tsx
var nav_footer = __webpack_require__(1803);
var nav_footer_default = /*#__PURE__*/__webpack_require__.n(nav_footer);
;// CONCATENATED MODULE: ./src/components/ui/layout.tsx




function Layout(props) {
    const { children  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col flex-1 bg-white dark:bg-gray-900",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((nav_default()), {}),
                /*#__PURE__*/ jsx_runtime.jsx("main", {
                    className: "flex flex-col justify-center flex-1 px-8 bg-white dark:bg-gray-900",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime.jsx((nav_footer_default()), {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ../../libs/constants/src/lib/metadata.ts
const metadata_metadataItem = {
    title: "BoBeen Lee",
    siteName: "BoBeen Lee",
    description: "Front-end developer, TypeScript enthusiast",
    keywords: "BoBeen Lee, React, React Native, Typescript, Javascript",
    url: "https://bbl-nx.vercel.app/",
    type: "website",
    robots: "follow, index",
    /**
   * large-og image
   * path: /public/images/large-og.png
   */ image: "https://bbl-nx.vercel.app/assets/quokka.webp",
    twitter: {
        site: "@BoBeenLee"
    }
};

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(5954);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/helpers/seo/seo.tsx



function SEO(props) {
    const { asPath  } = props;
    const meta = {
        ...metadataItem,
        ...props
    };
    meta["title"] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;
    return /*#__PURE__*/ _jsxs(Head, {
        children: [
            /*#__PURE__*/ _jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "robots",
                content: meta.robots
            }),
            /*#__PURE__*/ _jsx("meta", {
                content: meta.description,
                name: "description"
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:url",
                content: `${meta.url}${asPath}`
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "canonical",
                href: `${meta.url}${asPath}`
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:type",
                content: meta.type
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:site_name",
                content: meta.siteName
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:description",
                content: meta.description
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:title",
                content: meta.title
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "image",
                property: "og:image",
                content: meta.image
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "twitter:site",
                content: meta.twitter.site
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "twitter:title",
                content: meta.title
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "twitter:description",
                content: meta.description
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "twitter:image",
                content: meta.image
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "keywords",
                content: meta.keywords
            }),
            meta.article && /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsx("meta", {
                        property: "article:published_time",
                        content: meta.article.date
                    }),
                    /*#__PURE__*/ _jsx("meta", {
                        name: "publish_date",
                        property: "og:publish_date",
                        content: meta.article.date
                    }),
                    /*#__PURE__*/ _jsx("meta", {
                        name: "author",
                        property: "article:author",
                        content: meta.article.author
                    })
                ]
            }),
            favicons.map((linkProps)=>/*#__PURE__*/ _jsx("link", {
                    ...linkProps
                }, linkProps.url)),
            /*#__PURE__*/ _jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "msapplication-TileImage",
                content: "/favicons/ms-icon-144x144.png"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "theme-color",
                content: "#111827"
            })
        ]
    });
}
// you can generate your own from https://www.favicon-generator.org/
const favicons = [
    {
        rel: "shortcut icon",
        url: "/favicons/favicon.ico"
    },
    {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicons/apple-icon-180x180.png"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicons/favicon-32x32.png"
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicons/favicon-16x16.png"
    },
    {
        rel: "manifest",
        url: "/favicons/manifest.json"
    },
    {
        // color: '#fff',
        url: "/static/favicons/favicon.svg",
        rel: "mask-icon"
    }
];
/* harmony default export */ const seo = ((/* unused pure expression or super */ null && (SEO)));

;// CONCATENATED MODULE: ./app/layout.tsx









async function generateMetadata() {
    const { title , description , robots , url , siteName , image , twitter , keywords  } = metadata_metadataItem;
    return {
        title,
        description,
        robots,
        alternates: {
            canonical: url
        },
        openGraph: {
            type: "website",
            url,
            title,
            description,
            siteName,
            images: [
                image
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            site: twitter.site,
            creator: "@BoBeenLee",
            images: image
        },
        keywords,
        themeColor: "#111827",
        icons: {
            icon: favicons
        },
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
    };
}
function RootLayout({ // Layouts must accept a children prop.
// This will be populated with nested layouts or pages
children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((noop_head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                className: "text-white bg-white dark:bg-gray-900 dark:text-black",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(theme_provider.ThemeProvider, {
                        attribute: "class",
                        defaultTheme: "system",
                        enableSystem: true,
                        children: /*#__PURE__*/ jsx_runtime.jsx(Layout, {
                            children: children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                        async: true,
                        strategy: "afterInteractive",
                        src: `https://www.googletagmanager.com/gtag/js?id=${env.GTM_ID}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                        id: "gtag",
                        async: true,
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${env.GTM_ID}');
      `
                        }
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ not_found)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7315);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(8728);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(4528);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/page-title/page-title.tsx


function PageTitle(props) {
    const { className , children  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx("h1", {
        className: classnames_default()(className, "font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white"),
        children: children
    });
}
/* harmony default export */ const page_title = ((/* unused pure expression or super */ null && (PageTitle)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/link.js
var next_link = __webpack_require__(654);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/not-found.tsx




const NotFoundPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-center w-full max-w-2xl py-12 mx-auto sm:py-20 sm:mb-16",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PageTitle, {
                children: "Something went Wrong."
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mb-8 text-gray-600 dark:text-gray-400",
                children: `I'm guessing you spelled something wrong. Can you double check
      that URL?`
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                className: "w-64 p-1 mx-auto font-bold text-center text-black bg-gray-200 rounded-md sm:p-4 dark:bg-gray-800 dark:text-white",
                href: "/",
                children: "Home"
            })
        ]
    });
};
/* harmony default export */ const not_found = (NotFoundPage);


/***/ }),

/***/ 16:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ ThemeProvider */ const { createProxy  } = __webpack_require__(3666);
module.exports = createProxy("/Users/user/Desktop/mygit/bbl-nx/apps/bbl-nextjs/app/theme-provider.tsx");


/***/ }),

/***/ 1803:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default */ const { createProxy  } = __webpack_require__(3666);
module.exports = createProxy("/Users/user/Desktop/mygit/bbl-nx/apps/bbl-nextjs/src/components/ui/nav-footer.tsx");


/***/ }),

/***/ 1754:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default */ const { createProxy  } = __webpack_require__(3666);
module.exports = createProxy("/Users/user/Desktop/mygit/bbl-nx/apps/bbl-nextjs/src/components/ui/nav.tsx");


/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3934);



// https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564
function ThemeProvider(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        ...props
    });
}


/***/ }),

/***/ 5364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nav_footer_NavFooter)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../../libs/constants/src/lib/nav.ts
var nav = __webpack_require__(5239);
// EXTERNAL MODULE: ../../libs/ui-components/src/lib/atoms/alink/alink.tsx + 1 modules
var alink = __webpack_require__(5368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(7365);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/seperator/seperator.tsx


function Seperator(props) {
    const { className  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classnames_default()(className, "w-full h-[1px] bg-gray-200 dark:bg-gray-800")
    });
}
/* harmony default export */ const seperator = ((/* unused pure expression or super */ null && (Seperator)));

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/organisms/nav-footer/nav-footer.tsx




function NavFooterItem({ href , text  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(alink/* ALink */.a, {
        className: "text-gray-500 transition hover:text-gray-600",
        urlPath: href,
        children: text
    });
}
function NavFooter() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "flex flex-col px-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Seperator, {
                    className: "mb-8"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid w-full max-w-2xl grid-cols-2 gap-4 pb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col items-start space-y-4",
                            children: nav/* nav.map */.$n.map((item)=>{
                                const { href , text  } = item;
                                return /*#__PURE__*/ jsx_runtime_.jsx(NavFooterItem, {
                                    href: href,
                                    text: text
                                }, href);
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col space-y-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    rel: "noreferrer",
                                    href: "https://github.com/BoBeenLee",
                                    target: "_blank",
                                    className: "text-gray-500 transition hover:text-gray-600",
                                    children: "Github"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    rel: "noreferrer",
                                    href: "mailto:globaldev@naver.com",
                                    target: "_blank",
                                    className: "text-gray-500 transition hover:text-gray-600",
                                    children: "Email"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const nav_footer = (NavFooter);

;// CONCATENATED MODULE: ./src/components/ui/nav-footer.tsx



function nav_footer_NavFooter() {
    return /*#__PURE__*/ jsx_runtime_.jsx(nav_footer, {});
}


/***/ }),

/***/ 4927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nav_Nav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../../libs/ui-components/src/lib/atoms/icon/icon.tsx + 10 modules
var icon = __webpack_require__(1149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(7365);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next-themes@0.2.1_ld2jel3hspngo3u5lti2kgl2sq/node_modules/next-themes/dist/index.js
var dist = __webpack_require__(3934);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/molecules/dark-mode-button/dark-mode-button.tsx





function DarkModeButton(props) {
    const { className  } = props;
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme , setTheme  } = (0,dist/* useTheme */.F)();
    const isDark = theme === "dark";
    // After mounting, we have access to the theme
    (0,react_.useEffect)(()=>setMounted(true), []);
    const onToggle = (0,react_.useCallback)(()=>{
        if (isDark) {
            setTheme("light");
            return;
        }
        setTheme("dark");
    }, [
        isDark,
        setTheme
    ]);
    return mounted ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        className: classnames_default()(className, "w-10 px-3 py-2 mr-[-0.75rem] rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"),
        onClick: onToggle,
        children: /*#__PURE__*/ jsx_runtime_.jsx(icon/* Icon */.J, {
            name: isDark ? "light" : "night"
        })
    }) : null;
}
/* harmony default export */ const dark_mode_button = ((/* unused pure expression or super */ null && (DarkModeButton)));

// EXTERNAL MODULE: ../../libs/ui-components/src/lib/atoms/alink/alink.tsx + 1 modules
var alink = __webpack_require__(5368);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/molecules/nav-item/nav-item.tsx



function NavItem(props) {
    const { href , text  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(alink/* ALink */.a, {
        className: classnames_default()("p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all", "font-normal text-gray-600 dark:text-gray-400"),
        activeClassName: classnames_default()("p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all", `font-semibold text-gray-800 dark:text-gray-200`),
        urlPath: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "capsize",
            children: text
        })
    });
}
/* harmony default export */ const nav_item = ((/* unused pure expression or super */ null && (NavItem)));

// EXTERNAL MODULE: ../../libs/ui-components/src/lib/molecules/menu-button/menu-button.module.css
var menu_button_module = __webpack_require__(3218);
var menu_button_module_default = /*#__PURE__*/__webpack_require__.n(menu_button_module);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/molecules/menu-button/menu-button.tsx




function MenuButton(props) {
    const { className , open , onToggleMenu  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: classnames_default()((menu_button_module_default()).burger, className),
        "aria-label": "Toggle menu",
        type: "button",
        onClick: onToggleMenu,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(icon/* Icon */.J, {
                className: "absolute w-10 h-10 px-2 py-1",
                name: "menu",
                dataProps: {
                    hide: open
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(icon/* Icon */.J, {
                className: "absolute w-10 h-10 px-2 py-1 ml-[-0.30rem]",
                name: "close",
                dataProps: {
                    hide: !open
                }
            })
        ]
    });
}
/* harmony default export */ const menu_button = ((/* unused pure expression or super */ null && (MenuButton)));

// EXTERNAL MODULE: ../../libs/ui-components/src/lib/organisms/mobile-menus/mobile-menus.module.css
var mobile_menus_module = __webpack_require__(8227);
var mobile_menus_module_default = /*#__PURE__*/__webpack_require__.n(mobile_menus_module);
// EXTERNAL MODULE: ../../libs/constants/src/lib/nav.ts
var nav = __webpack_require__(5239);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/organisms/mobile-menus/mobile-menus.tsx





const DEFAULT_TRANSITION_DELAY = 150;
const DEFAULT_TRANSITION_DELAY_UNIT = 25;
function MenuItem({ href , text , transitionDelay  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: classnames_default()("text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"),
        style: {
            transitionDelay: `${transitionDelay}ms`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(alink/* ALink */.a, {
            className: "flex w-auto py-4",
            urlPath: href,
            children: text
        })
    });
}
function MobileMenus(props) {
    const { className , open  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: classnames_default()(className, (mobile_menus_module_default()).menu, "flex flex-col absolute bg-white dark:bg-gray-900 left-0 visible md:hidden", open && (mobile_menus_module_default()).menuRendered),
        children: nav/* nav.map */.$n.map((item, index)=>{
            const { href , text  } = item;
            return /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                href: href,
                text: text,
                transitionDelay: DEFAULT_TRANSITION_DELAY + index * DEFAULT_TRANSITION_DELAY_UNIT
            }, text);
        })
    });
}
/* harmony default export */ const mobile_menus = (MobileMenus);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/organisms/mobile-nav/mobile-nav.tsx




function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    const onToggleMenu = (0,react_.useCallback)(()=>{
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = "";
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = "hidden";
        }
    }, [
        isMenuOpen
    ]);
    (0,react_.useEffect)(()=>{
        return function cleanup() {
            document.body.style.overflow = "";
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MenuButton, {
                className: "visible md:hidden absolute top-[1.8rem] flex w-[2.5rem] h-[2.5rem]",
                open: isMenuOpen,
                onToggleMenu: onToggleMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_menus, {
                open: isMenuOpen
            })
        ]
    });
}
/* harmony default export */ const mobile_nav = (MobileNav);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/organisms/nav/nav.tsx





function Nav() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "flex flex-col justify-center px-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 bg-white border-gray-200 dark:border-gray-700 sm:pb-16 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ml-[-0.60rem]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(mobile_nav, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden md:inline-block",
                            children: nav/* nav.map */.$n.map((item)=>{
                                const { href , text  } = item;
                                return /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                    href: href,
                                    text: text
                                }, href);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(DarkModeButton, {})
            ]
        })
    });
}
/* harmony default export */ const nav_nav = (Nav);

;// CONCATENATED MODULE: ./src/components/ui/nav.tsx



function nav_Nav() {
    return /*#__PURE__*/ jsx_runtime_.jsx(nav_nav, {});
}


/***/ }),

/***/ 5239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$n": () => (/* binding */ nav)
/* harmony export */ });
/* unused harmony exports getNavRouterPath, getBlogById */

const getNavRouterPath = ([path, pathValues])=>{
    return makePathname(path, pathValues ?? {});
};
const nav = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About",
        href: "/about"
    },
    {
        text: "Project",
        href: "/project"
    },
    {
        text: "Blog",
        href: "/blog"
    }
];
const getBlogById = (id)=>{
    return `/blog/${id}`;
};


/***/ }),

/***/ 5368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ ALink)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/link.js
var next_link = __webpack_require__(8548);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.2.4_pjwopsidmaokadturxaafygjp4/node_modules/next/navigation.js
var navigation = __webpack_require__(7580);
;// CONCATENATED MODULE: ../../libs/utils/src/lib/router/router.ts
const hasPathParameterize = (path)=>{
    return path.startsWith("[") && path.endsWith("]");
};
const getPathParameterizeKey = (path)=>{
    const matches = path.match(/\[(.*?)\]/);
    if (matches) {
        return matches[1] ?? "";
    }
    return "";
};
const makePathname = (path, pathValues)=>{
    const pathSplit = path.split("/");
    return pathSplit.map((path)=>{
        if (hasPathParameterize(path)) {
            return pathValues[getPathParameterizeKey(path)];
        }
        return path;
    }).join("/");
};

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/alink/alink.tsx





function ALink(props) {
    const { className: childClassName , activeClassName , children , urlPath , ...restWithURLPathValues } = props;
    const pathname = (0,navigation.usePathname)();
    const getRestWithPathValues = ()=>{
        if ("urlPathValues" in restWithURLPathValues) {
            return {
                ...restWithURLPathValues,
                urlPathValues: restWithURLPathValues.urlPathValues
            };
        }
        return {
            ...restWithURLPathValues,
            urlPathValues: {}
        };
    };
    const { urlPathValues , ...rest } = getRestWithPathValues();
    const href = makePathname(urlPath, urlPathValues);
    const className = (0,react_.useMemo)(()=>{
        // Dynamic route will be matched via props.as
        // Static route will be matched via props.href
        const linkPathname = props.as || href;
        // Using URL().pathname to get rid of query and hash
        const activePathname = pathname;
        const newClassName = linkPathname === activePathname ? activeClassName : childClassName;
        return newClassName;
    }, [
        activeClassName,
        childClassName,
        href,
        pathname,
        props.as
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ...rest,
        className: className,
        href: href,
        children: children
    });
}
/* harmony default export */ const alink = ((/* unused pure expression or super */ null && (ALink)));


/***/ }),

/***/ 1149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ Icon)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/Github.tsx


function SvgComponent(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-labelledby": "title",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.414,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
    });
}
/* harmony default export */ const Github = (SvgComponent);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/Close.tsx


function Close_SvgComponent(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-x-circle",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 10
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15 9L9 15"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9 9L15 15"
            })
        ]
    });
}
/* harmony default export */ const Close = (Close_SvgComponent);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/Facebook.tsx


function Facebook_SvgComponent(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-facebook",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
        })
    });
}
/* harmony default export */ const Facebook = (Facebook_SvgComponent);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/Instagram.tsx


function Instagram_SvgComponent(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-instagram",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: 2,
                y: 2,
                width: 20,
                height: 20,
                rx: 5,
                ry: 5
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.5 6.5L17.5 6.5"
            })
        ]
    });
}
/* harmony default export */ const Instagram = (Instagram_SvgComponent);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/Linkedin.tsx


function Linkedin_SvgComponent(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-linkedin",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2 9H6V21H2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 4,
                cy: 4,
                r: 2
            })
        ]
    });
}
/* harmony default export */ const Linkedin = (Linkedin_SvgComponent);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/OutlineLightMode.tsx


function OutlineLightMode_SvgComponent(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: 24,
        width: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17zM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23zM5.65 7.05L4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287zM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3zM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275zM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287zM12 12z"
        })
    });
}
/* harmony default export */ const OutlineLightMode = (OutlineLightMode_SvgComponent);

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/OutlineNightlight.tsx


function OutlineNightlight_SvgComponent(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: 24,
        width: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M14 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.151-3.187Q4 14.05 4 12q0-2.075.787-3.887.788-1.813 2.151-3.175Q8.3 3.575 10.125 2.787 11.95 2 14 2q1.35 0 2.625.35t2.375 1q-2.275 1.325-3.637 3.587Q14 9.2 14 12t1.363 5.062Q16.725 19.325 19 20.65q-1.1.65-2.375 1T14 22zm0-2h.525q.25 0 .475-.05-1.425-1.65-2.212-3.688Q12 14.225 12 12q0-2.225.788-4.263Q13.575 5.7 15 4.05 14.775 4 14.525 4H14q-3.325 0-5.662 2.337Q6 8.675 6 12t2.338 5.663Q10.675 20 14 20zm-3.5-8z"
        })
    });
}
/* harmony default export */ const OutlineNightlight = (OutlineNightlight_SvgComponent);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/di/DiAndroid.js
var DiAndroid = __webpack_require__(807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/di/DiApple.js
var DiApple = __webpack_require__(8538);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/ai/AiFillHome.js
var AiFillHome = __webpack_require__(4329);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/go/GoLink.js
var GoLink = __webpack_require__(167);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/go/GoMarkGithub.js
var GoMarkGithub = __webpack_require__(4721);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/md/MdSearch.js
var MdSearch = __webpack_require__(1094);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/md/MdMenu.js
var MdMenu = __webpack_require__(3142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/md/MdClose.js
var MdClose = __webpack_require__(6048);
;// CONCATENATED MODULE: ../../libs/images/src/lib/images.ts
function getKeys(obj) {
    return Object.keys(obj);
}
let prefix = "";
const setImagePrefixPath = (newPrefix)=>{
    prefix = newPrefix;
};
const withPrefixPath = (imageKeys, images)=>{
    return imageKeys.reduce((res, curr)=>{
        return {
            ...res,
            [curr]: `${prefix}${images[curr]}`
        };
    }, images);
};
const getImages = ()=>{
    const logoImages = {
        quokkaWebp: `/assets/quokka.webp`,
        quokkaPng: "/assets/quokka.png"
    };
    const logoImageKeys = getKeys(logoImages);
    const iconImages = {
        googlePlayButton: "/assets/google-play.png",
        octocat: "/assets/octocat.png",
        storybook: "/assets/storybook.png"
    };
    const iconImageKeys = getKeys(iconImages);
    return {
        logoImages: withPrefixPath(logoImageKeys, logoImages),
        iconImages: withPrefixPath(iconImageKeys, iconImages)
    };
};

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/svg/index.tsx
















const imageIcons = {
    storybook: getImages().iconImages.storybook
};
const svgIcons = {
    github: Github,
    close: Close,
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    light: OutlineLightMode,
    night: OutlineNightlight
};
const reactIcons = {
    android: DiAndroid/* DiAndroid */.m,
    apple: DiApple/* DiApple */.p,
    link: GoLink/* GoLink */.N,
    github: GoMarkGithub/* GoMarkGithub */.J,
    home: AiFillHome/* AiFillHome */.V,
    menu: MdMenu/* MdMenu */.x,
    close: MdClose/* MdClose */.F,
    search: MdSearch/* MdSearch */.v
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(7365);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../../libs/utils/src/lib/object.ts
function callValue(supplier, defaultValue) {
    try {
        const value = supplier();
        return value || defaultValue;
    } catch (err) {
        //   console.error(supplier);
        return defaultValue;
    }
}
function object_getKeys(obj) {
    return Object.keys(obj);
}

;// CONCATENATED MODULE: ../../libs/ui-components/src/lib/atoms/icon/icon.tsx




const isReactIconType = (name)=>{
    if (name in reactIcons) {
        return true;
    }
    return false;
};
const isImageIconType = (name)=>{
    if (name in imageIcons) {
        return true;
    }
    return false;
};
function Icon(props) {
    const { className , name , dataProps ={}  } = props;
    const data = object_getKeys(dataProps).reduce((res, key)=>{
        return {
            ...res,
            [`data-${key}`]: dataProps[key]
        };
    }, {});
    if (isReactIconType(name)) {
        const TargetComponent = reactIcons[name];
        return /*#__PURE__*/ jsx_runtime_.jsx(TargetComponent, {
            className: classnames_default()(className, `dark:fill-white fill-black w-full h-full`),
            ...data
        });
    }
    if (isImageIconType(name)) {
        return /*#__PURE__*/ jsx_runtime_.jsx("img", {
            alt: name,
            src: imageIcons[name]
        });
    }
    const TargetComponent = svgIcons[name];
    return /*#__PURE__*/ jsx_runtime_.jsx(TargetComponent, {
        className: classnames_default()(className, `dark:fill-white fill-black w-full h-full`),
        ...data
    });
}
/* harmony default export */ const icon = ((/* unused pure expression or super */ null && (Icon)));


/***/ }),

/***/ 5954:
/***/ (() => {



/***/ })

};
;