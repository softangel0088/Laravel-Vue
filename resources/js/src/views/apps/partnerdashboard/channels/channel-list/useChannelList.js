import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function usePostbacksList() {
  // Use toast
  const toast = useToast()

  const refPostbackListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'channel_name', label: 'Name',  sortable: true },
    { key: 'affiliatePostbackUrl', label: 'Postback URL',  sortable: true },
    { key: 'global', label: 'Global',  sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalPostbacks = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refPostbackListTable.value ? refPostbackListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalPostbacks.value,
    }
  })

  const refetchData = () => {
    refPostbackListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, statusFilter], () => {
    refetchData()
  })

  const fetchPostbacks = (ctx, callback) => {
    store
      .dispatch('apps-partner-channel/fetchPostbacks', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { channels } = response.data

        callback(channels.data)
        totalPostbacks.value = channels.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching channels',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolvePostbackRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolvePostbackRoleIcon = role => {
    if (role === 'subscriber') return 'PostbackIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
    return 'PostbackIcon'
  }

  const resolvePostbackGlobalVariant = global => {
    if (global === 'Active') return 'success'
    if (global === 'Inactive') return 'secondary'
    return 'primary'
  }

    function goBack() {
        history.back();
    }


    return {
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

    resolvePostbackRoleVariant,
    resolvePostbackRoleIcon,
    resolvePostbackGlobalVariant,
    refetchData,
    goBack,

    // Extra Filters
    statusFilter,
  }
}
