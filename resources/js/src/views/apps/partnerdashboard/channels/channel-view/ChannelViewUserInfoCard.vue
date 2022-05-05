<template>
    <b-card
    >

        <b-row>

            <!-- Channel Info: Left col -->
            <b-col
                cols="21"
                xl="6"
                class="d-flex justify-content-between flex-column"
            >
                <!-- Channel Avatar & Action Buttons -->
                <div class="d-flex justify-content-start">
                    <b-avatar
                        :text="avatarText(channelData.name)"
                        :variant="`light-${resolveChannelRoleVariant(channelData.role)}`"
                        size="104px"
                        rounded
                    />
                    <div class="d-flex flex-column ml-1">
                        <div class="mb-1">
                            <h4 class="mb-0">
                                {{ channelData.postback.vendor_id }}
                            </h4>
                            <span class="card-text">123</span>
                        </div>
                        <div class="d-flex flex-wrap">
                            <b-button
                                variant="outline-primary"
                                class="ml-1"
                                @click="goBack"
                            >
                                Back
                            </b-button>
                        </div>
                    </div>
                </div>

                <!-- Channel Stats -->
                <div class="d-flex align-items-center mt-2">
                    <div class="d-flex align-items-center mr-2">
                        <b-avatar
                            variant="light-primary"
                            rounded
                        >
                            <feather-icon
                                icon="DollarSignIcon"
                                size="18"
                            />
                        </b-avatar>
                        <div class="ml-1">
                            <h5 class="mb-0">
                                £5,501
                            </h5>
                            <small>Monthly Sales</small>
                        </div>
                    </div>

                    <div class="d-flex align-items-center">
                        <b-avatar
                            variant="light-success"
                            rounded
                        >
                            <feather-icon
                                icon="TrendingUpIcon"
                                size="18"
                            />
                        </b-avatar>
                        <div class="ml-1">
                            <h5 class="mb-0">
                                £99.87k
                            </h5>
                            <small>Annual Profit</small>
                        </div>
                    </div>
                </div>
            </b-col>

            <!-- Right Col: Table -->
            <b-col
                cols="12"
                xl="6"
            >
                <table class="mt-2 mt-xl-0 w-100">
                    <tr>
                        <th class="pb-50">
                            <feather-icon
                                icon="ChannelIcon"
                                class="mr-75"
                            />
                        </th>
                    </tr>
<!--                    <tr>-->
<!--                        <th class="pb-50">-->
<!--                            <feather-icon-->
<!--                                icon="CheckIcon"-->
<!--                                class="mr-75"-->
<!--                            />-->
<!--                            <span class="font-weight-bold">Status</span>-->
<!--                        </th>-->
<!--                        <td class="pb-50 text-capitalize">-->
<!--                            <b-badge v-if="channelData.postback.status === 1" variant="light-primary">-->
<!--                                Active-->
<!--                            </b-badge>-->
<!--                            <b-badge  v-else-if="channelData.postback.status === 2" variant="light-primary">-->
<!--                                Paused-->
<!--                            </b-badge>-->
<!--                            <b-badge  v-else-if="channelData.postback.status === 0" variant="light-primary">-->
<!--                                Inactive-->
<!--                            </b-badge>-->
<!--                        </td>-->
<!--                    </tr>-->
                    <tr>
                        <th class="pb-50">
                            <feather-icon
                                icon="StarIcon"
                                class="mr-75"
                            />
                            <span class="font-weight-bold">Affiliate ID</span>
                        </th>
                        <td class="pb-50 text-capitalize">
                            <b-badge  variant="light-primary">
                                {{ channelData.postback.vendor_id }}
                            </b-badge>

                        </td>
                    </tr>
                    <tr>
                        <th class="pb-50">
                            <feather-icon
                                icon="StarIcon"
                                class="mr-75"
                            />
                            <span class="font-weight-bold">UPING Reputation</span>
                        </th>
                        <td class="pb-50 text-capitalize">
                            <b-badge  variant="light-success">
                                Good
                            </b-badge>

                        </td>
                    </tr>

                </table>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    import {
        BCard, BButton, BAvatar, BRow, BCol, BBadge
    } from 'bootstrap-vue'
    import { avatarText } from '@core/utils/filter'
    import useChannelsList from '../channel-list/useChannelList'

    export default {
        components: {
            BCard, BButton, BRow, BCol, BAvatar, BBadge
        },
        props: {
            channelData: {
                type: Object,
                required: true,
            },
        },
        setup() {
            const { resolveChannelRoleVariant, goBack } = useChannelsList()
            return {
                avatarText,
                goBack,
                resolveChannelRoleVariant,
            }
        },
    }
</script>

<style>

</style>
