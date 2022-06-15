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
      .then((res) => res.data)
      .then((data) => setUserInfo(data));
  }, []);

  return (
    <div className='flex flex-col justify-center items-center m-4 gap-4'>
      {' '}
      
      <h5 className="font-[font-got] mt-4 mx-4">This Week</h5>
      <hr className='w-10/12 border-1 border-black '></hr>
      <div className="  w-full">
        {userInfo &&
          userInfo.slice(0, 1).map((daenerys) => (
            <div>
              <NotifDaenerysCard daenerys={daenerys} date={"2h"} />
            </div>
          ))}
      </div>
      <div className="mb-4 w-full">
        {userInfo &&
          userInfo.slice(1, 2).map((samwell) => (
            <div>
              <NotifSamwellCard samwell={samwell} date={"1d"} />
            </div>
          ))}
      </div>

            

      <h5 className="font-[font-got] mt-4 mx-4 ">This Month</h5>
      <hr className='w-10/12 border-1 border-black '></hr>

      <div className=" w-full">
        {userInfo &&
          userInfo.slice(4, 5).map((sansa) => (
            <div>
              <NotifSansaCard sansa={sansa} date={"1w"} />
            </div>
          ))}
      </div>
      <div className=" w-full">
        {userInfo &&
          userInfo.slice(35, 36).map((ramsay) => (
            <div>
              <NotifRamsayCard ramsay={ramsay} date={"1w"} />
            </div>
          ))}
      </div>
      <div className=" w-full">
        {userInfo &&
          userInfo.slice(5, 6).map((brad) => (
            <div>
              <NotifBradCard brad={brad} date={"2w"} />
            </div>
          ))}
      </div>
      <div className="  w-full">
        {userInfo &&
          userInfo.slice(0, 1).map((daenerys) => (
            <div>
              <NotifDaenerysCard daenerys={daenerys} date={"2w"} />
            </div>
          ))}
      </div>
      <div className="  w-full">
        {userInfo &&
          userInfo.slice(0, 1).map((daenerys) => (
            <div>
              <NotifDaenerysCard daenerys={daenerys} date={"2w"} />
            </div>
          ))}
      </div>
      <div className="  w-full">
        {userInfo &&
          userInfo.slice(0, 1).map((daenerys) => (
            <div>
              <NotifDaenerysCard daenerys={daenerys} date={"2w"} />
            </div>
          ))}
      </div>
      <div className="  w-full">
        {userInfo &&
          userInfo.slice(0, 1).map((daenerys) => (
            <div>
              <NotifDaenerysCard daenerys={daenerys} date={"2w"} />
            </div>
          ))}
      </div>
      <div className="  w-full">
        {userInfo &&
          userInfo.slice(0, 1).map((daenerys) => (
            <div>
              <NotifDaenerysCard daenerys={daenerys} date={"2w"} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotifUserList;
