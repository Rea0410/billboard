import React from 'react';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>ViewBear Admin</h2>
        <nav style={styles.nav}>
          <a href="#dashboard" style={styles.link}>Dashboard</a>
          <a href="#clients" style={styles.link}>Clients</a>
          <a href="#billboards" style={styles.link}>Billboards</a>
          <a href="#ads" style={styles.link}>Advertisements</a>
          <a href="#analytics" style={styles.link}>Analytics</a>
          <a href="#settings" style={styles.link}>Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
        <header style={styles.header}>
          <h1>Dashboard Overview</h1>
        </header>

        <section style={styles.cards}>
          <div style={styles.card}>
            <h3>Total Clients</h3>
            <p>45</p>
          </div>
          <div style={styles.card}>
            <h3>Total Ads</h3>
            <p>120</p>
          </div>
          <div style={styles.card}>
            <h3>Active Billboards</h3>
            <p>36</p>
          </div>
          <div style={styles.card}>
            <h3>Pending Approvals</h3>
            <p>4</p>
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f4f4f4',
  },
  sidebar: {
    width: '240px',
    backgroundColor: '#1e40af',
    color: '#fff',
    padding: '20px',
  },
  logo: {
    fontSize: '1.5rem',
    marginBottom: '40px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  main: {
    flex: 1,
    padding: '40px',
  },
  header: {
    marginBottom: '30px',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
};

export default AdminDashboard;
  