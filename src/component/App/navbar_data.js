// import the route events for navbar
import RouteEvents from './sidebar_renderer_events'

const archiveNav = [
    {
        label : 'Customers',
        path : '/database-maintenance/customers'
    },
    {
        label : 'Prospects',
        path :  '/database-maintenance/prospects'
    },
    {
        label : 'Shippers/Consignees',
        path :  '/database-maintenance/shippers'
    },
    {
        label : 'Outside Carriers',
        path :  '/database-maintenance/outside-carriers'
    },
    {
        label : 'Misc. Vendors',
        path :  '/database-maintenance/misc-vendors'
    },
    {
        label : 'Customs Broker',
        path :  '/database-maintenance/customs-broker'
    },
    {
        label : 'Standard Charges',
        path :  '/database-maintenance/standard-charges'
    },
    {
        label : 'Jurisdictions',
        path :  '/database-maintenance/jurisdictions'
    },
    {
        label : 'Resources',
        path :  '/database-maintenance/resources'
    },
    {
        label : 'Payroll Schedules',
        path :  '/database-maintenance/payroll-schedules'
    },
    {
        label : 'Standard Templates',
        path :  '/database-maintenance/standard-templates'
    },
    {
        label : 'Lists',
        path :  '/database-maintenance/lists'
    },
    {
        label : 'Comissions',
        path :  '/database-maintenance/comissions'
    },
    {
        label : 'Master Orders',
        path :  '/database-maintenance/master-orders'
    },
    {
        label : 'Travel Times',
        path :  '/database-maintenance/travel-times'
    }
]

const nav_bar = [
    {
        LOGISITCS : [
            {
                label : 'Order Entry',
                path : '/order-entry'
            },
            {
                label : 'Planner',
                path : '/planner'
            },
            {
                label : 'Dispatch Board',
                path:'/dispatch-board'
            }
        ]
    },
    {
        ACCOUNTING : [
            {
                label : 'Taxes',
                path : '/taxes'
            },
            {
                label : 'IFTA',
                path : '/ifta'
            },
            {
                label : 'AR/PR',
                path : '/ar-pr'
            },
            {
                label : 'Driver Payroll',
                path : '/driver-payroll'
            }
        ]
    },
    {
        SERVICES : [
            {
                label : 'Purchase Order',
                path : '/purchase-order'
            },
            {
                label : 'Maintenance',
                path : '/maintenance'
            },
            {
                label : 'Quotation',
                path : '/quotation'
            },
            {
                label : 'Vendor Management',
                path : '/vendor-management'
            },
            {
                label : 'Database Maintenance',
                path : '/database-maintenance/lists',
                event : RouteEvents['database_maintenance']
            }
        ]
    }
]

export {archiveNav, nav_bar};