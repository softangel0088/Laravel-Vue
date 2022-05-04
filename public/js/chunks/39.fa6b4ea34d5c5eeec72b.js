(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"]
  },
  props: {
    tableData: []
  },
  data: function data() {
    return {
      fields: [{
        key: 'vid',
        label: 'AFFILIATE'
      }, {
        key: 'leads_today',
        label: 'LEADS'
      }, {
        key: 'revenue_today',
        label: 'REVENUE'
      }, {
        key: 'profit_today',
        label: 'PROFIT'
      }, {
        key: 'ratio_today',
        label: 'RATIO'
      }]
    };
  } // setup(props) {
  //   console.log('1-1--3-4004');
  //   console.log(props.tableData.dashboard_data);
  //   const affiliateTableData = props.tableData.dashboard_data.affiliate_table_data;
  //   return {
  //       affiliateTableData
  //   }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* eslint-disable global-require */

var $trackBgColor = '#e9ecef';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a,
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  props: {
    redirectData: {
      type: Object
    }
  },
  data: function data() {
    return {
      chartData: [],
      chartClone: {},
      chartColor: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].warning, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].danger],
      chartSeries: [54.4, 6.1, 14.6, 4.2],
      browserData: [{
        name: 'AFF_1234',
        usage: '54.4%'
      }, {
        name: 'AFF_133',
        usage: '6.1%'
      }, {
        name: 'AFF_1222',
        usage: '14.6%'
      }],
      chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: $trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    };
  },
  created: function created() {
    for (var i = 0; i < this.browserData.length; i += 1) {
      var chartClone = JSON.parse(JSON.stringify(this.chart));
      chartClone.options.colors[0] = this.chartColor[i];
      chartClone.series[0] = this.chartSeries[i];
      this.chartData.push(chartClone);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/dashboard/admin/uk/apexChartData.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // import rangePicker

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_3__["default"],
      rangePicker: ["2019-05-01", "2019-05-10"],
      chartData: {},
      dates: [],
      accepted: [],
      pending: [],
      rejected: [],
      series: []
    };
  },
  computed: {
    chartOptions: function chartOptions() {
      return {
        chart: {
          toolbar: {
            show: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: "smooth"
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "left",
          fontSize: "14px",
          fontFamily: "Montserrat"
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        xaxis: {
          categories: this.dates
        },
        yaxis: {// opposite: isRtl
        },
        fill: {
          opacity: 1,
          type: "solid"
        },
        tooltip: {
          shared: false
        }
      };
    }
  },
  created: function created() {
    this.fetchChartData();
  },
  methods: {
    fetchChartData: function fetchChartData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/admin/revenueChartData").then(function (response) {
        _this.chartData = response.data;
        _this.dates = response.data.dates;
        _this.accepted = response.data.accepted;
        _this.pending = response.data.pending;
        _this.rejected = response.data.rejected;
        _this.series = [{
          name: "Accept",
          data: _this.chartData.accepted
        }, {
          name: "Pending",
          data: _this.chartData.pending
        }, {
          name: "Reject",
          data: _this.chartData.rejected
        }];
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"]
  },
  props: {
    tableData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      fields: [{
        key: 'vendor_id',
        label: 'AFFILIATE'
      }, {
        key: 'leads_today',
        label: 'LEADS'
      }, {
        key: 'revenue_today',
        label: 'REVENUE'
      }, {
        key: 'profit_today',
        label: 'PROFIT'
      }, {
        key: 'ratio_today',
        label: 'RATIO'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var $strokeColor = '#ebe9f1';
var $textHeadingColor = '#5e5873';
var $goalStrokeColor2 = '#51e5a8';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: [],
    title: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      goalOverviewRadialBar: {
        series: [12],
        chart: {
          height: 180,
          type: 'radialBar',
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1
          }
        },
        colors: [$goalStrokeColor2],
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%'
            },
            track: {
              background: $strokeColor,
              strokeWidth: '100%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                color: $textHeadingColor,
                fontSize: '1.86rem',
                fontWeight: '600'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].success],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        grid: {
          padding: {
            bottom: 30
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var $strokeColor = '#ebe9f1';
var $textHeadingColor = '#5e5873';
var $goalStrokeColor2 = '#51e5a8';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    },
    title: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      goalOverviewRadialBar: {
        series: [12],
        chart: {
          height: 180,
          type: 'radialBar',
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1
          }
        },
        colors: [$goalStrokeColor2],
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%'
            },
            track: {
              background: $strokeColor,
              strokeWidth: '100%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                color: $textHeadingColor,
                fontSize: '1.86rem',
                fontWeight: '600'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].success],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        grid: {
          padding: {
            bottom: 30
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var $strokeColor = '#ebe9f1';
var $textHeadingColor = '#5e5873';
var $goalStrokeColor2 = '#51e5a8';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: [],
    title: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      goalOverviewRadialBar: {
        series: [12],
        chart: {
          height: 180,
          type: 'radialBar',
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1
          }
        },
        colors: [$goalStrokeColor2],
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%'
            },
            track: {
              background: $strokeColor,
              strokeWidth: '100%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                color: $textHeadingColor,
                fontSize: '1.86rem',
                fontWeight: '600'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].success],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        grid: {
          padding: {
            bottom: 30
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var $strokeColor = '#ebe9f1';
var $textHeadingColor = '#5e5873';
var $goalStrokeColor2 = '#51e5a8';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    VBTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: [],
    title: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      goalOverviewRadialBar: {
        series: [12],
        chart: {
          height: 180,
          type: 'radialBar',
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1
          }
        },
        colors: [$goalStrokeColor2],
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%'
            },
            track: {
              background: $strokeColor,
              strokeWidth: '100%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                color: $textHeadingColor,
                fontSize: '1.86rem',
                fontWeight: '600'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].success],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        grid: {
          padding: {
            bottom: 30
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _EcommerceMedal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceMedal.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue");
/* harmony import */ var _EcommerceStatistics_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EcommerceStatistics.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue");
/* harmony import */ var _EcommerceRevenueReport_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EcommerceRevenueReport.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue");
/* harmony import */ var _EcommerceOrderChart_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EcommerceOrderChart.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue");
/* harmony import */ var _EcommerceProfitChart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EcommerceProfitChart.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue");
/* harmony import */ var _EcommerceEarningsChart_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EcommerceEarningsChart.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue");
/* harmony import */ var _EcommerceBrowserStates_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EcommerceBrowserStates.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue");
/* harmony import */ var _AffiliateCompanyTable_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AffiliateCompanyTable.vue */ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue");
/* harmony import */ var _CompanyTable_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CompanyTable.vue */ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue");
/* harmony import */ var _LenderCompanyTable_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LenderCompanyTable.vue */ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue");
/* harmony import */ var _EcommerceMeetup_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EcommerceMeetup.vue */ "./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue");
/* harmony import */ var _AffiliateRedirectRates_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AffiliateRedirectRates.vue */ "./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue");
/* harmony import */ var _LenderRedirectRates_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LenderRedirectRates.vue */ "./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue");
/* harmony import */ var _EarningsToday_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EarningsToday.vue */ "./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue");
/* harmony import */ var _EarningsWeek_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EarningsWeek.vue */ "./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue");
/* harmony import */ var _EarningsMonth_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EarningsMonth.vue */ "./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue");
/* harmony import */ var _EarningsProfit_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./EarningsProfit.vue */ "./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue");
/* harmony import */ var _ApexLineAreaChart_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ApexLineAreaChart.vue */ "./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { getUserData } from '@/auth/utils'



















/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ApexLineAreaChart: _ApexLineAreaChart_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    EcommerceMedal: _EcommerceMedal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EcommerceStatistics: _EcommerceStatistics_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EcommerceRevenueReport: _EcommerceRevenueReport_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    EcommerceOrderChart: _EcommerceOrderChart_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    EcommerceProfitChart: _EcommerceProfitChart_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    EcommerceEarningsChart: _EcommerceEarningsChart_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    EcommerceBrowserStates: _EcommerceBrowserStates_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    AffiliateCompanyTable: _AffiliateCompanyTable_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    LenderCompanyTable: _LenderCompanyTable_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    CompanyTable: _CompanyTable_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    EcommerceMeetup: _EcommerceMeetup_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    AffiliateRedirectRates: _AffiliateRedirectRates_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    LenderRedirectRates: _LenderRedirectRates_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    EarningsToday: _EarningsToday_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    EarningsWeek: _EarningsWeek_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    EarningsMonth: _EarningsMonth_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    EarningsProfit: _EarningsProfit_vue__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  data: function data() {
    return {
      data: {
        dashboard_data: {
          affiliate_table_data: [],
          todayEarnings: {
            redirection: {
              redirected_ratio: []
            },
            today_revenue: 0
          },
          weekEarnings: {
            redirection: {
              redirected_ratio: []
            },
            week_revenue: 0
          },
          monthEarnings: {
            redirection: {
              redirected_ratio: []
            },
            month_revenue: 0
          },
          profitEarnings: {
            redirection: {
              redirected_ratio: []
            },
            profit: 0
          },
          lead_count: {
            today: 0,
            week: 0,
            month: 0
          },
          top_referrers: {
            original: {
              referrers: []
            }
          }
        }
      }
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/admin/getDashboardDataUK').then(function (response) {
      _this.data = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* eslint-disable global-require */

var $trackBgColor = '#e9ecef';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a,
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  props: {
    redirectData: []
  },
  data: function data() {
    return {
      chartData: [],
      chartClone: {},
      chartColor: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].warning, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].danger],
      chartSeries: [54.4, 6.1, 14.6, 4.2],
      browserData: [{
        name: 'AFF_1234',
        usage: '54.4%'
      }, {
        name: 'AFF_133',
        usage: '6.1%'
      }, {
        name: 'AFF_1222',
        usage: '14.6%'
      }],
      chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: $trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    };
  },
  created: function created() {
    for (var i = 0; i < this.browserData.length; i += 1) {
      var chartClone = JSON.parse(JSON.stringify(this.chart));
      chartClone.options.colors[0] = this.chartColor[i];
      chartClone.series[0] = this.chartSeries[i];
      this.chartData.push(chartClone);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $earningsStrokeColor2 = '#28c76f66';
var $earningsStrokeColor3 = '#28c76f33';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    },
    title: String
  },
  data: function data() {
    return {
      earningsChart: {
        // series: [12, 100, 100],
        chartOptions: {
          chart: {
            type: 'donut',
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          comparedResult: [2, -3, 8],
          labels: ['Profit', 'Cost', 'Total'],
          stroke: {
            width: 0
          },
          colors: [$earningsStrokeColor2, $earningsStrokeColor3, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success],
          grid: {
            padding: {
              right: -20,
              bottom: -8,
              left: -20
            }
          },
          plotOptions: {
            pie: {
              startAngle: -10,
              donut: {
                labels: {
                  show: true,
                  name: {
                    offsetY: 15
                  },
                  value: {
                    offsetY: -15,
                    formatter: function formatter(val) {
                      // eslint-disable-next-line radix
                      return "".concat(parseInt(val), "%");
                    }
                  },
                  total: {
                    show: true,
                    offsetY: 15,
                    label: 'Redirect',
                    formatter: function formatter() {
                      return '53%';
                    }
                  }
                }
              }
            }
          },
          responsive: [{
            breakpoint: 1325,
            options: {
              chart: {
                height: 125
              }
            }
          }, {
            breakpoint: 1200,
            options: {
              chart: {
                height: 125
              }
            }
          }, {
            breakpoint: 1045,
            options: {
              chart: {
                height: 100
              }
            }
          }, {
            breakpoint: 992,
            options: {
              chart: {
                height: 75
              }
            }
          }]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__["kFormatter"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatarGroup"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $barColor = '#f3f3f3';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      statisticsOrder: {
        chartOptions: {
          chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: -15,
              bottom: -15
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '20%',
              startingShape: 'rounded',
              colors: {
                backgroundBarColors: [$barColor, $barColor, $barColor, $barColor, $barColor],
                backgroundBarRadius: 5
              }
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
          xaxis: {
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false
          },
          tooltip: {
            x: {
              show: false
            }
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $trackBgColor = '#EBEBEB';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      statisticsProfit: {
        chartOptions: {
          chart: {
            type: 'line',
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          grid: {
            borderColor: $trackBgColor,
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            },
            padding: {
              top: -30,
              bottom: -10
            }
          },
          stroke: {
            width: 3
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info],
          markers: {
            size: 2,
            colors: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info,
            strokeColors: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info,
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [{
              seriesIndex: 0,
              dataPointIndex: 5,
              fillColor: '#ffffff',
              strokeColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info,
              size: 5
            }],
            shape: 'circle',
            radius: 2,
            hover: {
              size: 3
            }
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontSize: '0px'
              }
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false
          },
          tooltip: {
            x: {
              show: false
            }
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/dashboard/admin/uk/apexChartData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      apexChartData: _apexChartData__WEBPACK_IMPORTED_MODULE_4__["default"],
      rangePicker: ['2019-05-01', '2019-05-10'],
      revenue_report: {},
      revenueReport: {
        chartOptions: {
          chart: {
            stacked: true,
            type: 'bar',
            toolbar: {
              show: false
            }
          },
          grid: {
            padding: {
              top: -20,
              bottom: -10
            },
            yaxis: {
              lines: {
                show: false
              }
            }
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            labels: {
              style: {
                colors: '#6E6B7B',
                fontSize: '0.86rem',
                fontFamily: 'Montserrat'
              }
            },
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
          plotOptions: {
            bar: {
              columnWidth: '17%',
              endingShape: 'rounded'
            },
            distributed: true
          },
          yaxis: {
            labels: {
              style: {
                colors: '#6E6B7B',
                fontSize: '0.86rem',
                fontFamily: 'Montserrat'
              }
            }
          }
        }
      },
      // budget chart
      budgetChart: {
        options: {
          chart: {
            height: 80,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            },
            type: 'line',
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: 'smooth',
            dashArray: [0, 5],
            width: [2]
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, '#dcdae3'],
          tooltip: {
            enabled: false
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"]
  },
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"]
  },
  props: {
    tableData: []
  },
  data: function data() {
    return {
      fields: [{
        key: 'buyerTierID',
        label: 'LENDER'
      }, {
        key: 'leads_today',
        label: 'LEADS'
      }, {
        key: 'revenue_today',
        label: 'REVENUE'
      }, {
        key: 'profit_today',
        label: 'PROFIT'
      }, {
        key: 'ratio_today',
        label: 'RATIO'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* eslint-disable global-require */

var $trackBgColor = '#e9ecef';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a,
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  props: {
    redirectData: {
      type: Object
    }
  },
  data: function data() {
    return {
      chartData: [],
      chartClone: {},
      chartColor: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].warning, _themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].danger],
      chartSeries: [54.4, 6.1, 14.6, 4.2],
      browserData: [{
        name: 'AFF_1234',
        usage: '54.4%'
      }, {
        name: 'AFF_133',
        usage: '6.1%'
      }, {
        name: 'AFF_1222',
        usage: '14.6%'
      }],
      chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_3__["$themeColors"].success],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: $trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    };
  },
  created: function created() {
    for (var i = 0; i < this.browserData.length; i += 1) {
      var chartClone = JSON.parse(JSON.stringify(this.chart));
      chartClone.options.colors[0] = this.chartColor[i];
      chartClone.series[0] = this.chartSeries[i];
      this.chartData.push(chartClone);
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var n$ParseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / n$ParseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { n$ParseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = n$ParseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : n$ParseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .dark-layout .card-company-table[data-v-3954850a]  td .b-avatar.badge-light-company {\n  background: #161d31 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .dark-layout .card-company-table[data-v-8f0f2296]  td .b-avatar.badge-light-company {\n  background: #161d31 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .card-statistics .statistics-body {\n  padding: 2rem 2.4rem !important;\n}\n@media (max-width: 991.98px) {\n[dir] .card-statistics .card-header, [dir] .card-statistics .statistics-body {\n    padding: 1.5rem !important;\n}\n}\n[dir] .card-company-table thead th {\n  border: 0;\n}\n[dir] .card-company-table td {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n[dir] .card-company-table td .avatar {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .avatar {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .avatar {\n  margin-left: 2rem;\n}\n[dir] .card-company-table td .avatar img {\n  border-radius: 0;\n}\n[dir] .card-browser-states .browser-states:first-child {\n  margin-top: 0;\n}\n[dir] .card-browser-states .browser-states:not(:first-child) {\n  margin-top: 1.7rem;\n}\n[dir] .card-transaction .transaction-item:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n[dir] .card-company-table td .b-avatar.badge-light-company {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .b-avatar.badge-light-company {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .b-avatar.badge-light-company {\n  margin-left: 2rem;\n}\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label,\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text,\n.apexcharts-canvas .apexcharts-tooltip-text,\n.apexcharts-canvas .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-datalabel {\n  font-family: \"Montserrat\", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: white;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs,\n.apexcharts-canvas .apexcharts-ycrosshairs,\n.apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick,\n.dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-ycrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .dark-layout .card-company-table[data-v-0f20009e]  td .b-avatar.badge-light-company {\n  background: #161d31 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.tableData
    ? _c(
        "b-card",
        { staticClass: "card-company-table", attrs: { "no-body": "" } },
        [
          _c("b-table", {
            staticClass: "mb-0",
            attrs: {
              items: _vm.tableData,
              responsive: "",
              fields: _vm.fields,
              "sticky-header": true,
              noCollapse: true,
              striped: true,
              borderless: true,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "cell(vid)",
                  fn: function (data) {
                    return [
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c(
                          "div",
                          { staticClass: "font-weight-bolder" },
                          [
                            _c(
                              "b-badge",
                              { attrs: { variant: "light-primary" } },
                              [
                                _vm._v(
                                  "\n                 " +
                                    _vm._s(data.item.vid) +
                                    "\n             "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-small-2 text-muted" }),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(leads_today)",
                  fn: function (data) {
                    return [
                      _c("div", { staticClass: "d-flex flex-column" }, [
                        _c(
                          "span",
                          { staticClass: "font-weight-bolder mb-25" },
                          [_vm._v("   " + _vm._s(data.item.leads_today))]
                        ),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(revenue_today)",
                  fn: function (data) {
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s("£" + data.item.revenue_today.toFixed(2)) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "cell(profit_today)",
                  fn: function (data) {
                    return [
                      _c("span", { staticClass: "text-success bold" }, [
                        _vm._v(
                          "\n                 " +
                            _vm._s("£" + data.item.profit_today.toFixed(2)) +
                            "\n            "
                        ),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(ratio_today)",
                  fn: function (data) {
                    return [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c(
                            "span",
                            { staticClass: "font-weight-bolder mr-1" },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(data.item.ratio_today + "%") +
                                  "\n          "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("feather-icon", {
                            class: data.item.loss
                              ? "text-danger"
                              : "text-success",
                            attrs: {
                              icon: data.item.loss
                                ? "TrendingDownIcon"
                                : "TrendingUpIcon",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  },
                },
              ],
              null,
              false,
              459068941
            ),
          }),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "card-browser-states", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c(
            "div",
            [
              _c("b-card-text", { staticClass: "font-small-2" }, [
                _c("h6", [
                  _vm._v(
                    "\n                        Affiliate Redirection Rates\n\n                    "
                  ),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              staticClass: "chart-dropdown",
              attrs: { variant: "link", "no-caret": "", "toggle-class": "p-0" },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [
                      _c("feather-icon", {
                        staticClass: "text-body cursor-pointer",
                        attrs: { icon: "MoreVerticalIcon", size: "18" },
                      }),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                    Last 28 Days\n                "),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                    Last Month\n                "),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                    Last Year\n                "),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-body",
        _vm._l(
          _vm.redirectData.affiliate_redirection,
          function (browser, index) {
            return _c(
              "div",
              { key: browser.browserImg, staticClass: "browser-states" },
              [
                _c(
                  "b-media",
                  { attrs: { "no-body": "" } },
                  [
                    _c(
                      "b-media-body",
                      [
                        _c("b-badge", { attrs: { variant: "light-primary" } }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(browser.vid) +
                              "\n                        "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center" },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "font-weight-bold text-body-heading mr-1",
                      },
                      [_vm._v(_vm._s(browser.redirect_ratio + "%"))]
                    ),
                    _vm._v(" "),
                    _c("vue-apex-charts", {
                      attrs: {
                        type: "radialBar",
                        height: "30",
                        width: "30",
                        options: _vm.chart.options,
                        series: [browser.redirect_ratio],
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          }
        ),
        0
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=template&id=c61625f2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=template&id=c61625f2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-body",
        [
          _c("vue-apex-charts", {
            attrs: {
              type: "area",
              height: "400",
              options: _vm.chartOptions,
              series: _vm.series,
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.tableData
    ? _c(
        "b-card",
        { staticClass: "card-company-table", attrs: { "no-body": "" } },
        [
          _c("pre", [
            _vm._v(
              "          " +
                _vm._s(_vm.tableData.dashboard_data.affiliate_table_data) +
                "\n      "
            ),
          ]),
          _vm._v(" "),
          _c("b-table", {
            staticClass: "mb-0",
            attrs: {
              items: _vm.tableData.dashboard_data.affiliate_table_data,
              responsive: "",
              fields: _vm.fields,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "cell(company)",
                  fn: function (data) {
                    return [
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c(
                          "div",
                          { staticClass: "font-weight-bolder" },
                          [
                            _c(
                              "b-badge",
                              { attrs: { "class-": "light-primary" } },
                              [
                                _vm._v(
                                  "\n                 " +
                                    _vm._s(data.item.title) +
                                    "\n             "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-small-2 text-muted" }),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(views)",
                  fn: function (data) {
                    return [
                      _c("div", { staticClass: "d-flex flex-column" }, [
                        _c(
                          "span",
                          { staticClass: "font-weight-bolder mb-25" },
                          [_vm._v(_vm._s(data.item.viewTitle))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "font-small-2 text-muted text-nowrap",
                          },
                          [_vm._v(_vm._s(data.item.viewsub))]
                        ),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(revenue)",
                  fn: function (data) {
                    return [
                      _vm._v(
                        "\n        " +
                          _vm._s("£" + data.item.revenue) +
                          "\n      "
                      ),
                    ]
                  },
                },
                {
                  key: "cell(profit)",
                  fn: function (data) {
                    return [
                      _c("span", { staticClass: "text-success bold" }, [
                        _vm._v(
                          "\n                 " +
                            _vm._s("£" + data.item.revenue) +
                            "\n            "
                        ),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(ratio)",
                  fn: function (data) {
                    return [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c(
                            "span",
                            { staticClass: "font-weight-bolder mr-1" },
                            [_vm._v(_vm._s(data.item.sales + "%"))]
                          ),
                          _vm._v(" "),
                          _c("feather-icon", {
                            class: data.item.loss
                              ? "text-danger"
                              : "text-success",
                            attrs: {
                              icon: data.item.loss
                                ? "TrendingDownIcon"
                                : "TrendingUpIcon",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  },
                },
              ],
              null,
              false,
              737300697
            ),
          }),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=template&id=67f138a3&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=template&id=67f138a3& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "rounded", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("h4", { staticClass: "mb-0" }, [
                _vm._v("\n            " + _vm._s(_vm.title) + "\n        "),
              ]),
              _vm._v(" "),
              _c(
                "b-card-text",
                { staticClass: "font-medium-5 mb-0" },
                [
                  _c("feather-icon", {
                    directives: [
                      {
                        name: "ripple",
                        rawName: "v-ripple.400",
                        value: "rgba(113, 102, 240, 0.15)",
                        expression: "'rgba(113, 102, 240, 0.15)'",
                        modifiers: { 400: true },
                      },
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.focus.v-primary",
                        modifiers: {
                          hover: true,
                          focus: true,
                          "v-primary": true,
                        },
                      },
                    ],
                    staticClass: "text-muted cursor-pointer",
                    attrs: {
                      icon: "HelpCircleIcon",
                      size: "21",
                      title: "Earnings For Month",
                      variant: "outline-primary",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-apex-charts", {
            staticClass: "my-2",
            attrs: {
              type: "radialBar",
              height: "180",
              options: _vm.goalOverviewRadialBar,
              series: _vm.data.monthEarnings.redirection.redirected_ratio,
            },
          }),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "text-center mx-0" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top border-right d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n       Leads\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.data.lead_count.month) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n          Commission\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          £ " +
                        _vm._s(
                          _vm.data.monthEarnings.month_revenue.toFixed(2)
                        ) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=template&id=8ed0069e&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=template&id=8ed0069e& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "rounded", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("h4", { staticClass: "mb-0" }, [
                _vm._v("\n        " + _vm._s(_vm.title) + "\n    "),
              ]),
              _vm._v(" "),
              _c(
                "b-card-text",
                { staticClass: "font-medium-5 mb-0" },
                [
                  _c("feather-icon", {
                    directives: [
                      {
                        name: "ripple",
                        rawName: "v-ripple.400",
                        value: "rgba(113, 102, 240, 0.15)",
                        expression: "'rgba(113, 102, 240, 0.15)'",
                        modifiers: { 400: true },
                      },
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.focus.v-primary",
                        modifiers: {
                          hover: true,
                          focus: true,
                          "v-primary": true,
                        },
                      },
                    ],
                    staticClass: "text-muted cursor-pointer",
                    attrs: {
                      icon: "HelpCircleIcon",
                      size: "21",
                      title: "Profit For Today",
                      variant: "outline-primary",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-apex-charts", {
            staticClass: "my-2",
            attrs: {
              type: "radialBar",
              height: "180",
              options: _vm.goalOverviewRadialBar,
              series: _vm.data.todayEarnings.redirection.redirected_ratio,
            },
          }),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "text-center mx-0" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top border-right d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n       Leads\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.data.lead_count.today) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n          Commission\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          £ " +
                        _vm._s(_vm.data.profitEarnings.profit.toFixed(2)) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=template&id=45556ce4&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=template&id=45556ce4& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "rounded", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("h4", { staticClass: "mb-0" }, [
                _vm._v("\n            " + _vm._s(_vm.title) + "\n        "),
              ]),
              _vm._v(" "),
              _c(
                "b-card-text",
                { staticClass: "font-medium-5 mb-0" },
                [
                  _c("feather-icon", {
                    directives: [
                      {
                        name: "ripple",
                        rawName: "v-ripple.400",
                        value: "rgba(113, 102, 240, 0.15)",
                        expression: "'rgba(113, 102, 240, 0.15)'",
                        modifiers: { 400: true },
                      },
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.focus.v-primary",
                        modifiers: {
                          hover: true,
                          focus: true,
                          "v-primary": true,
                        },
                      },
                    ],
                    staticClass: "text-muted cursor-pointer",
                    attrs: {
                      icon: "HelpCircleIcon",
                      size: "21",
                      title: "Earnings For Today",
                      variant: "outline-primary",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-apex-charts", {
            staticClass: "my-2",
            attrs: {
              type: "radialBar",
              height: "180",
              options: _vm.goalOverviewRadialBar,
              series: _vm.data.todayEarnings.redirection.redirected_ratio,
            },
          }),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "text-center mx-0" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top border-right d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n       Leads\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.data.lead_count.today) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n          Commission\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          £ " +
                        _vm._s(
                          _vm.data.todayEarnings.today_revenue.toFixed(2)
                        ) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=template&id=b23d10be&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=template&id=b23d10be& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "rounded", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("h4", { staticClass: "mb-0" }, [
                _vm._v("\n            " + _vm._s(_vm.title) + "\n        "),
              ]),
              _vm._v(" "),
              _c(
                "b-card-text",
                { staticClass: "font-medium-5 mb-0" },
                [
                  _c("feather-icon", {
                    directives: [
                      {
                        name: "ripple",
                        rawName: "v-ripple.400",
                        value: "rgba(113, 102, 240, 0.15)",
                        expression: "'rgba(113, 102, 240, 0.15)'",
                        modifiers: { 400: true },
                      },
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.focus.v-primary",
                        modifiers: {
                          hover: true,
                          focus: true,
                          "v-primary": true,
                        },
                      },
                    ],
                    staticClass: "text-muted cursor-pointer",
                    attrs: {
                      icon: "HelpCircleIcon",
                      size: "21",
                      title: "Earnings For Week",
                      variant: "outline-primary",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-apex-charts", {
            staticClass: "my-2",
            attrs: {
              type: "radialBar",
              height: "180",
              options: _vm.goalOverviewRadialBar,
              series: _vm.data.weekEarnings.redirection.redirected_ratio,
            },
          }),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "text-center mx-0" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top border-right d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n       Leads\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.data.lead_count.week) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n          Commission\n      "),
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n          £ " +
                        _vm._s(_vm.data.weekEarnings.week_revenue.toFixed(2)) +
                        "\n      "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=template&id=1e2815e8&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=template&id=1e2815e8& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "dashboard-ecommerce" } },
    [
      _c(
        "b-row",
        { staticClass: "match-height" },
        [
          _c(
            "b-col",
            { attrs: { xl: "3", md: "3" } },
            [
              _vm.data.dashboard_data
                ? _c("earnings-today", {
                    attrs: { data: _vm.data.dashboard_data, title: "Today" },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xl: "3", md: "3" } },
            [
              _vm.data.dashboard_data
                ? _c("earnings-week", {
                    attrs: { data: _vm.data.dashboard_data, title: "Week" },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xl: "3", md: "3" } },
            [
              _vm.data.dashboard_data
                ? _c("earnings-month", {
                    attrs: { data: _vm.data.dashboard_data, title: "Month" },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xl: "3", md: "3" } },
            [
              _vm.data.dashboard_data
                ? _c("earnings-profit", {
                    attrs: { data: _vm.data.dashboard_data, title: "Profit" },
                  })
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-col", { attrs: { lg: "12" } }, [_c("apex-line-area-chart")], 1),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "match-height" },
        [
          _c(
            "b-col",
            { attrs: { lg: "6" } },
            [
              _vm.data.dashboard_data.affiliate_table_data
                ? _c("affiliate-company-table", {
                    attrs: {
                      "table-data":
                        _vm.data.dashboard_data.affiliate_table_data,
                      title: "Affiliate",
                    },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6" } },
            [
              _vm.data
                ? _c("lender-company-table", {
                    attrs: { "table-data": _vm.data, title: "Lender" },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "4", md: "4" } },
            [
              _vm.data.dashboard_data
                ? _c("affiliate-redirect-rates", {
                    attrs: { "redirect-data": _vm.data.dashboard_data },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "4", md: "4" } },
            [
              _vm.data.dashboard_data
                ? _c("lender-redirect-rates", {
                    attrs: { "redirect-data": _vm.data.dashboard_data },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "4", md: "4" } },
            [
              _vm.data.dashboard_data
                ? _c("ecommerce-browser-states", {
                    attrs: { "redirect-data": _vm.data.dashboard_data },
                  })
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=template&id=70c67ece&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=template&id=70c67ece& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "card-browser-states", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c(
            "div",
            [
              _c("b-card-text", { staticClass: "font-small-2" }, [
                _c("h6", [
                  _vm._v(
                    "\n                        Top Referrers UK/US\n\n                    "
                  ),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              staticClass: "chart-dropdown",
              attrs: { variant: "link", "no-caret": "", "toggle-class": "p-0" },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [
                      _c("feather-icon", {
                        staticClass: "text-body cursor-pointer",
                        attrs: { icon: "MoreVerticalIcon", size: "18" },
                      }),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                    Last 28 Days\n                "),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                    Last Month\n                "),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                    Last Year\n                "),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-body",
        _vm._l(
          _vm.redirectData.top_referrers.original.referrers,
          function (browser, index) {
            return _c(
              "div",
              { key: browser.browserImg, staticClass: "browser-states" },
              [
                _c(
                  "b-media",
                  { attrs: { "no-body": "" } },
                  [
                    _c(
                      "b-media-body",
                      [
                        _c("b-badge", { attrs: { variant: "light-primary" } }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(browser.referringUrl) +
                              "\n                        "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex align-items-center" }),
              ],
              1
            )
          }
        ),
        0
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "earnings-card" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c("vue-apex-charts", {
                    attrs: {
                      height: "120",
                      options: _vm.earningsChart.chartOptions,
                      series: _vm.data.todayEarnings.series,
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
            "b-row",
            { staticClass: "text-center mx-0" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top border-right d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n                     Leads\n                  "),
                  ]),
                  _vm._v(" "),
                  _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.data.lead_count.today) +
                        "\n                  "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" },
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v(
                      "\n                       Commission\n                  "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("h5", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n                      £ " +
                        _vm._s(_vm.data.todayEarnings.today_revenue) +
                        "\n                  "
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=template&id=c7ffd80a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=template&id=c7ffd80a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-congratulation-medal" },
        [
          _c("h5", [
            _vm._v("Congratulations 🎉 " + _vm._s(_vm.data.name) + "!"),
          ]),
          _vm._v(" "),
          _c("b-card-text", { staticClass: "font-small-3" }, [
            _vm._v("\n    You have won gold medal\n  "),
          ]),
          _vm._v(" "),
          _c(
            "h3",
            { staticClass: "mb-75 mt-2 pt-50" },
            [
              _c("b-link", [
                _vm._v("$" + _vm._s(_vm.kFormatter(_vm.data.saleToday))),
              ]),
            ],
            1
          ),
          _vm._v(" "),
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
              ],
              attrs: { variant: "primary" },
            },
            [_vm._v("\n    View Sales\n  ")]
          ),
          _vm._v(" "),
          _c("b-img", {
            staticClass: "congratulation-medal",
            attrs: {
              src: __webpack_require__(/*! @/assets/images/illustration/badge.svg */ "./resources/js/src/assets/images/illustration/badge.svg"),
              alt: "Medal Pic",
            },
          }),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=template&id=4bd6f64e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=template&id=4bd6f64e& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-developer-meetup", attrs: { "no-body": "" } },
        [
          _c(
            "div",
            { staticClass: "bg-light-primary rounded-top text-center" },
            [
              _c("b-img", {
                attrs: {
                  src: __webpack_require__(/*! @/assets/images/illustration/email.svg */ "./resources/js/src/assets/images/illustration/email.svg"),
                  alt: "Meeting Pic",
                  height: "170",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "div",
                { staticClass: "meetup-header d-flex align-items-center" },
                [
                  _c("div", { staticClass: "meetup-day" }, [
                    _c("h6", { staticClass: "mb-0" }, [
                      _vm._v("\n          THU\n        "),
                    ]),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v("\n          24\n        "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "my-auto" },
                    [
                      _c("b-card-title", { staticClass: "mb-25" }, [
                        _vm._v("\n          Developer Meetup\n        "),
                      ]),
                      _vm._v(" "),
                      _c("b-card-text", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n          Meet world popular developers\n        "
                        ),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.data.mediaData, function (media) {
                return _c(
                  "b-media",
                  { key: media.avatar, attrs: { "no-body": "" } },
                  [
                    _c(
                      "b-media-aside",
                      { staticClass: "mr-1" },
                      [
                        _c(
                          "b-avatar",
                          {
                            attrs: {
                              rounded: "",
                              variant: "light-primary",
                              size: "34",
                            },
                          },
                          [
                            _c("feather-icon", {
                              attrs: { icon: media.avatar, size: "18" },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-media-body", [
                      _c("h6", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n          " + _vm._s(media.title) + "\n        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v(_vm._s(media.subtitle))]),
                    ]),
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "b-avatar-group",
                { staticClass: "mt-2 pt-50", attrs: { size: "34px" } },
                [
                  _vm._l(_vm.data.avatars, function (avatar) {
                    return _c("b-avatar", {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.bottom",
                          value: avatar.fullName,
                          expression: "avatar.fullName",
                          modifiers: { hover: true, bottom: true },
                        },
                      ],
                      key: avatar.avatar,
                      staticClass: "pull-up",
                      attrs: { src: avatar.avatar },
                    })
                  }),
                  _vm._v(" "),
                  _c(
                    "h6",
                    {
                      staticClass: "align-self-center cursor-pointer ml-1 mb-0",
                    },
                    [_vm._v("\n        +42\n      ")]
                  ),
                ],
                2
              ),
            ],
            2
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=template&id=600ae95c&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=template&id=600ae95c& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { attrs: { "body-class": "pb-50" } },
        [
          _c("h6", [_vm._v("Orders")]),
          _vm._v(" "),
          _c("h2", { staticClass: "font-weight-bolder mb-1" }, [
            _vm._v("\n    2,76k\n  "),
          ]),
          _vm._v(" "),
          _c("vue-apex-charts", {
            attrs: {
              height: "70",
              options: _vm.statisticsOrder.chartOptions,
              series: _vm.data.series,
            },
          }),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=template&id=a2618304&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=template&id=a2618304& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        {
          staticClass: "card-tiny-line-stats",
          attrs: { "body-class": "pb-50" },
        },
        [
          _c("h6", [_vm._v("Profit")]),
          _vm._v(" "),
          _c("h2", { staticClass: "font-weight-bolder mb-1" }, [
            _vm._v("\n    6,24k\n  "),
          ]),
          _vm._v(" "),
          _c("vue-apex-charts", {
            attrs: {
              height: "70",
              options: _vm.statisticsProfit.chartOptions,
              series: _vm.data.series,
            },
          }),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-revenue-budget", attrs: { "no-body": "" } },
        [
          _c("p", [_vm._v("\n        " + _vm._s(_vm.series) + "\n    ")]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mx-0" },
            [
              _c(
                "b-col",
                { staticClass: "revenue-report-wrapper", attrs: { md: "8" } },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-sm-flex justify-content-between align-items-center mb-3",
                    },
                    [
                      _c("h4", { staticClass: "card-title mb-50 mb-sm-0" }, [
                        _vm._v("\n          Revenue Report\n        "),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center mr-2" },
                          [
                            _c("span", {
                              staticClass:
                                "bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer",
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Earning")]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center ml-75" },
                          [
                            _c("span", {
                              staticClass:
                                "bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer",
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Expense")]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "area",
                      height: "400",
                      options:
                        _vm.apexChartData.lineAreaChartSpline.chartOptions,
                      series: _vm.apexChartData.lineAreaChartSpline.series,
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "budget-wrapper", attrs: { md: "4" } },
                [
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "budget-dropdown",
                      attrs: {
                        text: "2020",
                        size: "sm",
                        variant: "outline-primary",
                      },
                    },
                    _vm._l(_vm.data.years, function (year) {
                      return _c("b-dropdown-item", { key: year }, [
                        _vm._v("\n          " + _vm._s(year) + "\n        "),
                      ])
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("h2", { staticClass: "mb-25" }, [
                    _vm._v("\n        $" + _vm._s(_vm.data.price) + "\n      "),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex justify-content-center" }, [
                    _c("span", { staticClass: "font-weight-bolder mr-25" }, [
                      _vm._v("Budget:"),
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("56,800")]),
                  ]),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      id: "budget-chart",
                      type: "line",
                      height: "80",
                      options: _vm.budgetChart.options,
                      series: _vm.data.budgetChart.series,
                    },
                  }),
                  _vm._v(" "),
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
                      ],
                      attrs: { variant: "primary" },
                    },
                    [_vm._v("\n        Increase Budget\n      ")]
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=template&id=0932a7cf&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=template&id=0932a7cf& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-statistics", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("b-card-title", [_vm._v("Statistics")]),
              _vm._v(" "),
              _c("b-card-text", { staticClass: "font-small-2 mr-25 mb-0" }, [
                _vm._v("\n      Updated 1 month ago\n    "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            { staticClass: "statistics-body" },
            [
              _c(
                "b-row",
                _vm._l(_vm.data, function (item) {
                  return _c(
                    "b-col",
                    {
                      key: item.icon,
                      class: item.customClass,
                      attrs: { xl: "3", sm: "6" },
                    },
                    [
                      _c(
                        "b-media",
                        { attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-media-aside",
                            { staticClass: "mr-2" },
                            [
                              _c(
                                "b-avatar",
                                { attrs: { size: "48", variant: item.color } },
                                [
                                  _c("feather-icon", {
                                    attrs: { size: "24", icon: item.icon },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-media-body",
                            { staticClass: "my-auto" },
                            [
                              _c(
                                "h4",
                                { staticClass: "font-weight-bolder mb-0" },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.title) +
                                      "\n            "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-card-text",
                                { staticClass: "font-small-3 mb-0" },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.subtitle) +
                                      "\n            "
                                  ),
                                ]
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
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.tableData
    ? _c(
        "b-card",
        { staticClass: "card-company-table", attrs: { "no-body": "" } },
        [
          _c("b-table", {
            staticClass: "mb-0",
            attrs: {
              items: _vm.tableData.dashboard_data.lender_table_data,
              responsive: "",
              fields: _vm.fields,
              striped: true,
              borderless: true,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "cell(buyerTierID)",
                  fn: function (data) {
                    return [
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c(
                          "div",
                          { staticClass: "font-weight-bolder" },
                          [
                            _c(
                              "b-badge",
                              { attrs: { variant: "light-primary" } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(data.item.tier_name) +
                                    "\n                    "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-small-2 text-muted" }),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(leads_today)",
                  fn: function (data) {
                    return [
                      _c("div", { staticClass: "d-flex flex-column" }, [
                        _c(
                          "span",
                          { staticClass: "font-weight-bolder mb-25" },
                          [_vm._v("   " + _vm._s(data.item.leads_today))]
                        ),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(revenue_today)",
                  fn: function (data) {
                    return [
                      _vm._v(
                        "\n            " +
                          _vm._s("£" + data.item.revenue_today.toFixed(2)) +
                          "\n        "
                      ),
                    ]
                  },
                },
                {
                  key: "cell(profit_today)",
                  fn: function (data) {
                    return [
                      _c("span", { staticClass: "text-success bold" }, [
                        _vm._v(
                          "\n             " +
                            _vm._s("£" + data.item.profit_today.toFixed(2)) +
                            "\n        "
                        ),
                      ]),
                    ]
                  },
                },
                {
                  key: "cell(ratio_today)",
                  fn: function (data) {
                    return [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c(
                            "span",
                            { staticClass: "font-weight-bolder mr-1" },
                            [_vm._v(_vm._s(data.item.ratio_today + "%"))]
                          ),
                          _vm._v(" "),
                          _c("feather-icon", {
                            class: data.item.loss
                              ? "text-danger"
                              : "text-success",
                            attrs: {
                              icon: data.item.loss
                                ? "TrendingDownIcon"
                                : "TrendingUpIcon",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  },
                },
              ],
              null,
              false,
              3049302337
            ),
          }),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=template&id=e8017e32&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=template&id=e8017e32& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "card-browser-states", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c(
            "div",
            [
              _c("b-card-text", { staticClass: "font-small-2" }, [
                _c("h6", [
                  _vm._v(
                    "\n                    Lender Redirection Rates\n\n                "
                  ),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              staticClass: "chart-dropdown",
              attrs: { variant: "link", "no-caret": "", "toggle-class": "p-0" },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [
                      _c("feather-icon", {
                        staticClass: "text-body cursor-pointer",
                        attrs: { icon: "MoreVerticalIcon", size: "18" },
                      }),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                Last 28 Days\n            "),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                Last Month\n            "),
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n                Last Year\n            "),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-body",
        _vm._l(_vm.redirectData.lender_redirection, function (browser, index) {
          return _c(
            "div",
            { key: browser.browserImg, staticClass: "browser-states" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c(
                    "b-media-body",
                    [
                      _c("b-badge", { attrs: { variant: "light-primary" } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(browser.tier_name) +
                            "\n                    "
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c(
                    "span",
                    { staticClass: "font-weight-bold text-body-heading mr-1" },
                    [_vm._v(_vm._s(browser.redirect_ratio + "%"))]
                  ),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "radialBar",
                      height: "30",
                      width: "30",
                      options: _vm.chart.options,
                      series: [browser.redirect_ratio],
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        }),
        0
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/utils/filter.js":
/*!************************************************!*\
  !*** ./resources/js/src/@core/utils/filter.js ***!
  \************************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/utils/utils.js");














var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var _Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_3__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/badge.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/badge.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/illustration/badge.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/email.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/email.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/illustration/email.svg";

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AffiliateCompanyTable_vue_vue_type_template_id_3954850a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true& */ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true&");
/* harmony import */ var _AffiliateCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffiliateCompanyTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AffiliateCompanyTable_vue_vue_type_style_index_0_id_3954850a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true& */ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AffiliateCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AffiliateCompanyTable_vue_vue_type_template_id_3954850a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AffiliateCompanyTable_vue_vue_type_template_id_3954850a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3954850a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AffiliateCompanyTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_style_index_0_id_3954850a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=style&index=0&id=3954850a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_style_index_0_id_3954850a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_style_index_0_id_3954850a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_style_index_0_id_3954850a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_style_index_0_id_3954850a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_template_id_3954850a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateCompanyTable.vue?vue&type=template&id=3954850a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_template_id_3954850a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateCompanyTable_vue_vue_type_template_id_3954850a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AffiliateRedirectRates_vue_vue_type_template_id_67ab66ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae& */ "./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae&");
/* harmony import */ var _AffiliateRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffiliateRedirectRates.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AffiliateRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AffiliateRedirectRates_vue_vue_type_template_id_67ab66ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AffiliateRedirectRates_vue_vue_type_template_id_67ab66ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AffiliateRedirectRates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateRedirectRates_vue_vue_type_template_id_67ab66ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/AffiliateRedirectRates.vue?vue&type=template&id=67ab66ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateRedirectRates_vue_vue_type_template_id_67ab66ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AffiliateRedirectRates_vue_vue_type_template_id_67ab66ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApexLineAreaChart_vue_vue_type_template_id_c61625f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApexLineAreaChart.vue?vue&type=template&id=c61625f2& */ "./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=template&id=c61625f2&");
/* harmony import */ var _ApexLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApexLineAreaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApexLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApexLineAreaChart_vue_vue_type_template_id_c61625f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApexLineAreaChart_vue_vue_type_template_id_c61625f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApexLineAreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=template&id=c61625f2&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=template&id=c61625f2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexLineAreaChart_vue_vue_type_template_id_c61625f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApexLineAreaChart.vue?vue&type=template&id=c61625f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/ApexLineAreaChart.vue?vue&type=template&id=c61625f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexLineAreaChart_vue_vue_type_template_id_c61625f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApexLineAreaChart_vue_vue_type_template_id_c61625f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyTable_vue_vue_type_template_id_8f0f2296_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true& */ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true&");
/* harmony import */ var _CompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyTable_vue_vue_type_style_index_0_id_8f0f2296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true& */ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyTable_vue_vue_type_template_id_8f0f2296_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyTable_vue_vue_type_template_id_8f0f2296_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8f0f2296",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/CompanyTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_style_index_0_id_8f0f2296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=style&index=0&id=8f0f2296&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_style_index_0_id_8f0f2296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_style_index_0_id_8f0f2296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_style_index_0_id_8f0f2296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_style_index_0_id_8f0f2296_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_template_id_8f0f2296_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/CompanyTable.vue?vue&type=template&id=8f0f2296&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_template_id_8f0f2296_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTable_vue_vue_type_template_id_8f0f2296_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EarningsMonth_vue_vue_type_template_id_67f138a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EarningsMonth.vue?vue&type=template&id=67f138a3& */ "./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=template&id=67f138a3&");
/* harmony import */ var _EarningsMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EarningsMonth.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EarningsMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EarningsMonth_vue_vue_type_template_id_67f138a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EarningsMonth_vue_vue_type_template_id_67f138a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsMonth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=template&id=67f138a3&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=template&id=67f138a3& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsMonth_vue_vue_type_template_id_67f138a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsMonth.vue?vue&type=template&id=67f138a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsMonth.vue?vue&type=template&id=67f138a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsMonth_vue_vue_type_template_id_67f138a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsMonth_vue_vue_type_template_id_67f138a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EarningsProfit_vue_vue_type_template_id_8ed0069e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EarningsProfit.vue?vue&type=template&id=8ed0069e& */ "./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=template&id=8ed0069e&");
/* harmony import */ var _EarningsProfit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EarningsProfit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EarningsProfit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EarningsProfit_vue_vue_type_template_id_8ed0069e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EarningsProfit_vue_vue_type_template_id_8ed0069e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsProfit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsProfit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsProfit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=template&id=8ed0069e&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=template&id=8ed0069e& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsProfit_vue_vue_type_template_id_8ed0069e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsProfit.vue?vue&type=template&id=8ed0069e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsProfit.vue?vue&type=template&id=8ed0069e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsProfit_vue_vue_type_template_id_8ed0069e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsProfit_vue_vue_type_template_id_8ed0069e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EarningsToday_vue_vue_type_template_id_45556ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EarningsToday.vue?vue&type=template&id=45556ce4& */ "./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=template&id=45556ce4&");
/* harmony import */ var _EarningsToday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EarningsToday.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EarningsToday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EarningsToday_vue_vue_type_template_id_45556ce4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EarningsToday_vue_vue_type_template_id_45556ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EarningsToday.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsToday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsToday.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsToday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=template&id=45556ce4&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=template&id=45556ce4& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsToday_vue_vue_type_template_id_45556ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsToday.vue?vue&type=template&id=45556ce4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsToday.vue?vue&type=template&id=45556ce4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsToday_vue_vue_type_template_id_45556ce4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsToday_vue_vue_type_template_id_45556ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EarningsWeek_vue_vue_type_template_id_b23d10be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EarningsWeek.vue?vue&type=template&id=b23d10be& */ "./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=template&id=b23d10be&");
/* harmony import */ var _EarningsWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EarningsWeek.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EarningsWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EarningsWeek_vue_vue_type_template_id_b23d10be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EarningsWeek_vue_vue_type_template_id_b23d10be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsWeek.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=template&id=b23d10be&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=template&id=b23d10be& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsWeek_vue_vue_type_template_id_b23d10be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EarningsWeek.vue?vue&type=template&id=b23d10be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EarningsWeek.vue?vue&type=template&id=b23d10be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsWeek_vue_vue_type_template_id_b23d10be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EarningsWeek_vue_vue_type_template_id_b23d10be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ecommerce_vue_vue_type_template_id_1e2815e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=template&id=1e2815e8& */ "./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=template&id=1e2815e8&");
/* harmony import */ var _Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ecommerce_vue_vue_type_template_id_1e2815e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ecommerce_vue_vue_type_template_id_1e2815e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/Ecommerce.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=template&id=1e2815e8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=template&id=1e2815e8& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_1e2815e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=template&id=1e2815e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/Ecommerce.vue?vue&type=template&id=1e2815e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_1e2815e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_1e2815e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceBrowserStates_vue_vue_type_template_id_70c67ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceBrowserStates.vue?vue&type=template&id=70c67ece& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=template&id=70c67ece&");
/* harmony import */ var _EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceBrowserStates.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceBrowserStates_vue_vue_type_template_id_70c67ece___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceBrowserStates_vue_vue_type_template_id_70c67ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceBrowserStates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=template&id=70c67ece&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=template&id=70c67ece& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_template_id_70c67ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceBrowserStates.vue?vue&type=template&id=70c67ece& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceBrowserStates.vue?vue&type=template&id=70c67ece&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_template_id_70c67ece___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_template_id_70c67ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceEarningsChart_vue_vue_type_template_id_3b8b36b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9&");
/* harmony import */ var _EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceEarningsChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceEarningsChart_vue_vue_type_template_id_3b8b36b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceEarningsChart_vue_vue_type_template_id_3b8b36b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceEarningsChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_template_id_3b8b36b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceEarningsChart.vue?vue&type=template&id=3b8b36b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_template_id_3b8b36b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_template_id_3b8b36b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceMedal_vue_vue_type_template_id_c7ffd80a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceMedal.vue?vue&type=template&id=c7ffd80a& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=template&id=c7ffd80a&");
/* harmony import */ var _EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceMedal.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceMedal_vue_vue_type_template_id_c7ffd80a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceMedal_vue_vue_type_template_id_c7ffd80a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMedal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=template&id=c7ffd80a&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=template&id=c7ffd80a& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_template_id_c7ffd80a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMedal.vue?vue&type=template&id=c7ffd80a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMedal.vue?vue&type=template&id=c7ffd80a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_template_id_c7ffd80a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_template_id_c7ffd80a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceMeetup_vue_vue_type_template_id_4bd6f64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceMeetup.vue?vue&type=template&id=4bd6f64e& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=template&id=4bd6f64e&");
/* harmony import */ var _EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceMeetup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceMeetup_vue_vue_type_template_id_4bd6f64e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceMeetup_vue_vue_type_template_id_4bd6f64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMeetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=template&id=4bd6f64e&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=template&id=4bd6f64e& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_template_id_4bd6f64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMeetup.vue?vue&type=template&id=4bd6f64e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceMeetup.vue?vue&type=template&id=4bd6f64e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_template_id_4bd6f64e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_template_id_4bd6f64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceOrderChart_vue_vue_type_template_id_600ae95c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceOrderChart.vue?vue&type=template&id=600ae95c& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=template&id=600ae95c&");
/* harmony import */ var _EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceOrderChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceOrderChart_vue_vue_type_template_id_600ae95c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceOrderChart_vue_vue_type_template_id_600ae95c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceOrderChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=template&id=600ae95c&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=template&id=600ae95c& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_template_id_600ae95c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceOrderChart.vue?vue&type=template&id=600ae95c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceOrderChart.vue?vue&type=template&id=600ae95c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_template_id_600ae95c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_template_id_600ae95c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceProfitChart_vue_vue_type_template_id_a2618304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceProfitChart.vue?vue&type=template&id=a2618304& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=template&id=a2618304&");
/* harmony import */ var _EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceProfitChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceProfitChart_vue_vue_type_template_id_a2618304___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceProfitChart_vue_vue_type_template_id_a2618304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceProfitChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=template&id=a2618304&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=template&id=a2618304& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_template_id_a2618304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceProfitChart.vue?vue&type=template&id=a2618304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceProfitChart.vue?vue&type=template&id=a2618304&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_template_id_a2618304___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_template_id_a2618304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceRevenueReport_vue_vue_type_template_id_5cf594f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4&");
/* harmony import */ var _EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceRevenueReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceRevenueReport_vue_vue_type_template_id_5cf594f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceRevenueReport_vue_vue_type_template_id_5cf594f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceRevenueReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_template_id_5cf594f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceRevenueReport.vue?vue&type=template&id=5cf594f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_template_id_5cf594f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_template_id_5cf594f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceStatistics_vue_vue_type_template_id_0932a7cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceStatistics.vue?vue&type=template&id=0932a7cf& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=template&id=0932a7cf&");
/* harmony import */ var _EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceStatistics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceStatistics_vue_vue_type_template_id_0932a7cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceStatistics_vue_vue_type_template_id_0932a7cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceStatistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=template&id=0932a7cf&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=template&id=0932a7cf& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_template_id_0932a7cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceStatistics.vue?vue&type=template&id=0932a7cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/EcommerceStatistics.vue?vue&type=template&id=0932a7cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_template_id_0932a7cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_template_id_0932a7cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenderCompanyTable_vue_vue_type_template_id_0f20009e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true& */ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true&");
/* harmony import */ var _LenderCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LenderCompanyTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LenderCompanyTable_vue_vue_type_style_index_0_id_0f20009e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true& */ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LenderCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LenderCompanyTable_vue_vue_type_template_id_0f20009e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LenderCompanyTable_vue_vue_type_template_id_0f20009e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f20009e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LenderCompanyTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_style_index_0_id_0f20009e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=style&index=0&id=0f20009e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_style_index_0_id_0f20009e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_style_index_0_id_0f20009e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_style_index_0_id_0f20009e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_style_index_0_id_0f20009e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_template_id_0f20009e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderCompanyTable.vue?vue&type=template&id=0f20009e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_template_id_0f20009e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderCompanyTable_vue_vue_type_template_id_0f20009e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LenderRedirectRates_vue_vue_type_template_id_e8017e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LenderRedirectRates.vue?vue&type=template&id=e8017e32& */ "./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=template&id=e8017e32&");
/* harmony import */ var _LenderRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LenderRedirectRates.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LenderRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LenderRedirectRates_vue_vue_type_template_id_e8017e32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LenderRedirectRates_vue_vue_type_template_id_e8017e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LenderRedirectRates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderRedirectRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=template&id=e8017e32&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=template&id=e8017e32& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderRedirectRates_vue_vue_type_template_id_e8017e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LenderRedirectRates.vue?vue&type=template&id=e8017e32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/admin/uk/LenderRedirectRates.vue?vue&type=template&id=e8017e32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderRedirectRates_vue_vue_type_template_id_e8017e32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LenderRedirectRates_vue_vue_type_template_id_e8017e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/admin/uk/apexChartData.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/admin/uk/apexChartData.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");









function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    }); // eslint-disable-next-line no-plusplus

    i++;
  }

  return series;
} // colors


var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#2b9bf4',
    series3: '#826bf8',
    series4: '#00d4bd',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#7e6df6',
    series2: '#9283fa',
    series1: '#a395ff'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: true
        },
        toolbar: {
          show: true
        }
      },
      markers: {
        strokeWidth: 7,
        strokeOpacity: 1,
        strokeColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].light],
        colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].warning]
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        custom: function custom(data) {
          return '<div class="px-1 py-50"><span>'.concat(data.series[data.seriesIndex][data.dataPointIndex], "%</span></div>");
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12']
      },
      yaxis: {// opposite: isRtl,
      }
    }
  },
  lineAreaChartSpline: {
    series: [{
      name: 'Leads',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
    }, {
      name: 'Sales',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
    }, {
      name: 'Impressions',
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false,
        curve: 'straight'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '14px',
        fontFamily: 'Montserrat'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12']
      },
      yaxis: {// opposite: isRtl
      },
      fill: {
        opacity: 1,
        type: 'solid'
      },
      tooltip: {
        shared: false
      },
      colors: [chartColors.area.series3, chartColors.area.series2, chartColors.area.series1]
    }
  },
  columnChart: {
    series: [{
      name: 'Apple',
      data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180]
    }, {
      name: 'Samsung',
      data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20]
    }],
    chartOptions: {
      chart: {
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: [chartColors.column.series1, chartColors.column.series2],
      plotOptions: {
        bar: {
          columnWidth: '15%',
          colors: {
            backgroundBarColors: [chartColors.column.bg, chartColors.column.bg, chartColors.column.bg, chartColors.column.bg, chartColors.column.bg],
            backgroundBarRadius: 10
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'top',
        fontSize: '14px',
        fontFamily: 'Montserrat',
        horizontalAlign: 'left'
      },
      stroke: {
        show: true,
        colors: ['transparent']
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12']
      },
      yaxis: {// opposite: isRtl,
      },
      fill: {
        opacity: 1
      }
    }
  },
  barChart: {
    series: [{
      data: [700, 350, 480, 600, 210, 550, 150]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      colors: _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].info,
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          endingShape: 'rounded'
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23']
      },
      yaxis: {// opposite: isRtl,
      }
    }
  },
  candlestickChart: {
    series: [{
      data: [{
        x: new Date(1538778600000),
        y: [150, 170, 50, 100]
      }, {
        x: new Date(1538780400000),
        y: [200, 400, 170, 330]
      }, {
        x: new Date(1538782200000),
        y: [330, 340, 250, 280]
      }, {
        x: new Date(1538784000000),
        y: [300, 330, 200, 320]
      }, {
        x: new Date(1538785800000),
        y: [320, 450, 280, 350]
      }, {
        x: new Date(1538787600000),
        y: [300, 350, 80, 250]
      }, {
        x: new Date(1538789400000),
        y: [200, 330, 170, 300]
      }, {
        x: new Date(1538791200000),
        y: [200, 220, 70, 130]
      }, {
        x: new Date(1538793000000),
        y: [220, 270, 180, 250]
      }, {
        x: new Date(1538794800000),
        y: [200, 250, 80, 100]
      }, {
        x: new Date(1538796600000),
        y: [150, 170, 50, 120]
      }, {
        x: new Date(1538798400000),
        y: [110, 450, 10, 420]
      }, {
        x: new Date(1538800200000),
        y: [400, 480, 300, 320]
      }, {
        x: new Date(1538802000000),
        y: [380, 480, 350, 450]
      }]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        } // opposite: isRtl,

      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: false
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].success,
            downward: _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].danger
          }
        },
        bar: {
          columnWidth: '40%'
        }
      }
    }
  },
  scatterChart: {
    series: [{
      name: 'Angular',
      data: [[5.4, 170], [5.4, 100], [6.3, 170], [5.7, 140], [5.9, 130], [7.0, 150], [8.0, 120], [9.0, 170], [10.0, 190], [11.0, 220], [12.0, 170], [13.0, 230]]
    }, {
      name: 'Vue',
      data: [[14.0, 220], [15.0, 280], [16.0, 230], [18.0, 320], [17.5, 280], [19.0, 250], [20.0, 350], [20.5, 320], [20.0, 320], [19.0, 280], [17.0, 280], [22.0, 300], [18.0, 120]]
    }, {
      name: 'React',
      data: [[14.0, 290], [13.0, 190], [20.0, 220], [21.0, 350], [21.5, 290], [22.0, 220], [23.0, 140], [19.0, 400], [20.0, 200], [22.0, 90], [20.0, 120]]
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: true,
          type: 'xy'
        },
        toolbar: {
          show: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].warning, _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"].success],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function formatter(val) {
            return parseFloat(val).toFixed(1);
          }
        }
      },
      yaxis: {// opposite: isRtl,
      }
    }
  },
  heatMapChart: {
    series: [{
      name: 'SUN',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'MON',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'TUE',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'WED',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'THU',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'FRI',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'SAT',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }],
    chartOptions: {
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      colors: ['#7367F0'],
      plotOptions: {
        heatmap: {
          enableShades: false,
          colorScale: {
            ranges: [{
              from: 0,
              to: 10,
              name: '0-10',
              color: '#b9b3f8'
            }, {
              from: 11,
              to: 20,
              name: '10-20',
              color: '#aba4f6'
            }, {
              from: 21,
              to: 30,
              name: '20-30',
              color: '#9d95f5'
            }, {
              from: 31,
              to: 40,
              name: '30-40',
              color: '#8f85f3'
            }, {
              from: 41,
              to: 50,
              name: '40-50',
              color: '#8176f2'
            }, {
              from: 51,
              to: 60,
              name: '50-60',
              color: '#7367f0'
            }]
          }
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      }
    }
  },
  donutChart: {
    series: [85, 16, 50, 50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: 'Montserrat'
      },
      colors: [chartColors.donut.series1, chartColors.donut.series5, chartColors.donut.series3, chartColors.donut.series2],
      dataLabels: {
        enabled: true,
        formatter: function formatter(val) {
          // eslint-disable-next-line radix
          return "".concat(parseInt(val), "%");
        }
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat'
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter: function formatter(val) {
                  // eslint-disable-next-line radix
                  return "".concat(parseInt(val), "%");
                }
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter: function formatter() {
                  return '31%';
                }
              }
            }
          }
        }
      },
      labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
      responsive: [{
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      }, {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
          },
          legend: {
            show: true
          }
        }
      }]
    }
  },
  radialBarChart: {
    series: [80, 50, 35],
    chartOptions: {
      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series4],
      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: '25%'
          },
          track: {
            margin: 15
          },
          dataLabels: {
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat'
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Comments',
              formatter: function formatter() {
                return '80%';
              }
            }
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center'
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Comments', 'Replies', 'Shares']
    }
  },
  radarChart: {
    series: [{
      name: 'iPhone 11',
      data: [41, 64, 81, 60, 42, 42, 33, 23]
    }, {
      name: 'Samsung s20',
      data: [65, 46, 42, 25, 58, 63, 76, 43]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: false,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        }
      },
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: 'Montserrat'
      },
      yaxis: {
        show: false
      },
      colors: [chartColors.donut.series1, chartColors.donut.series3],
      xaxis: {
        categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price']
      },
      fill: {
        opacity: [1, 0.8]
      },
      stroke: {
        show: false,
        width: 0
      },
      markers: {
        size: 0
      },
      grid: {
        show: false
      }
    }
  }
});

/***/ })

}]);