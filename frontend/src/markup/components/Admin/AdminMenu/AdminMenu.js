import React from 'react';

function AdminMenu(props) {
  return (
    <div>
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group">
        <a href="/admin" className="list-group-item">Dashboard</a>
      </div>
    </div>
  );
}

export default AdminMenu;