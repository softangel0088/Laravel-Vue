<template>

  <div>


    <postback-list-add-new
      :is-add-new-postback-sidebar-active.sync="isAddNewPostbackSidebarActive"
      :filter-data="filterData"
      @refetch-data="refetchData"
    />

    <!-- Filters -->
    <postbacks-list-filters
      :plan-filter.sync="planFilter"
      :status-filter.sync="statusFilter"
      :status-options="statusOptions"
      :filter-data="filterData"
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
                @click="isAddNewPostbackSidebarActive = true"
              >
                <span class="text-nowrap">Add Postback</span>
              </b-button>

            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refPostbackListTable"
        class="position-relative"
        :items="fetchPostbacks"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        :small="true"
        :striped="true"
        :bordered="true"
        :borderless="true"
        :hover="true"
      >

          <template #cell(id)="data">
              <b-link
                  :to="{ name: 'apps-postback-view', params: { id: data.item.id }}"
                  class="font-weight-bold"
              >
                  #{{ data.item.id }}
              </b-link>
          </template>



        <!-- Column: Postback -->
          <template #cell(vendor_id)="data">
              <b-media vertical-align="center">
                  <b-link
                      :to="{ name: 'apps-postback-view', params: { id: data.item.id } }"
                      class="font-weight-bold d-block text-nowrap"
                  >
                      <b-badge  variant="light-primary" pill>
                          <span class="align-text-top text-capitalize">{{ data.item.vendor_id }}</span>
                      </b-badge>

                  </b-link>
              </b-media>
          </template>

        <!-- Column: Postbacks -->
        <template #cell(postbacks)="data">
          <div class="text-nowrap">
            <feather-icon
              :icon="resolvePostbackRoleIcon(data.item.role)"
              size="18"
              class="mr-50"
              :class="`text-${resolvePostbackRoleVariant(data.item.role)}`"
            />
            <span class="align-text-top text-capitalize">{{ data.item.postback_trackers.length }} Postbacks</span>
          </div>
        </template>

          <!-- Column: Status -->
          <template #cell(status)="data">
              <b-badge
                  pill
                  :variant="`light-${resolvePostbackStatusVariant(data.item.status)}`"
                  class="text-capitalize"
              >
                  <span v-if="data.item.status === 1">Active</span>
                  <span v-else-if="data.item.status === 2">Pending</span>
                  <span v-else-if="data.item.status === 0">Inactive</span>
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
            <b-dropdown-item :to="{ name: 'apps-postback-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50" @click="deletePostback(data.item.id)">Delete</span>
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
              :total-rows="totalPostbacks"
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
import PostbacksListFilters from './PostbackListFilters.vue'
import usePostbacksList from './usePostbackList'
import postbackStoreModule from '../PostbackStoreModule'
import PostbackListAddNew from './PostbackListAddNew.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    PostbacksListFilters,
    PostbackListAddNew,

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
    const POSTBACK = 'app-postback'
    const filterData = ref({});

    // Register module
    if (!store.hasModule(POSTBACK)) store.registerModule(POSTBACK, postbackStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(POSTBACK)) store.unregisterModule(POSTBACK)
    })

    const isAddNewPostbackSidebarActive = ref(false)

    const statusOptions = [
      { label: 'Pending', value: 2 },
      { label: 'Active', value: 1 },
      { label: 'Inactive', value: 0 },
    ]
     function deletePostback(id) {
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
                  store.dispatch('app-postback/deletePostback', { id: id })
                  this.$swal({
                      icon: 'success',
                      title: 'Deleted!',
                      text: 'Postback has been deleted.',
                      customClass: {
                          confirmButton: 'btn btn-success',
                      },
                  })
                  refetchData()
              } else if (result.dismiss === 'cancel') {
                  this.$swal({
                      title: 'Cancelled',
                      text: 'Postback not deleted :)',
                      icon: 'error',
                      customClass: {
                          confirmButton: 'btn btn-success',
                      },
                  })
              }
          })
      }

      store.dispatch('app-postback/fetchFilterData')
          .then(response => {
              filterData.value = response.data.filterData
          })
          .catch(error => {
              if (error.response.status === 404) {
                  filterData.value = undefined
              }
          })



      const {
      fetchPostbacks,
      tableColumns,
      perPage,
      currentPage,
      totalPostbacks,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refPostbackListTable,
      refetchData,

      // UI
      resolvePostbackRoleVariant,
      resolvePostbackRoleIcon,
      resolvePostbackStatusVariant,

      // Extra Filters
      planFilter,
      statusFilter,
    } = usePostbacksList()

    return {
      // Sidebar
      isAddNewPostbackSidebarActive,
      deletePostback,
      fetchPostbacks,
      tableColumns,
      perPage,
      currentPage,
      totalPostbacks,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refPostbackListTable,
      refetchData,

      // Filter
      avatarText,

      // UI
      resolvePostbackRoleVariant,
      resolvePostbackRoleIcon,
      resolvePostbackStatusVariant,

      statusOptions,

      // Extra Filters
      planFilter,
      statusFilter,

      // FILTER DATA
      filterData,

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
