"use strict";(globalThis.webpackChunkbbl_nx=globalThis.webpackChunkbbl_nx||[]).push([[4998],{"./libs/features/src/lib/project/components/organisms/project-card/project-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,t:()=>ProjectCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ProjectCard(props){const{name,period,techStacks,summary,IconComponent}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-row items-start justify-between mb-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-row items-center min-w-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"pr-4 mb-0 font-medium text-gray-900 truncate dark:text-gray-100",children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"mb-0 text-sm text-gray-500",children:period})]}),IconComponent]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"mb-2 text-sm text-gray-600 dark:text-gray-400",children:summary}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-row flex-wrap items-center gap-2 mb-4",children:techStacks.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"text-sm text-gray-500",children:item},`${name}${item}`)))})]})}ProjectCard.displayName="ProjectCard";const __WEBPACK_DEFAULT_EXPORT__=ProjectCard},"./libs/features/src/lib/project/components/organisms/project-card/project-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_user_Desktop_mygit_bbl_nx_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_project_card__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/features/src/lib/project/components/organisms/project-card/project-card.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_user_Desktop_mygit_bbl_nx_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={component:_project_card__WEBPACK_IMPORTED_MODULE_3__.t,title:"organisms/CompanyPortfolios/ProjectCard",argTypes:{}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_project_card__WEBPACK_IMPORTED_MODULE_3__.t,_objectSpread({},args));Template.displayName="Template";const Primary=Template.bind({});Primary.args={name:"Henesis",period:"2020.5 - 2022.5",techStacks:["react","mobx state tree","mobx","nextjs","emotion","typescript","storybook","material-ui","i18next"],summary:"국내 주요 은행, 가상자산 거래소, 핀테크 회사, 가상자산 \n수탁업체가 Henesis로 가상자산 관리하는 서비스"},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},Primary.parameters?.docs),{},{source:_objectSpread({originalSource:"args => <ProjectCard {...args} />"},Primary.parameters?.docs?.source)})});const __namedExportsOrder=["Primary"]}}]);