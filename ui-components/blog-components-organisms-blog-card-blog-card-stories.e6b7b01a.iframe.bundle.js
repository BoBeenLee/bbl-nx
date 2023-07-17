"use strict";(globalThis.webpackChunkbbl_nx=globalThis.webpackChunkbbl_nx||[]).push([[7280],{"./libs/features/src/lib/blog/components/organisms/blog-card/blog-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>BlogCard,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_bbl_nx_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/utils/src/lib/datetime/datetime.ts"),_bbl_nx_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/utils/src/lib/datetime/datetime-format.ts"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function BlogCard(props){const{className,title,createdAt,summary}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"flex flex-col"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex flex-row items-start justify-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4",{className:"mb-0 text-lg font-medium text-gray-900 b-2 md:text-xl dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"mb-0 text-sm text-right text-gray-500",children:(0,_bbl_nx_utils__WEBPACK_IMPORTED_MODULE_3__.NO)(createdAt,_bbl_nx_utils__WEBPACK_IMPORTED_MODULE_4__.uh)})]}),summary?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"mb-2 text-gray-600 dark:text-gray-400",children:summary}):null]})}BlogCard.displayName="BlogCard";const __WEBPACK_DEFAULT_EXPORT__=BlogCard},"./libs/utils/src/lib/datetime/datetime-format.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a1:()=>DATE_TIME_FORMAT,uh:()=>DATE_TIME_FORMAT5});const DATE_TIME_FORMAT="yyyy/MM/dd HH:mm:ss",DATE_TIME_FORMAT5="MMMM d, yyyy"},"./libs/utils/src/lib/datetime/datetime.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NO:()=>transformDateTimeStrToText});var _datetime_format__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/utils/src/lib/datetime/datetime-format.ts"),date_fns_format__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js"),date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/ko/index.js");const locales={enUS:__webpack_require__("./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/index.js").Z,ko:date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_1__.Z},transformDateTimeStrToText=function(datetimeStr){let format=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_datetime_format__WEBPACK_IMPORTED_MODULE_2__.a1;return toDateTimeText(new Date(datetimeStr),format)},toDateTimeText=function(datetime){let format=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_datetime_format__WEBPACK_IMPORTED_MODULE_2__.a1;return(0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__.Z)(datetime,format,{locale:locales.enUS})}},"./libs/features/src/lib/blog/components/organisms/blog-card/blog-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_user_Desktop_mygit_bbl_nx_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_blog_card__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/features/src/lib/blog/components/organisms/blog-card/blog-card.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_user_Desktop_mygit_bbl_nx_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={component:_blog_card__WEBPACK_IMPORTED_MODULE_3__.$,title:"organisms/Blogs/BlogCard",argTypes:{}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_blog_card__WEBPACK_IMPORTED_MODULE_3__.$,_objectSpread({},args));Template.displayName="Template";const Primary=Template.bind({});Primary.args={title:"test",createdAt:"2020-10-10",summary:"summary"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},Primary.parameters?.docs),{},{source:_objectSpread({originalSource:"args => <BlogCard {...args} />"},Primary.parameters?.docs?.source)})});const __namedExportsOrder=["Primary"]}}]);