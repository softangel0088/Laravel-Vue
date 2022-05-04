(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/utils */ "./resources/js/src/@core/utils/utils.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _ECommerceProductDetailsItemFeatures_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ECommerceProductDetailsItemFeatures.vue */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue");
/* harmony import */ var _ECommerceProductDetailsRelatedProducts_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ECommerceProductDetailsRelatedProducts.vue */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue");
/* harmony import */ var _ECommerceTrackingDetailsRelatedProducts_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ECommerceTrackingDetailsRelatedProducts.vue */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue");
/* harmony import */ var _useEcommerce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useEcommerce */ "./resources/js/src/views/apps/e-commerce/useEcommerce.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  components: {
    // BSV
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BDropdownItem"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAlert"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BBadge"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTab"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTabs"],
    // SFC
    ECommerceProductDetailsItemFeatures: _ECommerceProductDetailsItemFeatures_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ECommerceProductDetailsRelatedProducts: _ECommerceProductDetailsRelatedProducts_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ECommerceTrackingDetailsRelatedProducts: _ECommerceTrackingDetailsRelatedProducts_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  setup: function setup() {
    var _useEcommerceUi = Object(_useEcommerce__WEBPACK_IMPORTED_MODULE_8__["useEcommerceUi"])(),
        handleCartActionClick = _useEcommerceUi.handleCartActionClick,
        toggleOfferInWishlist = _useEcommerceUi.toggleOfferInWishlist;

    var offer = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(null);

    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_10__["default"])(),
        skin = _useAppConfig.skin; // Remote Data


    var fetchOffer = function fetchOffer() {
      // Get offer  id from URL
      var _useRouter = Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_0__["useRouter"])(),
          route = _useRouter.route;

      var offerId = route.value.params.id;
      console.log(offerId); // const offerId = offerSlug.substring(offerSlug.lastIndexOf('-') + 1)

      _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('app-ecommerce/fetchOffer', {
        id: offerId
      }).then(function (response) {
        offer.value = response.data.offer;
      })["catch"](function (error) {
        if (error.response.status === 404) {
          offer.value = undefined;
        }
      });
    }; // UI


    var selectedColor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(null);
    fetchOffer();
    return {
      // Fetched Offer
      offer: offer,
      skin: skin,
      // UI
      selectedColor: selectedColor,
      handleCartActionClick: handleCartActionClick,
      toggleOfferInWishlist: toggleOfferInWishlist
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTab"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BProgress: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BProgress"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"] // 3rd Party

  },
  props: {
    offerData: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      fields: [// A virtual column that doesn't exist in items
      'id', // A column that needs custom formatting
      {
        key: 'name',
        label: 'Name'
      }, // A regular column
      {
        key: 'Type',
        label: 'Type'
      }, {
        key: 'status',
        label: 'Status'
      }, {
        key: 'view',
        label: 'View'
      }],
      creativeData: {}
    };
  },
  setup: function setup() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BButtonToolbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButtonToolbar"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButtonGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"] // 3rd Party

  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var trackingLink = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])({
      aff_sub: '',
      aff_sub2: '',
      aff_sub3: '',
      aff_sub4: '',
      aff_sub5: ''
    });
    var swiperOptions = {
      slidesPerView: 5,
      spaceBetween: 55,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1600: {
          slidesPerView: 4,
          spaceBetween: 55
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 55
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 55
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 55
        }
      }
    };
    /* eslint-disable global-require */

    var relatedProducts = [{
      name: 'Apple Watch Series 6',
      brand: 'Apple',
      price: 399.98,
      rating: 4,
      image: __webpack_require__(/*! @/assets/images/elements/apple-watch.png */ "./resources/js/src/assets/images/elements/apple-watch.png")
    }, {
      name: 'Apple MacBook Pro - Silver',
      brand: 'Apple',
      price: 2449.49,
      rating: 2,
      image: __webpack_require__(/*! @/assets/images/elements/macbook-pro.png */ "./resources/js/src/assets/images/elements/macbook-pro.png")
    }, {
      name: 'Apple HomePod (Space Grey)',
      brand: 'Apple',
      price: 229.29,
      rating: 3,
      image: __webpack_require__(/*! @/assets/images/elements/homepod.png */ "./resources/js/src/assets/images/elements/homepod.png")
    }, {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      price: 90.98,
      rating: 5,
      image: __webpack_require__(/*! @/assets/images/elements/magic-mouse.png */ "./resources/js/src/assets/images/elements/magic-mouse.png")
    }, {
      name: 'iPhone 12 Pro',
      brand: 'Apple',
      price: 1559.99,
      rating: 4,
      image: __webpack_require__(/*! @/assets/images/elements/iphone-x.png */ "./resources/js/src/assets/images/elements/iphone-x.png")
    }];
    /* eslint-disable global-require */

    return {
      swiperOptions: swiperOptions,
      relatedProducts: relatedProducts,
      trackingLink: trackingLink
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ecommerce-application .app-ecommerce-details .product-img {\n  width: 600px;\n}\n.ecommerce-application .app-ecommerce-details .ratings-list-item svg,\n.ecommerce-application .app-ecommerce-details .ratings-list-item i {\n  font-size: 1.286rem;\n  height: 1.286rem;\n  width: 1.286rem;\n}\n.ecommerce-application .app-ecommerce-details .filled-star {\n  fill: #ff9f43;\n  stroke: #ff9f43;\n  color: #ff9f43;\n}\n.ecommerce-application .app-ecommerce-details .unfilled-star {\n  stroke: #babfc7;\n  color: #babfc7;\n}\n.ecommerce-application .app-ecommerce-details .item-price {\n  color: #7367f0;\n}\n.ecommerce-application .app-ecommerce-details .item-company {\n  display: inline-flex;\n  font-weight: 400;\n  font-size: 0.875rem;\n}\n.ecommerce-application .app-ecommerce-details .item-company .company-name {\n  font-weight: 600;\n}\n[dir=ltr] .ecommerce-application .app-ecommerce-details .item-company .company-name {\n  margin-left: 0.25rem;\n}\n[dir=rtl] .ecommerce-application .app-ecommerce-details .item-company .company-name {\n  margin-right: 0.25rem;\n}\n[dir] .ecommerce-application .app-ecommerce-details .product-features {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.ecommerce-application .app-ecommerce-details .product-features li {\n  display: flex;\n  align-items: center;\n}\n[dir] .ecommerce-application .app-ecommerce-details .product-features li {\n  margin-bottom: 1rem;\n}\n.ecommerce-application .app-ecommerce-details .product-features li svg,\n.ecommerce-application .app-ecommerce-details .product-features li i {\n  height: 1.4rem;\n  width: 1.4rem;\n  font-size: 1.4rem;\n}\n[dir=ltr] .ecommerce-application .app-ecommerce-details .product-features li svg, [dir=ltr] .ecommerce-application .app-ecommerce-details .product-features li i {\n  margin-right: 0.75rem;\n}\n[dir=rtl] .ecommerce-application .app-ecommerce-details .product-features li svg, [dir=rtl] .ecommerce-application .app-ecommerce-details .product-features li i {\n  margin-left: 0.75rem;\n}\n.ecommerce-application .app-ecommerce-details .product-features li span {\n  font-weight: 600;\n}\n[dir] .ecommerce-application .app-ecommerce-details .product-color-options {\n  margin-top: 1.5rem;\n  margin-bottom: 1.2rem;\n}\n.ecommerce-application .app-ecommerce-details .btn-wishlist .text-danger {\n  color: #ea5455;\n  fill: #ea5455;\n}\n.ecommerce-application .app-ecommerce-details .btn-share .btn-icon ~ .dropdown-menu {\n  min-width: 3rem;\n}\n[dir] .ecommerce-application .app-ecommerce-details .item-features {\n  background-color: #f8f8f8;\n  padding-top: 5.357rem;\n  padding-bottom: 5.357rem;\n}\n.ecommerce-application .app-ecommerce-details .item-features i,\n.ecommerce-application .app-ecommerce-details .item-features svg {\n  font-size: 2.5rem;\n  height: 2.5rem;\n  width: 2.5rem;\n  color: #7367f0;\n}\n[dir] .ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide {\n  text-align: center;\n  background-color: #f8f8f8;\n  padding: 1.5rem 3rem;\n  border-radius: 0.428rem;\n}\n.ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide .img-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 250px;\n}\n.ecommerce-application .swiper-button-prev,\n.ecommerce-application .swiper-button-next,\n.ecommerce-application .swiper-container-rtl .swiper-button-prev,\n.ecommerce-application .swiper-container-rtl .swiper-button-next {\n  width: 35px;\n  font-size: 2rem;\n}\n[dir] .ecommerce-application .swiper-button-prev, [dir] .ecommerce-application .swiper-button-next, [dir] .ecommerce-application .swiper-container-rtl .swiper-button-prev, [dir] .ecommerce-application .swiper-container-rtl .swiper-button-next {\n  background-image: none;\n}\n.ecommerce-application .swiper-button-prev:focus,\n.ecommerce-application .swiper-button-next:focus,\n.ecommerce-application .swiper-container-rtl .swiper-button-prev:focus,\n.ecommerce-application .swiper-container-rtl .swiper-button-next:focus {\n  outline: none;\n}\n[dir=ltr] .ecommerce-application .swiper-button-prev {\n  left: 0;\n}\n[dir=rtl] .ecommerce-application .swiper-button-prev {\n  right: 0;\n}\n.ecommerce-application .swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n[dir=ltr] .ecommerce-application .swiper-button-next {\n  right: 0;\n}\n[dir=rtl] .ecommerce-application .swiper-button-next {\n  left: 0;\n}\n.ecommerce-application .swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.ecommerce-application .swiper-container-rtl .swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-container-rtl .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.ecommerce-application .swiper-container-rtl .swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .ecommerce-application .swiper-container-rtl .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.ecommerce-application .product-color-options .color-option {\n  position: relative;\n}\n[dir] .ecommerce-application .product-color-options .color-option {\n  border: 1px solid transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 3px;\n}\n.ecommerce-application .product-color-options .color-option .filloption {\n  height: 18px;\n  width: 18px;\n}\n[dir] .ecommerce-application .product-color-options .color-option .filloption {\n  border-radius: 50%;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-primary {\n  border-color: #7367f0;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-primary .filloption {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-success {\n  border-color: #28c76f;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-success .filloption {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-danger {\n  border-color: #ea5455;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-danger .filloption {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-warning {\n  border-color: #ff9f43;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-warning .filloption {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .selected .b-info {\n  border-color: #00cfe8;\n}\n[dir] .ecommerce-application .product-color-options .selected .b-info .filloption {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-primary .filloption {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-success .filloption {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-danger .filloption {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-warning .filloption {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4);\n}\n[dir] .ecommerce-application .product-color-options .b-info .filloption {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4);\n}\n@media (max-width: 767.98px) {\n[dir] .ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide {\n    padding: 1rem;\n}\n}\n@media (max-width: 767.98px) {\n.ecommerce-application .app-ecommerce-details .ratings-list-item svg,\n.ecommerce-application .app-ecommerce-details .ratings-list-item i {\n    font-size: 1rem;\n    height: 1rem;\n    width: 1rem;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../../node_modules/css-loader/dist/cjs.js!swiper/css/swiper.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/swiper/css/swiper.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "/*=========================================================================================\n    File Name: ext-component-swiper.scss\n    Description: swiper plugin scss.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n/* Swiper css */\n/* ---------- */\n/* swiper slide shadow */\n[dir=ltr] .swiper-container .swiper-shadow {\n  box-shadow: 2px 8px 10px 0 rgba(25, 42, 70, 0.13) !important;\n}\n[dir=rtl] .swiper-container .swiper-shadow {\n  box-shadow: -2px 8px 10px 0 rgba(25, 42, 70, 0.13) !important;\n}\n.swiper-pagination .swiper-pagination-bullet:focus {\n  outline: none;\n}\n[dir] .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background-color: #7367f0;\n}\n[dir] .swiper-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background-color: #7367f0;\n}\n.swiper-centered-slides.swiper-container .swiper-slide {\n  font-weight: 500;\n  height: auto;\n  width: auto !important;\n}\n[dir] .swiper-centered-slides.swiper-container .swiper-slide {\n  text-align: center;\n  background-color: #fff;\n  padding: 2rem 5.5rem;\n  cursor: pointer;\n}\n[dir] .swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active {\n  border: 2px solid #7367f0;\n}\n.swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active i,\n.swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active svg {\n  color: #7367f0;\n}\n[dir] .swiper-centered-slides .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir] .swiper-centered-slides .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.swiper-centered-slides .swiper-button-next,\n.swiper-centered-slides .swiper-button-prev {\n  height: 40px !important;\n  width: 40px !important;\n}\n.swiper-centered-slides .swiper-button-next:after,\n.swiper-centered-slides .swiper-button-prev:after {\n  height: 40px !important;\n  width: 40px !important;\n}\n[dir] .swiper-centered-slides .swiper-button-next:after, [dir] .swiper-centered-slides .swiper-button-prev:after {\n  border-radius: 50%;\n  background-color: #7367f0;\n  box-shadow: 0 2px 4px 0 rgba(34, 41, 47, 0.5) !important;\n  background-size: 24px !important;\n}\n[dir] .swiper-centered-slides.swiper-container-rtl .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir] .swiper-centered-slides.swiper-container-rtl .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.swiper-centered-slides-2.swiper-container .swiper-slide {\n  font-weight: 500;\n  height: auto;\n  width: auto !important;\n}\n[dir] .swiper-centered-slides-2.swiper-container .swiper-slide {\n  background-color: #f2f4f4;\n  cursor: pointer;\n}\n.swiper-centered-slides-2.swiper-container .swiper-slide.swiper-slide-active {\n  color: #fff;\n}\n[dir] .swiper-centered-slides-2.swiper-container .swiper-slide.swiper-slide-active {\n  background-color: #7367f0 !important;\n  box-shadow: 0 3px 6px 0 rgba(115, 103, 240, 0.5) !important;\n}\n\n/* cube effect */\n.swiper-cube-effect.swiper-container {\n  width: 300px;\n}\n[dir] .swiper-cube-effect.swiper-container {\n  margin-top: -12px;\n}\n[dir=ltr] .swiper-cube-effect.swiper-container {\n  left: 50%;\n  margin-left: -150px;\n}\n[dir=rtl] .swiper-cube-effect.swiper-container {\n  right: 50%;\n  margin-right: -150px;\n}\n\n/* swiper coverflow slide width */\n.swiper-coverflow.swiper-container .swiper-slide {\n  width: 300px;\n}\n[dir] .gallery-thumbs {\n  padding: 10px 0;\n  background: #22292f;\n}\n.gallery-thumbs .swiper-slide {\n  opacity: 0.4;\n}\n.gallery-thumbs .swiper-slide-thumb-active {\n  opacity: 1;\n}\n[dir] .swiper-parallax .swiper-slide {\n  padding: 2.67rem 4rem;\n}\n.swiper-parallax .swiper-slide .title {\n  font-size: 1.07rem;\n}\n[dir] .swiper-parallax .swiper-slide .title {\n  padding: 0.5rem 0;\n}\n.swiper-parallax .swiper-slide .text {\n  font-size: 1rem;\n}\n.swiper-parallax .parallax-bg {\n  position: absolute;\n  width: 130%;\n}\n.swiper-virtual.swiper-container {\n  height: 300px;\n}\n.swiper-virtual.swiper-container .swiper-slide {\n  /* virtual slides  */\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[dir] .swiper-virtual.swiper-container .swiper-slide {\n  background-color: #eee;\n}\n.swiper-button-prev,\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  color: #fff;\n  width: 38px;\n  font-size: 2rem;\n}\n[dir] .swiper-button-prev, [dir] .swiper-button-next, [dir] .swiper-container-rtl .swiper-button-prev, [dir] .swiper-container-rtl .swiper-button-next {\n  background-image: none;\n}\n.swiper-button-prev:focus,\n.swiper-button-next:focus,\n.swiper-container-rtl .swiper-button-prev:focus,\n.swiper-container-rtl .swiper-button-next:focus {\n  outline: none;\n}\n.swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n[dir=ltr] .swiper-button-prev:after {\n  padding-right: 1px;\n}\n[dir=rtl] .swiper-button-prev:after {\n  padding-left: 1px;\n}\n.swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n[dir=ltr] .swiper-button-next:after {\n  padding-right: 2px;\n}\n[dir=rtl] .swiper-button-next:after {\n  padding-left: 2px;\n}\n.swiper-container-rtl .swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-container-rtl .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.swiper-container-rtl .swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-container-rtl .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n@media only screen and (max-width: 768px) {\n.swiper-button-prev {\n    font-size: 1.286rem;\n    top: 55%;\n}\n.swiper-button-prev:after {\n    height: 28px;\n    width: 28px;\n}\n[dir] .swiper-button-prev:after {\n    background-size: 24px;\n}\n.swiper-button-next {\n    font-size: 1.286rem;\n    top: 55%;\n}\n[dir] .swiper-button-next:after {\n    background-size: 24px;\n}\n.swiper-centered-slides .swiper-button-next:after,\n.swiper-centered-slides .swiper-button-prev:after {\n    height: 28px;\n    width: 28px;\n}\n[dir] .swiper-centered-slides .swiper-button-next:after, [dir] .swiper-centered-slides .swiper-button-prev:after {\n    background-size: 18px;\n}\n[dir] .swiper-parallax .swiper-slide {\n    padding: 1rem 1.2rem;\n}\n.swiper-parallax img {\n    height: 100% !important;\n}\n}\n@media only screen and (max-width: 576px) {\n[dir] .swiper-centered-slides.swiper-container .swiper-slide {\n    padding: 1.6rem 2.5rem;\n}\n.swiper-centered-slides.swiper-container .swiper-slide i,\n.swiper-centered-slides.swiper-container .swiper-slide svg {\n    height: 1.07rem !important;\n    width: 1.07rem !important;\n    font-size: 1.07rem !important;\n}\n.swiper-cube-effect.swiper-container {\n    width: 150px;\n}\n[dir=ltr] .swiper-cube-effect.swiper-container {\n    left: 70%;\n}\n[dir=rtl] .swiper-cube-effect.swiper-container {\n    right: 70%;\n}\n[dir] .swiper-parallax .swiper-slide {\n    padding: 1rem 1.3rem;\n}\n.swiper-virtual.swiper-container .swiper-slide {\n    font-size: 1rem;\n}\n}\n[dir] .dark-layout .swiper-container:not(.swiper-parallax) .swiper-slide {\n  background-color: #161d31;\n}\n[dir] .dark-layout .swiper-container.swiper-centered-slides .swiper-slide {\n  background-color: #283046;\n}\n.dark-layout .swiper-container.swiper-parallax .swiper-slide * {\n  color: #6e6b7b;\n}\n.swiper-slide.swiper-slide-active {\n  opacity: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../../node_modules/css-loader/dist/cjs.js!swiper/css/swiper.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/swiper/css/swiper.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "/*=========================================================================================\n    File Name: ext-component-swiper.scss\n    Description: swiper plugin scss.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n/* Swiper css */\n/* ---------- */\n/* swiper slide shadow */\n[dir=ltr] .swiper-container .swiper-shadow {\n  box-shadow: 2px 8px 10px 0 rgba(25, 42, 70, 0.13) !important;\n}\n[dir=rtl] .swiper-container .swiper-shadow {\n  box-shadow: -2px 8px 10px 0 rgba(25, 42, 70, 0.13) !important;\n}\n.swiper-pagination .swiper-pagination-bullet:focus {\n  outline: none;\n}\n[dir] .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background-color: #7367f0;\n}\n[dir] .swiper-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background-color: #7367f0;\n}\n.swiper-centered-slides.swiper-container .swiper-slide {\n  font-weight: 500;\n  height: auto;\n  width: auto !important;\n}\n[dir] .swiper-centered-slides.swiper-container .swiper-slide {\n  text-align: center;\n  background-color: #fff;\n  padding: 2rem 5.5rem;\n  cursor: pointer;\n}\n[dir] .swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active {\n  border: 2px solid #7367f0;\n}\n.swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active i,\n.swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active svg {\n  color: #7367f0;\n}\n[dir] .swiper-centered-slides .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir] .swiper-centered-slides .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.swiper-centered-slides .swiper-button-next,\n.swiper-centered-slides .swiper-button-prev {\n  height: 40px !important;\n  width: 40px !important;\n}\n.swiper-centered-slides .swiper-button-next:after,\n.swiper-centered-slides .swiper-button-prev:after {\n  height: 40px !important;\n  width: 40px !important;\n}\n[dir] .swiper-centered-slides .swiper-button-next:after, [dir] .swiper-centered-slides .swiper-button-prev:after {\n  border-radius: 50%;\n  background-color: #7367f0;\n  box-shadow: 0 2px 4px 0 rgba(34, 41, 47, 0.5) !important;\n  background-size: 24px !important;\n}\n[dir] .swiper-centered-slides.swiper-container-rtl .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir] .swiper-centered-slides.swiper-container-rtl .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.swiper-centered-slides-2.swiper-container .swiper-slide {\n  font-weight: 500;\n  height: auto;\n  width: auto !important;\n}\n[dir] .swiper-centered-slides-2.swiper-container .swiper-slide {\n  background-color: #f2f4f4;\n  cursor: pointer;\n}\n.swiper-centered-slides-2.swiper-container .swiper-slide.swiper-slide-active {\n  color: #fff;\n}\n[dir] .swiper-centered-slides-2.swiper-container .swiper-slide.swiper-slide-active {\n  background-color: #7367f0 !important;\n  box-shadow: 0 3px 6px 0 rgba(115, 103, 240, 0.5) !important;\n}\n\n/* cube effect */\n.swiper-cube-effect.swiper-container {\n  width: 300px;\n}\n[dir] .swiper-cube-effect.swiper-container {\n  margin-top: -12px;\n}\n[dir=ltr] .swiper-cube-effect.swiper-container {\n  left: 50%;\n  margin-left: -150px;\n}\n[dir=rtl] .swiper-cube-effect.swiper-container {\n  right: 50%;\n  margin-right: -150px;\n}\n\n/* swiper coverflow slide width */\n.swiper-coverflow.swiper-container .swiper-slide {\n  width: 300px;\n}\n[dir] .gallery-thumbs {\n  padding: 10px 0;\n  background: #22292f;\n}\n.gallery-thumbs .swiper-slide {\n  opacity: 0.4;\n}\n.gallery-thumbs .swiper-slide-thumb-active {\n  opacity: 1;\n}\n[dir] .swiper-parallax .swiper-slide {\n  padding: 2.67rem 4rem;\n}\n.swiper-parallax .swiper-slide .title {\n  font-size: 1.07rem;\n}\n[dir] .swiper-parallax .swiper-slide .title {\n  padding: 0.5rem 0;\n}\n.swiper-parallax .swiper-slide .text {\n  font-size: 1rem;\n}\n.swiper-parallax .parallax-bg {\n  position: absolute;\n  width: 130%;\n}\n.swiper-virtual.swiper-container {\n  height: 300px;\n}\n.swiper-virtual.swiper-container .swiper-slide {\n  /* virtual slides  */\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[dir] .swiper-virtual.swiper-container .swiper-slide {\n  background-color: #eee;\n}\n.swiper-button-prev,\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  color: #fff;\n  width: 38px;\n  font-size: 2rem;\n}\n[dir] .swiper-button-prev, [dir] .swiper-button-next, [dir] .swiper-container-rtl .swiper-button-prev, [dir] .swiper-container-rtl .swiper-button-next {\n  background-image: none;\n}\n.swiper-button-prev:focus,\n.swiper-button-next:focus,\n.swiper-container-rtl .swiper-button-prev:focus,\n.swiper-container-rtl .swiper-button-next:focus {\n  outline: none;\n}\n.swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n[dir=ltr] .swiper-button-prev:after {\n  padding-right: 1px;\n}\n[dir=rtl] .swiper-button-prev:after {\n  padding-left: 1px;\n}\n.swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n[dir=ltr] .swiper-button-next:after {\n  padding-right: 2px;\n}\n[dir=rtl] .swiper-button-next:after {\n  padding-left: 2px;\n}\n.swiper-container-rtl .swiper-button-prev:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-container-rtl .swiper-button-prev:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n.swiper-container-rtl .swiper-button-next:after {\n  color: #6e6b7b;\n  width: 44px;\n  height: 44px;\n  content: \"\";\n}\n[dir] .swiper-container-rtl .swiper-button-next:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 44px;\n}\n@media only screen and (max-width: 768px) {\n.swiper-button-prev {\n    font-size: 1.286rem;\n    top: 55%;\n}\n.swiper-button-prev:after {\n    height: 28px;\n    width: 28px;\n}\n[dir] .swiper-button-prev:after {\n    background-size: 24px;\n}\n.swiper-button-next {\n    font-size: 1.286rem;\n    top: 55%;\n}\n[dir] .swiper-button-next:after {\n    background-size: 24px;\n}\n.swiper-centered-slides .swiper-button-next:after,\n.swiper-centered-slides .swiper-button-prev:after {\n    height: 28px;\n    width: 28px;\n}\n[dir] .swiper-centered-slides .swiper-button-next:after, [dir] .swiper-centered-slides .swiper-button-prev:after {\n    background-size: 18px;\n}\n[dir] .swiper-parallax .swiper-slide {\n    padding: 1rem 1.2rem;\n}\n.swiper-parallax img {\n    height: 100% !important;\n}\n}\n@media only screen and (max-width: 576px) {\n[dir] .swiper-centered-slides.swiper-container .swiper-slide {\n    padding: 1.6rem 2.5rem;\n}\n.swiper-centered-slides.swiper-container .swiper-slide i,\n.swiper-centered-slides.swiper-container .swiper-slide svg {\n    height: 1.07rem !important;\n    width: 1.07rem !important;\n    font-size: 1.07rem !important;\n}\n.swiper-cube-effect.swiper-container {\n    width: 150px;\n}\n[dir=ltr] .swiper-cube-effect.swiper-container {\n    left: 70%;\n}\n[dir=rtl] .swiper-cube-effect.swiper-container {\n    right: 70%;\n}\n[dir] .swiper-parallax .swiper-slide {\n    padding: 1rem 1.3rem;\n}\n.swiper-virtual.swiper-container .swiper-slide {\n    font-size: 1rem;\n}\n}\n[dir] .dark-layout .swiper-container:not(.swiper-parallax) .swiper-slide {\n  background-color: #161d31;\n}\n[dir] .dark-layout .swiper-container.swiper-centered-slides .swiper-slide {\n  background-color: #283046;\n}\n.dark-layout .swiper-container.swiper-parallax .swiper-slide * {\n  color: #6e6b7b;\n}\n.swiper-slide.swiper-slide-active {\n  opacity: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=template&id=2caee812&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=template&id=2caee812& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "app-ecommerce-details" },
    [
      _c(
        "b-alert",
        { attrs: { variant: "danger", show: _vm.offer === undefined } },
        [
          _c("h4", { staticClass: "alert-heading" }, [
            _vm._v("\n                Error fetching offer data\n            "),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "alert-body" },
            [
              _vm._v(
                "\n                No item found with this item slug. Check\n                "
              ),
              _c(
                "b-link",
                {
                  staticClass: "alert-link",
                  attrs: { to: { name: "apps-e-commerce-shop" } },
                },
                [_vm._v("\n                    Shop\n                ")]
              ),
              _vm._v("\n                for other items.\n            "),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.offer
        ? _c(
            "b-card",
            { attrs: { "no-body": "" } },
            [
              _c(
                "b-card-body",
                [
                  _c(
                    "b-row",
                    { staticClass: "my-2" },
                    [
                      _c(
                        "b-col",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-center mb-2 mb-md-0",
                          attrs: { cols: "12", md: "5" },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-center",
                            },
                            [
                              _vm.offer.id == 1 ||
                              _vm.offer.id == 3 ||
                              (_vm.offer.id == 4 && _vm.skin == "light")
                                ? _c("b-img", {
                                    staticClass: "offer-img",
                                    attrs: {
                                      alt: _vm.offer.name + "-" + _vm.offer.id,
                                      fluid: "",
                                      src: __webpack_require__(/*! @/assets/images/offer_logo/loanie-logo.png */ "./resources/js/src/assets/images/offer_logo/loanie-logo.png"),
                                    },
                                  })
                                : _vm.offer.id == 1 ||
                                  _vm.offer.id == 5 ||
                                  (_vm.offer.id == 6 && _vm.skin == "dark")
                                ? _c("b-img", {
                                    staticClass: "offer-img",
                                    attrs: {
                                      alt: _vm.offer.name + "-" + _vm.offer.id,
                                      fluid: "",
                                      src: __webpack_require__(/*! @/assets/images/offer_logo/loanie-logo-white.png */ "./resources/js/src/assets/images/offer_logo/loanie-logo-white.png"),
                                    },
                                  })
                                : _vm.offer.id == 2 ||
                                  _vm.offer.id == 5 ||
                                  (_vm.offer.id == 6 && _vm.skin == "light")
                                ? _c("b-img", {
                                    staticClass: "offer-img",
                                    attrs: {
                                      alt: _vm.offer.name + "-" + _vm.offer.id,
                                      fluid: "",
                                      src: __webpack_require__(/*! @/assets/images/offer_logo/magic-lend.png */ "./resources/js/src/assets/images/offer_logo/magic-lend.png"),
                                    },
                                  })
                                : _vm.offer.id == 2 ||
                                  _vm.offer.id == 5 ||
                                  (_vm.offer.id == 6 && _vm.skin == "dark")
                                ? _c("b-img", {
                                    staticClass: "offer-img",
                                    attrs: {
                                      alt: _vm.offer.name + "-" + _vm.offer.id,
                                      fluid: "",
                                      src: __webpack_require__(/*! @/assets/images/offer_logo/magic-lend-logo-white.png */ "./resources/js/src/assets/images/offer_logo/magic-lend-logo-white.png"),
                                    },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "7" } },
                        [
                          _c("h4", [_vm._v(_vm._s(_vm.offer.name))]),
                          _vm._v(" "),
                          _c(
                            "b-card-text",
                            { staticClass: "item-company mb-0" },
                            [
                              _c("span", [_vm._v("by")]),
                              _vm._v(" "),
                              _c("b-link", { staticClass: "company-name" }, [
                                _vm._v(
                                  "\n                                Amikaro Finance\n                            "
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "ecommerce-details-price d-flex flex-wrap mt-1",
                            },
                            [
                              _vm.offer.payout.payoutType == "CPS"
                                ? _c("h4", { staticClass: "item-price mr-1" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.offer.payout.payoutAmount) +
                                        " %\n                            "
                                    ),
                                  ])
                                : _vm.offer.payout.currency == "GBP"
                                ? _c("h4", { staticClass: "item-price mr-1" }, [
                                    _vm._v(
                                      "\n                               £ " +
                                        _vm._s(_vm.offer.payout.payoutAmount) +
                                        "\n                            "
                                    ),
                                  ])
                                : _vm.offer.payout.currency == "USD"
                                ? _c("h4", { staticClass: "item-price mr-1" }, [
                                    _vm._v(
                                      "\n                                $ " +
                                        _vm._s(_vm.offer.payout.payoutAmount) +
                                        "\n                            "
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("ul", {
                                staticClass:
                                  "unstyled-list list-inline pl-1 border-left",
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("b-card-text", [
                            _vm._v("Public - "),
                            _c("span", { staticClass: "text-success" }, [
                              _vm._v("Live"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("b-card-text", [
                            _vm._v(_vm._s(_vm.offer.description)),
                          ]),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "offer-features list-unstyled" },
                            [
                              _c(
                                "b-card-text",
                                { staticClass: "item-description" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "light-primary" } },
                                    [
                                      _vm._v(
                                        "\n\n                                    CPL\n                                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "light-primary" } },
                                    [
                                      _vm._v(
                                        "\n                                    Finance\n                                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "light-primary" } },
                                    [
                                      _vm._v(
                                        "\n                                    UK\n                                "
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
                          _c("hr"),
                          _vm._v(" "),
                          _c("b-card-text", [
                            _c("h6", [_vm._v("Restrictions: ")]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v("  " + _vm._s(_vm.offer.description)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("b-card-text", [
                            _c("h6", [_vm._v("Allowed Sources: ")]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v("  " + _vm._s(_vm.offer.description)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("b-card-text", [
                            _c("h6", [_vm._v("Terms: ")]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v("  " + _vm._s(_vm.offer.terms)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tabs",
                {
                  staticClass: "align-items-center flex justify-content-center",
                  attrs: { pills: "" },
                },
                [
                  _c(
                    "b-tab",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "title",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  staticClass: "mr-0 mr-sm-50",
                                  attrs: { icon: "InfoIcon", size: "16" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline" },
                                  [_vm._v("Tracking")]
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        false,
                        2399530165
                      ),
                    },
                    [
                      _vm._v(" "),
                      _c("e-commerce-tracking-details-related-products"),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "title",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  staticClass: "mr-0 mr-sm-50",
                                  attrs: { icon: "InfoIcon", size: "16" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline" },
                                  [_vm._v("Creatives")]
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        false,
                        857595314
                      ),
                    },
                    [
                      _vm._v(" "),
                      _c("e-commerce-product-details-related-products", {
                        attrs: { "offer-data": _vm.offer },
                      }),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("b-card", [
    _c("div", { staticClass: "item-features" }, [
      _c("div", { staticClass: "row text-center" }, [
        _c("div", { staticClass: "col-12 col-md-4 mb-4 mb-md-0" }, [
          _c(
            "div",
            { staticClass: "w-75 mx-auto" },
            [
              _c("feather-icon", { attrs: { icon: "AwardIcon", size: "35" } }),
              _vm._v(" "),
              _c("h4", { staticClass: "mt-2 mb-1" }, [
                _vm._v("\n          Offer Info\n        "),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "\n          Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.\n        "
                ),
              ]),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4 mb-md-0" }, [
          _c(
            "div",
            { staticClass: "w-75 mx-auto" },
            [
              _c("feather-icon", { attrs: { icon: "ClockIcon", size: "35" } }),
              _vm._v(" "),
              _c("h4", { staticClass: "mt-2 mb-1" }, [
                _vm._v("\n          Conversion Action\n        "),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "\n          Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.\n        "
                ),
              ]),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4 mb-md-0" }, [
          _c(
            "div",
            { staticClass: "w-75 mx-auto" },
            [
              _c("feather-icon", { attrs: { icon: "ShieldIcon", size: "35" } }),
              _vm._v(" "),
              _c("h4", { staticClass: "mt-2 mb-1" }, [
                _vm._v("\n          Additional Info\n        "),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "\n          Cotton candy gingerbread cake I love sugar plum I love sweet croissant.\n        "
                ),
              ]),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
    "b-card-body",
    [
      _c(
        "div",
        { staticClass: "mt-4 mb-2 text-center" },
        [
          _c("b-card-text", [
            _vm._v(
              "Approved creatives. Click the creative to preview or download"
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          small: "",
          fields: _vm.fields,
          items: _vm.offerData.creatives,
          responsive: "sm",
          small: true,
          borderless: true,
          striped: true,
        },
        scopedSlots: _vm._u([
          {
            key: "cell(id)",
            fn: function (data) {
              return [
                _vm._v("\n            " + _vm._s(data.item.id) + "\n        "),
              ]
            },
          },
          {
            key: "cell(name)",
            fn: function (data) {
              return [
                _vm._v(
                  "\n            " + _vm._s(data.item.name) + "\n        "
                ),
              ]
            },
          },
          {
            key: "cell(status)",
            fn: function (data) {
              return [
                data.item.status == 1
                  ? _c(
                      "b-badge",
                      { attrs: { pill: "", variant: "light-primary" } },
                      [_vm._v("\n                Active\n            ")]
                    )
                  : _c(
                      "b-badge",
                      { attrs: { pill: "", variant: "light-primary" } },
                      [_vm._v("\n                Inactive\n            ")]
                    ),
              ]
            },
          },
          {
            key: "cell(view)",
            fn: function (data) {
              return [
                _c(
                  "b-badge",
                  { attrs: { pill: "", variant: "light-primary" } },
                  [_vm._v("\n                View\n            ")]
                ),
              ]
            },
          },
          {
            key: "cell()",
            fn: function (data) {
              return [_vm._v("\n           View\n        ")]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("b-card-body", [
    _c(
      "div",
      { staticClass: "mt-4 mb-2 text-center" },
      [
        _c("h6", [_vm._v("Customize your tracking link")]),
        _vm._v(" "),
        _c("b-badge", { staticClass: "badge-light-primary" }, [
          _vm._v(
            "\n\n              https://portal.uping.co.uk/api/click/tracker?aff_id=YOUR_AFF_ID&offer_id=OFFER_IDaff_sub=" +
              _vm._s(_vm.trackingLink.aff_sub) +
              "&aff_sub2=" +
              _vm._s(_vm.trackingLink.aff_sub2) +
              "&aff_sub3=" +
              _vm._s(_vm.trackingLink.aff_sub3) +
              "&\n              aff_sub4=" +
              _vm._s(_vm.trackingLink.aff_sub4) +
              "&\n              aff_sub5=" +
              _vm._s(_vm.trackingLink.aff_sub5) +
              "&\n          "
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-4 mb-2 text-center" },
          [
            _c(
              "b-button-toolbar",
              {
                staticClass: "demo-inline-spacing",
                attrs: { "aria-label": "1234" },
              },
              [
                _c(
                  "b-row",
                  [
                    _c("b-col", { attrs: { cols: "6", md: "3" } }),
                    _vm._v(" "),
                    _c(
                      "b-button-group",
                      { attrs: { size: "sm" } },
                      [
                        _c(
                          "b-input-group",
                          { attrs: { size: "sm", prepend: "aff_sub" } },
                          [
                            _c("b-form-input", {
                              staticClass: "text-right",
                              attrs: {
                                value: "",
                                "aria-placeholder": "SUB_1234",
                              },
                              model: {
                                value: _vm.trackingLink.aff_sub,
                                callback: function ($$v) {
                                  _vm.$set(_vm.trackingLink, "aff_sub", $$v)
                                },
                                expression: "trackingLink.aff_sub",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button-group",
                      { attrs: { size: "sm" } },
                      [
                        _c(
                          "b-input-group",
                          { attrs: { size: "sm", prepend: "aff_sub2" } },
                          [
                            _c("b-form-input", {
                              staticClass: "text-right",
                              attrs: {
                                value: "",
                                "aria-placeholder": "SUB_1234",
                              },
                              model: {
                                value: _vm.trackingLink.aff_sub2,
                                callback: function ($$v) {
                                  _vm.$set(_vm.trackingLink, "aff_sub2", $$v)
                                },
                                expression: "trackingLink.aff_sub2",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button-group",
                      { attrs: { size: "sm" } },
                      [
                        _c(
                          "b-input-group",
                          { attrs: { size: "sm", prepend: "aff_sub3" } },
                          [
                            _c("b-form-input", {
                              staticClass: "text-right",
                              attrs: {
                                value: "",
                                "aria-placeholder": "SUB_1234",
                              },
                              model: {
                                value: _vm.trackingLink.aff_sub3,
                                callback: function ($$v) {
                                  _vm.$set(_vm.trackingLink, "aff_sub3", $$v)
                                },
                                expression: "trackingLink.aff_sub3",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button-group",
                      { attrs: { size: "sm" } },
                      [
                        _c(
                          "b-input-group",
                          { attrs: { size: "sm", prepend: "aff_sub4" } },
                          [
                            _c("b-form-input", {
                              staticClass: "text-right",
                              attrs: {
                                value: "",
                                "aria-placeholder": "SUB_1234",
                              },
                              model: {
                                value: _vm.trackingLink.aff_sub4,
                                callback: function ($$v) {
                                  _vm.$set(_vm.trackingLink, "aff_sub4", $$v)
                                },
                                expression: "trackingLink.aff_sub4",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button-group",
                      { attrs: { size: "sm" } },
                      [
                        _c(
                          "b-input-group",
                          { attrs: { size: "sm", prepend: "aff_sub5" } },
                          [
                            _c("b-form-input", {
                              staticClass: "text-right",
                              attrs: {
                                value: "",
                                "aria-placeholder": "SUB_1234",
                              },
                              model: {
                                value: _vm.trackingLink.aff_sub5,
                                callback: function ($$v) {
                                  _vm.$set(_vm.trackingLink, "aff_sub5", $$v)
                                },
                                expression: "trackingLink.aff_sub5",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-row"),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images/offer_logo/loanie-logo-white.png":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/offer_logo/loanie-logo-white.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/offer_logo/loanie-logo-white.png";

/***/ }),

/***/ "./resources/js/src/assets/images/offer_logo/magic-lend-logo-white.png":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/assets/images/offer_logo/magic-lend-logo-white.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/offer_logo/magic-lend-logo-white.png";

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceProductDetails_vue_vue_type_template_id_2caee812___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceProductDetails.vue?vue&type=template&id=2caee812& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=template&id=2caee812&");
/* harmony import */ var _ECommerceProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceProductDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceProductDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ECommerceProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceProductDetails_vue_vue_type_template_id_2caee812___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceProductDetails_vue_vue_type_template_id_2caee812___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=template&id=2caee812&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=template&id=2caee812& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_template_id_2caee812___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetails.vue?vue&type=template&id=2caee812& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue?vue&type=template&id=2caee812&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_template_id_2caee812___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetails_vue_vue_type_template_id_2caee812___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceProductDetailsItemFeatures_vue_vue_type_template_id_9b49fbf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2&");
/* harmony import */ var _ECommerceProductDetailsItemFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ECommerceProductDetailsItemFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceProductDetailsItemFeatures_vue_vue_type_template_id_9b49fbf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceProductDetailsItemFeatures_vue_vue_type_template_id_9b49fbf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsItemFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsItemFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsItemFeatures_vue_vue_type_template_id_9b49fbf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsItemFeatures.vue?vue&type=template&id=9b49fbf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsItemFeatures_vue_vue_type_template_id_9b49fbf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsItemFeatures_vue_vue_type_template_id_9b49fbf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceProductDetailsRelatedProducts_vue_vue_type_template_id_30ec5e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68&");
/* harmony import */ var _ECommerceProductDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceProductDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ECommerceProductDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceProductDetailsRelatedProducts_vue_vue_type_template_id_30ec5e68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceProductDetailsRelatedProducts_vue_vue_type_template_id_30ec5e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_template_id_30ec5e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetailsRelatedProducts.vue?vue&type=template&id=30ec5e68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_template_id_30ec5e68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceProductDetailsRelatedProducts_vue_vue_type_template_id_30ec5e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceTrackingDetailsRelatedProducts_vue_vue_type_template_id_3fbc6e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70&");
/* harmony import */ var _ECommerceTrackingDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceTrackingDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ECommerceTrackingDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceTrackingDetailsRelatedProducts_vue_vue_type_template_id_3fbc6e70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceTrackingDetailsRelatedProducts_vue_vue_type_template_id_3fbc6e70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70&":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_template_id_3fbc6e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-product-details/ECommerceTrackingDetailsRelatedProducts.vue?vue&type=template&id=3fbc6e70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_template_id_3fbc6e70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceTrackingDetailsRelatedProducts_vue_vue_type_template_id_3fbc6e70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/useEcommerce.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/useEcommerce.js ***!
  \****************************************************************/
/*! exports provided: useEcommerce, useEcommerceUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEcommerce", function() { return useEcommerce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEcommerceUi", function() { return useEcommerceUi; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/utils */ "./resources/js/src/@core/utils/utils.js");


var useEcommerce = function useEcommerce() {
  // eslint-disable-next-line arrow-body-style
  var addOfferInWishlist = function addOfferInWishlist(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/addOfferInWishlist', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var removeOfferFromWishlist = function removeOfferFromWishlist(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/removeOfferFromWishlist', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var addProductInCart = function addProductInCart(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/addProductInCart', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var removeProductFromCart = function removeProductFromCart(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/removeProductFromCart', {
      productId: productId
    });
  };

  return {
    addOfferInWishlist: addOfferInWishlist,
    removeOfferFromWishlist: removeOfferFromWishlist,
    addProductInCart: addProductInCart,
    removeProductFromCart: removeProductFromCart
  };
};
var useEcommerceUi = function useEcommerceUi() {
  var _useRouter = Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      router = _useRouter.router;

  var toggleOfferInWishlist = function toggleOfferInWishlist(product) {
    var _useEcommerce = useEcommerce(),
        addOfferInWishlist = _useEcommerce.addOfferInWishlist,
        removeOfferFromWishlist = _useEcommerce.removeOfferFromWishlist;

    if (product.isInWishlist) {
      removeOfferFromWishlist(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = false;
      });
    } else {
      addOfferInWishlist(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = true;
      });
    }
  };

  var handleOfferActionClick = function handleOfferActionClick(product) {
    var _useEcommerce2 = useEcommerce(),
        addProductInCart = _useEcommerce2.addProductInCart;

    if (product.isInCart) {
      router.push({
        name: 'apps-e-commerce-checkout'
      });
    } else {
      addProductInCart(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInCart = true; // Update cart items count

        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _store__WEBPACK_IMPORTED_MODULE_0__["default"].state['app-ecommerce'].cartItemsCount + 1);
      });
    }
  };

  var handleSaveOfferActionClick = function handleSaveOfferActionClick(product, removeOfferFromWishlistUi) {
    var _useEcommerce3 = useEcommerce(),
        addProductInCart = _useEcommerce3.addProductInCart,
        removeOfferFromWishlist = _useEcommerce3.removeOfferFromWishlist;

    if (product.isInCart) {
      router.push({
        name: 'apps-e-commerce-checkout'
      });
    } else {
      addProductInCart(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInCart = true;
        removeOfferFromWishlist(product.id); // Update cart items count

        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _store__WEBPACK_IMPORTED_MODULE_0__["default"].state['app-ecommerce'].cartItemsCount + 1);
      }).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = false;
        removeOfferFromWishlistUi(product);
      });
    }
  };

  return {
    toggleOfferInWishlist: toggleOfferInWishlist,
    handleOfferActionClick: handleOfferActionClick,
    handleSaveOfferActionClick: handleSaveOfferActionClick
  };
};

/***/ })

}]);