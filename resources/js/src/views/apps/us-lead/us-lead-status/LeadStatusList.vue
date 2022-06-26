<template>
  <div>
    <!-- Filters -->
    <us-leads-list-filters
      :status-filter.sync="statusFilter"
      :affiliate-filter="affiliateFilter"
      :sub-id-filter="subIdFilter"
      :tier-filter="tierFilter"
      :vendor-price-filter="vendorPriceFilter"
      :buyer-price-filter="buyerPriceFilter"
      :lead-quality-filter="leadQualityFilter"
      :redirection-filter="redirectionFilter"
      :role-options="roleOptions"
      :plan-options="planOptions"
      :status-options="statusOptions"
    />

    <!-- Table Container Card -->
    <b-card no-body class="mb-0">
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <!-- Search -->
          <b-col cols="12" md="6">
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
            </div>
          </b-col>
        </b-row>
      </div>

<!--        // TODO swap for vue-good-table-->
      <b-table
        ref="refUSLeadsListTable"
        class="position-relative"
        :items="fetchUSLeads"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        :default-sort-direction="desc"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        variant="primary"
        :small="true"
        :striped="true"
        :bordered="true"
        :borderless="true"
        :hover="true"

      >
        <template #cell(id)="data">
          <b-link
            :to="{
              name: 'apps-us-lead-view',
              params: { id: data.item.id },
            }"
            class="font-weight-bold"
          >
            <small> #{{ data.item.id }} </small>
          </b-link>
        </template>

        <template #cell(info)="data">
          <b-avatar
            :id="`us-lead-row-${data.item.id}`"
            size="32"
            :variant="`light-${
              resolveUSLeadsStatusVariantAndIcon(data.item.leadStatus).variant
            }`"
          >
            <feather-icon
              :icon="resolveUSLeadsStatusVariantAndIcon(data.item.leadStatus).icon"
            />
          </b-avatar>
          <b-tooltip :target="`us-lead-row-${data.item.id}`" placement="top">
            <p class="mb-0">Processed</p>
            <p class="mb-0">Post Time: 52 secs</p>
            <p class="mb-0">
              <small
                v-if="data.item.isRedirected == 1"
                class="align-text-top text-capitalize text-success"
                >100% Redirect
              </small>
              <small
                v-else
                class="align-text-top text-capitalize text-danger">
                  0% - Non-Redirect
              </small>
            </p>
          </b-tooltip>
        </template>
        <template #cell(quality_score)="data">

              <small
                v-if="data.item.quality_score >= 80"
                class="align-text-top text-capitalize text-danger"
                >{{ data.item.quality_score }}</small
              >
              <small
                v-else-if="data.item.quality_score >= 50 && data.item.quality_score <= 79"
                class="align-text-top text-capitalize text-warning"
                >{{ data.quality_score }}</small
              >
              <small
                v-else-if="data.item.quality_score >= 1 && data.item.quality_score <= 49"
                class="align-text-top text-capitalize text-secondary"
                >{{ data.item.quality_score }}</small>
        </template>

        <template #cell(vid)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-link
                :to="{
                  name: 'apps-us-lead-view',
                  params: { id: data.item.id },
                }"
                class="font-weight-bold d-block text-nowrap"
              >
                <b-badge>
                  <span class="align-text-top text-capitalize">{{
                    data.item.vid
                  }}</span>
                </b-badge>
              </b-link>
            </template>
          </b-media>
        </template>

          <template #cell(subid)="data">
              <b-media vertical-align="center">
                  <b-link
                      :to="{ name: 'apps-us-lead-view', params: { id: data.item.id } }"
                      class="font-weight-bold d-block text-nowrap"
                  >
                      <b-badge class="badge-light-primary" pill>
                <span class="align-text-top text-capitalize">{{
                  data.item.subid
                }}</span>
                      </b-badge>
                  </b-link>
              </b-media>
          </template>

        <template #cell(tier)="data">
          <b-media vertical-align="center">
            <b-link
              :to="{ name: 'apps-us-lead-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              <b-badge class="badge-light-primary" pill>
                  <span class="align-text-top text-capitalize" v-if="data.item.tier === 0"> ALL Tiers</span>
                <span class="align-text-top text-capitalize" v-else>
                    {{
                  data.item.tier
                }}</span>
              </b-badge>
            </b-link>
          </b-media>
        </template>

        <template #cell(IPAddress)="data">
          <b-media vertical-align="center">
            <b-link
              :to="{ name: 'apps-us-lead-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              <b-badge class="badge-light-primary" pill>
                <span class="align-text-top text-capitalize">{{
                  data.source.ipAddress
                }}</span>
              </b-badge>
            </b-link>
          </b-media>
        </template>

        <template #cell(name)="data">
          <b-media vertical-align="center">
            <b-link
              :to="{ name: 'apps-us-lead-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              <b-badge class="badge-light-primary" pill>
                <span class="align-text-top text-capitalize">{{
                  data.applicant.firstName
                }}</span>
              </b-badge>
            </b-link>
          </b-media>
        </template>

        <template #cell(email)="data">
          <b-media vertical-align="center">
            <b-link
              :to="{ name: 'apps-us-lead-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              <b-badge class="badge-light-primary" pill>
                <span class="align-text-top text-capitalize">{{
                  data.applicant.email
                }}</span>
              </b-badge>
            </b-link>
          </b-media>
        </template>

        <template #cell(isRedirected)="data">
            <div v-if="data.item.isRedirected == 1">
                <vue-apex-charts
                    type="radialBar"
                    height="30"
                    width="30"
                    :options="chart.options"
                    :series="[100]"
                />
            </div>
            <div v-else>
                <vue-apex-charts
                    type="radialBar"
                    height="30"
                    width="30"
                    :options="chart.options"
                    :series="[0]"
                />
            </div>
        </template>

        <template #cell(vidLeadPrice)="data">
          <b-media vertical-align="center">
            <span class="align-text-top text-capitalize"
              >£{{ data.item.vidLeadPrice }}</span
            >
          </b-media>
        </template>

        <template #cell(buyerLeadPrice)="data">
          <b-media vertical-align="center">
            <span class="align-text-top text-capitalize"
              >£{{ data.item.buyerLeadPrice }}</span
            >
          </b-media>
        </template>
        <template #cell(profit)="data">
          <b-media vertical-align="center">
            <span class="align-text-top text-capitalize text-success"
              >£ {{ (data.item.buyerLeadPrice - data.item.vidLeadPrice).toFixed(2)}}</span
            >
          </b-media>
        </template>

        <template #cell(leadStatus)="data">
          <b-badge
            pill
            :variant="`light-${resolveUSLeadsStatusVariant(data.item.leadStatus)}`"
            class="text-capitalize"
          >
            <span v-if="data.item.leadStatus == 1">Sold</span>
            <span v-else-if="data.item.leadStatus == 2">Pending</span>
            <span v-else-if="data.item.leadStatus == 0">Declined</span>
            <span v-else-if="data.item.leadStatus == 3">CPF</span>
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item
              :to="{
                  name: 'apps-us-lead-view',
                  params: { id: data.item.id },
                }"
            >
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item
              :to="{
                  name: 'apps-us-lead-view',
                  params: { id: data.item.id },
                }"
            >
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Status</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
      <div class="mx-2 mb-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span class="text-muted"
              >Showing {{ dataMeta.from }} to {{ dataMeta.to }} of
              {{ dataMeta.of }} entries</span
            >
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalUSLeads"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BProgress,
  BTab,
  BTabs,
  BTooltip,
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store";
import { ref, onUnmounted } from "@vue/composition-api";
import { avatarText } from "@core/utils/filter";
import USLeadsListFilters from "./LeadListFilters.vue";
import useUSLeadsList from "./useLeadList";
import usLeadsStoreModule from "../LeadStoreModule";
import USLeadsListAddNew from "./LeadListAddNew.vue";

import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";
/* eslint-disable global-require */
const $trackBgColor = "#e9ecef";

export default {
  components: {
    USLeadsListFilters,
    USLeadsListAddNew,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BProgress,
    BTab,
    BTabs,
    BTooltip,
    vSelect,
    VueApexCharts,
  },
  created() {
    for (let i = 0; i < this.browserData.length; i += 1) {
      const chartClone = JSON.parse(JSON.stringify(this.chart));
      chartClone.options.colors[0] = this.chartColor[i];
      chartClone.series[0] = this.chartSeries[i];
      this.chartData.push(chartClone);
    }
  },

  data() {
    return {
      chartData: [],
      chartClone: {},
      chartColor: [$themeColors.success],
      chartSeries: [54.4, 6.1, 14.6, 4.2],
      browserData: [
        {
          usage: "54.4%",
        },
      ],
      chart: {
        series: [100],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [$themeColors.success],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: $trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    };
  },

  setup() {
    const US_LEADS = "app-us-leads";

    // Register module
    if (!store.hasModule(US_LEADS))
      store.registerModule(US_LEADS, usLeadsStoreModule);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(US_LEADS)) store.unregisterModule(US_LEADS);
    });

    const isAddNewUSLeadSidebarActive = ref(false);

    const roleOptions = [
      { label: "Admin", value: "admin" },
      { label: "Author", value: "author" },
      { label: "Editor", value: "editor" },
      { label: "Maintainer", value: "maintainer" },
      { label: "Subscriber", value: "subscriber" },
    ];

    const planOptions = [
      { label: "Basic", value: "basic" },
      { label: "Company", value: "company" },
      { label: "Enterprise", value: "enterprise" },
      { label: "Team", value: "team" },
    ];

    const statusOptions = [
      { label: "Pending", value: "pending" },
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ];

    const {
      fetchUSLeads,
      tableColumns,
      perPage,
      currentPage,
      totalUSLeads,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUSLeadsListTable,
      refetchData,

      // UI
      resolveUSLeadsRoleVariant,
      resolveUSLeadsRoleIcon,
      resolveUSLeadsStatusVariant,
      resolveUSLeadsStatusVariantAndIcon,
      // Extra Filters
      statusFilter,
      affiliateFilter,
      subIdFilter,
      tierFilter,
      vendorPriceFilter,
      buyerPriceFilter,
      leadQualityFilter,
      redirectionFilter,
    } = useUSLeadsList();

    return {
      // Sidebar
      // isAddNewUSLeadSidebarActive,

      fetchUSLeads,
      tableColumns,
      perPage,
      currentPage,
      totalUSLeads,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUSLeadsListTable,
      refetchData,

      // Filter
      avatarText,

      // UI
      resolveUSLeadsRoleVariant,
      resolveUSLeadsRoleIcon,
      resolveUSLeadsStatusVariant,
      resolveUSLeadsStatusVariantAndIcon,

      roleOptions,
      planOptions,
      statusOptions,

      // Extra Filters
      statusFilter,
      affiliateFilter,
      subIdFilter,
      tierFilter,
      vendorPriceFilter,
      buyerPriceFilter,
      leadQualityFilter,
      redirectionFilter,
    };
  },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
</style>
