// ============================================
// Team Member Dashboard - App Logic
// ============================================

// --- Sample Data ---
const teamMembers = [
    {
        id: 1, firstName: 'Sarah', lastName: 'Chen', role: 'Engineering Lead',
        department: 'engineering', status: 'active', location: 'San Francisco, CA',
        email: 'sarah.chen@company.com', phone: '+1 (415) 555-0101',
        joinDate: '2021-03-15', projectsCompleted: 34, tasksInProgress: 5,
        avatar: 'Sarah', remote: false
    },
    {
        id: 2, firstName: 'Marcus', lastName: 'Rodriguez', role: 'Senior Designer',
        department: 'design', status: 'active', location: 'Austin, TX',
        email: 'marcus.r@company.com', phone: '+1 (512) 555-0202',
        joinDate: '2020-07-22', projectsCompleted: 28, tasksInProgress: 3,
        avatar: 'Marcus', remote: false
    },
    {
        id: 3, firstName: 'Aisha', lastName: 'Patel', role: 'Product Manager',
        department: 'marketing', status: 'remote', location: 'New York, NY',
        email: 'aisha.p@company.com', phone: '+1 (212) 555-0303',
        joinDate: '2022-01-10', projectsCompleted: 19, tasksInProgress: 4,
        avatar: 'Aisha', remote: true
    },
    {
        id: 4, firstName: 'James', lastName: 'O\'Brien', role: 'Sales Director',
        department: 'sales', status: 'active', location: 'Chicago, IL',
        email: 'james.ob@company.com', phone: '+1 (312) 555-0404',
        joinDate: '2019-11-05', projectsCompleted: 42, tasksInProgress: 2,
        avatar: 'James', remote: false
    },
    {
        id: 5, firstName: 'Yuki', lastName: 'Tanaka', role: 'UX Researcher',
        department: 'design', status: 'on-leave', location: 'Seattle, WA',
        email: 'yuki.t@company.com', phone: '+1 (206) 555-0505',
        joinDate: '2022-06-18', projectsCompleted: 15, tasksInProgress: 0,
        avatar: 'Yuki', remote: false
    },
    {
        id: 6, firstName: 'David', lastName: 'Kim', role: 'Backend Engineer',
        department: 'engineering', status: 'active', location: 'Portland, OR',
        email: 'david.kim@company.com', phone: '+1 (503) 555-0606',
        joinDate: '2021-09-01', projectsCompleted: 27, tasksInProgress: 6,
        avatar: 'David', remote: true
    },
    {
        id: 7, firstName: 'Elena', lastName: 'Volkov', role: 'HR Manager',
        department: 'hr', status: 'active', location: 'Denver, CO',
        email: 'elena.v@company.com', phone: '+1 (303) 555-0707',
        joinDate: '2020-02-14', projectsCompleted: 22, tasksInProgress: 3,
        avatar: 'Elena', remote: false
    },
    {
        id: 8, firstName: 'Carlos', lastName: 'Mendoza', role: 'Financial Analyst',
        department: 'finance', status: 'remote', location: 'Miami, FL',
        email: 'carlos.m@company.com', phone: '+1 (305) 555-0808',
        joinDate: '2022-04-20', projectsCompleted: 12, tasksInProgress: 2,
        avatar: 'Carlos', remote: true
    },
    {
        id: 9, firstName: 'Priya', lastName: 'Sharma', role: 'Frontend Engineer',
        department: 'engineering', status: 'active', location: 'San Francisco, CA',
        email: 'priya.s@company.com', phone: '+1 (415) 555-0909',
        joinDate: '2023-01-09', projectsCompleted: 14, tasksInProgress: 4,
        avatar: 'Priya', remote: false
    },
    {
        id: 10, firstName: 'Tom', lastName: 'Anderson', role: 'Marketing Lead',
        department: 'marketing', status: 'active', location: 'Los Angeles, CA',
        email: 'tom.a@company.com', phone: '+1 (310) 555-1010',
        joinDate: '2021-05-25', projectsCompleted: 31, tasksInProgress: 2,
        avatar: 'Tom', remote: false
    },
    {
        id: 11, firstName: 'Nina', lastName: 'Kowalski', role: 'Sales Representative',
        department: 'sales', status: 'on-leave', location: 'Boston, MA',
        email: 'nina.k@company.com', phone: '+1 (617) 555-1111',
        joinDate: '2022-08-12', projectsCompleted: 18, tasksInProgress: 0,
        avatar: 'Nina', remote: false
    },
    {
        id: 12, firstName: 'Raj', lastName: 'Gupta', role: 'DevOps Engineer',
        department: 'engineering', status: 'remote', location: 'Austin, TX',
        email: 'raj.g@company.com', phone: '+1 (512) 555-1212',
        joinDate: '2021-11-30', projectsCompleted: 25, tasksInProgress: 3,
        avatar: 'Raj', remote: true
    },
    {
        id: 13, firstName: 'Lisa', lastName: 'Wong', role: 'Content Strategist',
        department: 'marketing', status: 'active', location: 'Seattle, WA',
        email: 'lisa.w@company.com', phone: '+1 (206) 555-1313',
        joinDate: '2023-03-07', projectsCompleted: 9, tasksInProgress: 3,
        avatar: 'Lisa', remote: true
    },
    {
        id: 14, firstName: 'Ahmed', lastName: 'Hassan', role: 'Account Executive',
        department: 'sales', status: 'active', location: 'Dallas, TX',
        email: 'ahmed.h@company.com', phone: '+1 (214) 555-1414',
        joinDate: '2022-02-28', projectsCompleted: 21, tasksInProgress: 4,
        avatar: 'Ahmed', remote: false
    },
    {
        id: 15, firstName: 'Sophie', lastName: 'Martin', role: 'Graphic Designer',
        department: 'design', status: 'active', location: 'Portland, OR',
        email: 'sophie.m@company.com', phone: '+1 (503) 555-1515',
        joinDate: '2023-05-15', projectsCompleted: 11, tasksInProgress: 2,
        avatar: 'Sophie', remote: false
    },
    {
        id: 16, firstName: 'Michael', lastName: 'Brown', role: 'CFO',
        department: 'finance', status: 'active', location: 'New York, NY',
        email: 'michael.b@company.com', phone: '+1 (212) 555-1616',
        joinDate: '2018-06-01', projectsCompleted: 45, tasksInProgress: 1,
        avatar: 'Michael', remote: false
    },
    {
        id: 17, firstName: 'Chloe', lastName: 'Dubois', role: 'UX Designer',
        department: 'design', status: 'on-leave', location: 'San Francisco, CA',
        email: 'chloe.d@company.com', phone: '+1 (415) 555-1717',
        joinDate: '2022-09-12', projectsCompleted: 16, tasksInProgress: 0,
        avatar: 'Chloe', remote: false
    },
    {
        id: 18, firstName: 'Wei', lastName: 'Zhang', role: 'Full Stack Developer',
        department: 'engineering', status: 'active', location: 'San Jose, CA',
        email: 'wei.z@company.com', phone: '+1 (408) 555-1818',
        joinDate: '2022-11-01', projectsCompleted: 20, tasksInProgress: 5,
        avatar: 'Wei', remote: true
    },
    {
        id: 19, firstName: 'Anna', lastName: 'Petrova', role: 'HR Coordinator',
        department: 'hr', status: 'active', location: 'Denver, CO',
        email: 'anna.p@company.com', phone: '+1 (303) 555-1919',
        joinDate: '2023-02-20', projectsCompleted: 8, tasksInProgress: 2,
        avatar: 'Anna', remote: false
    },
    {
        id: 20, firstName: 'Jason', lastName: 'Lee', role: 'Sales Manager',
        department: 'sales', status: 'active', location: 'Chicago, IL',
        email: 'jason.l@company.com', phone: '+1 (312) 555-2020',
        joinDate: '2020-04-10', projectsCompleted: 38, tasksInProgress: 3,
        avatar: 'Jason', remote: false
    },
    {
        id: 21, firstName: 'Fatima', lastName: 'Al-Rashid', role: 'Data Analyst',
        department: 'finance', status: 'active', location: 'Washington, DC',
        email: 'fatima.ar@company.com', phone: '+1 (202) 555-2121',
        joinDate: '2023-06-01', projectsCompleted: 7, tasksInProgress: 3,
        avatar: 'Fatima', remote: true
    },
    {
        id: 22, firstName: 'Oscar', lastName: 'Nilsson', role: 'QA Engineer',
        department: 'engineering', status: 'on-leave', location: 'Minneapolis, MN',
        email: 'oscar.n@company.com', phone: '+1 (612) 555-2222',
        joinDate: '2022-07-18', projectsCompleted: 23, tasksInProgress: 0,
        avatar: 'Oscar', remote: false
    },
    {
        id: 23, firstName: 'Mia', lastName: 'Johnson', role: 'Brand Manager',
        department: 'marketing', status: 'active', location: 'Nashville, TN',
        email: 'mia.j@company.com', phone: '+1 (615) 555-2323',
        joinDate: '2021-08-05', projectsCompleted: 26, tasksInProgress: 2,
        avatar: 'Mia', remote: false
    },
    {
        id: 24, firstName: 'Alex', lastName: 'Turner', role: 'Security Engineer',
        department: 'engineering', status: 'active', location: 'Remote',
        email: 'alex.t@company.com', phone: '+1 (555) 555-2424',
        joinDate: '2023-04-10', projectsCompleted: 10, tasksInProgress: 4,
        avatar: 'Alex', remote: true
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

        // Use DocumentFragment for performance
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
        // Status filter
        if (currentFilter !== 'all') {
            if (currentFilter === 'remote') {
                if (!member.remote) return false;
            } else if (member.status !== currentFilter) {
                return false;
            }
        }

        // Department filter
        if (currentDepartment !== 'all') {
            if (member.department !== currentDepartment) return false;
        }

        // Search filter
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
    const current = parseInt(el.textContent) || 0;
    if (current === targetValue) return;

    const duration = 300;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
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
    // Create/toggle overlay
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
    const location = document.getElementById('location').value.trim() || 'Remote';

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
        remote: false
    };

    teamMembers.unshift(newMember);
    renderMembers();
    closeModal(addMemberModal);
    addMemberForm.reset();
    showToast(`${firstName} ${lastName} has been added to the team!`, 'success');
});

// Nav items (just visual active state)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// --- Initialize ---
renderMembers();