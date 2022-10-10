import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'


const NavBar = ({ user, handleLogout, navItems }) => {
  const navagate = useNavigate()
  const handleClassChange = (e) => {
    if (e.target.value ==='Profiles') { 
      navagate('/profiles')
    }
    if (e.target.value ==='LOG OUT') {
      handleLogout()
    }
    if(e.target.value ==='Change Password'){
      navagate('/changePassword')
    }
  }
  
  return (
    <>
      {user ?
        <nav className="App-header">
          <Link to='/'>
            <img 
              src="/images/dndlogo.png" 
              alt="logo" 
              className="App-logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Link>
          {navItems.map((navItem, idx) =>
            <a key={idx} href={navItem.url}>{navItem.name}</a>
          )}
          <li style={{color:'black', }}>Welcome, {user.name}</li>
          <select onChange={ value =>  handleClassChange(value) } name="navDropDown" id="navDropDown">
            <option style={{color:'red'}}className='card'value="•••">User Options</option>
            <option className='card'value='Profiles'>Profiles</option>
            <option className='card'value='Change Password'>Change Password</option>
            <option className='card'value='LOG OUT'>LOG OUT</option>
          </select>
        </nav>
      :
        <nav className="App-header">
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
