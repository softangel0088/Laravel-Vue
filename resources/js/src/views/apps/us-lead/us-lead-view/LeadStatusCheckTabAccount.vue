<template>
    <div>

        <b-card>
            <!-- Media -->
            <b-media class="mb-2">
                <h5 class="mb-1">
                    Status Logs
                </h5>
            </b-media>

            <b-modal
                    id="modal-post-data"
                    ok-only
                    ok-title="Accept"
                    centered
                    title="Post Data"
            >
                <code>
                    {{modalPostData}}
                </code>
            </b-modal>
            <b-modal
                    id="modal-post-response"
                    ok-only
                    ok-title="Accept"
                    centered
                    title="Post Response"
            >

                <code>
                    {{modalPostResponse}}
                </code>
            </b-modal>


            <b-table
                    :striped="true"
                    :bordered="true"
                    :borderless="true"
                    :outlined="true"
                    :fields="fields"
                    :items="leadLogData.leadlog"
                    responsive="sm"
                    :small="true"

            >
                <!-- A virtual column -->
                <template #cell(index)="data">
                    {{ data.item.id }}
                </template>

                <!-- A custom formatted column -->
                <template #cell(lead_id)="data">
                    {{ data.item.lead_id }}
                </template>

                <template #cell(buyer_setup_id)="data">
                    {{ data.item.buyer_setup_id }}
                </template>

                <template #cell(post_time)="data">
                    <span v-if="data.item.post_time >= 30" class="danger"> {{ data.item.post_time }}</span>
                    <span v-else-if="data.item.post_time >= 20 && data.item.post_time <= 29" class="warning"> {{ data.item.post_time }}</span>
                    <span v-else-if="data.item.post_time >= 10 && data.item.post_time <= 19" class="info"> {{ data.item.post_time }}</span>
                    <span v-else-if="data.item.post_time < 9" class="info"> {{ data.item.post_time }}</span>

                </template>

                <template #cell(isredirected)="data">
                    <span v-if="data.item.isredirected == 1" class="text-success"> 100%</span>
                    <span v-else-if="data.item.isredirected == 0" class="text-danger"> 0%</span>
                </template>
                <template #cell(post_data)="data">


                    <b-badge pill
                             v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                             v-b-modal.modal-post-data
                             variant="light-primary"
                             @click="modalContextMenu(data.item.post_data)">
                        View
                    </b-badge>

                </template>
                <template #cell(post_response)="data">
                    <b-badge pill
                             v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                             v-b-modal.modal-post-response
                             variant="light-primary"
                             @click="modalPostResponse(data.item.post_response)">
                        View
                    </b-badge>
                </template>

                <!-- A custom formatted column -->
                <template #cell(post_status)="data">
                    <div v-if="data.item.post_status == 0">
                        <b-progress
                                value="100"
                                max="100"
                                :variant="'success'"
                                striped
                        />
                    </div>

                    <b-progress
                            v-else-if="data.item.post_status == 0"
                            :value="100"
                            max="100"
                            :variant="'danger'"
                            striped
                    />
                    <b-progress
                            v-else-if="data.item.post_status == 3"
                            :value="100"
                            max="100"
                            :variant="'warning'"
                            striped
                    />
                </template>


                <template #cell(lender_found)="data">
                    <b-badge pill variant="primary">
                        {{ data.item.lender_found }}
                    </b-badge>
                </template>

                <!-- A virtual composite column -->
                <template #cell(post_price)="data">
                    $ {{ data.item.post_price }}
                </template>

                <!-- A virtual composite column -->
                <!--          <template #cell(reason)="data">-->
                <!--              $ {{ data.item.reason }}-->
                <!--          </template>-->


            </b-table>


        </b-card>
    </div>

</template>

<script>
    import {
        BButton,
        BMedia,
        BAvatar,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BForm,
        BTable,
        BCard,
        BCardHeader,
        BCardTitle,
        BFormCheckbox,
        BTab,
        BTabs, BAlert, BLink,
        BProgress, BBadge, VBModal
    } from 'bootstrap-vue'
    import {avatarText} from '@core/utils/filter'
    import vSelect from 'vue-select'
    import {useInputImageRenderer} from '@core/comp-functions/forms/form-utils'
    import {ref} from '@vue/composition-api'
    import useUSLeadsList from '../us-lead-list/useLeadList'
    import router from '@/router'
    import store from '@/store'
    import Ripple from 'vue-ripple-directive'

    export default {
        components: {
            BButton,
            BMedia,
            BAvatar,
            BRow,
            BCol,
            BFormGroup,
            BFormInput,
            BForm,
            BTable,
            BCardHeader,
            BCardTitle,
            BFormCheckbox,
            vSelect,
            BTab,
            BTabs,
            BCard,
            BAlert,
            BLink,
            BProgress,
            BBadge,
            VBModal,
        },

        props: {
            leadData: {
                type: Object,
                required: true,
            },
        },
        directives: {
            'b-modal': VBModal,
            Ripple,
        },
        methods: {
            modalContextMenu(data) {
                this.modalPostData = data;
                this.modalShow = true;
            },
            modalPostResponse(data) {
                this.modalPostResponse = data;
                this.modalShow = true;
            },

        },
        setup(props) {
            const modalPostData = ref()
            const modalPostResp = ref()

            const {resolveUserRoleVariant} = useUSLeadsList()

            const roleOptions = [
                {label: 'Admin', value: 'admin'},
                {label: 'Author', value: 'author'},
                {label: 'Editor', value: 'editor'},
                {label: 'Maintainer', value: 'maintainer'},
                {label: 'Subscriber', value: 'subscriber'},
            ]
            const statusOptions = [
                {label: 'Pending', value: 'pending'},
                {label: 'Active', value: 'active'},
                {label: 'Inactive', value: 'inactive'},
            ]
            const fields = [
                // A virtual column that doesn't exist in items
                'index',
                // A column that needs custom formatting
                {key: 'lead_id', label: 'Lead ID'},
                {key: 'buyer_setup_id', label: 'Tier ID'},
                {key: 'post_time', label: 'Post Time'},
                {key: 'isredirected', label: 'Redirected'},
                {key: 'post_data', label: 'Post Data'},
                {key: 'post_response', label: 'Post Resp'},
                {key: 'post_status', label: 'Post Status'},
                {key: 'lender_found', label: 'Status'},
                {key: 'reason', label: 'Reason'},
                // A virtual column made up from two fields
                {key: 'post_price', label: 'Price'},
            ]
            const refInputEl = ref(null)
            const previewEl = ref(null)
            const leadLogData = ref(null)
            const {inputImageRenderer} = useInputImageRenderer(refInputEl, base64 => {
                // eslint-disable-next-line no-param-reassign
                props.leadData.avatar = base64
            })

            store.dispatch('app-us-lead/getUsLeadLog', {id: router.currentRoute.params.id})
                .then(response => {
                    leadLogData.value = response.data
                })
                .catch(error => {
                    if (error.response.status === 404) {
                        leadLogData.value = undefined
                    }
                })


            return {
                resolveUserRoleVariant,
                avatarText,
                roleOptions,
                statusOptions,
                fields,
                refInputEl,
                previewEl,
                inputImageRenderer,
                leadLogData,
                modalPostResp,
                modalPostData,
            }
        },
    }
</script>

<style lang="scss">
    @import '~@core/scss/vue/libs/vue-select.scss';
</style>
