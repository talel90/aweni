import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (!userData) {
            navigate('/components/login');
            return;
        }
        setUser(JSON.parse(userData));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const serviceCategories = [
        { id: 1, name: 'Plumbing', icon: '🔧', count: 45 },
        { id: 2, name: 'Electrical', icon: '⚡', count: 38 },
        { id: 3, name: 'Cleaning', icon: '🧹', count: 52 },
        { id: 4, name: 'Carpentry', icon: '🔨', count: 29 },
        { id: 5, name: 'Painting', icon: '🎨', count: 41 },
        { id: 6, name: 'Gardening', icon: '🌿', count: 33 }
    ];

    const featuredProfessionals = [
        { id: 1, name: 'John Smith', rating: 4.9, specialty: 'Plumbing', image: '/images/pro1.jpg' },
        { id: 2, name: 'Sarah Johnson', rating: 4.8, specialty: 'Electrical', image: '/images/pro2.jpg' },
        { id: 3, name: 'Mike Brown', rating: 4.7, specialty: 'Cleaning', image: '/images/pro3.jpg' }
    ];

    const recentActivities = [
        { id: 1, type: 'booking', message: 'New booking request', time: '2 hours ago', status: 'pending' },
        { id: 2, type: 'review', message: 'New 5-star review received', time: '5 hours ago', status: 'completed' },
        { id: 3, type: 'message', message: 'New message from client', time: '1 day ago', status: 'unread' }
    ];

    const statistics = {
        bookings: { total: 156, trend: '+12%' },
        earnings: { total: 12500, trend: '+8%' },
        satisfaction: { rating: 4.8, reviews: 89 }
    };

    const QuickActions = () => (
        <div className="quick-actions">
            <button className="action-button primary">
                <span className="icon">📅</span>
                Book New Service
            </button>
            <button className="action-button">
                <span className="icon">💬</span>
                Messages
                <span className="badge">3</span>
            </button>
            <button className="action-button">
                <span className="icon">📋</span>
                Schedule
            </button>
        </div>
    );

    const ServiceCategories = () => (
        <div className="service-categories">
            <h3>Service Categories</h3>
            <div className="categories-grid">
                {serviceCategories.map(category => (
                    <div key={category.id} className="category-card">
                        <span className="category-icon">{category.icon}</span>
                        <h4>{category.name}</h4>
                        <p>{category.count} professionals</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const FeaturedProfessionals = () => (
        <div className="featured-professionals">
            <h3>Featured Professionals</h3>
            <div className="professionals-slider">
                {featuredProfessionals.map(pro => (
                    <div key={pro.id} className="professional-card">
                        <img src={pro.image} alt={pro.name} className="pro-image" />
                        <div className="pro-info">
                            <h4>{pro.name}</h4>
                            <p className="specialty">{pro.specialty}</p>
                            <div className="rating">★ {pro.rating}</div>
                            <button className="book-button">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const ActivityTimeline = () => (
        <div className="activity-timeline">
            <h3>Recent Activity</h3>
            <div className="timeline">
                {recentActivities.map(activity => (
                    <div key={activity.id} className={`timeline-item ${activity.status}`}>
                        <div className="timeline-icon">
                            {activity.type === 'booking' && '📅'}
                            {activity.type === 'review' && '⭐'}
                            {activity.type === 'message' && '💬'}
                        </div>
                        <div className="timeline-content">
                            <p>{activity.message}</p>
                            <small>{activity.time}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const Statistics = () => (
        <div className="statistics-dashboard">
            <div className="stat-card">
                <h4>Total Bookings</h4>
                <div className="stat-value">{statistics.bookings.total}</div>
                <div className="stat-trend positive">{statistics.bookings.trend}</div>
            </div>
            <div className="stat-card">
                <h4>Total Earnings</h4>
                <div className="stat-value">${statistics.earnings.total}</div>
                <div className="stat-trend positive">{statistics.earnings.trend}</div>
            </div>
            <div className="stat-card">
                <h4>Customer Satisfaction</h4>
                <div className="stat-value">★ {statistics.satisfaction.rating}</div>
                <div className="stat-trend">{statistics.satisfaction.reviews} reviews</div>
            </div>
        </div>
    );

    const Calendar = () => (
        <div className="calendar-widget">
            <h3>Upcoming Appointments</h3>
            <div className="calendar">
                {/* Calendar implementation */}
                <div className="appointment-list">
                    <div className="appointment-item">
                        <div className="time">09:00 AM</div>
                        <div className="details">
                            <h4>Plumbing Repair</h4>
                            <p>Client: John Doe</p>
                        </div>
                    </div>
                    <div className="appointment-item">
                        <div className="time">02:30 PM</div>
                        <div className="details">
                            <h4>Electrical Installation</h4>
                            <p>Client: Jane Smith</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const EnhancedSearch = () => (
        <div className="enhanced-search">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button">Search</button>
            </div>
            <div className="advanced-filters">
                <div className="filter-group">
                    <label>Price Range</label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, e.target.value])}
                    />
                    <span>${priceRange[1]}</span>
                </div>
                <div className="filter-group">
                    <label>Availability</label>
                    <select>
                        <option>Any Time</option>
                        <option>Today</option>
                        <option>This Week</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Rating</label>
                    <select>
                        <option>Any Rating</option>
                        <option>4+ Stars</option>
                        <option>3+ Stars</option>
                    </select>
                </div>
            </div>
        </div>
    );

    const Reviews = () => (
        <div className="reviews-section">
            <h3>Recent Reviews</h3>
            <div className="reviews-list">
                <div className="review-card">
                    <div className="review-header">
                        <img src="/images/user1.jpg" alt="User" className="reviewer-image" />
                        <div className="reviewer-info">
                            <h4>Alice Johnson</h4>
                            <div className="rating">★★★★★</div>
                        </div>
                    </div>
                    <p className="review-text">Excellent service! Very professional and timely.</p>
                    <div className="review-footer">
                        <span className="review-date">2 days ago</span>
                        <button className="reply-button">Reply</button>
                    </div>
                </div>
                {/* More review cards */}
            </div>
        </div>
    );

    const ProfessionalDashboard = () => (
        <div className="dashboard-content">
            <QuickActions />
            <div className="dashboard-grid">
                <div className="main-content">
                    <Statistics />
                    <ServiceCategories />
                    <FeaturedProfessionals />
                </div>
                <div className="sidebar">
                    <Calendar />
                    <ActivityTimeline />
                    <Reviews />
                </div>
            </div>
        </div>
    );

    const ClientDashboard = () => (
        <div className="dashboard-content">
            <QuickActions />
            <EnhancedSearch />
            <div className="dashboard-grid">
                <div className="main-content">
                    <ServiceCategories />
                    <FeaturedProfessionals />
                </div>
                <div className="sidebar">
                    <Calendar />
                    <ActivityTimeline />
                </div>
            </div>
        </div>
    );

    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <div className="nav-header">
                    <Link to="/" className="brand-link">
                        <h1 className="brand-text">𝔸𝕨𝕖𝕟𝕚</h1>
                    </Link>
                    <span className="welcome-text">Welcome, {user?.name}</span>
                </div>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            {user?.account_type === 'professional' ? <ProfessionalDashboard /> : <ClientDashboard />}
        </div>
    );
}

export default Dashboard; 