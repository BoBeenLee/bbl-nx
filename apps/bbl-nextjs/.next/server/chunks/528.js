"use strict";
exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 5528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getImages)
/* harmony export */ });
/* unused harmony export setImagePrefixPath */
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


/***/ })

};
;