<template>
    <div>

        <!-- Alert: No item found -->
        <b-alert
            variant="danger"
            :show="channelData === undefined"
        >
            <h4 class="alert-heading">
                Error fetching user data
            </h4>
            <div class="alert-body">
                No user found with this user id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'apps-users-list'}"
                >
                    User List
                </b-link>
                for other users.
            </div>
        </b-alert>

        <template v-if="channelData">
            <!-- First Row -->
            <b-row>
                <b-col
                    cols="12"
                    xl="12"
                    lg="12"
                    md="12"
                >
                    <channel-view-user-info-card :channel-data="channelData" />
                </b-col>

            </b-row>

            <b-row>
                <b-col
                    cols="12"
                    lg="6"
                >
                </b-col>
                <b-col
                    cols="12"
                    lg="6"
                >
                </b-col>
            </b-row>

        </template>

        <channel-mapping-list :channel-data="channelData" />

    </div>
</template>

<script>
    import store from '@/store'
    import router from '@/router'
    import { ref, onUnmounted } from '@vue/composition-api'
    import {
        BRow, BCol, BAlert, BLink, BBadge
    } from 'bootstrap-vue'
    import ChannelMappingList from '@/views/apps/channel-mapping/channel-mapping-list/ChannelMappingList.vue'
    import channelStoreModule from '../ChannelStoreModule'
    import ChannelViewUserInfoCard from './ChannelViewUserInfoCard.vue'
    import ChannelViewUserPlanCard from './ChannelViewUserPlanCard.vue'
    import ChannelViewUserTimelineCard from './ChannelViewUserTimelineCard.vue'
    import ChannelViewUserPermissionsCard from './ChannelViewUserPermissionsCard.vue'

    export default {
        components: {
            BRow,
            BCol,
            BAlert,
            BLink,
            BBadge,

            // Local Components
            ChannelViewUserInfoCard,
            ChannelViewUserPlanCard,
            ChannelViewUserTimelineCard,
            ChannelViewUserPermissionsCard,

            ChannelMappingList,
        },
        setup() {
            const channelData = ref(null)

            const PARTNER__CHANNEL = 'app-channel'

            // Register module
            if (!store.hasModule(PARTNER__CHANNEL)) store.registerModule(PARTNER__CHANNEL, channelStoreModule)

            // UnRegister on leave
            onUnmounted(() => {
                if (store.hasModule(PARTNER__CHANNEL)) store.unregisterModule(PARTNER__CHANNEL)
            })

            store.dispatch('app-channel/fetchChannel', { id: router.currentRoute.params.id })
                .then(response => { channelData.value = response.data })
                .catch(error => {
                    if (error.response.status === 404) {
                        channelData.value = undefined
                    }
                })

            return {
                channelData,
            }
        },
    }
</script>

<style>

</style>
