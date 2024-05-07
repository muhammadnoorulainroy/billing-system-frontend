
import { NavLink, useLocation } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = () => {
  const { pathname } = useLocation();
  if(pathname==="/" || pathname==="/signup") return null;
  return (
    <aside>
      <nav className='sidebar'>
        <div className='mt-5 menu-bar'>
          <div className='menu'>
            <ul className='menu-links'>
              <li className='navbar-link'>
                <NavLink to='/'>
                  <i className='bx bx-bar-chart-alt-2 icon' />
                  <span className='text nav-text'>Plans</span>
                </NavLink>
              </li>

              <li className='navbar-link'>
                <NavLink to='/detailed_plans'>
                  <i className='bx bx-bar-chart-alt-2 icon' />
                  <span className='text nav-text'>Detailed Plans</span>
                </NavLink>
              </li>

              <li className='navbar-link'>
                <NavLink to='/subscriptions'>
                  <i className='bx bx-money icon' />
                  <span className='text nav-text'>Subscriptions</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='bottom-content'>
            <li className='navbar-link'>
              <NavLink to='/logout'>
                <i className='bx bx-log-out icon' />
                <span className='text nav-text'>Logout</span>
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
