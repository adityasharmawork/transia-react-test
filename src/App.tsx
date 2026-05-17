import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeDepartment, setActiveDepartment] = useState('All')
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [dateRange, setDateRange] = useState('Last 30 days')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(false)
  const [monthlyReport, setMonthlyReport] = useState(true)
  const [criticalAlerts, setCriticalAlerts] = useState(true)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="app-container">
      {/* ===== HEADER ===== */}
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">TaskForge Pro</h1>
          <span className="app-tagline" title="Your all-in-one project management solution">
            Project Management Suite
          </span>
        </div>
        <div className="header-right">
          <button
            className="notification-bell"
            aria-label="View notifications"
            title="You have unread notifications"
          >
            <span className="bell-icon">&#128276;</span>
            <span className="notification-badge">3 new notifications</span>
          </button>
          <div className="user-avatar-area">
            <div className="avatar-circle" aria-label="User avatar for Alex Johnson">
              AJ
            </div>
            <div className="user-info">
              <span className="welcome-text">Welcome back, Alex</span>
              <span className="user-role">Senior Project Manager</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== TAB BAR ===== */}
      <nav className="tab-bar" aria-label="Main navigation">
        {(['overview', 'projects', 'team', 'reports', 'settings'] as const).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            aria-current={activeTab === tab ? 'page' : undefined}
            title={`Navigate to ${tab} section`}
          >
            {tab === 'overview' && 'Overview'}
            {tab === 'projects' && 'Projects'}
            {tab === 'team' && 'Team'}
            {tab === 'reports' && 'Reports'}
            {tab === 'settings' && 'Settings'}
          </button>
        ))}
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">

        {/* ==================== OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <div className="tab-content overview-tab">
            <h2 className="section-title">Dashboard Overview</h2>
            <p className="section-subtitle">
              Here is a summary of your workspace activity for the current period.
            </p>

            {/* Metric Cards */}
            <div className="metrics-grid">
              <div className="metric-card" title="Total number of active projects in your workspace">
                <span className="metric-label">Total Projects</span>
                <span className="metric-value">47</span>
                <span className="metric-detail">active</span>
                <span className="metric-trend positive">+5 from last month</span>
              </div>
              <div className="metric-card" title="Tasks completed across all projects this month">
                <span className="metric-label">Tasks Completed</span>
                <span className="metric-value">1,284</span>
                <span className="metric-detail">this month</span>
                <span className="metric-trend positive">+12% vs. last month</span>
              </div>
              <div className="metric-card" title="Percentage of tasks delivered on or ahead of schedule">
                <span className="metric-label">Team Velocity</span>
                <span className="metric-value">94%</span>
                <span className="metric-detail">on track</span>
                <span className="metric-trend neutral">Steady performance</span>
              </div>
              <div className="metric-card" title="Current budget consumption vs. total allocated budget">
                <span className="metric-label">Budget Utilization</span>
                <span className="metric-value">$342K</span>
                <span className="metric-detail">{`of $500K used`}</span>
                <span className="metric-trend warning">68% consumed with 45% timeline remaining</span>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="deadlines-section">
              <h3 className="subsection-title">Upcoming Deadlines</h3>
              <p className="subsection-description">Tasks requiring attention in the next two weeks.</p>
              <div className="deadlines-list">
                <div className="deadline-item">
                  <div className="deadline-info">
                    <span className="deadline-project">Website Redesign</span>
                    <span className="deadline-task">Finalize homepage mockups and submit for review</span>
                  </div>
                  <div className="deadline-meta">
                    <span className="deadline-date">Due: Jan 15, 2026</span>
                    <span className="priority-badge critical">Critical</span>
                  </div>
                </div>
                <div className="deadline-item">
                  <div className="deadline-info">
                    <span className="deadline-project">Mobile App v3.0</span>
                    <span className="deadline-task">Complete push notification integration</span>
                  </div>
                  <div className="deadline-meta">
                    <span className="deadline-date">Due: Jan 18, 2026</span>
                    <span className="priority-badge high">High</span>
                  </div>
                </div>
                <div className="deadline-item">
                  <div className="deadline-info">
                    <span className="deadline-project">Data Migration</span>
                    <span className="deadline-task">Run validation scripts on staging environment</span>
                  </div>
                  <div className="deadline-meta">
                    <span className="deadline-date">Due: Jan 20, 2026</span>
                    <span className="priority-badge high">High</span>
                  </div>
                </div>
                <div className="deadline-item">
                  <div className="deadline-info">
                    <span className="deadline-project">Q1 Marketing Campaign</span>
                    <span className="deadline-task">Draft social media content calendar</span>
                  </div>
                  <div className="deadline-meta">
                    <span className="deadline-date">Due: Jan 22, 2026</span>
                    <span className="priority-badge medium">Medium</span>
                  </div>
                </div>
                <div className="deadline-item">
                  <div className="deadline-info">
                    <span className="deadline-project">Internal Tools</span>
                    <span className="deadline-task">Update employee onboarding dashboard</span>
                  </div>
                  <div className="deadline-meta">
                    <span className="deadline-date">Due: Jan 28, 2026</span>
                    <span className="priority-badge low">Low</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Announcements */}
            <div className="announcements-section">
              <h3 className="subsection-title">Recent Announcements</h3>
              <div className="announcements-list">
                <div className="announcement-card">
                  <h4 className="announcement-title">New Design System Rollout</h4>
                  <div className="announcement-meta">
                    <span className="announcement-author">Posted by Sarah Chen</span>
                    <span className="announcement-date">January 10, 2026</span>
                  </div>
                  <p className="announcement-content">
                    We are excited to announce the launch of our updated design system. All teams should begin
                    migrating their components to the new library by the end of this quarter.
                  </p>
                </div>
                <div className="announcement-card">
                  <h4 className="announcement-title">Office Hours Schedule Change</h4>
                  <div className="announcement-meta">
                    <span className="announcement-author">Posted by Marcus Williams</span>
                    <span className="announcement-date">January 8, 2026</span>
                  </div>
                  <p className="announcement-content">
                    Starting next week, engineering office hours will move from Wednesday to Thursday afternoons.
                    Please update your calendars accordingly.
                  </p>
                </div>
                <div className="announcement-card">
                  <h4 className="announcement-title">Annual Company Retreat Registration</h4>
                  <div className="announcement-meta">
                    <span className="announcement-author">Posted by Lisa Patel</span>
                    <span className="announcement-date">January 5, 2026</span>
                  </div>
                  <p className="announcement-content">
                    Registration for the 2026 company retreat is now open. This year we will be heading to
                    Lake Tahoe for three days of team building and strategic planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="quick-links-section">
              <h3 className="subsection-title">Quick Links</h3>
              <p className="subsection-description">Frequently used actions and resources.</p>
              <div className="quick-links-grid">
                <a href="#" className="quick-link" title="Start a new project from scratch or use a template">
                  <span className="quick-link-icon">+</span>
                  <span className="quick-link-text">Create new project</span>
                </a>
                <a href="#" className="quick-link" title="Book a meeting room or schedule a video call">
                  <span className="quick-link-icon">&#128197;</span>
                  <span className="quick-link-text">Schedule meeting</span>
                </a>
                <a href="#" className="quick-link" title="Submit a new expense report for reimbursement">
                  <span className="quick-link-icon">&#128176;</span>
                  <span className="quick-link-text">Submit expense report</span>
                </a>
                <a href="#" className="quick-link" title="Access company policies, guidelines, and procedures">
                  <span className="quick-link-icon">&#128214;</span>
                  <span className="quick-link-text">View company handbook</span>
                </a>
                <a href="#" className="quick-link" title="Request paid time off or personal leave">
                  <span className="quick-link-icon">&#9992;</span>
                  <span className="quick-link-text">Request time off</span>
                </a>
                <a href="#" className="quick-link" title="Open a new IT support ticket for technical issues">
                  <span className="quick-link-icon">&#128295;</span>
                  <span className="quick-link-text">IT support ticket</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================== PROJECTS TAB ==================== */}
        {activeTab === 'projects' && (
          <div className="tab-content projects-tab">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Manage and track all your projects across every stage of development.
            </p>

            {/* Search Bar */}
            <div className="search-bar-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search projects by name, tag, or team member..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search projects"
              />
              {searchQuery && (
                <span className="search-results-count">{`Showing results for "${searchQuery}"`}</span>
              )}
              {!searchQuery && (
                <span className="search-hint">Type to search across all projects</span>
              )}
            </div>

            {/* Filter Pills */}
            <div className="filter-pills" role="group" aria-label="Project status filters">
              {['All Projects', 'Active', 'On Hold', 'Completed', 'Archived'].map((filter) => (
                <button
                  key={filter}
                  className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Kanban Board */}
            <div className="kanban-board">
              {/* To Do Column */}
              <div className="kanban-column">
                <div className="kanban-column-header">
                  <h3 className="kanban-column-title">To Do</h3>
                  <span className="kanban-column-count">4 tasks</span>
                </div>
                <div className="kanban-cards">
                  <div className="kanban-card" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot critical" title="Critical priority"></span>
                      <span className="kanban-tag frontend">Frontend</span>
                    </div>
                    <h4 className="kanban-card-title">Implement dark mode toggle</h4>
                    <p className="kanban-card-desc">Add a theme switcher component to the main navigation bar with persistent preferences.</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Assigned to Emily Rodriguez">Emily Rodriguez</span>
                      <span className="kanban-due">Due: Feb 3</span>
                      <span className="kanban-comments" aria-label="4 comments on this task">4 comments</span>
                    </div>
                  </div>
                  <div className="kanban-card" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot high" title="High priority"></span>
                      <span className="kanban-tag backend">Backend</span>
                    </div>
                    <h4 className="kanban-card-title">Set up API rate limiting</h4>
                    <p className="kanban-card-desc">Configure request throttling middleware to prevent abuse and ensure fair usage.</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Assigned to James Liu">James Liu</span>
                      <span className="kanban-due">Due: Feb 5</span>
                      <span className="kanban-comments" aria-label="2 comments on this task">2 comments</span>
                    </div>
                  </div>
                  <div className="kanban-card" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot medium" title="Medium priority"></span>
                      <span className="kanban-tag design">Design</span>
                    </div>
                    <h4 className="kanban-card-title">Create onboarding illustrations</h4>
                    <p className="kanban-card-desc">Design a set of five custom illustrations for the new user onboarding flow.</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Assigned to Priya Sharma">Priya Sharma</span>
                      <span className="kanban-due">Due: Feb 10</span>
                      <span className="kanban-comments" aria-label="7 comments on this task">7 comments</span>
                    </div>
                  </div>
                  <div className="kanban-card" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot low" title="Low priority"></span>
                      <span className="kanban-tag devops">DevOps</span>
                    </div>
                    <h4 className="kanban-card-title">Optimize CI/CD pipeline</h4>
                    <p className="kanban-card-desc">Reduce build times by implementing caching strategies and parallel test execution.</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Assigned to Kai Nakamura">Kai Nakamura</span>
                      <span className="kanban-due">Due: Feb 14</span>
                      <span className="kanban-comments" aria-label="1 comment on this task">1 comment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* In Progress Column */}
              <div className="kanban-column">
                <div className="kanban-column-header">
                  <h3 className="kanban-column-title">In Progress</h3>
                  <span className="kanban-column-count">3 tasks</span>
                </div>
                <div className="kanban-cards">
                  <div className="kanban-card" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot critical" title="Critical priority"></span>
                      <span className="kanban-tag backend">Backend</span>
                    </div>
                    <h4 className="kanban-card-title">Migrate database to PostgreSQL 16</h4>
                    <p className="kanban-card-desc">Perform a zero-downtime migration from MySQL to PostgreSQL with full data integrity checks.</p>
                    <div className="kanban-progress-bar" title="75% complete">
                      <div className="progress-fill" style={{ width: '75%' }}></div>
                      <span className="progress-text">75% complete</span>
                    </div>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Assigned to David Kim">David Kim</span>
                      <span className="kanban-due">Due: Jan 25</span>
                      <span className="kanban-comments" aria-label="12 comments on this task">12 comments</span>
                    </div>
                  </div>
                  <div className="kanban-card" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot high" title="High priority"></span>
                      <span className="kanban-tag frontend">Frontend</span>
                    </div>
                    <h4 className="kanban-card-title">Build analytics dashboard</h4>
                    <p className="kanban-card-desc">Create interactive charts and data visualization components using the reporting API.</p>
                    <div className="kanban-progress-bar" title="40% complete">
                      <div className="progress-fill" style={{ width: '40%' }}></div>
                      <span className="progress-text">40% complete</span>
                    </div>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Assigned to Ana Petrovic">Ana Petrovic</span>
                      <span className="kanban-due">Due: Feb 1</span>
                      <span className="kanban-comments" aria-label="8 comments on this task">8 comments</span>
                    </div>
                  </div>
                  <div className="kanban-card" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot medium" title="Medium priority"></span>
                      <span className="kanban-tag devops">DevOps</span>
                    </div>
                    <h4 className="kanban-card-title">Configure auto-scaling policies</h4>
                    <p className="kanban-card-desc">Set up dynamic resource allocation rules based on traffic patterns and load metrics.</p>
                    <div className="kanban-progress-bar" title="60% complete">
                      <div className="progress-fill" style={{ width: '60%' }}></div>
                      <span className="progress-text">60% complete</span>
                    </div>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Assigned to Omar Hassan">Omar Hassan</span>
                      <span className="kanban-due">Due: Feb 7</span>
                      <span className="kanban-comments" aria-label="5 comments on this task">5 comments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Done Column */}
              <div className="kanban-column">
                <div className="kanban-column-header">
                  <h3 className="kanban-column-title">Done</h3>
                  <span className="kanban-column-count">3 tasks</span>
                </div>
                <div className="kanban-cards">
                  <div className="kanban-card done" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot low" title="Low priority"></span>
                      <span className="kanban-tag design">Design</span>
                    </div>
                    <h4 className="kanban-card-title">Update brand guidelines document</h4>
                    <p className="kanban-card-desc">Revised the company style guide to include new color palette and typography rules.</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Completed by Mei Zhang">Mei Zhang</span>
                      <span className="kanban-completed">Completed: Jan 8, 2026</span>
                      <span className="kanban-comments" aria-label="3 comments on this task">3 comments</span>
                    </div>
                  </div>
                  <div className="kanban-card done" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot high" title="High priority"></span>
                      <span className="kanban-tag backend">Backend</span>
                    </div>
                    <h4 className="kanban-card-title">Fix authentication token refresh</h4>
                    <p className="kanban-card-desc">Resolved the issue where expired refresh tokens caused silent logout for active users.</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Completed by Carlos Gutierrez">Carlos Gutierrez</span>
                      <span className="kanban-completed">Completed: Jan 6, 2026</span>
                      <span className="kanban-comments" aria-label="9 comments on this task">9 comments</span>
                    </div>
                  </div>
                  <div className="kanban-card done" title="Click to view task details">
                    <div className="kanban-card-header">
                      <span className="priority-dot medium" title="Medium priority"></span>
                      <span className="kanban-tag frontend">Frontend</span>
                    </div>
                    <h4 className="kanban-card-title">Accessibility audit and fixes</h4>
                    <p className="kanban-card-desc">Completed WCAG 2.1 AA compliance audit and fixed all critical accessibility issues.</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-assignee" title="Completed by Fatima Al-Rashid">Fatima Al-Rashid</span>
                      <span className="kanban-completed">Completed: Jan 3, 2026</span>
                      <span className="kanban-comments" aria-label="6 comments on this task">6 comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty state for search with no results */}
            {searchQuery && searchQuery.length > 20 && (
              <div className="empty-state">
                <p className="empty-state-title">No projects found</p>
                <p className="empty-state-desc">
                  {`We couldn't find any projects matching "${searchQuery}". Try adjusting your search terms or clearing the filters.`}
                </p>
                <button className="empty-state-action" onClick={() => setSearchQuery('')}>
                  Clear search
                </button>
              </div>
            )}
          </div>
        )}

        {/* ==================== TEAM TAB ==================== */}
        {activeTab === 'team' && (
          <div className="tab-content team-tab">
            <div className="team-header">
              <div>
                <h2 className="section-title">Team Directory</h2>
                <p className="section-subtitle">24 members across 5 departments</p>
              </div>
              <button
                className="invite-button"
                title="Send an invitation to join your workspace"
                aria-label="Invite a new team member"
              >
                Invite New Member
              </button>
            </div>
            <p className="team-invite-desc">Send an invitation to join your workspace</p>

            {/* Department Filter */}
            <div className="department-filters" role="group" aria-label="Filter by department">
              {['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations'].map((dept) => (
                <button
                  key={dept}
                  className={`dept-filter ${activeDepartment === dept ? 'active' : ''}`}
                  onClick={() => setActiveDepartment(dept)}
                  aria-pressed={activeDepartment === dept}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Team Table */}
            <div className="table-container">
              <table className="team-table" aria-label="Team members directory">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Department</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Projects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="member-name">Alex Johnson</td>
                    <td>Senior Project Manager</td>
                    <td>Operations</td>
                    <td className="member-email">alex.johnson@taskforge.io</td>
                    <td><span className="status-badge available">Available</span></td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td className="member-name">Emily Rodriguez</td>
                    <td>Lead Frontend Developer</td>
                    <td>Engineering</td>
                    <td className="member-email">emily.rodriguez@taskforge.io</td>
                    <td><span className="status-badge focus">Focus mode</span></td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td className="member-name">James Liu</td>
                    <td>Backend Architect</td>
                    <td>Engineering</td>
                    <td className="member-email">james.liu@taskforge.io</td>
                    <td><span className="status-badge available">Available</span></td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td className="member-name">Priya Sharma</td>
                    <td>Senior UX Designer</td>
                    <td>Design</td>
                    <td className="member-email">priya.sharma@taskforge.io</td>
                    <td><span className="status-badge meeting">In meeting</span></td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td className="member-name">David Kim</td>
                    <td>Database Engineer</td>
                    <td>Engineering</td>
                    <td className="member-email">david.kim@taskforge.io</td>
                    <td><span className="status-badge available">Available</span></td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td className="member-name">Ana Petrovic</td>
                    <td>Full Stack Developer</td>
                    <td>Engineering</td>
                    <td className="member-email">ana.petrovic@taskforge.io</td>
                    <td><span className="status-badge focus">Focus mode</span></td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td className="member-name">Marcus Williams</td>
                    <td>Marketing Director</td>
                    <td>Marketing</td>
                    <td className="member-email">marcus.williams@taskforge.io</td>
                    <td><span className="status-badge vacation">On vacation</span></td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td className="member-name">Fatima Al-Rashid</td>
                    <td>Accessibility Specialist</td>
                    <td>Design</td>
                    <td className="member-email">fatima.alrashid@taskforge.io</td>
                    <td><span className="status-badge available">Available</span></td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td className="member-name">Omar Hassan</td>
                    <td>DevOps Lead</td>
                    <td>Engineering</td>
                    <td className="member-email">omar.hassan@taskforge.io</td>
                    <td><span className="status-badge meeting">In meeting</span></td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td className="member-name">Lisa Patel</td>
                    <td>Sales Account Executive</td>
                    <td>Sales</td>
                    <td className="member-email">lisa.patel@taskforge.io</td>
                    <td><span className="status-badge available">Available</span></td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="table-footer-note">
              Showing 10 of 24 team members. Use the department filter above to narrow results.
            </p>
          </div>
        )}

        {/* ==================== REPORTS TAB ==================== */}
        {activeTab === 'reports' && (
          <div className="tab-content reports-tab">
            <h2 className="section-title">Analytics & Reports</h2>
            <p className="section-subtitle">
              Track project performance, team productivity, and key business metrics over time.
            </p>

            {/* Date Range Selector */}
            <div className="date-range-selector" role="group" aria-label="Select reporting period">
              {['Last 7 days', 'Last 30 days', 'Last quarter', 'Year to date', 'Custom range'].map((range) => (
                <button
                  key={range}
                  className={`range-button ${dateRange === range ? 'active' : ''}`}
                  onClick={() => setDateRange(range)}
                  aria-pressed={dateRange === range}
                >
                  {range}
                </button>
              ))}
            </div>

            {dateRange === 'Custom range' && (
              <div className="custom-date-inputs">
                <label htmlFor="start-date">Start date</label>
                <input type="date" id="start-date" aria-label="Report start date" />
                <label htmlFor="end-date">End date</label>
                <input type="date" id="end-date" aria-label="Report end date" />
                <button className="apply-range-btn">Apply date range</button>
              </div>
            )}

            {/* Summary Cards */}
            <div className="report-summary-grid">
              <div className="report-summary-card">
                <span className="report-metric-label">Tasks Created</span>
                <span className="report-metric-value">342</span>
                <span className="report-metric-change positive">+18% from previous period</span>
              </div>
              <div className="report-summary-card">
                <span className="report-metric-label">Tasks Resolved</span>
                <span className="report-metric-value">298</span>
                <span className="report-metric-change positive">+22% from previous period</span>
              </div>
              <div className="report-summary-card">
                <span className="report-metric-label">Average Resolution Time</span>
                <span className="report-metric-value">2.4 days</span>
                <span className="report-metric-change positive">Improved by 0.3 days</span>
              </div>
              <div className="report-summary-card">
                <span className="report-metric-label">Customer Satisfaction</span>
                <span className="report-metric-value">4.7/5.0</span>
                <span className="report-metric-change neutral">No change from previous period</span>
              </div>
            </div>

            {/* Performance Table */}
            <div className="performance-section">
              <h3 className="subsection-title">Project Performance</h3>
              <p className="subsection-description">
                Detailed breakdown of each project's progress, completion rate, and budget health.
              </p>
              <div className="table-container">
                <table className="performance-table" aria-label="Project performance data">
                  <thead>
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Tasks</th>
                      <th scope="col">Completed</th>
                      <th scope="col">On Time %</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="project-name-cell">Website Redesign</td>
                      <td>86</td>
                      <td>72</td>
                      <td>94%</td>
                      <td>$125,000</td>
                      <td><span className="project-status on-track">On Track</span></td>
                    </tr>
                    <tr>
                      <td className="project-name-cell">Mobile App v3.0</td>
                      <td>124</td>
                      <td>89</td>
                      <td>78%</td>
                      <td>$210,000</td>
                      <td><span className="project-status at-risk">At Risk</span></td>
                    </tr>
                    <tr>
                      <td className="project-name-cell">Data Migration</td>
                      <td>45</td>
                      <td>42</td>
                      <td>98%</td>
                      <td>$75,000</td>
                      <td><span className="project-status ahead">Ahead of Schedule</span></td>
                    </tr>
                    <tr>
                      <td className="project-name-cell">Q1 Marketing Campaign</td>
                      <td>67</td>
                      <td>34</td>
                      <td>62%</td>
                      <td>$95,000</td>
                      <td><span className="project-status over-budget">Over Budget</span></td>
                    </tr>
                    <tr>
                      <td className="project-name-cell">Internal Tools Platform</td>
                      <td>53</td>
                      <td>48</td>
                      <td>91%</td>
                      <td>$60,000</td>
                      <td><span className="project-status on-track">On Track</span></td>
                    </tr>
                    <tr>
                      <td className="project-name-cell">Customer Portal Upgrade</td>
                      <td>98</td>
                      <td>13</td>
                      <td>85%</td>
                      <td>$180,000</td>
                      <td><span className="project-status at-risk">At Risk</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="export-actions">
              <button className="export-button csv" title="Download report data as a CSV file">
                Export as CSV
              </button>
              <button className="export-button pdf" title="Download report as a formatted PDF document">
                Export as PDF
              </button>
              <button className="export-button share" title="Share this report with team members via email">
                Share report
              </button>
            </div>

            <p className="report-footer-note">
              {`Report generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}. Data refreshes every 15 minutes.`}
            </p>
          </div>
        )}

        {/* ==================== SETTINGS TAB ==================== */}
        {activeTab === 'settings' && (
          <div className="tab-content settings-tab">
            <h2 className="section-title">Account Settings</h2>
            <p className="section-subtitle">
              Manage your personal information, notification preferences, and account security.
            </p>

            {/* Profile Section */}
            <div className="settings-section">
              <h3 className="settings-section-title">Personal Information</h3>
              <p className="settings-section-desc">
                Update your profile details. These will be visible to other team members.
              </p>
              <div className="settings-form">
                <div className="form-group">
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    defaultValue="Alex Johnson"
                    aria-label="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="alex.johnson@taskforge.io"
                    aria-label="Your email address"
                  />
                  <span className="form-hint">This email is used for login and notifications.</span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    defaultValue="+1 (555) 234-5678"
                    aria-label="Your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timezone">Timezone</label>
                  <select id="timezone" aria-label="Select your timezone" defaultValue="America/New_York">
                    <option value="" disabled>Select your timezone</option>
                    <option value="America/New_York">Eastern Time (ET) - New York</option>
                    <option value="America/Chicago">Central Time (CT) - Chicago</option>
                    <option value="America/Denver">Mountain Time (MT) - Denver</option>
                    <option value="America/Los_Angeles">Pacific Time (PT) - Los Angeles</option>
                    <option value="Europe/London">Greenwich Mean Time (GMT) - London</option>
                    <option value="Europe/Berlin">Central European Time (CET) - Berlin</option>
                    <option value="Asia/Tokyo">Japan Standard Time (JST) - Tokyo</option>
                    <option value="Australia/Sydney">Australian Eastern Time (AET) - Sydney</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    aria-label="Short biography about yourself"
                    rows={4}
                    defaultValue="Passionate project manager with 8 years of experience in agile software development."
                  />
                  <span className="form-hint">Maximum 250 characters. This appears on your public profile.</span>
                </div>
                <div className="form-actions">
                  <button className="btn-primary" type="button">Save Changes</button>
                  <button className="btn-secondary" type="button">Cancel</button>
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="settings-section">
              <h3 className="settings-section-title">Notification Preferences</h3>
              <p className="settings-section-desc">
                Choose how and when you want to be notified about activity in your workspace.
              </p>
              <div className="notification-options">
                <label className="checkbox-label" title="Receive an email when a task is assigned to you">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                    aria-label="Toggle email notifications for task assignments"
                  />
                  <span className="checkbox-text">Email notifications for task assignments</span>
                </label>
                <label className="checkbox-label" title="Get a push notification when someone mentions you">
                  <input
                    type="checkbox"
                    checked={pushNotifications}
                    onChange={() => setPushNotifications(!pushNotifications)}
                    aria-label="Toggle push notifications for mentions"
                  />
                  <span className="checkbox-text">Push notifications for mentions</span>
                </label>
                <label className="checkbox-label" title="Receive a weekly summary of your workspace activity">
                  <input
                    type="checkbox"
                    checked={weeklyDigest}
                    onChange={() => setWeeklyDigest(!weeklyDigest)}
                    aria-label="Toggle weekly digest email"
                  />
                  <span className="checkbox-text">Weekly digest email</span>
                </label>
                <label className="checkbox-label" title="Get a monthly report with analytics and insights">
                  <input
                    type="checkbox"
                    checked={monthlyReport}
                    onChange={() => setMonthlyReport(!monthlyReport)}
                    aria-label="Toggle monthly analytics report"
                  />
                  <span className="checkbox-text">Monthly analytics report</span>
                </label>
                <label className="checkbox-label" title="Immediately notify for critical system or project issues">
                  <input
                    type="checkbox"
                    checked={criticalAlerts}
                    onChange={() => setCriticalAlerts(!criticalAlerts)}
                    aria-label="Toggle real-time alerts for critical issues"
                  />
                  <span className="checkbox-text">Real-time alerts for critical issues</span>
                </label>
              </div>
            </div>

            {/* Language & Region */}
            <div className="settings-section">
              <h3 className="settings-section-title">Language & Region</h3>
              <p className="settings-section-desc">
                Configure your language, date format, and regional preferences.
              </p>
              <div className="settings-form region-settings">
                <div className="form-group">
                  <label htmlFor="display-language">Display Language</label>
                  <select id="display-language" aria-label="Select display language" defaultValue="en">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="ja">Japanese</option>
                    <option value="zh">Chinese (Simplified)</option>
                    <option value="pt">Portuguese</option>
                    <option value="ar">Arabic</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date-format">Date Format</label>
                  <select id="date-format" aria-label="Select date format" defaultValue="MM/DD/YYYY">
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    <option value="DD.MM.YYYY">DD.MM.YYYY</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="first-day">First day of week</label>
                  <select id="first-day" aria-label="Select first day of week" defaultValue="Monday">
                    <option value="Monday">Monday</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="settings-section danger-zone">
              <h3 className="settings-section-title danger-title">Danger Zone</h3>
              <p className="danger-warning">
                This action cannot be undone. All your data, projects, and team associations will be
                permanently removed.
              </p>
              {!showDeleteConfirm && (
                <button
                  className="btn-danger"
                  onClick={() => setShowDeleteConfirm(true)}
                  title="Permanently delete your account and all associated data"
                >
                  Delete Account
                </button>
              )}
              {showDeleteConfirm && (
                <div className="delete-confirm">
                  <p className="delete-confirm-text">
                    Are you absolutely sure? Please type "DELETE" to confirm account deletion.
                  </p>
                  <input
                    type="text"
                    placeholder='Type "DELETE" to confirm'
                    className="delete-confirm-input"
                    aria-label="Type DELETE to confirm account deletion"
                  />
                  <div className="delete-confirm-actions">
                    <button className="btn-danger-confirm">Delete my account</button>
                    <button
                      className="btn-secondary"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer note */}
            <p className="settings-footer-note">
              Last updated: January 12, 2026 at 3:45 PM. Changes may take up to 5 minutes to propagate across all services.
            </p>
          </div>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="app-footer">
        <p className="footer-copyright">&copy; 2026 TaskForge Pro. All rights reserved.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#" title="Read our privacy policy">Privacy Policy</a>
          <a href="#" title="Read our terms of service">Terms of Service</a>
          <a href="#" title="Contact our support team">Contact Support</a>
          <a href="#" title="Read our API documentation">API Documentation</a>
        </nav>
        <p className="footer-version">Version 4.2.1 — Built with React and TypeScript</p>
      </footer>
    </div>
  )
}

export default App
