import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settigns() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsTitleUpdate'>Update Your Account</span>
                    <span className='settingsTitleDelete'>Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img
                            src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            alt=''
                        />
                        <label htmlFor='filteInput'>
                            <i className='settingsPPIcon far fa-user-circle'></i>{" "}
                        </label>
                        <input
                            id='fileInput'
                            type='file'
                            style={{ display: 'none' }}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Zepeng' name='name' />
                    <label>Email</label>
                    <input type="email" placeholder='zepengc@mun.ca' name='email' />
                    <label>Password</label>
                    <input type="password" placeholder='Password' name='password' />
                    <button className='settingsSubmitButton' type='submit'>
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}