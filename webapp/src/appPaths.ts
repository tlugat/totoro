export const APP_PATHS = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    ACCOUNT_VERIFICATION: '/account-verification',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    FIRST_LOGIN: '/first-login',
    STATUS_404: '/status/404',
    STATUS_500: '/status/500',
    STATUS_MAINTENANCE: '/status/maintenance',
    STATUS_COMING: '/status/coming-soon',
    PROFILE_DETAILS: '/profile/details',
    PROFILE_SETTINGS: '/profile/settings',
    ORGANIZATION_DASHBOARDS_STATS: '/organization/dashboards/stats',
    ORGANIZATION_DASHBOARDS_RESUME: '/organization/dashboards/resume',
    JOIN_ORGANIZATION: '/organization/join',
    ADD_ORGANIZATION: '/organization/add',
    ORGANIZATION: (id: string) => `/organization/${id}/details`,
    ORGANIZATION_ADD_JOB: '/organization/add-job',
    ORGANIZATION_JOB_PARTICIPANTS: '/organization/jobs/:jobId/:id',
    ORGANIZATION_JOB_PARTICIPANT: (jobId: string, userId: string) => `/organization/jobs/${jobId}/participant/${userId}`,
    ORGANIZATION_JOBS: '/organization/jobs',
    ORGANIZATION_JOB: (id: string) => `/organization/jobs/${id}`,
    PARTNER_DASHBOARDS_RESUME: '/partner/dashboards/resume',
    PARTNER_ADD_DISCOUNT: '/partner/discounts/add',
    PARTNER_DISCOUNTS: '/partner/discounts',
    PARTNER_DISCOUNT: '/partner/discounts/:id',
} as const