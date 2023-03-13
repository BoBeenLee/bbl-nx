"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 3367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bd": () => (/* binding */ getAllPosts),
  "u_": () => (/* binding */ getPostById)
});

// UNUSED EXPORTS: getPostBySlug

// EXTERNAL MODULE: ../../node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js
var gray_matter = __webpack_require__(5991);
var gray_matter_default = /*#__PURE__*/__webpack_require__.n(gray_matter);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
// EXTERNAL MODULE: ../../node_modules/.pnpm/mobile-detect@1.4.5/node_modules/mobile-detect/mobile-detect.js
var mobile_detect = __webpack_require__(1917);
;// CONCATENATED MODULE: ../../libs/utils/src/lib/navigator.ts

const isBrowser = "undefined" !== "undefined";
const getHostname = ()=>{
    if (false) {}
    return ``;
};
const isMobile = ()=>{
    if (!isBrowser) {
        return false;
    }
    const md = new MobileDetect(window.navigator.userAgent);
    return !!md.mobile();
};
const isSafari = ()=>{
    if (!isBrowser) {
        return false;
    }
    const md = new MobileDetect(window.navigator.userAgent);
    return md.userAgent() === "Safari";
};
const isIE = ()=>{
    if (!isBrowser) {
        return false;
    }
    const md = new MobileDetect(window.navigator.userAgent);
    return !!md.version("IE");
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.2.2/node_modules/axios/dist/node/axios.cjs
var axios = __webpack_require__(8454);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ../../node_modules/.pnpm/remark@10.0.1/node_modules/remark/index.js
var remark = __webpack_require__(8767);
var remark_default = /*#__PURE__*/__webpack_require__.n(remark);
// EXTERNAL MODULE: ../../node_modules/.pnpm/remark-html@15.0.2/node_modules/remark-html/index.js + 86 modules
var remark_html = __webpack_require__(2415);
;// CONCATENATED MODULE: ./src/libs/post.ts
// Install gray-matter and date-fns







// Add markdown files in `src/posts`
const getPostsDirectory = ()=>(0,external_path_.join)(process.cwd(), "posts");
function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = (0,external_path_.join)(getPostsDirectory(), `${realSlug}.md`);
    const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
    const { data , content  } = gray_matter_default()(fileContents);
    return {
        slug: realSlug,
        frontmatter: data,
        content
    };
}
const getPostById = async (slug)=>{
    if (isBrowser) {
        const response = await axios_default().get(`${getHostname()}/api/posts`);
        const post = response.data?.[0];
        if (!post) {
            throw new Error("Not Found DummyData");
        }
        const markdown = await remark_default()().use(remark_html/* default */.Z).process(post.content || "");
        const content = markdown.toString();
        return {
            ...post,
            content
        };
    }
    const post = getPostBySlug(slug ?? "");
    const markdown = await remark_default()().use(remark_html/* default */.Z).process(post.content || "");
    const content = markdown.toString();
    return {
        ...post,
        content
    };
};
const getAllPosts = async ()=>{
    if (isBrowser) {
        const response = await axios_default().get(`${getHostname()}/api/posts`);
        return response.data;
    }
    const slugs = external_fs_default().readdirSync(getPostsDirectory());
    const posts = slugs.map((slug)=>getPostBySlug(slug));
    return posts;
};


/***/ })

};
;