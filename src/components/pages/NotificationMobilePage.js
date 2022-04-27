import React from 'react'
import MobileHeader from "../MobileHeader";
import MobileFooter from '../MobileFooter';
import NotifUserList from '../NotifUserList';


const NotificationMobilePage = () => {
  return (
    <div>
        <MobileHeader />
        <NotifUserList />
        <MobileFooter />
    </div>
  )
}

export default NotificationMobilePage