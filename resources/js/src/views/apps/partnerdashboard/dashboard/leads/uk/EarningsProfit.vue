<template>
    <b-card no-body>
        <b-card-header>

            <h4 class="mb-0">
                Today
            </h4>
            <b-card-text class="font-medium-5 mb-0">
                <feather-icon
                    icon="HelpCircleIcon"
                    size="21"
                    class="text-muted cursor-pointer"
                />
            </b-card-text>
        </b-card-header>

        <!-- apex chart -->
        <vue-apex-charts
            type="radialBar"
            height="180"
            :options="goalOverviewRadialBar"
            :series="[dashboardData.dashboard_data.profitEarnings.redirection.redirected_ratio[0]]"/>

        <b-row class="text-center mx-0">
            <b-col
                cols="6"
                class="border-top border-right d-flex align-items-between flex-column py-1"
            >
                <b-card-text class="text-muted mb-0">
                    <small>
                        Leads
                    </small>
                </b-card-text>
                <h3 class="font-weight-bolder mb-50">
                    000
                </h3>
            </b-col>

            <b-col
                cols="6"
                class="border-top d-flex align-items-between flex-column py-1"
            >
                <b-card-text class="text-muted mb-0">
                    <small>
                        Commission
                    </small>
                </b-card-text>
                <h3 class="font-weight-bolder mb-0">
                    £ {{dashboardData.dashboard_data.profitEarnings.profit_total.toFixed(2) }}
                </h3>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    import {
        BCard, BCardHeader, BRow, BCol, BCardText,VBTooltip
    } from 'bootstrap-vue'
    import VueApexCharts from 'vue-apexcharts'
    import { $themeColors } from '@themeConfig'
    import Ripple from 'vue-ripple-directive'
    const $strokeColor = '#ebe9f1'
    const $textHeadingColor = '#5e5873'
    const $goalStrokeColor2 = '#51e5a8'

    export default {
        components: {
            VueApexCharts,
            BCard,
            BCardHeader,
            BRow,
            BCardText,
            BCol,
            VBTooltip,
        },
        directives: {
            'b-tooltip': VBTooltip,
            Ripple,
        },
        props: {
            dashboardData: {
                type: Object,
                required:true,
            },
            title: {
                type: String,
                default: null,
            },

        },
        data() {
            return {
                goalOverviewRadialBar: {
                    series: [12],
                    chart: {
                        height: 180,
                        type: 'radialBar',
                        sparkline: {
                            enabled: true,
                        },
                        dropShadow: {
                            enabled: true,
                            blur: 3,
                            left: 1,
                            top: 1,
                            opacity: 0.1,
                        },
                    },
                    colors: [$goalStrokeColor2],
                    plotOptions: {
                        radialBar: {
                            offsetY: -10,
                            startAngle: -150,
                            endAngle: 150,
                            hollow: {
                                size: '77%',
                            },
                            track: {
                                background: $strokeColor,
                                strokeWidth: '100%',
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                },
                                value: {
                                    color: $textHeadingColor,
                                    fontSize: '1.86rem',
                                    fontWeight: '600',
                                },
                            },
                        },
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            type: 'horizontal',
                            shadeIntensity: 0.5,
                            gradientToColors: [$themeColors.success],
                            inverseColors: true,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100],
                        },
                    },
                    stroke: {
                        lineCap: 'round',
                    },
                    grid: {
                        padding: {
                            bottom: 30,
                        },
                    },
                },
            }
        },
        created() {
            this.$http.get('/card/card-analytics/goal-overview').then(res => { this.goal_overview = res.data })
        },
    }
</script>
