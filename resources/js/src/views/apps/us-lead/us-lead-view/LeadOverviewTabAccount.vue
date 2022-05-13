<template>
    <div>

        <b-card>
            <!-- Media -->
            <b-media class="mb-2">
                <h5>Recent Loan Applications</h5>
            </b-media>

            <b-table
                responsive
                :items="leadData.recentApplications.data"
                :fields="fields"
                class="mb-0"
                :small="true"
                :borderless="true"
                :hover="true"
                :striped="true"
            >
                <template #cell(id)="data">
                  <span class="text-nowrap">
                      <b-badge variant="light-primary">
                              {{ data.item.id }}

                      </b-badge>
                  </span>
                </template>
            <template #cell(US_lead)="data">
              <b-badge pill
                       v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                       v-b-modal.modal-post-us-lead
                       variant="light-primary"
                       @click="modalUSLead(data.item.lead)">
                  View
              </b-badge>
          </template>
           <template #cell(source)="data">
              <b-badge pill
                       v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                       v-b-modal.modal-post-source
                       variant="light-primary"
                       @click="modalSource(data.item.lead.source)">

                  View
              </b-badge>
          </template>
<!--                @click="modalPostResponse(data.item.post_response)">-->



            </b-table>

            <b-modal
                id="modal-post-us-lead"
                ok-only
                ok-title="Accept"
                centered
                title="Lead"
            >


                <ul>
                    <li v-for="(item, index) in modalUSLeadData">
                        <b-badge class="badge-light-primary" pill>
                            {{index}}
                        </b-badge>- {{item}}
                    </li>
                </ul>
            </b-modal>

            <b-modal
                id="modal-post-source"
                ok-only
                ok-title="Accept"
                centered
                title="Source"
            >

                <ul>
                    <li v-for="(item, index) in modalSourceData">
                        <b-badge class="badge-light-primary" pill>
                            {{index}}
                        </b-badge>- {{item}}
                    </li>
                </ul>
       </b-modal>


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
        BTabs, BAlert, BLink,BBadge,VBModal

    } from 'bootstrap-vue'
    import {avatarText} from '@core/utils/filter'
    import vSelect from 'vue-select'
    import {useInputImageRenderer} from '@core/comp-functions/forms/form-utils'
    import {ref} from '@vue/composition-api'
    import useUSLeadsList from '../us-lead-list/useLeadList'
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
            modalUSLead(data) {
                this.modalUSLeadData = data;
                this.modalShow= true;
            },
            modalSource(data) {
                this.modalSourceData = data;
                this.modalShow= true;
            },
        },
        data() {
            return {
                fields: [
                    { key: 'id',label: 'ID' },
                    { key: 'nameTitle',label: 'Lead' },
                    { key: 'firstName',label: 'First Name' },
                    { key: 'lastName',label: 'Last Name' },
                    { key: 'US_lead',label: 'Lead' },
                    { key: 'source',label: 'Source' },
                    // { key: 'lead_id',label: 'Lead ID' },
                    // { key: 'nameTitle',label: 'Title' },
                    // { key: 'first_name',label: 'Full name' },
                    // { key: 'email',label: 'Email' },
                    // {key: 'Phone', label: 'Phone',},
                    // 'Actions',
                ],
            }
        },
        setup(props) {
            const modalSourceData = ref()
            const modalUSLeadData = ref()
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


            // ? Demo Purpose => Update image on click of update
            const refInputEl = ref(null)
            const previewEl = ref(null)

            const {inputImageRenderer} = useInputImageRenderer(refInputEl, base64 => {
                // eslint-disable-next-line no-param-reassign
                props.leadData.avatar = base64
            })

            return {
                resolveUserRoleVariant,
                avatarText,
                roleOptions,
                statusOptions,

                //  ? Demo - Update Image on click of update button
                refInputEl,
                previewEl,
                inputImageRenderer,
                modalSourceData,
                modalUSLeadData,
            }
        },
    }
</script>

<style lang="scss">
    @import '~@core/scss/vue/libs/vue-select.scss';
</style>
