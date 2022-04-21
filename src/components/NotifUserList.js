import React from 'react';

// import compenents
import NotifDaenerysCard from './NotifDaenerysCard';
import NotifSamwellCard from './NotifSamwellCard';
import NotifSansaCard from './NotifSansaCard';
import NotifRamsayCard from './NotifRamsayCard';
import NotifBradCard from './NotifBradCard';

// import tools
import axios from 'axios';
import { useState, useEffect } from 'react';

// Api call

const NotifUserList = () => {
const [userInfo, setUserInfo] = useState([]);

useEffect(() => {
    axios 
    .get('https://thronesapi.com/api/v2/Characters/')
    .then((res) => (res.data))
    .then((data) => setUserInfo(data))}, 
    []
    );

  return (
<div> <h5 className='font-[font-got] mt-5 ml-2'>This Week</h5>
    <div className='mt-1 mb-1'>
        {userInfo && 
        userInfo.slice(0, 1).map(daenerys => (
            <div>
                <NotifDaenerysCard daenerys={daenerys} />
            </div>
        ))}
    </div>
    <div className='mb-1'>
        {userInfo && 
        userInfo.slice(1, 2).map(samwell => (
            <div>
                <NotifSamwellCard samwell={samwell} />
            </div>
        ))}
    </div>
    <h5 className='font-[font-got] mt-5 ml-2'>This Month</h5>
    <div className='mb-1'>
        {userInfo && 
        userInfo.slice(4, 5).map(sansa => (
            <div>
                <NotifSansaCard sansa={sansa} />
            </div>
        ))}
    </div>
    <div className='mb-1'>
        {userInfo && 
        userInfo.slice(35, 36).map(ramsay => (
            <div>
                <NotifRamsayCard ramsay={ramsay} />
            </div>
        ))}
    </div>
    <div className='mb-1'>
        {userInfo && 
        userInfo.slice(5, 6).map(brad => (
            <div>
                <NotifBradCard brad={brad} />
            </div>
        ))}
    </div>
</div>
  )};

export default NotifUserList