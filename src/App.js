import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">eazyBnk</h2>
        <ul className="menu">
          <li className="active">🏠 Dashboard</li>
          <li>👥 Users</li>
          <li>💼 Projects</li>
          <li>📊 Reports</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="topbar">
          <h1>Dashboard Overview</h1>
          <input type="text" placeholder="Search..." className="search" />
        </header>

        {/* Cards Section */}
        <section className="cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Active Projects</h3>
            <p>37</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$52,400</p>
          </div>
          <div className="card">
            <h3>Support Tickets</h3>
            <p>12</p>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="analytics">
          <h2>Performance Analytics</h2>
          <div className="chart-placeholder">📈 Chart will appear here</div>
        </section>
      </main>
    </div>
  );
}
