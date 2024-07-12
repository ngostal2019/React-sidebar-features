import React, { useState } from 'react'
import Icon from '../images/Icon.svg';
import Dashboard from '../images/dashboard.svg';
import News from '../images/news.svg';
import Performance from '../images/performance.svg';
import Profile from '../images/profile.png';
import Settings from '../images/settings.svg';
import Support from '../images/support.svg';
import Transactions from '../images/transactions.svg';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  }
  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      <div className={closeMenu === false ? "logoContainer" : 'logoContainer active'}>
        <img src={Icon} alt='icon' className='logo'/>
        <h2 className='title'>theFuturCo.</h2>
      </div>
      <div className={closeMenu === false ? "burgerContainer" : "burgerContainer active"}>
        <div className="burgerTrigger" onClick={() => {handleCloseMenu()}}></div>
        <div className="burgerMenu"></div>
      </div>
      <div className={closeMenu === false ? "profileContainer" : "profileContainer active"}>
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Hello John 👋</p>
          <p>johnsmith<span>&#64;gmail.com</span></p>
        </div>
      </div>
      <div className={closeMenu === false ? "contentsContainer" : "contentsContainer active"}>
        <ul>
          <li className={location.pathname ==="/" ? 'active' : ''}>
            <Link className='link' to="/">
              <img src={Dashboard} alt="dashboard" />
              <span>dashboard</span>
            </Link>
          </li>

          <li className={location.pathname ==="/news" ? 'active' : ''}>
            <Link className='link' to="/news"><img src={News} alt="news" />
              <span>news</span>
            </Link>
          </li>

          <li className={location.pathname ==="/performance" ? 'active' : ''}>
            <Link className='link' to="/performance"><img src={Performance} alt="performance" />
              <span>performance</span>
            </Link>
          </li>
          
          <li className={location.pathname ==="/settings" ? 'active' : ''}>
            <Link className='link' to="/settings"><img src={Settings} alt="settings" />
              <span>settings</span>
            </Link>
          </li>

          <li className={location.pathname ==="/support" ? 'active' : ''}>
            <Link className='link' to="/support"><img src={Support} alt="support" />
              <span>support</span>
            </Link>
          </li>

          <li className={location.pathname ==="/transactions" ? 'active' : ''}>
            <Link className='link' to="/transactions"><img src={Transactions} alt="transactions" />
              <span>transactions</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;