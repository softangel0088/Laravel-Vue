<template>
  <div style="height: inherit">

    <!-- ECommerce Header -->
    <section id="ecommerce-header">
      <div class="row">
        <div class="col-sm-12">
          <div class="ecommerce-header-items">
            <div class="result-toggler">
              <feather-icon
                icon="MenuIcon"
                class="d-block d-lg-none"
                size="21"
                @click="mqShallShowLeftSidebar = true"
              />
              <div class="search-results">
                {{ totalProducts }} results found
              </div>
            </div>
            <div class="view-options d-flex">

              <!-- Sort Button -->
              <b-dropdown
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                :text="sortBy.text"
                right
                variant="outline-primary"
              >
                <b-dropdown-item
                  v-for="sortOption in sortByOptions"
                  :key="sortOption.value"
                  @click="sortBy=sortOption"
                >
                  {{ sortOption.text }}
                </b-dropdown-item>
              </b-dropdown>

              <!-- Item View Radio Button Group  -->
              <b-form-radio-group
                v-model="itemView"
                class="ml-1 list item-view-radio-group"
                buttons
                size="sm"
                button-variant="outline-primary"
              >
                <b-form-radio
                  v-for="option in itemViewOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  <feather-icon
                    :icon="option.icon"
                    size="18"
                  />
                </b-form-radio>
              </b-form-radio-group>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overlay -->
    <div class="body-content-overlay" />

    <!-- Searchbar -->
    <div class="ecommerce-searchbar mt-1">
      <b-row>
        <b-col cols="12">
          <b-input-group class="input-group-merge">
            <b-form-input
              v-model="filters.q"
              placeholder="Search Product"
              class="search-offer"
            />
            <b-input-group-append is-text>
              <feather-icon
                icon="SearchIcon"
                class="text-muted"
              />
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>

    <!-- Prodcuts -->
    <section :class="itemView">
      <b-card
        v-for="offer in offers"
        :key="offer.id"
        class="ecommerce-card"
        no-body
      >
        <div class="item-img text-center">
          <b-link :to="{ name: 'apps-admin-offers-details', params: { id: offer.id } }">
            <b-img
                v-if="offer.id == 1 || offer.id == 5 ||  offer.id == 6 && skin == 'light'"
              :alt="`${offer.name}-${offer.id}`"
              fluid
              class="card-img-top p-1"
              :src="require('@/assets/images/offer_logo/loanie-logo.png')"
            />
            <b-img
                    v-else-if="offer.id == 1 || offer.id == 5 ||  offer.id == 6 && skin == 'dark'"
                    :alt="`${offer.name}-${offer.id}`"
                    fluid
                    class="card-img-top p-1"
                    :src="require('@/assets/images/offer_logo/loanie-logo-white.png')"
            />
              <b-img
                  v-else-if="offer.id == 2 || offer.id == 3 ||  offer.id == 4 && skin == 'light'"
                  :alt="`${offer.name}-${offer.id}`"
                  fluid
                  class="card-img-top p-3"
                  :src="require('@/assets/images/offer_logo/loanie-logo.png')"

              />
            <b-img
                    v-else-if="offer.id == 2 || offer.id == 3 ||  offer.id == 4 && skin == 'dark'"
                    :alt="`${offer.name}-${offer.id}`"
                    fluid
                    class="card-img-top p-3"
                    :src="require('@/assets/images/offer_logo/loanie-logo-white.png')"

            />
          </b-link>
        </div>

        <!-- Product Details -->
        <b-card-body>
          <div class="item-wrapper">
            <div>
              <h6 class="item-price" v-if="offer.id == 1 || offer.id == 2">
                {{ offer.payout.payout_amount }} %
              </h6>
              <h6 class="item-price" v-else-if="offer.id == 3 || offer.id == 4">
                ${{ offer.payout.payout_amount }}
              </h6>
              <h6 class="item-price" v-else-if="offer.id == 5 || offer.id == 6">
                ${{ offer.payout.payout_amount }}
              </h6>
            </div>
          </div>
          <h6 class="item-name">
            <b-link
              class="text-body"
              :to="{ name: 'apps-admin-offers-details', params: { id: offer.id } }"
            >
              {{ offer.name }}
            </b-link>
            <b-card-text class="item-company">
              By <b-link class="ml-25">
                UPING
              </b-link>
            </b-card-text>
          </h6>
          <b-card-text class="item-description">
            {{ offer.description }}
          </b-card-text>
        </b-card-body>

        <!-- Product Actions -->
        <div class="item-options text-center">
          <div class="item-wrapper">
            <div class="item-cost">
              <h4 class="item-price" v-if="offer.payout.payoutType == 1">
                {{ offer.payout.payoutAmount }} %
              </h4>
                <h4 class="item-price" v-else-if="offer.payout.currency == 'GBP'">
                    £{{ offer.payout.payoutAmount }}
                </h4>
                <h4 class="item-price" v-else-if="offer.payout.currency == 'USD'">
                    ${{ offer.payout.payoutAmount }}
                </h4>
            </div>
          </div>
          <b-button
            variant="primary"
            tag="a"
            class="btn-cart"
            :to="{ name: 'apps-admin-offers-details', params: { id: offer.id } }"
          >
            <span>View Offer</span>
          </b-button>
        </div>
      </b-card>
    </section>

    <!-- Pagination -->
    <section>
      <b-row>
        <b-col cols="12">
          <b-pagination
            v-model="filters.page"
            :total-rows="totalProducts"
            :per-page="filters.perPage"
            first-number
            align="center"
            last-number
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon
                icon="ChevronLeftIcon"
                size="18"
              />
            </template>
            <template #next-text>
              <feather-icon
                icon="ChevronRightIcon"
                size="18"
              />
            </template>
          </b-pagination>
        </b-col>
      </b-row>
    </section>

    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-detached-left">
      <shop-left-filter-sidebar
        :filters="filters"
        :filter-options="filterOptions"
        :mq-shall-show-left-sidebar.sync="mqShallShowLeftSidebar"
      />
    </portal>
  </div>
</template>

<script>
import {
  BDropdown, BDropdownItem, BFormRadioGroup, BFormRadio, BRow, BCol, BInputGroup, BInputGroupAppend, BFormInput, BCard, BCardBody, BLink, BImg, BCardText, BButton, BPagination,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { watch } from '@vue/composition-api'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'
import ShopLeftFilterSidebar from './ECommerceShopLeftFilterSidebar.vue'
import { useShopFiltersSortingAndPagination, useShopUi, useShopRemoteData } from './useECommerceShop'
import { useEcommerceUi } from '../useEcommerce'
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  directives: {
    Ripple,
  },
  components: {
    // BSV
    BDropdown,
    BDropdownItem,
    BFormRadioGroup,
    BFormRadio,
    BRow,
    BCol,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BCard,
    BCardBody,
    BLink,
    BImg,
    BCardText,
    BButton,
    BPagination,

    // SFC
    ShopLeftFilterSidebar,
  },
  setup() {
    const {
      filters, filterOptions, sortBy, sortByOptions,
    } = useShopFiltersSortingAndPagination()

    const { handleCartActionClick, toggleProductInWishlist } = useEcommerceUi()
    const { skin } = useAppConfig()
    const {
      itemView, itemViewOptions, totalProducts,
    } = useShopUi()

    const { offers, fetchProducts } = useShopRemoteData()

    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()

    // Wrapper Function for `fetchProducts` which can be triggered initially and upon changes of filters
    const fetchShopProducts = () => {
      fetchProducts({
        q: filters.value.q,
        sortBy: sortBy.value.value,
        page: filters.value.page,
        perPage: filters.value.perPage,
      })
        .then(response => {
          offers.value = response.data.offers
          totalProducts.value = response.data.total
        })
    }

    fetchShopProducts()

    watch([filters, sortBy], () => {
      fetchShopProducts()
    }, {
      deep: true,
    })

    return {
      // useShopFiltersSortingAndPagination
      filters,
      filterOptions,
      sortBy,
      sortByOptions,

      // useShopUi
      itemView,
      itemViewOptions,
      totalProducts,
      toggleProductInWishlist,
      handleCartActionClick,

      // useShopRemoteData
      offers,
      skin,
      // mqShallShowLeftSidebar
      mqShallShowLeftSidebar,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>

<style lang="scss" scoped>
.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}
</style>
