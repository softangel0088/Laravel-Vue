<template>

  <div>


    <postback-list-add-new
      :is-add-new-channel-sidebar-active.sync="isAddNewChannelSidebarActive"
      @refetch-data="refetchData"
    />
      <postback-list-edit-new
          :is-edit-new-channel-sidebar-active.sync="isEditNewChannelSidebarActive"
          @refetch-data="refetchData"
      />

    <!-- Filters -->
    <postbacks-list-filters
      :status-filter.sync="statusFilter"
      :status-options="statusOptions"
    />

    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

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
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="primary"
                @click="isAddNewChannelSidebarActive = true"
              >
                <span class="text-nowrap">Add Channel</span>
              </b-button>

            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refChannelListTable"
        class="position-relative"
        :items="fetchChannels"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        :small="true"
        :striped="true"
        :borderless="true"
        :hover="true"
      >


          <!-- Column: postback_name -->
          <template #cell(postback_name)="data">
                      <b-badge variant="light-primary" pill>
                          <span class="align-text-top text-capitalize">{{ data.item.postback_name }}</span>
                      </b-badge>
          </template>
          <!-- Column: postback_name -->
          <template #cell(affiliateChannelUrl)="data">
                  <span class="align-text-top text-capitalize">{{ data.item.affiliateChannelUrl }}</span>
          </template>




          <!-- Column: Status -->
          <template #cell(global)="data">
              <b-badge
                  pill
                  :variant="`light-${resolveChannelGlobalVariant(data.item.global)}`"
                  class="text-capitalize"
              >
                  <span v-if="data.item.global == 1">Global</span>
                  <span v-else>Non Global</span>
              </b-badge>
          </template>

          <!-- Column: Status -->
          <template #cell(status)="data">
              <b-badge
                  pill
                  :variant="`light-success`"
                  class="text-capitalize"
                  v-if="data.item.status == 1" >
                  <span>Active</span>
              </b-badge>
              <b-badge
                  pill
                  :variant="`light-warning`"
                  class="text-capitalize"
                  v-else>
                  <span>Inactive</span>
              </b-badge>

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
              <b-dropdown-item :to="{ name: 'apps-partner-channel-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item >
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50" @click="deleteChannel(data.item.id)">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalChannels"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
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
  BModal,
 VBModal,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import ChannelsListFilters from './ChannelListFilters.vue'
import useChannelsList from './useChannelList'
import channelStoreModule from '../ChannelStoreModule'
import ChannelListAddNew from './ChannelListAddNew.vue'
import ChannelListEditNew from './ChannelListEditNew.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    ChannelsListFilters,
    ChannelListAddNew,
      ChannelListEditNew,

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
      BModal,
      VBModal,
    vSelect,
  },
    directives: {
        'b-modal': VBModal,
        Ripple,
    },

  setup() {
    const PARTNER_CHANNELS = 'apps-partner-channel'

    // Register module
    if (!store.hasModule(PARTNER_CHANNELS)) store.registerModule(PARTNER_CHANNELS, channelStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PARTNER_CHANNELS)) store.unregisterModule(PARTNER_CHANNELS)
    })

    const isAddNewChannelSidebarActive = ref(false)
    const isEditNewChannelSidebarActive = ref(false)



    const statusOptions = [
      { label: 'Pending', value: 2 },
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ]
      function deleteChannel(id) {
          this.$swal({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              customClass: {
                  confirmButton: 'btn btn-primary',
                  cancelButton: 'btn btn-outline-danger ml-1',
              },
              buttonsStyling: false,
          }).then(result => {
              if (result.value) {
                  store.dispatch('apps-partner-channel/deleteChannel', { id: id })
                  this.$swal({
                      icon: 'success',
                      title: 'Deleted!',
                      text: 'Channel has been deleted.',
                      customClass: {
                          confirmButton: 'btn btn-success',
                      },
                  })
                  refetchData()
              } else if (result.dismiss === 'cancel') {
                  this.$swal({
                      title: 'Cancelled',
                      text: 'Channel not deleted :)',
                      icon: 'error',
                      customClass: {
                          confirmButton: 'btn btn-success',
                      },
                  })
              }
          })
      }




      const {
      fetchChannels,
      tableColumns,
      perPage,
      currentPage,
      totalChannels,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refChannelListTable,
      refetchData,

      // UI
      resolveChannelRoleVariant,
      resolveChannelRoleIcon,
      resolveChannelGlobalVariant,

      // Extra Filters
      statusFilter,
    } = useChannelsList()





      return {
      // Sidebar
      isAddNewChannelSidebarActive,
        isEditNewChannelSidebarActive,

      fetchChannels,
      deleteChannel,
      tableColumns,
      perPage,
      currentPage,
      totalChannels,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refChannelListTable,
      refetchData,

      // Filter
      avatarText,

      // UI
      resolveChannelRoleVariant,
      resolveChannelRoleIcon,
          resolveChannelGlobalVariant,

      statusOptions,

      // Extra Filters
      statusFilter,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
