import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonIcon from '@mui/icons-material/Person';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:'none'}}>
        <span className="logo">Billboard digitalizer</span>
        </Link>
      </div>
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{textDecoration:'none'}}>
            <span className="logo">Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:'none'}}>
          <li>
            <ConnectedTvIcon className='icon'/>
            <Link to="/users" style={{textDecoration:'none'}}>
            <span className="logo">Status</span>
            </Link>
          </li>
          </Link>
          <li>
            <AddToQueueIcon className='icon'/>
            <Link to="/products" style={{textDecoration:'none'}}>
            <span className="logo">Products</span>
            </Link>
          </li>
          <li>
            <AddShoppingCartIcon className='icon'/>
            <Link to="/users/123213" style={{textDecoration:'none'}}>
            <span className="logo">Orders</span>
            </Link>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <PaymentIcon className='icon'/>
            <Link to="/payment" style={{textDecoration:'none'}}>
            <span className="logo">Payment History</span>
            </Link>
          </li> 
          <li>         
          <ChatIcon className='icon'/>
          <Link to="/chat" style={{textDecoration:'none'}}>
            <span className="logo">Communication</span>      
          </Link>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span className="logo">Profile</span>
          </li>
          <li>
            <PaymentIcon className='icon'/>
            <span className="logo">Logout</span>
          </li> 
        </ul>
      </div>
      <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar