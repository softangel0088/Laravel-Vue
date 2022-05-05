<template>
    <section class="app-ecommerce-details">

        <!-- Alert: No item found -->
        <b-alert
            variant="danger"
            :show="offer === undefined"
        >
            <h4 class="alert-heading">
                Error fetching offer data
            </h4>
            <div class="alert-body">
                No item found with this item slug. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'apps-e-commerce-shop'}"
                >
                    Shop
                </b-link>
                for other items.
            </div>
        </b-alert>


        <!-- Content -->
        <b-card
            v-if="offer"
            no-body
        >
            <b-card-body>
                <b-row class="my-2">

                    <!-- Left: Offer Image Container -->
                    <b-col
                        cols="12"
                        md="5"
                        class="d-flex align-items-center justify-content-center mb-2 mb-md-0"
                    >
                        <div class="d-flex align-items-center justify-content-center">
                            <b-img
                                    v-if="offer.id == 1 || offer.id == 3 ||  offer.id == 4 && skin == 'light'"
                                    :alt="`${offer.name}-${offer.id}`"
                                    fluid
                                    class="offer-img"
                                    :src="require('@/assets/images/offer_logo/loanie-logo.png')"
                            />
                            <b-img
                                    v-else-if="offer.id == 1 || offer.id == 5 ||  offer.id == 6 && skin == 'dark'"
                                    :alt="`${offer.name}-${offer.id}`"
                                    fluid
                                    class="offer-img"
                                    :src="require('@/assets/images/offer_logo/loanie-logo-white.png')"
                            />
                            <b-img
                                    v-else-if="offer.id == 2 || offer.id == 5 ||  offer.id == 6 && skin == 'light'"
                                    :alt="`${offer.name}-${offer.id}`"
                                    fluid
                                    class="offer-img"
                                    :src="require('@/assets/images/offer_logo/loanie-logo.png')"

                            />
                            <b-img
                                    v-else-if="offer.id == 2 || offer.id == 5 ||  offer.id == 6 && skin == 'dark'"
                                    :alt="`${offer.name}-${offer.id}`"
                                    fluid
                                    class="offer-img"
                                    :src="require('@/assets/images/offer_logo/loanie-logo-white.png')"

                            />
                        </div>
                    </b-col>

                    <!-- Right: Offer Details -->
                    <b-col
                        cols="12"
                        md="7"
                    >

                        <!-- Offer Name -->
                        <h4>{{ offer.name }}</h4>

                        <!-- Offer Brand -->
                        <b-card-text class="item-company mb-0">
                            <span>by</span>
                            <b-link class="company-name">
                                Amikaro Finance
                            </b-link>
                        </b-card-text>

                        <!-- Price And Ratings -->
                        <div class="ecommerce-details-price d-flex flex-wrap mt-1">
                            <h4 class="item-price mr-1">
                                £{{ offer.payout.payoutAmount }}
                            </h4>
                            <ul class="unstyled-list list-inline pl-1 border-left">
                                <li
                                    v-for="star in 5"
                                    :key="star"
                                    class="ratings-list-item mr-25"
                                >
                                    <feather-icon
                                        icon="StarIcon"
                                        size="18"
                                        :class="[{'fill-current': star <= offer.rating}, star <= offer.rating ? 'text-warning' : 'text-muted']"
                                    />
                                </li>
                            </ul>
                        </div>

                        <!-- Avability -->
                        <b-card-text>Public - <span class="text-success">Live</span></b-card-text>

                        <!-- Offer Description -->
                        <b-card-text>{{ offer.description }}</b-card-text>

                        <!-- Offer Meta [Free shpping, EMI, etc.] -->
                        <ul class="offer-features list-unstyled">
                            <b-card-text class="item-description">
                                <b-badge variant="light-primary">
                                    <!--                <feather-icon icon="StarIcon" />-->

                                    {{offer.conversion_type}}
                                </b-badge>
                                <b-badge variant="light-primary">
                                    Finance
                                </b-badge>
                                <b-badge variant="light-primary" v-if="offer.id == 2 || offer.id == 3 || offer.id == 4 ">
                                    USA
                                </b-badge>
                                <b-badge variant="light-primary" v-else-if="offer.id == 1 || offer.id == 5 || offer.id == 6 ">
                                    UK
                                </b-badge>
                            </b-card-text>
                        </ul>

                        <hr>

                        <!-- Restrictions -->
                        <b-card-text> <h6>Restrictions: </h6>  <span>  {{ offer.restrictions }}</span></b-card-text>
                        <!-- Allowed Sources -->
                        <b-card-text> <h6>Allowed Sources: </h6>  <span>  {{ offer.description }}</span></b-card-text>
                        <!-- Terms -->
                        <b-card-text> <h6>Terms: </h6>  <span>  {{ offer.terms }}</span></b-card-text>



                        <hr>

                        <div class="d-flex flex-column flex-sm-row pt-1">
                            <b-button
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                variant="primary"
                                class="btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0"
                                @click="handleCartActionClick(offer)"
                            >
                                <feather-icon
                                    icon="BookmarkIcon"
                                    class="mr-50"
                                />
                                <span>Preview</span>
                            </b-button>
                            <b-button
                                variant="outline-secondary"
                                class="btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0 ml-5"
                                @click="toggleOfferInWishlist(offer)"
                            >
                                <feather-icon
                                    icon="GlobeIcon"
                                    class="mr-50"
                                    :class="{'text-danger': offer.isInWishlist}"
                                />
                                <span>Tracking</span>
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>

            <b-tabs
                pills
            >

                <!-- Tab: Account -->
                <b-tab active>
                    <template #title>
                        <feather-icon
                            icon="BuyerIcon"
                            size="16"
                            class="mr-0 mr-sm-50"
                        />
                        <span class="d-none d-sm-inline">Details</span>
                    </template>
                    <!--                <e-commerce-product-detail  />-->

                    <e-commerce-product-detail
                        :offer-data="offerData"
                        class="mt-2 pt-75"
                    />
                </b-tab>

                <!-- Tab: Information -->
                <b-tab>
                    <template #title>
                        <feather-icon
                            icon="InfoIcon"
                            size="16"
                            class="mr-0 mr-sm-50"
                        />
                        <span class="d-none d-sm-inline">Creatives</span>
                    </template>
                    <!--                <e-commerce-product-detail  />-->

                    <!--                <buyer-edit-tab-information-->
                    <!--                    :buyer-data="buyerData"-->
                    <!--                    class="mt-2 pt-75"-->
                    <!--                />-->
                </b-tab>
                <b-tab>
                    <template #title>
                        <feather-icon
                            icon="InfoIcon"
                            size="16"
                            class="mr-0 mr-sm-50"
                        />
                        <span class="d-none d-sm-inline">Tracking</span>
                    </template>
                    <!--                <e-commerce-product-detail  />-->

                    <!--                <buyer-edit-tab-information-->
                    <!--                    :buyer-data="buyerData"-->
                    <!--                    class="mt-2 pt-75"-->
                    <!--                />-->
                </b-tab>




            </b-tabs>

            <!-- Static Content -->
            <e-commerce-product-details-item-features />

            <!-- Static Content -->
            <!-- Slider: Related Offers -->
            <!--      <e-commerce-tracking-details-related-products />-->
            <e-commerce-product-details-related-products />
        </b-card>
    </section>
</template>

<script>
    import { useRouter } from '@core/utils/utils'
    import store from '@/store'
    import { ref } from '@vue/composition-api'
    import {
        BBadge, BCard, BCardBody, BRow, BCol, BImg, BCardText, BLink, BButton, BDropdown, BDropdownItem, BAlert,
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import ECommerceProductDetailsItemFeatures from './ECommerceProductDetailsItemFeatures.vue'
    import ECommerceProductDetailsRelatedProducts from './ECommerceProductDetailsRelatedProducts.vue'
    import ECommerceTrackingDetailsRelatedProducts from './ECommerceTrackingDetailsRelatedProducts.vue'
    import { useEcommerceUi } from '../useEcommerce'
    import router from '@/router'

    export default {
        directives: {
            Ripple,
        },
        components: {
            // BSV
            BCard,
            BCardBody,
            BRow,
            BCol,
            BImg,
            BCardText,
            BLink,
            BButton,
            BDropdown,
            BDropdownItem,
            BAlert,
            BBadge,

            // SFC
            ECommerceProductDetailsItemFeatures,
            ECommerceProductDetailsRelatedProducts,
            ECommerceTrackingDetailsRelatedProducts,
        },
        setup() {
            const { handleCartActionClick, toggleOfferInWishlist } = useEcommerceUi()

            const offer = ref(null)

            // Remote Data
            const fetchOffer = () => {
                // Get offer  id from URL
                const { route } = useRouter()
                const offerId = route.value.params.id
                console.log(offerId)
                // const offerId = offerSlug.substring(offerSlug.lastIndexOf('-') + 1)

                store.dispatch('app-ecommerce/fetchOffer', { id: offerId})
                    .then(response => {
                        offer.value = response.data.offer
                    })
                    .catch(error => {
                        if (error.response.status === 404) {
                            offer.value = undefined
                        }
                    })
            }

            // UI
            const selectedColor = ref(null)

            fetchOffer()

            return {

                // Fetched Offer
                offer,

                // UI
                selectedColor,
                handleCartActionClick,
                toggleOfferInWishlist,
            }
        },
    }
</script>

<style lang="scss">
    @import "~@core/scss/base/pages/app-ecommerce-details.scss";
</style>
