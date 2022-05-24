import './header.css'
import perth from '../../img/perth.webp';
export default function Header(){
    return (
        <div className="header">
            <div className='headerTitles'>
                <span className='headerTitleSm'>I am Zepeng</span>
                <span className='headerTitleLg'>I love Perth, Australia</span>
            </div>
            <img
                className="headerImg"
                src={perth}
                alt="perth"
            />
      </div>
    )
}