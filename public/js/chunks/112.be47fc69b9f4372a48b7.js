(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/layouts/components/Logo.vue */ "./resources/js/src/@core/layouts/components/Logo.vue");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _invoiceStoreModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../invoiceStoreModule */ "./resources/js/src/views/apps/invoice/invoiceStoreModule.js");
/* harmony import */ var _InvoiceSidebarSendInvoice_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InvoiceSidebarSendInvoice.vue */ "./resources/js/src/views/apps/invoice/InvoiceSidebarSendInvoice.vue");
/* harmony import */ var _InvoiceSidebarAddPayment_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InvoiceSidebarAddPayment.vue */ "./resources/js/src/views/apps/invoice/InvoiceSidebarAddPayment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__["default"],
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["VBToggle"]
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardBody"],
    BTableLite: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTableLite"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BLink"],
    Logo: _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    InvoiceSidebarAddPayment: _InvoiceSidebarAddPayment_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    InvoiceSidebarSendInvoice: _InvoiceSidebarSendInvoice_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  setup: function setup() {
    var invoiceData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    var paymentDetails = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({}); // Invoice Description
    // ? Your real data will contain this information

    var invoiceDescription = [{
      taskTitle: 'Native App Development',
      taskDescription: 'Developed a full stack native app using React Native, Bootstrap & Python',
      rate: '$60.00',
      hours: '30',
      total: '$1,800.00'
    }, {
      taskTitle: 'UI Kit Design',
      taskDescription: 'Designed a UI kit for native app using Sketch, Figma & Adobe XD',
      rate: '$60.00',
      hours: '20',
      total: '$1200.00'
    }];
    var INVOICE = 'app-invoice'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasModule(INVOICE)) _store__WEBPACK_IMPORTED_MODULE_1__["default"].registerModule(INVOICE, _invoiceStoreModule__WEBPACK_IMPORTED_MODULE_6__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasModule(INVOICE)) _store__WEBPACK_IMPORTED_MODULE_1__["default"].unregisterModule(INVOICE);
    });

    function goBack() {
      history.goBack();
    }

    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('app-invoice/fetchInvoice', {
      id: _router__WEBPACK_IMPORTED_MODULE_2__["default"].currentRoute.params.id
    }).then(function (response) {
      invoiceData.value = response.data.invoice;
      paymentDetails.value = response.data.paymentDetails;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        invoiceData.value = undefined;
      }
    });

    var printInvoice = function printInvoice() {
      window.print();
    };

    return {
      invoiceData: invoiceData,
      paymentDetails: paymentDetails,
      invoiceDescription: invoiceDescription,
      printInvoice: printInvoice,
      goBack: goBack
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir=ltr] .invoice-preview .invoice-padding[data-v-12670cf2], [dir=ltr] .invoice-edit .invoice-padding[data-v-12670cf2], [dir=ltr] .invoice-add .invoice-padding[data-v-12670cf2] {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}[dir=rtl] .invoice-preview .invoice-padding[data-v-12670cf2], [dir=rtl] .invoice-edit .invoice-padding[data-v-12670cf2], [dir=rtl] .invoice-add .invoice-padding[data-v-12670cf2] {\n  padding-right: 2.5rem;\n  padding-left: 2.5rem;\n}\n[dir=ltr] .invoice-preview .table th[data-v-12670cf2]:first-child, [dir=ltr] .invoice-preview .table td[data-v-12670cf2]:first-child, [dir=ltr] .invoice-edit .table th[data-v-12670cf2]:first-child, [dir=ltr] .invoice-edit .table td[data-v-12670cf2]:first-child, [dir=ltr] .invoice-add .table th[data-v-12670cf2]:first-child, [dir=ltr] .invoice-add .table td[data-v-12670cf2]:first-child {\n  padding-left: 2.5rem;\n}\n[dir=rtl] .invoice-preview .table th[data-v-12670cf2]:first-child, [dir=rtl] .invoice-preview .table td[data-v-12670cf2]:first-child, [dir=rtl] .invoice-edit .table th[data-v-12670cf2]:first-child, [dir=rtl] .invoice-edit .table td[data-v-12670cf2]:first-child, [dir=rtl] .invoice-add .table th[data-v-12670cf2]:first-child, [dir=rtl] .invoice-add .table td[data-v-12670cf2]:first-child {\n  padding-right: 2.5rem;\n}\n.invoice-preview .logo-wrapper[data-v-12670cf2],\n.invoice-edit .logo-wrapper[data-v-12670cf2],\n.invoice-add .logo-wrapper[data-v-12670cf2] {\n  display: flex;\n  align-items: center;\n}\n[dir] .invoice-preview .logo-wrapper[data-v-12670cf2], [dir] .invoice-edit .logo-wrapper[data-v-12670cf2], [dir] .invoice-add .logo-wrapper[data-v-12670cf2] {\n  margin-bottom: 1.9rem;\n}\n.invoice-preview .logo-wrapper .invoice-logo[data-v-12670cf2],\n.invoice-edit .logo-wrapper .invoice-logo[data-v-12670cf2],\n.invoice-add .logo-wrapper .invoice-logo[data-v-12670cf2] {\n  font-size: 2.142rem;\n  font-weight: bold;\n  letter-spacing: -0.54px;\n}\n[dir] .invoice-preview .logo-wrapper .invoice-logo[data-v-12670cf2], [dir] .invoice-edit .logo-wrapper .invoice-logo[data-v-12670cf2], [dir] .invoice-add .logo-wrapper .invoice-logo[data-v-12670cf2] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-preview .logo-wrapper .invoice-logo[data-v-12670cf2], [dir=ltr] .invoice-edit .logo-wrapper .invoice-logo[data-v-12670cf2], [dir=ltr] .invoice-add .logo-wrapper .invoice-logo[data-v-12670cf2] {\n  margin-left: 1rem;\n}\n[dir=rtl] .invoice-preview .logo-wrapper .invoice-logo[data-v-12670cf2], [dir=rtl] .invoice-edit .logo-wrapper .invoice-logo[data-v-12670cf2], [dir=rtl] .invoice-add .logo-wrapper .invoice-logo[data-v-12670cf2] {\n  margin-right: 1rem;\n}\n.invoice-preview .invoice-title[data-v-12670cf2],\n.invoice-edit .invoice-title[data-v-12670cf2],\n.invoice-add .invoice-title[data-v-12670cf2] {\n  font-size: 1.285rem;\n}\n[dir] .invoice-preview .invoice-title[data-v-12670cf2], [dir] .invoice-edit .invoice-title[data-v-12670cf2], [dir] .invoice-add .invoice-title[data-v-12670cf2] {\n  margin-bottom: 1rem;\n}\n.invoice-preview .invoice-title .invoice-number[data-v-12670cf2],\n.invoice-edit .invoice-title .invoice-number[data-v-12670cf2],\n.invoice-add .invoice-title .invoice-number[data-v-12670cf2] {\n  font-weight: 600;\n}\n.invoice-preview .invoice-date-wrapper[data-v-12670cf2],\n.invoice-edit .invoice-date-wrapper[data-v-12670cf2],\n.invoice-add .invoice-date-wrapper[data-v-12670cf2] {\n  display: flex;\n  align-items: center;\n}\n[dir] .invoice-preview .invoice-date-wrapper[data-v-12670cf2]:not(:last-of-type), [dir] .invoice-edit .invoice-date-wrapper[data-v-12670cf2]:not(:last-of-type), [dir] .invoice-add .invoice-date-wrapper[data-v-12670cf2]:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\n.invoice-preview .invoice-date-wrapper .invoice-date-title[data-v-12670cf2],\n.invoice-edit .invoice-date-wrapper .invoice-date-title[data-v-12670cf2],\n.invoice-add .invoice-date-wrapper .invoice-date-title[data-v-12670cf2] {\n  width: 7rem;\n}\n[dir] .invoice-preview .invoice-date-wrapper .invoice-date-title[data-v-12670cf2], [dir] .invoice-edit .invoice-date-wrapper .invoice-date-title[data-v-12670cf2], [dir] .invoice-add .invoice-date-wrapper .invoice-date-title[data-v-12670cf2] {\n  margin-bottom: 0;\n}\n.invoice-preview .invoice-date-wrapper .invoice-date[data-v-12670cf2],\n.invoice-edit .invoice-date-wrapper .invoice-date[data-v-12670cf2],\n.invoice-add .invoice-date-wrapper .invoice-date[data-v-12670cf2] {\n  font-weight: 600;\n}\n[dir] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-12670cf2], [dir] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-12670cf2], [dir] .invoice-add .invoice-date-wrapper .invoice-date[data-v-12670cf2] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-12670cf2], [dir=ltr] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-12670cf2], [dir=ltr] .invoice-add .invoice-date-wrapper .invoice-date[data-v-12670cf2] {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-12670cf2], [dir=rtl] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-12670cf2], [dir=rtl] .invoice-add .invoice-date-wrapper .invoice-date[data-v-12670cf2] {\n  margin-right: 0.5rem;\n}\n[dir] .invoice-preview .invoice-spacing[data-v-12670cf2], [dir] .invoice-edit .invoice-spacing[data-v-12670cf2], [dir] .invoice-add .invoice-spacing[data-v-12670cf2] {\n  margin: 1.45rem 0;\n}\n.invoice-preview .invoice-number-date .title[data-v-12670cf2],\n.invoice-edit .invoice-number-date .title[data-v-12670cf2],\n.invoice-add .invoice-number-date .title[data-v-12670cf2] {\n  width: 115px;\n}\n.invoice-preview .invoice-total-wrapper[data-v-12670cf2],\n.invoice-edit .invoice-total-wrapper[data-v-12670cf2],\n.invoice-add .invoice-total-wrapper[data-v-12670cf2] {\n  width: 100%;\n  max-width: 12rem;\n}\n.invoice-preview .invoice-total-wrapper .invoice-total-item[data-v-12670cf2],\n.invoice-edit .invoice-total-wrapper .invoice-total-item[data-v-12670cf2],\n.invoice-add .invoice-total-wrapper .invoice-total-item[data-v-12670cf2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir] .invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-12670cf2], [dir] .invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-12670cf2], [dir] .invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-12670cf2] {\n  margin-bottom: 0.35rem;\n}\n.invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-12670cf2],\n.invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-12670cf2],\n.invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-12670cf2] {\n  font-weight: 600;\n}\n[dir] .invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-12670cf2], [dir] .invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-12670cf2], [dir] .invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-12670cf2] {\n  margin-bottom: 0.35rem;\n}\n@media (min-width: 768px) {\n[dir] .invoice-preview .invoice-title[data-v-12670cf2], [dir] .invoice-edit .invoice-title[data-v-12670cf2], [dir] .invoice-add .invoice-title[data-v-12670cf2] {\n    margin-bottom: 3rem;\n}\n[dir=ltr] .invoice-preview .invoice-title[data-v-12670cf2], [dir=ltr] .invoice-edit .invoice-title[data-v-12670cf2], [dir=ltr] .invoice-add .invoice-title[data-v-12670cf2] {\n    text-align: right;\n}\n[dir=rtl] .invoice-preview .invoice-title[data-v-12670cf2], [dir=rtl] .invoice-edit .invoice-title[data-v-12670cf2], [dir=rtl] .invoice-add .invoice-title[data-v-12670cf2] {\n    text-align: left;\n}\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-title[data-v-12670cf2], [dir] .invoice-add .invoice-preview-card .invoice-title[data-v-12670cf2] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-edit .invoice-preview-card .invoice-title[data-v-12670cf2], [dir=ltr] .invoice-add .invoice-preview-card .invoice-title[data-v-12670cf2] {\n  text-align: left;\n  margin-right: 3.5rem;\n}\n[dir=rtl] .invoice-edit .invoice-preview-card .invoice-title[data-v-12670cf2], [dir=rtl] .invoice-add .invoice-preview-card .invoice-title[data-v-12670cf2] {\n  text-align: right;\n  margin-left: 3.5rem;\n}\n.invoice-edit .invoice-preview-card .invoice-edit-input[data-v-12670cf2],\n.invoice-edit .invoice-preview-card .invoice-edit-input-group[data-v-12670cf2],\n.invoice-add .invoice-preview-card .invoice-edit-input[data-v-12670cf2],\n.invoice-add .invoice-preview-card .invoice-edit-input-group[data-v-12670cf2] {\n  max-width: 11.21rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-product-details[data-v-12670cf2], [dir] .invoice-add .invoice-preview-card .invoice-product-details[data-v-12670cf2] {\n  background-color: #fcfcfc;\n  padding: 3.75rem 3.45rem 2.3rem 3.45rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-product-details .product-details-border[data-v-12670cf2], [dir] .invoice-add .invoice-preview-card .invoice-product-details .product-details-border[data-v-12670cf2] {\n  border: 1px solid #ebe9f1;\n  border-radius: 0.357rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-to-title[data-v-12670cf2], [dir] .invoice-add .invoice-preview-card .invoice-to-title[data-v-12670cf2] {\n  margin-bottom: 1.9rem;\n}\n.invoice-edit .invoice-preview-card .col-title[data-v-12670cf2],\n.invoice-add .invoice-preview-card .col-title[data-v-12670cf2] {\n  position: absolute;\n  top: -3.2rem;\n}\n.invoice-edit .invoice-preview-card .item-options-menu[data-v-12670cf2],\n.invoice-add .invoice-preview-card .item-options-menu[data-v-12670cf2] {\n  min-width: 20rem;\n}\n[dir] .invoice-edit .invoice-preview-card .repeater-wrapper[data-v-12670cf2]:not(:last-child), [dir] .invoice-add .invoice-preview-card .repeater-wrapper[data-v-12670cf2]:not(:last-child) {\n  margin-bottom: 3rem;\n}\n.invoice-edit .invoice-preview-card .invoice-calculations .total-amt-title[data-v-12670cf2],\n.invoice-add .invoice-preview-card .invoice-calculations .total-amt-title[data-v-12670cf2] {\n  width: 100px;\n}\n@media (max-width: 769px) {\n.invoice-edit .invoice-preview-card .invoice-title[data-v-12670cf2],\n.invoice-add .invoice-preview-card .invoice-title[data-v-12670cf2] {\n    width: 115px;\n}\n[dir=ltr] .invoice-edit .invoice-preview-card .invoice-title[data-v-12670cf2], [dir=ltr] .invoice-add .invoice-preview-card .invoice-title[data-v-12670cf2] {\n    margin-right: 0;\n}\n[dir=rtl] .invoice-edit .invoice-preview-card .invoice-title[data-v-12670cf2], [dir=rtl] .invoice-add .invoice-preview-card .invoice-title[data-v-12670cf2] {\n    margin-left: 0;\n}\n.invoice-edit .invoice-preview-card .invoice-edit-input[data-v-12670cf2],\n.invoice-add .invoice-preview-card .invoice-edit-input[data-v-12670cf2] {\n    max-width: 100%;\n}\n}\n@media (max-width: 992px) {\n.invoice-edit .col-title[data-v-12670cf2],\n.invoice-add .col-title[data-v-12670cf2] {\n    top: -1.5rem !important;\n}\n}\n@media print {\n[dir] .invoice-edit hr[data-v-12670cf2], [dir] .invoice-add hr[data-v-12670cf2] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media print {\n[dir] body {\n    background-color: transparent !important;\n}\nnav.header-navbar {\n    display: none;\n}\n.main-menu {\n    display: none;\n}\n.header-navbar-shadow {\n    display: none !important;\n}\n[dir] .content.app-content {\n    padding-top: 2rem !important;\n}\n[dir=ltr] .content.app-content {\n    margin-left: 0;\n}\n[dir=rtl] .content.app-content {\n    margin-right: 0;\n}\nfooter.footer {\n    display: none;\n}\n[dir] .card {\n    background-color: transparent;\n    box-shadow: none;\n}\n.customizer-toggle {\n    display: none !important;\n}\n.invoice-preview-wrapper .row.invoice-preview .col-md-8 {\n    max-width: 100%;\n    flex-grow: 1;\n}\n.invoice-preview-wrapper .row.invoice-preview .invoice-preview-card .card-body:nth-of-type(2) .row > .col-12 {\n    max-width: 50% !important;\n}\n.invoice-preview-wrapper .row.invoice-preview .invoice-preview-card .card-body:nth-of-type(2) .row .col-12:nth-child(2) {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n}\n[dir] .invoice-preview-wrapper .row.invoice-preview .invoice-preview-card .card-body:nth-of-type(2) .row .col-12:nth-child(2) {\n    margin-top: 0 !important;\n}\n.invoice-preview-wrapper .invoice-actions {\n    display: none;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePreview.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        viewBox: "0 0 139 95",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        height: "24",
      },
    },
    [
      _c(
        "defs",
        [
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-1",
                x1: "100%",
                y1: "10.5120544%",
                x2: "50%",
                y2: "89.4879456%",
              },
            },
            [
              _c("stop", { attrs: { "stop-color": "#000000", offset: "0%" } }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-2",
                x1: "64.0437835%",
                y1: "46.3276743%",
                x2: "37.373316%",
                y2: "100%",
              },
            },
            [
              _c("stop", {
                attrs: {
                  "stop-color": "#EEEEEE",
                  "stop-opacity": "0",
                  offset: "0%",
                },
              }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "g",
        {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
          },
        },
        [
          _c(
            "g",
            {
              attrs: {
                id: "Artboard",
                transform: "translate(-400.000000, -178.000000)",
              },
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "Group",
                    transform: "translate(400.000000, 178.000000)",
                  },
                },
                [
                  _c("path", {
                    staticClass: "text-primary",
                    staticStyle: { fill: "currentColor" },
                    attrs: {
                      id: "Path",
                      d: "M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",
                    },
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Path1",
                      d: "M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",
                      fill: "url(#linearGradient-1)",
                      opacity: "0.2",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-2",
                      fill: "#000000",
                      opacity: "0.049999997",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-21",
                      fill: "#000000",
                      opacity: "0.099999994",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-3",
                      fill: "url(#linearGradient-2)",
                      opacity: "0.099999994",
                      points:
                        "101.428699 0 83.0667527 94.1480575 130.378721 47.0740288",
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "invoice-preview-wrapper" },
    [
      _c(
        "b-alert",
        { attrs: { variant: "danger", show: _vm.invoiceData === undefined } },
        [
          _c("h4", { staticClass: "alert-heading" }, [
            _vm._v("\n        Error fetching invoice data\n      "),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "alert-body" },
            [
              _vm._v(
                "\n        No invoice found with this invoice id. Check\n        "
              ),
              _c(
                "b-link",
                {
                  staticClass: "alert-link",
                  attrs: { to: { name: "apps-invoice-list" } },
                },
                [_vm._v("\n          Invoice List\n        ")]
              ),
              _vm._v("\n        for other invoices.\n      "),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.invoiceData
        ? _c(
            "b-row",
            { staticClass: "invoice-preview" },
            [
              _c(
                "b-col",
                { attrs: { cols: "12", xl: "9", md: "8" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "invoice-preview-card",
                      attrs: { "no-body": "" },
                    },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "invoice-padding pb-0" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c("div", { staticClass: "logo-wrapper" }, [
                                    _c("img", {
                                      attrs: {
                                        src: __webpack_require__(/*! @/assets/images/logo/logo.png */ "./resources/js/src/assets/images/logo/logo.png"),
                                        alt: "Logo",
                                        width: "150",
                                        height: "45",
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", { staticClass: "mb-25" }, [
                                    _vm._v(
                                      "\n                        71-75 Shelton Street\n                    "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", { staticClass: "mb-25" }, [
                                    _vm._v(
                                      "\n                        London, WC2H 9QJ, United Kingdom\n                    "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", { staticClass: "mb-0" }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mt-md-0 mt-2" }, [
                                _c("h4", { staticClass: "invoice-title" }, [
                                  _vm._v(
                                    "\n                  Invoice\n                  "
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "invoice-number" },
                                    [_vm._v("#" + _vm._s(_vm.invoiceData.id))]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "invoice-date-wrapper" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "invoice-date-title" },
                                      [
                                        _vm._v(
                                          "\n                          Date Issued:\n                      "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "invoice-date" }, [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(_vm.invoiceData.invoice_date) +
                                          "\n                      "
                                      ),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "invoice-date-wrapper" },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "invoice-date-title" },
                                      [
                                        _vm._v(
                                          "\n                    Due Date:\n                  "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "invoice-date" }, [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(_vm.invoiceData.due_date) +
                                          "\n                  "
                                      ),
                                    ]),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr", { staticClass: "invoice-spacing" }),
                      _vm._v(" "),
                      _vm.invoiceData.client
                        ? _c(
                            "b-card-body",
                            { staticClass: "invoice-padding pt-0" },
                            [
                              _c(
                                "b-row",
                                { staticClass: "invoice-spacing" },
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "p-0",
                                      attrs: { cols: "12", xl: "6" },
                                    },
                                    [
                                      _c("h6", { staticClass: "mb-2" }, [
                                        _vm._v(
                                          "\n                  Invoice To:\n                "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("h6", { staticClass: "mb-25" }, [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              _vm.invoiceData.company.name
                                            ) +
                                            "\n                "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "card-text mb-25" },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                _vm.invoiceData.company.webiste
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "card-text mb-25" },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                _vm.invoiceData.company.address1
                                              ) +
                                              ", " +
                                              _vm._s(
                                                _vm.invoiceData.company.city
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "card-text mb-25" },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                _vm.invoiceData.company.state
                                              ) +
                                              ", " +
                                              _vm._s(
                                                _vm.invoiceData.company.country
                                              ) +
                                              "\n                      , " +
                                              _vm._s(
                                                _vm.invoiceData.company.postcode
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "card-text mb-0" },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                _vm.invoiceData.company.email
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass:
                                        "p-0 mt-xl-0 mt-2 d-flex justify-content-xl-end",
                                      attrs: { xl: "6", cols: "12" },
                                    },
                                    [
                                      _c("div", [
                                        _c("h6", { staticClass: "mb-2" }, [
                                          _vm._v(
                                            "\n                    Payment Details:\n                  "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("table", [
                                          _c("tbody", [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "pr-1" },
                                                [
                                                  _vm._v(
                                                    "\n                          Total Due:\n                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.invoiceData
                                                          .sub_total
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "pr-1" },
                                                [
                                                  _vm._v(
                                                    "\n                          Bank name:\n                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.invoiceData.payment
                                                      .bank_name
                                                  )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "pr-1" },
                                                [
                                                  _vm._v(
                                                    "\n                          Country:\n                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.invoiceData.payment
                                                      .bank_country
                                                  )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "pr-1" },
                                                [
                                                  _vm._v(
                                                    "\n                          IBAN:\n                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.invoiceData.payment
                                                      .bank_iban
                                                  )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "pr-1" },
                                                [
                                                  _vm._v(
                                                    "\n                          SWIFT code:\n                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.invoiceData.payment
                                                      .bank_swift
                                                  )
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("b-table-lite", {
                        attrs: {
                          responsive: "",
                          items: _vm.invoiceData.products,
                          fields: ["descriptiom", "Qty", "total"],
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "cell(descriptiom)",
                              fn: function (data) {
                                return [
                                  _c(
                                    "b-card-text",
                                    { staticClass: "font-weight-bold mb-25" },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(data.item.name) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(Qty)",
                              fn: function (data) {
                                return [
                                  _c(
                                    "b-card-text",
                                    { staticClass: "font-weight-bold mb-25" },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(data.item.qty) +
                                          "\n                  "
                                      ),
                                    ]
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(total)",
                              fn: function (data) {
                                return [
                                  _c(
                                    "b-card-text",
                                    { staticClass: "font-weight-bold mb-25" },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(data.item.price) +
                                          "\n                  "
                                      ),
                                    ]
                                  ),
                                ]
                              },
                            },
                          ],
                          null,
                          false,
                          1368307722
                        ),
                      }),
                      _vm._v(" "),
                      _c(
                        "b-card-body",
                        { staticClass: "invoice-padding pb-0" },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", {
                                staticClass: "mt-md-0 mt-3",
                                attrs: {
                                  cols: "12",
                                  md: "6",
                                  order: "2",
                                  "order-md": "1",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                {
                                  staticClass:
                                    "mt-md-6 d-flex justify-content-end",
                                  attrs: {
                                    cols: "12",
                                    md: "6",
                                    order: "1",
                                    "order-md": "2",
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "invoice-total-wrapper" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "invoice-total-item" },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-title",
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Subtotal:\n                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-amount",
                                            },
                                            [
                                              _vm.invoiceData.currency == 1
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                      £ " +
                                                        _vm._s(
                                                          _vm.invoiceData
                                                            .sub_total
                                                        ) +
                                                        "\n                        "
                                                    ),
                                                  ])
                                                : _c("span", [
                                                    _vm._v(
                                                      "\n                      $ " +
                                                        _vm._s(
                                                          _vm.invoiceData
                                                            .sub_total
                                                        ) +
                                                        "\n                        "
                                                    ),
                                                  ]),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "invoice-total-item" },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-title",
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Discount:\n                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-amount",
                                            },
                                            [
                                              _vm._v(
                                                "\n                      0\n                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "invoice-total-item" },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-title",
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Tax:\n                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-amount",
                                            },
                                            [
                                              _vm._v(
                                                "\n                      21%\n                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("hr", { staticClass: "my-50" }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "invoice-total-item" },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-title",
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Total:\n                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "invoice-total-amount",
                                            },
                                            [
                                              _vm.invoiceData.currency == 1
                                                ? _c("span", [
                                                    _vm._v(
                                                      "\n                      £ " +
                                                        _vm._s(
                                                          _vm.invoiceData
                                                            .balance
                                                        ) +
                                                        "\n                        "
                                                    ),
                                                  ])
                                                : _c("span", [
                                                    _vm._v(
                                                      "\n                      $ " +
                                                        _vm._s(
                                                          _vm.invoiceData
                                                            .balance
                                                        ) +
                                                        "\n                        "
                                                    ),
                                                  ]),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr", { staticClass: "invoice-spacing" }),
                      _vm._v(" "),
                      _c(
                        "b-card-body",
                        { staticClass: "invoice-padding pt-0" },
                        [
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _vm._v("Note: "),
                          ]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "It was a pleasure working with you and your team. All the best!!"
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "invoice-actions",
                  attrs: { cols: "12", md: "4", xl: "3" },
                },
                [
                  _c(
                    "b-card",
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "ripple",
                              rawName: "v-ripple.400",
                              value: "rgba(255, 255, 255, 0.15)",
                              expression: "'rgba(255, 255, 255, 0.15)'",
                              modifiers: { 400: true },
                            },
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.sidebar-send-invoice",
                              modifiers: { "sidebar-send-invoice": true },
                            },
                          ],
                          staticClass: "mb-75",
                          attrs: { variant: "primary", block: "" },
                        },
                        [_vm._v("\n            Send Invoice\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "ripple",
                              rawName: "v-ripple.400",
                              value: "rgba(186, 191, 199, 0.15)",
                              expression: "'rgba(186, 191, 199, 0.15)'",
                              modifiers: { 400: true },
                            },
                          ],
                          staticClass: "mb-75",
                          attrs: { variant: "outline-secondary", block: "" },
                          on: { click: _vm.printInvoice },
                        },
                        [_vm._v("\n            Print\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "ripple",
                              rawName: "v-ripple.400",
                              value: "rgba(186, 191, 199, 0.15)",
                              expression: "'rgba(186, 191, 199, 0.15)'",
                              modifiers: { 400: true },
                            },
                          ],
                          staticClass: "mb-75",
                          attrs: { variant: "outline-primary", block: "" },
                          on: { click: _vm.goBack },
                        },
                        [_vm._v("\n            Back\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("invoice-sidebar-send-invoice"),
      _vm._v(" "),
      _c("invoice-sidebar-add-payment"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=46f77075& */ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=46f77075& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoicePreview_vue_vue_type_template_id_12670cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true& */ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true&");
/* harmony import */ var _InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoicePreview.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvoicePreview_vue_vue_type_style_index_0_id_12670cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true& */ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true&");
/* harmony import */ var _InvoicePreview_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InvoicePreview.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoicePreview_vue_vue_type_template_id_12670cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoicePreview_vue_vue_type_template_id_12670cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12670cf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_0_id_12670cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=0&id=12670cf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_0_id_12670cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_0_id_12670cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_0_id_12670cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_0_id_12670cf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePreview.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_template_id_12670cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/invoice/invoice-preview/InvoicePreview.vue?vue&type=template&id=12670cf2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_template_id_12670cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_template_id_12670cf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);