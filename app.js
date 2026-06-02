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
        joinDate: '2021-09-01', projectsCompleted: 27, tasksInProgress: 6,
        avatar: 'Wendy', remote: true,
        reviewAverage: 4.4, upsells: 30, sales: 39750
    }
];

// --- State ---
let currentFilter = 'all';
let currentDepartment = 'all';
let currentView = 'grid';
let searchQuery = '';

// --- DOM References ---
const membersGrid = document.getElementById('membersGrid');
const searchInput = document.getElementById('searchInput');
const departmentFilter = document.getElementById('departmentFilter');
const emptyState = document.getElementById('emptyState');
const memberModal = document.getElementById('memberModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const addMemberModal = document.getElementById('addMemberModal');
const addMemberBtn = document.getElementById('addMemberBtn');
const addMemberClose = document.getElementById('addMemberClose');
const addMemberForm = document.getElementById('addMemberForm');
const cancelAddMember = document.getElementById('cancelAddMember');
const toastContainer = document.getElementById('toastContainer');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const themeSwitch = document.getElementById('themeSwitch');
const notificationBtn = document.querySelector('.notification-btn');

// --- Utility Functions ---
function getInitials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getStatusLabel(status) {
    const labels = { 'active': 'Active', 'on-leave': 'On Leave', 'remote': 'Remote', 'offline': 'Offline' };
    return labels[status] || status;
}

function getDeptLabel(dept) {
    const labels = {
        'engineering': 'Engineering', 'design': 'Design', 'marketing': 'Marketing',
        'sales': 'Sales', 'hr': 'Human Resources', 'finance': 'Finance'
    };
    return labels[dept] || dept;
}

// --- Render Functions ---
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.dataset.id = member.id;

    card.innerHTML = `
        <div class="member-card-header">
            <div class="member-avatar">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}" alt="${member.firstName} ${member.lastName}">
                <span class="member-status-dot ${member.status}"></span>
            </div>
            <div class="member-info">
                <div class="member-name">${member.firstName} ${member.lastName}</div>
                <div class="member-role">${member.role}</div>
            </div>
        </div>
        <div class="member-card-body">
            <div class="member-meta">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3">
                    <rect x="1" y="1" width="12" height="12" rx="2"/>
                    <path d="M1 5h12"/>
                </svg>
                <span>${getDeptLabel(member.department)}</span>
            </div>
            <div class="member-meta">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3">
                    <path d="M7 1.5C4.5 1.5 2.5 3.5 2.5 6c0 3.5 4.5 6.5 4.5 6.5s4.5-3 4.5-6.5c0-2.5-2-4.5-4.5-4.5z"/>
                    <circle cx="7" cy="6" r="1.5"/>
                </svg>
                <span>${member.location}</span>
            </div>
            <div class="member-tags">
                <span class="tag tag-${member.status}">${getStatusLabel(member.status)}</span>
                ${member.remote ? '<span class="tag tag-remote">Remote</span>' : ''}
            </div>
        </div>
        <div class="member-card-footer">
            <span class="member-dept">${getDeptLabel(member.department)}</span>
            <div class="member-actions">
                <button class="member-action-btn" title="Send email" onclick="event.stopPropagation(); window.open('mailto:${member.email}')">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3">
                        <rect x="1" y="3" width="14" height="10" rx="2"/>
                        <path d="M1 5l7 4 7-4"/>
                    </svg>
                </button>
                <button class="member-action-btn" title="View profile" onclick="event.stopPropagation(); openMemberModal(${member.id})">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3">
                        <circle cx="8" cy="5" r="3"/>
                        <path d="M2 15c0-3.31 2.69-6 6-6s6 2.69 6 6"/>
                    </svg>
                </button>
            </div>
        </div>
    `;

    card.addEventListener('click', () => openMemberModal(member.id));
    return card;
}

function renderMembers() {
    const filtered = getFilteredMembers();
    membersGrid.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
        membersGrid.style.display = 'none';
    } else {
        emptyState.classList.add('hidden');
        membersGrid.style.display = '';

        const fragment = document.createDocumentFragment();
        filtered.forEach(member => {
            fragment.appendChild(createMemberCard(member));
        });
        membersGrid.appendChild(fragment);
    }

    updateStats(filtered);
}

function getFilteredMembers() {
    return teamMembers.filter(member => {
        if (currentFilter !== 'all') {
            if (currentFilter === 'remote') {
                if (!member.remote) return false;
            } else if (member.status !== currentFilter) {
                return false;
            }
        }

        if (currentDepartment !== 'all') {
            if (member.department !== currentDepartment) return false;
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
            const matchFields = [fullName, member.role, member.department, member.location, member.email];
            if (!matchFields.some(f => f.includes(q))) return false;
        }

        return true;
    });
}

function updateStats(filtered) {
    const total = filtered.length;
    const active = filtered.filter(m => m.status === 'active').length;
    const onLeave = filtered.filter(m => m.status === 'on-leave').length;
    const depts = new Set(filtered.map(m => m.department)).size;

    animateCounter('totalMembers', total);
    animateCounter('activeMembers', active);
    animateCounter('onLeaveMembers', onLeave);
    animateCounter('totalDepartments', depts);
}

function animateCounter(elementId, targetValue) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const current = parseInt(el.textContent) || 0;
    if (current === targetValue) return;

    const duration = 300;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(current + (targetValue - current) * eased);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// --- Modal Functions ---
function openMemberModal(memberId) {
    const member = teamMembers.find(m => m.id === memberId);
    if (!member) return;

    const projectsPerMonth = member.projectsCompleted > 0
        ? Math.round(member.projectsCompleted / Math.max(1, monthsSince(member.joinDate)))
        : 0;

    modalBody.innerHTML = `
        <div class="modal-profile-header">
            <div class="modal-avatar">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}" alt="${member.firstName} ${member.lastName}">
            </div>
            <div>
                <div class="modal-name">${member.firstName} ${member.lastName}</div>
                <div class="modal-role">${member.role}</div>
            </div>
        </div>
        <div class="modal-details">
            <div class="modal-detail-item">
                <span class="modal-detail-label">Email</span>
                <span class="modal-detail-value">${member.email}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-detail-label">Phone</span>
                <span class="modal-detail-value">${member.phone}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-detail-label">Department</span>
                <span class="modal-detail-value">${getDeptLabel(member.department)}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-detail-label">Status</span>
                <span class="modal-detail-value" style="display:flex;align-items:center;gap:6px;">
                    <span style="width:8px;height:8px;border-radius:50%;background:var(--status-${member.status});display:inline-block;"></span>
                    ${getStatusLabel(member.status)}
                </span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-detail-label">Location</span>
                <span class="modal-detail-value">${member.location}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-detail-label">Joined</span>
                <span class="modal-detail-value">${formatDate(member.joinDate)}</span>
            </div>
        </div>
        <div class="modal-stats">
            <div class="modal-stat">
                <div class="modal-stat-value">${member.projectsCompleted}</div>
                <div class="modal-stat-label">Projects Done</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-value">${member.tasksInProgress}</div>
                <div class="modal-stat-label">In Progress</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-value">${projectsPerMonth}/mo</div>
                <div class="modal-stat-label">Avg. Output</div>
            </div>
        </div>
    `;

    openModal(memberModal);
}

function monthsSince(dateStr) {
    const start = new Date(dateStr);
    const now = new Date();
    return (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
}

function openModal(overlay) {
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => {
        overlay.classList.add('visible');
    });
    document.body.style.overflow = 'hidden';
}

function closeModal(overlay) {
    overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }, 250);
}

// --- Toast ---
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#10b981" stroke-width="2"><circle cx="9" cy="9" r="7"/><path d="M6 9l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        error: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="9" cy="9" r="7"/><path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke-linecap="round"/></svg>',
        info: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#6366f1" stroke-width="2"><circle cx="9" cy="9" r="7"/><path d="M9 8v4M9 5.5v.01" stroke-linecap="round"/></svg>'
    };

    toast.innerHTML = `${icons[type] || icons.info}<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// --- Event Handlers ---

// Search
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQuery = e.target.value.trim();
        renderMembers();
    }, 200);
});

// Keyboard shortcut for search
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    if (e.key === 'Escape') {
        closeModal(memberModal);
        closeModal(addMemberModal);
        searchInput.blur();
    }
});

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.dataset.filter;
        renderMembers();
    });
});

// Department filter
departmentFilter.addEventListener('change', (e) => {
    currentDepartment = e.target.value;
    renderMembers();
});

// View toggle
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;

        if (currentView === 'list') {
            membersGrid.classList.add('list-view');
        } else {
            membersGrid.classList.remove('list-view');
        }
    });
});

// Sidebar toggle
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Mobile menu
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
        });
    }
    overlay.classList.toggle('visible');
});

// Theme switch
themeSwitch.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    document.querySelector('.theme-label').textContent = next === 'dark' ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', next);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.querySelector('.theme-label').textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Member modal close
modalClose.addEventListener('click', () => closeModal(memberModal));
memberModal.addEventListener('click', (e) => {
    if (e.target === memberModal) closeModal(memberModal);
});

// Add member modal
addMemberBtn.addEventListener('click', () => openModal(addMemberModal));
addMemberClose.addEventListener('click', () => closeModal(addMemberModal));
cancelAddMember.addEventListener('click', () => closeModal(addMemberModal));
addMemberModal.addEventListener('click', (e) => {
    if (e.target === addMemberModal) closeModal(addMemberModal);
});

// Add member form
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value.trim();
    const department = document.getElementById('addDepartment').value;
    const location = document.getElementById('location').value.trim() || 'Lewiston, ID';

    if (!firstName || !lastName || !email || !role || !department) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    const newMember = {
        id: Date.now(),
        firstName,
        lastName,
        role,
        department,
        status: 'active',
        location,
        email,
        phone: '+1 (555) 555-0000',
        joinDate: new Date().toISOString().split('T')[0],
        projectsCompleted: 0,
        tasksInProgress: 0,
        avatar: firstName,
        remote: false,
        reviewAverage: 0,
        upsells: 0,
        sales: 0
    };

    teamMembers.unshift(newMember);
    renderMembers();
    renderReports();
    closeModal(addMemberModal);
    addMemberForm.reset();
    showToast(`${firstName} ${lastName} has been added to the team!`, 'success');
});

// Notification button
if (notificationBtn) {
    notificationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast('You have 3 new notifications', 'info');
    });
}

// --- Reports ---
function formatCurrency(value) {
    return '$' + value.toLocaleString('en-US');
}

function renderReports() {
    const tableBody = document.getElementById('reportsTableBody');
    if (!tableBody) return;

    const count = teamMembers.length;
    const avgReview = count
        ? (teamMembers.reduce((sum, m) => sum + (m.reviewAverage || 0), 0) / count)
        : 0;
    const totalUpsells = teamMembers.reduce((sum, m) => sum + (m.upsells || 0), 0);
    const totalSales = teamMembers.reduce((sum, m) => sum + (m.sales || 0), 0);

    document.getElementById('avgReview').textContent = avgReview.toFixed(1);
    document.getElementById('totalUpsells').textContent = totalUpsells;
    document.getElementById('totalSales').textContent = formatCurrency(totalSales);
    document.getElementById('reportMembers').textContent = count;

    tableBody.innerHTML = '';
    const fragment = document.createDocumentFragment();
    teamMembers.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="reports-member">
                    <div class="reports-avatar">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}" alt="${member.firstName}">
                    </div>
                    <div>
                        <div class="reports-member-name">${member.firstName} ${member.lastName}</div>
                        <div class="reports-member-role">${member.role}</div>
                    </div>
                </div>
            </td>
            <td><span class="reports-review">${(member.reviewAverage || 0).toFixed(1)} <span class="reports-star">★</span></span></td>
            <td>${member.upsells || 0}</td>
            <td>${formatCurrency(member.sales || 0)}</td>
        `;
        fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
}

// --- Section Switching ---
const sectionTitles = {
    dashboard: { title: 'Team Dashboard', subtitle: "Manage and track your team's performance at a glance" },
    members: { title: 'Members', subtitle: 'Browse and manage your team members' }
};

function showSection(section) {
    const dashboardView = document.getElementById('dashboardView');
    const reportsView = document.getElementById('reportsView');

    if (section === 'reports') {
        dashboardView.classList.add('hidden');
        reportsView.classList.remove('hidden');
        renderReports();
    } else {
        reportsView.classList.add('hidden');
        dashboardView.classList.remove('hidden');
        const meta = sectionTitles[section] || sectionTitles.dashboard;
        const header = dashboardView.querySelector('.page-header-text');
        if (header) {
            header.querySelector('h1').textContent = meta.title;
            header.querySelector('p').textContent = meta.subtitle;
        }
    }
}

// Nav items: visual active state + section switching
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        showSection(item.dataset.section);
    });
});

// --- Initialize ---
renderMembers();
renderReports();