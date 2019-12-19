import React from "react";
import AdminHeader from "../admin/adminheader/AdminHeader";
import AdminPersoncard from "../admin/adminpersoncard/AdminPersonCard";
//import AuthorizationCards from "../authorization/AuthorizationCards";

class Admin extends React.Component {
  render() {
    return (
      <div>
          <AdminHeader />
          <AdminPersoncard />
      </div>
    );
  }
}

export default Admin;