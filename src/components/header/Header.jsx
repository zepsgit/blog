import './header.css'
export default function Header(){
    return (
        <div className="header">
            <div className='headerTitles'>
                <span className='headerTitleSm'>I am Zepeng</span>
                <span className='headerTitleLg'>I love Perth, Australia</span>
            </div>
            <img
                className="headerImg"
                src={require('../../img/perth.webp')}
                alt=""
            />
      </div>
    )
}