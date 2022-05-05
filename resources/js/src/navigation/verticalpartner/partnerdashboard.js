export default [
    {
        title: 'Dashboard',
        icon: 'HomeIcon',
        children: [
            {
                title: 'Leads',
                children: [
                    {
                        title: 'UK',
                        route: 'dashboard-partner-leads-uk',
                        // meta: { requiresAuth: true }
                    },
                    {
                        title: 'USA',
                        route: 'dashboard-partner-leads-us',
                    },
                ],
            },
            {
                title: 'Offer',
                route: 'dashboard-partner-offers',
            },
        ],
    },

    // *===============================================---*
    // *--------- OFFER  ---------------------------------------*
    // *===============================================---*
    {
        header: 'Offers',
    },

    {
        title: 'Offer',
        icon: 'ListIcon',

        tagVariant: 'light-warning',
        children: [
            {
                title: 'List',
                route: 'apps-partner-offer-list',
            },
            // {
            //     title: 'Saved Offers',
            //     route: 'apps-partner-offer-wishlist',
            // },
        ],
    },

// *===============================================---*
// *--------- Reports  ---------------------------------------*
// *===============================================---*
    {
        header: 'Reports',
    },
    {
        title: 'Report',
        icon: 'BarChart2Icon',

        tagVariant: 'light-warning',
        children: [
            {
                title: 'UK Reports',
                route: 'apps-partner-report-uk-list',
                // meta: { requiresAuth: true }
            },
            {
                title: 'US Reports',
                route: 'apps-partner-report-us-list',
                // meta: { requiresAuth: true }
            },
            {
                title: 'Click Reports',
                route: 'apps-partner-report-offer-list',
                // meta: { requiresAuth: true }
            },
            {
                title: 'Referral Reports',
                route: 'apps-partner-report-referral-list',
                // meta: { requiresAuth: true }
            },
            {
                title: 'Postback Reports',
                route: 'apps-partner-report-postback-list',
                // meta: { requiresAuth: true }
            },
        ],
},
    // *===============================================---*
// *--------- Postbacks  ---------------------------------------*
// *===============================================---*
    {
        header: 'Postbacks',
    },
    {
        title: 'Postback',
        icon: 'LayersIcon',
        children: [
            {
                title: 'List',
                route: 'apps-partner-postback-list',
            },
        ],
    },
    // *===============================================---*
// *--------- Iframe  ---------------------------------------*
// *===============================================---*
    {
        header: 'Channel',
    },
    {
        title: 'Channels',
        icon: 'LayersIcon',
        children: [
            {
                title: 'List',
                route: 'apps-partner-channel-list',
            },
        ],
    },
    // *===============================================---*
// *--------- API DOCS  ---------------------------------------*
// *===============================================---*
    {
        header: 'API Documentation',
    },
    {
        title: 'API Docs',
        icon: 'ActivityIcon',

        tagVariant: 'light-warning',
        children: [
            {
                title: 'UK',
                route: 'dashboard-partner-api-docs-uk',
            },

            {
                title: 'USA',
                route: 'dashboard-partner-api-docs-us',
            },
        ],
    },
    // *===============================================---*
// *--------- Invoices  ---------------------------------------*
// *===============================================---*
    {
        header: 'Invoices',
    },
    {
        title: 'Invoice',
        icon: 'CreditCardIcon',

        tagVariant: 'light-warning',
        children: [
            {
                title: 'List',
                route: 'apps-partner-invoice-list',
                // meta: { requiresAuth: true }
            },
        ],
    },

]
