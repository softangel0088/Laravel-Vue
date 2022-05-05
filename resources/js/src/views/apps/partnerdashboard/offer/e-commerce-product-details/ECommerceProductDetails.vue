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
                                    v-if="offer.id == 1 || offer.id == 5 ||  offer.id == 6 "
                                    :alt="`${offer.name}-${offer.id}`"
                                    fluid
                                    class="offer-img"
                                    :src="require('@/assets/images/offer_logo/loanie-logo.png')"
                            />

                            <b-img
                                    v-else-if="offer.id == 2 || offer.id == 3 ||  offer.id == 4 "
                                    :alt="`${offer.name}-${offer.id}`"
                                    fluid
                                    class="offer-img"
                                    :src="require('@/assets/images/offer_logo/loanie-logo.png')"

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
                            <h4 class="item-price mr-1" v-if="offer.payout.payoutType == 'CPS'">
                                {{ offer.payout.payoutAmount }} %
                            </h4>
                            <h4 class="item-price mr-1" v-else-if="offer.payout.currency == 'GBP'">
                                £ {{ offer.payout.payoutAmount }}
                            </h4>
                            <h4 class="item-price mr-1" v-else-if="offer.payout.currency == 'USD'">
                                $ {{ offer.payout.payoutAmount }}
                            </h4>
                            <ul class="unstyled-list list-inline pl-1 border-left">
<!--                                <li-->
<!--                                    v-for="5 in 5"-->
<!--                                    :key="star"-->
<!--                                    class="ratings-list-item mr-25"-->
<!--                                >-->
<!--                                    <feather-icon-->
<!--                                        icon="StarIcon"-->
<!--                                        size="18"-->
<!--                                        :class="[{'fill-current': star <= offer.rating}, star <= offer.rating ? 'text-warning' : 'text-muted']"-->
<!--                                    />-->
<!--                                </li>-->
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
                                    {{offer.conversion_type}}
                                </b-badge>
                                <b-badge variant="light-primary">
                                    Finance
                                </b-badge>
                                <b-badge variant="light-primary" v-if="offer.id == 1 || offer.id == 3 || offer.id == 4">
                                    UK
                                </b-badge>
                                <b-badge variant="light-primary" v-if="offer.id == 2 || offer.id == 5 || offer.id == 6">
                                    USA
                                </b-badge>
                            </b-card-text>
                        </ul>

                        <hr>

                        <!-- Restrictions -->
                        <b-card-text> <h6>Restrictions: </h6>  <span>  {{ offer.description }}</span></b-card-text>
                        <!-- Allowed Sources -->
                        <b-card-text> <h6>Allowed Sources: </h6>  <span>  {{ offer.restrictions }}</span></b-card-text>
                        <!-- Terms -->
                        <b-card-text> <h6>Terms: </h6>  <span>  {{ offer.terms }}</span></b-card-text>



                        <hr>

                    </b-col>
                </b-row>
            </b-card-body>




            <b-tabs
                pills
                class="align-items-center flex justify-content-center ml-2"
            >

                <!-- Tab: Tracking -->
                <b-tab>
                    <template #title>
                        <feather-icon
                            icon="InfoIcon"
                            size="16"
                            class="mr-0 mr-sm-50"
                        />
                        <span class="d-none d-sm-inline">Tracking</span>
                    </template>
                    <e-commerce-tracking-details-related-products />

                </b-tab>
                <!-- Tab: Creatives -->
                <b-tab>
                    <template #title>
                        <feather-icon
                            icon="InfoIcon"
                            size="16"
                            class="mr-0 mr-sm-50"
                        />
                        <span class="d-none d-sm-inline">Creatives</span>
                    </template>
                    <e-commerce-product-details-related-products :offer-data="offer"/>

                </b-tab>


            </b-tabs>




            <!-- Static Content -->
<!--            <e-commerce-product-details-item-features />-->

            <!-- Static Content -->
            <!-- Slider: Related Offers -->
            <!--      <e-commerce-tracking-details-related-products />-->
<!--            <e-commerce-product-details-related-products />-->
        </b-card>
    </section>
</template>

<script>
    import { useRouter } from '@core/utils/utils'
    import store from '@/store'
    import { ref } from '@vue/composition-api'
    import {
        BBadge, BCard, BCardBody, BRow, BCol, BImg, BCardText, BLink, BButton, BDropdown, BDropdownItem, BAlert, BTab,
        BTabs,
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import ECommerceProductDetailsItemFeatures from './ECommerceProductDetailsItemFeatures.vue'
    import ECommerceProductDetailsRelatedProducts from './ECommerceProductDetailsRelatedProducts.vue'
    import ECommerceTrackingDetailsRelatedProducts from './ECommerceTrackingDetailsRelatedProducts.vue'
    import { useEcommerceUi } from '../useEcommerce'
    import router from '@/router'
    import useAppConfig from '@core/app-config/useAppConfig'

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
            BTab,
            BTabs,

            // SFC
            ECommerceProductDetailsItemFeatures,
            ECommerceProductDetailsRelatedProducts,
            ECommerceTrackingDetailsRelatedProducts,
        },
        setup() {
            const { handleCartActionClick, toggleOfferInWishlist } = useEcommerceUi()

            const offer = ref(null)
            const { skin } = useAppConfig()
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
                skin,
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
