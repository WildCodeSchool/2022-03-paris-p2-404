import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';

function ProfileName(props) {

  const {id, fullName, title, family} = props.profiles;
  
  return (
    <div className='flex flex-col items-center'>
      <div className="flex ">
        <PersonIcon></PersonIcon>
        <h2>{fullName}</h2>
      </div>
      <div className="flex ">
        <BadgeIcon></BadgeIcon>
        <h3>{title}</h3>
      </div>
      <div className="flex ">
        <GroupsIcon></GroupsIcon>
        <h3>{family}</h3>
      </div>
    </div>
  )
}

export default ProfileName;