"use strict";
(self["webpackChunkabap2ui5_web"] = self["webpackChunkabap2ui5_web"] || []).push([["output_cl_abap_conv_codepage_clas_locals_mjs"],{

/***/ "./output/cl_abap_conv_codepage.clas.locals.mjs":
/*!******************************************************!*\
  !*** ./output/cl_abap_conv_codepage.clas.locals.mjs ***!
  \******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lcl_in: () => (/* binding */ lcl_in),
/* harmony export */   lcl_out: () => (/* binding */ lcl_out)
/* harmony export */ });
const {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ "./output/cx_root.clas.mjs"));
// cl_abap_conv_codepage.clas.locals_imp.abap
class lcl_in {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_CONV_CODEPAGE-LCL_IN';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_CONV_IN"];
  static ATTRIBUTES = {};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_abap_conv_in$convert(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let source = INPUT?.source;
    if (source?.getQualifiedName === undefined || source.getQualifiedName() !== "XSTRING") { source = undefined; }
    if (source === undefined) { source = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.source); }
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_IN_CE", RTTIName: "\\CLASS=CL_ABAP_CONV_IN_CE"});
    conv.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character(5).set('UTF-8')})));
    await conv.get().convert({input: source, data: result});
    return result;
  }
}
abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_IN'] = lcl_in;
class lcl_out {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-CL_ABAP_CONV_CODEPAGE-LCL_OUT';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_CONV_OUT"];
  static ATTRIBUTES = {};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_abap_conv_out$convert(INPUT) {
    let result = new abap.types.XString({qualifiedName: "XSTRING"});
    let source = INPUT?.source;
    if (source?.getQualifiedName === undefined || source.getQualifiedName() !== "STRING") { source = undefined; }
    if (source === undefined) { source = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.source); }
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE", RTTIName: "\\CLASS=CL_ABAP_CONV_OUT_CE"});
    conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character(5).set('UTF-8')})));
    await conv.get().convert({data: source, buffer: result});
    return result;
  }
}
abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_OUT'] = lcl_out;

//# sourceMappingURL=cl_abap_conv_codepage.clas.locals.mjs.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);
//# sourceMappingURL=output_cl_abap_conv_codepage_clas_locals_mjs.bundle.js.map