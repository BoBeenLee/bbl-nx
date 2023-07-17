/*! For license information please see about-components-templates-about-template-about-template-stories.800cd62d.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkbbl_nx=globalThis.webpackChunkbbl_nx||[]).push([[1088],{"./libs/features/src/lib/about/components/organisms/activities/activities.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>Activities});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const activity=[{name:"Nexters",url:"http://teamnexters.com/",description:"Developer"},{name:"SOPT",url:"http://sopt.org/wp/",description:"Developer"}];var section_title=__webpack_require__("./libs/ui-components/src/lib/atoms/section-title/section-title.tsx"),activity_card=__webpack_require__("./libs/features/src/lib/about/components/organisms/activity-card/activity-card.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react.createElement;function Activities(props){const{className}=props;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(className,"space-y-8"),children:[(0,jsx_runtime.jsx)(section_title.N,{className:"pb-2",href:"#activity",children:"Activity"}),activity.map((item=>{const{name,url,description}=item;return(0,jsx_runtime.jsx)(activity_card.Z,{title:(0,jsx_runtime.jsx)("a",{className:"",href:url,target:"_blank",rel:"noreferrer",children:name}),caption:description},name)}))]})}Activities.displayName="Activities"},"./libs/features/src/lib/about/components/organisms/activity-card/activity-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>ActivityCard,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ActivityCard(props){const{className,title,caption}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"flex flex-col flex-1 sm:flex-row sm:justify-between sm:space-y-0 space-y-2"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"font-medium text-gray-900 truncate dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"text-sm text-gray-500",children:caption})})]})}ActivityCard.displayName="ActivityCard";const __WEBPACK_DEFAULT_EXPORT__=ActivityCard},"./libs/features/src/lib/about/components/organisms/experience-card/experience-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>ExperienceCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ExperienceCard(props){const{className,title,caption}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"flex flex-col flex-1 sm:flex-row sm:justify-between sm:space-y-0 space-y-2"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"font-medium text-gray-900 truncate dark:text-gray-100",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"text-sm text-gray-500",children:caption})})]})}ExperienceCard.displayName="ExperienceCard";const __WEBPACK_DEFAULT_EXPORT__=ExperienceCard},"./libs/features/src/lib/about/components/organisms/experiences/experiences.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>Experiences});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const experiences=[{title:"Naver",titleUri:"https://www.navercorp.com/",period:"2022.10 - ",role:"Frontend Developer"},{title:"Haechi Labs",titleUri:"https://haechi.io/ko",period:"2020.2 - 2022.5",role:"Frontend Developer"},{title:"Blended",titleUri:"https://www.rocketpunch.com/companies/trillionaire",period:"2018.4 - 2020.01",role:"React, React Native Developer"},{title:"Buxi",titleUri:"https://www.rocketpunch.com/companies/buxi",period:"2017.8 - 2017.11",role:"React Developer"},{title:"Coupang",titleUri:"https://www.rocketpunch.com/companies/coupang",period:"2015.6 - 2017.7",role:"Full Stack Engineer"},{title:"DailyHotel",titleUri:"https://www.rocketpunch.com/companies/dailyhotel",period:"2014.11 - 2015.1",role:"Developer Intern"}];var section_title=__webpack_require__("./libs/ui-components/src/lib/atoms/section-title/section-title.tsx"),experience_card=__webpack_require__("./libs/features/src/lib/about/components/organisms/experience-card/experience-card.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react.createElement;function Experiences(props){const{className}=props;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(className,"space-y-8"),children:[(0,jsx_runtime.jsx)(section_title.N,{className:"pb-2",href:"#experience",children:"Experience"}),experiences.map((item=>{const{title,titleUri,period,role}=item;return(0,jsx_runtime.jsx)(experience_card.Z,{title:(0,jsx_runtime.jsx)("a",{className:"",href:titleUri,target:"_blank",rel:"noreferrer",children:role}),caption:`${title} / ${period}`},title)}))]})}Experiences.displayName="Experiences"},"./libs/features/src/lib/about/components/organisms/tech-stack-card/tech-stack-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>TechStackCard,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function TechStackCard(props){const{className,groupName,items}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"flex flex-col items-start space-y-2"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"font-medium text-gray-900 truncate dark:text-gray-100",children:groupName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex flex-row flex-wrap items-center gap-2",children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"text-sm text-gray-500",children:item},`${groupName}${item}`)))})]})}TechStackCard.displayName="TechStackCard";const __WEBPACK_DEFAULT_EXPORT__=TechStackCard},"./libs/features/src/lib/about/components/organisms/teckstacks/teckstacks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>TeckStacks});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const categorySkillArray=Object.values({frontend:{name:"Frontend",skills:["React","React Native","Javascript","Typescript","JQuery"]},framework:{name:"Framework",skills:["Nextjs","Gatsby","React Native CLI","Expo"]},uicomponent:{name:"UI Component",skills:["Storybook","Material UI (mui)","Antd","Native Base, React Bootstrap"]},style:{name:"Styling",skills:["Emotion","Styled-components","Less","Sass"]},statemanagement:{name:"State Management",skills:["Recoil","Mobx","Mobx State Tree","XState","Redux","Redux Saga","React Query","React Apollo"]},navigation:{name:"Navigation",skills:["React Router","React Navigation","React Native Navigation"]},backend:{name:"Backend",skills:["Express","GraphQL","Serverless","Spring Framework","Spring Boot"]},db:{name:"DB",skills:["RDB (MySQL, MariaDB, PostgreSQL)","Prisma","Mongodb","Dynamodb"]},buildsystem:{name:"Build System",skills:["Nx.dev","Lerna"]},collaboration:{name:"Collaboration",skills:["Linear","Notion","Workspace","Slack","JIRA","Trello"]},deployment:{name:"Deployment",skills:["Code Push","Fastlane"]},ci:{name:"CI",skills:["Github Action"]}});var section_title=__webpack_require__("./libs/ui-components/src/lib/atoms/section-title/section-title.tsx"),tech_stack_card=__webpack_require__("./libs/features/src/lib/about/components/organisms/tech-stack-card/tech-stack-card.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react.createElement;function TeckStacks(props){const{className}=props;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(className,"space-y-8"),children:[(0,jsx_runtime.jsx)(section_title.N,{className:"pb-2",href:"#tech-stack",children:"Tech Stack"}),categorySkillArray.map((item=>{const{name,skills}=item;return(0,jsx_runtime.jsx)(tech_stack_card.Z,{groupName:name,items:skills},name)}))]})}TeckStacks.displayName="TeckStacks"},"./libs/ui-components/src/lib/atoms/section-title/section-title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>SectionTitle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function SectionTitle(props){const{className,href,children}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"font-bold text-3xl tracking-tigh text-black dark:text-white"),href,children})}SectionTitle.displayName="SectionTitle"},"./libs/ui-components/src/lib/atoms/seperator/seperator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>Seperator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Seperator(props){const{className}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"w-full h-[1px] bg-gray-200 dark:bg-gray-800")})}Seperator.displayName="Seperator"},"./libs/ui-components/src/lib/molecules/dark-mode-button/dark-mode-button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>DarkModeButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_atoms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-components/src/lib/atoms/icon/icon.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),next_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/next-themes@0.2.1_yucv4tfv7v7nrkw2uguegj6e7e/node_modules/next-themes/dist/index.module.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function DarkModeButton(props){const{className}=props,{0:mounted,1:setMounted}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{theme,setTheme}=(0,next_themes__WEBPACK_IMPORTED_MODULE_2__.F)(),isDark="dark"===theme;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>setMounted(!0)),[]);const onToggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setTheme(isDark?"light":"dark")}),[isDark,setTheme]);return mounted?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{"aria-label":"Toggle Dark Mode",className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"w-10 px-3 py-2 mr-[-0.75rem] rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"),onClick:onToggle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms__WEBPACK_IMPORTED_MODULE_4__.J,{name:isDark?"light":"night"})}):null}},"./libs/ui-components/src/lib/molecules/nav-item/nav-item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>NavItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_atoms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui-components/src/lib/atoms/alink/alink.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function NavItem(props){const{href,text}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_atoms__WEBPACK_IMPORTED_MODULE_3__.a,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all","font-normal text-gray-600 dark:text-gray-400"),activeClassName:classnames__WEBPACK_IMPORTED_MODULE_1___default()("p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all","font-semibold text-gray-800 dark:text-gray-200"),urlPath:href,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"capsize",children:text})})}NavItem.displayName="NavItem"},"./libs/ui-components/src/lib/organisms/nav-footer/nav-footer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>NavFooter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_bbl_nx_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/constants/src/lib/nav.ts"),_atoms_alink_alink__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui-components/src/lib/atoms/alink/alink.tsx"),_atoms_seperator_seperator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui-components/src/lib/atoms/seperator/seperator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function NavFooterItem(_ref){let{href,text}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_atoms_alink_alink__WEBPACK_IMPORTED_MODULE_2__.a,{activeClassName:"text-gray-500",className:"text-gray-500 transition hover:text-gray-600",urlPath:href,children:text})}function NavFooter(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer",{className:"flex flex-col px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_atoms_seperator_seperator__WEBPACK_IMPORTED_MODULE_3__.t,{className:"mb-8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid w-full max-w-2xl grid-cols-2 gap-4 pb-16",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-col items-start space-y-4",children:_bbl_nx_constants__WEBPACK_IMPORTED_MODULE_4__.$n.map((item=>{const{href,text}=item;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavFooterItem,{href,text},href)}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{rel:"noreferrer",href:"https://github.com/BoBeenLee",target:"_blank",className:"text-gray-500 transition hover:text-gray-600",children:"Github"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{rel:"noreferrer",href:"mailto:globaldev@naver.com",target:"_blank",className:"text-gray-500 transition hover:text-gray-600",children:"Email"})]})]})]})})}NavFooterItem.displayName="NavFooterItem",NavFooter.displayName="NavFooter"},"./libs/ui-components/src/lib/organisms/nav/nav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Nav});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_molecules_dark_mode_button_dark_mode_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/ui-components/src/lib/molecules/dark-mode-button/dark-mode-button.tsx"),_molecules_nav_item_nav_item__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-components/src/lib/molecules/nav-item/nav-item.tsx"),_mobile_nav_mobile_nav__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui-components/src/lib/organisms/mobile-nav/mobile-nav.tsx"),_bbl_nx_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/constants/src/lib/nav.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Nav(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header",{className:"flex flex-col justify-center px-8",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav",{className:"relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 bg-white border-gray-200 dark:border-gray-700 sm:pb-16 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"ml-[-0.60rem]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mobile_nav_mobile_nav__WEBPACK_IMPORTED_MODULE_2__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"hidden md:inline-block",children:_bbl_nx_constants__WEBPACK_IMPORTED_MODULE_3__.$n.map((item=>{const{href,text}=item;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_molecules_nav_item_nav_item__WEBPACK_IMPORTED_MODULE_4__.L,{href,text},href)}))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_molecules_dark_mode_button_dark_mode_button__WEBPACK_IMPORTED_MODULE_5__.i,{})]})})}Nav.displayName="Nav"},"./libs/ui-components/src/lib/templates/layout-template/layout-template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,b:()=>LayoutTemplate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_organisms_nav_nav__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui-components/src/lib/organisms/nav/nav.tsx"),_organisms_nav_footer_nav_footer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui-components/src/lib/organisms/nav-footer/nav-footer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react__WEBPACK_IMPORTED_MODULE_0__.createElement;function LayoutTemplate(props){const{children}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col flex-1 bg-white dark:bg-gray-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_organisms_nav_nav__WEBPACK_IMPORTED_MODULE_2__.J,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("main",{className:"flex flex-col justify-center flex-1 px-8 bg-white dark:bg-gray-900",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_organisms_nav_footer_nav_footer__WEBPACK_IMPORTED_MODULE_3__.q,{})]})}LayoutTemplate.displayName="LayoutTemplate";const __WEBPACK_DEFAULT_EXPORT__=LayoutTemplate},"./libs/features/src/lib/about/components/templates/about-template/about-template.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>about_template_stories});var defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),layout_template=__webpack_require__("./libs/ui-components/src/lib/templates/layout-template/layout-template.tsx"),section_title=__webpack_require__("./libs/ui-components/src/lib/atoms/section-title/section-title.tsx"),seperator=__webpack_require__("./libs/ui-components/src/lib/atoms/seperator/seperator.tsx"),experiences=__webpack_require__("./libs/features/src/lib/about/components/organisms/experiences/experiences.tsx"),activities=__webpack_require__("./libs/features/src/lib/about/components/organisms/activities/activities.tsx"),teckstacks=__webpack_require__("./libs/features/src/lib/about/components/organisms/teckstacks/teckstacks.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");react.createElement;function AboutTemplate(){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-start w-full max-w-2xl mx-auto mb-8 border-gray-200 sm:mb-12 dark:border-gray-700",children:[(0,jsx_runtime.jsxs)("div",{className:"w-full space-y-8",children:[(0,jsx_runtime.jsx)(experiences._,{}),(0,jsx_runtime.jsx)(seperator.t,{})]}),(0,jsx_runtime.jsxs)("div",{className:"w-full mt-16 space-y-8",children:[(0,jsx_runtime.jsx)(activities.R,{}),(0,jsx_runtime.jsx)(seperator.t,{})]}),(0,jsx_runtime.jsxs)("div",{className:"w-full mt-16 space-y-8",children:[(0,jsx_runtime.jsx)(teckstacks.E,{}),(0,jsx_runtime.jsx)(seperator.t,{})]}),(0,jsx_runtime.jsxs)("div",{className:"w-full mt-16 space-y-8",children:[(0,jsx_runtime.jsx)(section_title.N,{className:"pb-2",href:"#education",children:"Education"}),(0,jsx_runtime.jsx)("p",{className:"font-medium text-gray-900 dark:text-gray-100",children:"BoBeen Lee graduated from Sungkonghoe University in Software Engineering."})]})]})}AboutTemplate.displayName="AboutTemplate";react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const about_template_stories={component:AboutTemplate,title:"templates/AboutTemplate",argTypes:{}},Template=args=>(0,jsx_runtime.jsx)(layout_template.b,{children:(0,jsx_runtime.jsx)(AboutTemplate,_objectSpread({},args))});Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},Primary.parameters?.docs),{},{source:_objectSpread({originalSource:"args => <LayoutTemplate>\n    <AboutTemplate {...args} />\n  </LayoutTemplate>"},Primary.parameters?.docs?.source)})});const __namedExportsOrder=["Primary"]},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/ai/AiFillHome.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.V=function AiFillHome(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"}}]})(props)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/di/DiAndroid.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.m=function DiAndroid(props){return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M6.802 20.283c0 1.23-0.857 2.237-1.904 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.904 1.007 1.904 2.237v7.321zM29.007 20.283c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.905 1.007 1.905 2.237v7.321zM20.164 3.649l1.222-2.193c0.1-0.179 0.070-0.388-0.065-0.463s-0.329 0.009-0.428 0.188l-1.25 2.244c-1.115-0.439-2.364-0.684-3.684-0.684-1.33 0-2.588 0.25-3.71 0.695l-1.256-2.254c-0.1-0.179-0.293-0.264-0.428-0.188s-0.165 0.284-0.065 0.463l1.228 2.204c-2.555 1.2-4.276 3.453-4.276 6.035 0 0.262 0.019 0.521 0.053 0.776h16.909c0.035-0.255 0.053-0.513 0.053-0.776 0-2.59-1.732-4.849-4.301-6.046zM12.097 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM19.861 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM7.45 11.211v12.471h0.007c0.087 1.053 1.056 1.89 2.23 1.89h12.541c1.173 0 2.142-0.837 2.23-1.89h0.007v-12.471h-17.014zM14.74 25.51v3.858c0 1.23-0.857 2.237-1.905 2.237s-1.904-1.007-1.904-2.237v-3.855zM21.088 25.508v3.86c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.007-1.905-2.237v-3.86z"}}]})(props)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/di/DiApple.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.p=function DiApple(props){return GenIcon({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M23.023 17.093c-0.033-3.259 2.657-4.822 2.777-4.901-1.512-2.211-3.867-2.514-4.705-2.548-2.002-0.204-3.91 1.18-4.926 1.18-1.014 0-2.583-1.15-4.244-1.121-2.185 0.033-4.199 1.271-5.323 3.227-2.269 3.936-0.58 9.769 1.631 12.963 1.081 1.561 2.37 3.318 4.061 3.254 1.63-0.064 2.245-1.055 4.215-1.055s2.524 1.055 4.248 1.021c1.753-0.032 2.864-1.591 3.936-3.159 1.24-1.814 1.751-3.57 1.782-3.659-0.038-0.017-3.416-1.312-3.451-5.202zM19.783 7.53c0.897-1.089 1.504-2.602 1.34-4.108-1.294 0.053-2.861 0.86-3.79 1.948-0.832 0.965-1.561 2.502-1.365 3.981 1.444 0.112 2.916-0.734 3.816-1.821z"}}]})(props)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/go/GoLink.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.N=function GoLink(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}}]})(props)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/go/GoMarkGithub.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.J=function GoMarkGithub(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(props)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/md/MdClose.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.F=function MdClose(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(props)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/md/MdMenu.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.x=function MdMenu(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(props)}},"./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/md/MdSearch.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GenIcon=__webpack_require__("./node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.2.0/node_modules/@react-icons/all-files/lib/esm/index.js").w_;module.exports.v=function MdSearch(props){return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}}]})(props)}},"./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);