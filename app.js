// ============================================
// Team Member Dashboard - App Logic
// ============================================

// --- Sample Data ---
const teamMembers = [
    {
        id: 1, firstName: 'Tyler', lastName: '', role: 'Server',
        department: 'sales', status: 'active', location: 'Lewiston, ID',
        email: 'tyler@company.com', phone: '+1 (602) 555-0101',
        joinDate: '2021-03-15', projectsCompleted: 34, tasksInProgress: 5,
        avatar: 'Tyler', remote: false,
        reviewAverage: 4.8, upsells: 32, sales: 48200
    },
    {
        id: 2, firstName: 'Leesa', lastName: '', role: 'Server',
        department: 'sales', status: 'active', location: 'Lewiston, ID',
        email: 'leesa@company.com', phone: '+1 (512) 555-0202',
        joinDate: '2020-07-22', projectsCompleted: 28, tasksInProgress: 3,
        avatar: 'Leesa', remote: true,
        reviewAverage: 4.6, upsells: 27, sales: 41500
    },
    {
        id: 3, firstName: 'Lindsey', lastName: '', role: 'Server',
        department: 'marketing', status: 'active', location: 'Lewiston, ID',
        email: 'Lindsey@company.com', phone: '+1 (303) 555-0303',
        joinDate: '2022-01-10', projectsCompleted: 19, tasksInProgress: 4,
        avatar: 'Lindsey', remote: false,
        reviewAverage: 4.9, upsells: 21, sales: 38900
    },
    {
        id: 4, firstName: 'Angel', lastName: '', role: 'Server',
        department: 'sales', status: 'on-leave', location: 'Lewiston, ID',
        email: 'angel@company.com', phone: '+1 (305) 555-0404',
        joinDate: '2022-06-18', projectsCompleted: 15, tasksInProgress: 0,
        avatar: 'Angel', remote: false,
        reviewAverage: 4.5, upsells: 19, sales: 33400
    },
    {
        id: 5, firstName: 'Maryanne', lastName: '', role: 'Server',
        department: 'design', status: 'active', location: 'Lewiston, ID',
        email: 'maryanne@company.com', phone: '+1 (206) 555-0505',
        joinDate: '2020-02-14', projectsCompleted: 22, tasksInProgress: 3,
        avatar: 'Maryanne', remote: false,
        reviewAverage: 4.7, upsells: 24, sales: 45100
    },
    {
        id: 6, firstName: 'Wendy', lastName: '', role: 'Server',
        department: 'marketing', status: 'active', location: 'Lewiston, ID',
        email: 'wendy@company.com', phone: '+1 (503) 555-0606',
        joinDate: '2021-09-01', projectsCompleted:[ERROR: Agent failed (Function process_single_item_agent timed out after 90.0 seconds), API failed (API request returned None after all retries)]