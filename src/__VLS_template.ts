import { __VLS_publicComponent, __VLS_internalComponent, __VLS_componentsOption, __VLS_name, drawer } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VApp', typeof __VLS_localComponents, "VApp", "vApp", "v-app"> &
__VLS_WithComponent<'VNavigationDrawer', typeof __VLS_localComponents, "VNavigationDrawer", "vNavigationDrawer", "v-navigation-drawer"> &
__VLS_WithComponent<'VAppBar', typeof __VLS_localComponents, "VAppBar", "vAppBar", "v-app-bar"> &
__VLS_WithComponent<'VContainer', typeof __VLS_localComponents, "VContainer", "vContainer", "v-container"> &
__VLS_WithComponent<'VImg', typeof __VLS_localComponents, "VImg", "vImg", "v-img"> &
__VLS_WithComponent<'VAppBarNavIcon', typeof __VLS_localComponents, "VAppBarNavIcon", "vAppBarNavIcon", "v-app-bar-nav-icon"> &
__VLS_WithComponent<'VToolbarTitle', typeof __VLS_localComponents, "VToolbarTitle", "vToolbarTitle", "v-toolbar-title"> &
__VLS_WithComponent<'VMain', typeof __VLS_localComponents, "VMain", "vMain", "v-main">;
__VLS_components.VApp; __VLS_components.VApp; __VLS_components.vApp; __VLS_components.vApp; __VLS_components["v-app"]; __VLS_components["v-app"];
// @ts-ignore
[VApp, VApp,];
__VLS_components.VNavigationDrawer; __VLS_components.VNavigationDrawer; __VLS_components.vNavigationDrawer; __VLS_components.vNavigationDrawer; __VLS_components["v-navigation-drawer"]; __VLS_components["v-navigation-drawer"];
// @ts-ignore
[VNavigationDrawer, VNavigationDrawer,];
__VLS_components.VAppBar; __VLS_components.VAppBar; __VLS_components.vAppBar; __VLS_components.vAppBar; __VLS_components["v-app-bar"]; __VLS_components["v-app-bar"];
// @ts-ignore
[VAppBar, VAppBar,];
__VLS_components.VContainer; __VLS_components.VContainer; __VLS_components.vContainer; __VLS_components.vContainer; __VLS_components["v-container"]; __VLS_components["v-container"];
// @ts-ignore
[VContainer, VContainer,];
__VLS_components.VImg; __VLS_components.VImg; __VLS_components.vImg; __VLS_components.vImg; __VLS_components["v-img"]; __VLS_components["v-img"];
// @ts-ignore
[VImg, VImg,];
__VLS_components.VAppBarNavIcon; __VLS_components.VAppBarNavIcon; __VLS_components.vAppBarNavIcon; __VLS_components.vAppBarNavIcon; __VLS_components["v-app-bar-nav-icon"]; __VLS_components["v-app-bar-nav-icon"];
// @ts-ignore
[VAppBarNavIcon, VAppBarNavIcon,];
__VLS_components.VToolbarTitle; __VLS_components.VToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components.vToolbarTitle; __VLS_components["v-toolbar-title"]; __VLS_components["v-toolbar-title"];
// @ts-ignore
[VToolbarTitle, VToolbarTitle,];
__VLS_components.VMain; __VLS_components.VMain; __VLS_components.vMain; __VLS_components.vMain; __VLS_components["v-main"]; __VLS_components["v-main"];
// @ts-ignore
[VMain, VMain,];
{
let __VLS_0!: 'VApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VApp : 'vApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vApp : 'v-app' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-app'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VApp'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, id: ("inspire"), }));
({} as { VApp: typeof __VLS_0; }).VApp;
({} as { VApp: typeof __VLS_0; }).VApp;
const __VLS_2 = __VLS_1({ ...{}, id: ("inspire"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
let __VLS_4!: 'VNavigationDrawer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VNavigationDrawer : 'vNavigationDrawer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vNavigationDrawer : 'v-navigation-drawer' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-navigation-drawer'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VNavigationDrawer'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({ ...{}, modelValue: ((__VLS_ctx.drawer)), }));
({} as { VNavigationDrawer: typeof __VLS_4; }).VNavigationDrawer;
({} as { VNavigationDrawer: typeof __VLS_4; }).VNavigationDrawer;
const __VLS_6 = __VLS_5({ ...{}, modelValue: ((__VLS_ctx.drawer)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
}
{
let __VLS_8!: 'VAppBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VAppBar : 'vAppBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vAppBar : 'v-app-bar' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-app-bar'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VAppBar'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{}, elevation: ("0"), style: ({}), }));
({} as { VAppBar: typeof __VLS_8; }).VAppBar;
({} as { VAppBar: typeof __VLS_8; }).VAppBar;
const __VLS_10 = __VLS_9({ ...{}, elevation: ("0"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
let __VLS_12!: 'VContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VContainer : 'vContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vContainer : 'v-container' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-container'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VContainer'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{}, gridListXl: (true), class: ("justify-space-between align-center d-flex"), }));
({} as { VContainer: typeof __VLS_12; }).VContainer;
({} as { VContainer: typeof __VLS_12; }).VContainer;
const __VLS_14 = __VLS_13({ ...{}, gridListXl: (true), class: ("justify-space-between align-center d-flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
let __VLS_16!: 'VImg' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VImg : 'vImg' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vImg : 'v-img' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-img'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VImg'];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, class: ("mx-2"), src: ("https://drive.google.com/file/d/1uBK4DStCT14Dv3rq7SxjhdnPUEA0gr7a/view?usp=sharing"), maxHeight: ("40"), maxWidth: ("40"), contain: (true), }));
({} as { VImg: typeof __VLS_16; }).VImg;
({} as { VImg: typeof __VLS_16; }).VImg;
const __VLS_18 = __VLS_17({ ...{}, class: ("mx-2"), src: ("https://drive.google.com/file/d/1uBK4DStCT14Dv3rq7SxjhdnPUEA0gr7a/view?usp=sharing"), maxHeight: ("40"), maxWidth: ("40"), contain: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
}
{
let __VLS_20!: 'VAppBarNavIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VAppBarNavIcon : 'vAppBarNavIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vAppBarNavIcon : 'v-app-bar-nav-icon' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-app-bar-nav-icon'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VAppBarNavIcon'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ onClick: {} as any, }, }));
({} as { VAppBarNavIcon: typeof __VLS_20; }).VAppBarNavIcon;
({} as { VAppBarNavIcon: typeof __VLS_20; }).VAppBarNavIcon;
const __VLS_22 = __VLS_21({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24 = { 'click': __VLS_pickEvent(__VLS_23.emit!, 'click' as const, __VLS_componentProps(__VLS_21, __VLS_22).onClick) };
__VLS_24 = {
click: $event => {
__VLS_ctx.drawer = !__VLS_ctx.drawer;
}
};
}
{
let __VLS_25!: 'VToolbarTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VToolbarTitle : 'vToolbarTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vToolbarTitle : 'v-toolbar-title' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-toolbar-title'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VToolbarTitle'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, }));
({} as { VToolbarTitle: typeof __VLS_25; }).VToolbarTitle;
({} as { VToolbarTitle: typeof __VLS_25; }).VToolbarTitle;
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
}
}
{
let __VLS_29!: 'VMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VMain : 'vMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vMain : 'v-main' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-main'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VMain'];
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ ...{}, }));
({} as { VMain: typeof __VLS_29; }).VMain;
({} as { VMain: typeof __VLS_29; }).VMain;
const __VLS_31 = __VLS_30({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[drawer, drawer, drawer, drawer,];
return __VLS_slots;
}
