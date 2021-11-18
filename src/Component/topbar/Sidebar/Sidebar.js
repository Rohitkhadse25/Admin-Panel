import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom';
import {LineStyle, Timeline, TrendingUp, PersonOutline,Storefront, AttachMoney,LeaderboardOutlined, MailOutlineOutlined,DynamicFeedOutlined,ChatBubbleOutlineOutlined, ShoppingBagOutlined,Report} from '@mui/icons-material';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
            
            <LineStyle className="sidebarIcon"/>Home
            </li>
            </Link>
            <li className="sidebarListItem">
            <Timeline className="sidebarIcon"/>Analytics
            </li>
            <li className="sidebarListItem">
            <TrendingUp className="sidebarIcon"/>Sales
            </li>
            </ul>
            </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
            <Link to="/users" className="link">
            <li className="sidebarListItem ">
            <PersonOutline className="sidebarIcon"/>Users
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
           
            <Storefront className="sidebarIcon"/>Products
            </li>
            </Link>
            <li className="sidebarListItem">
            <AttachMoney className="sidebarIcon"/>Transactions
            </li>
            <li className="sidebarListItem">
            <LeaderboardOutlined className="sidebarIcon"/>Reports
            </li>
            </ul>
            </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem">
            <MailOutlineOutlined className="sidebarIcon"/>Mail
            </li>
            <li className="sidebarListItem">
            <DynamicFeedOutlined className="sidebarIcon"/>Feedback
            </li>
            <li className="sidebarListItem">
            <ChatBubbleOutlineOutlined className="sidebarIcon"/>Messages
            </li>
            </ul>
            </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem ">
            <ShoppingBagOutlined className="sidebarIcon"/>Manage
            </li>
            <li className="sidebarListItem">
            <Timeline className="sidebarIcon"/>Analytics
            </li>
            <li className="sidebarListItem">
            <Report className="sidebarIcon"/>Reports
            </li>
            </ul>
            </div>
            
           
           
         
            </div>
        </div>
    )
}

export default Sidebar
