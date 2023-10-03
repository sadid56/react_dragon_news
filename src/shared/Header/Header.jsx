import moment from 'moment/moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return ( 
        <div className='text-center space-y-3'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-xl font-semibold text-gray-700'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-gray-800'>{moment().format("dddd, MMMM DD , YYYY")}</p>
        </div>
     );
}
 
export default Header;