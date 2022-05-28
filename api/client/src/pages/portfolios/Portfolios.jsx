import './portfolios.css'
import rolodex from '../../img/rolodex.png'
import sydney from '../../img/sydney.png'
import shop from '../../img/shop.png'
import job from '../../img/job.png'
import sound from '../../img/sound.png'
import fpga from '../../img/fpga.png'
import img from '../../img/img.png'
import qpsk from '../../img/qpsk.png'
import blog from '../../img/blog.png'
export default function Portfolios(){
    return (
        <div className='portfolios'>
            <div className='guide'>
                <h3>Click the title for source code</h3>
                <h3>Click the photo for demo</h3>
            </div>
            
            <div className='cat fullstack'>
                <h3 className='title'>Fullstack</h3>

                <div className='item'>
                    <a href='https://github.com/zepsgit/blog' target="_blank">
                        <h3 className='subtitle'>Personal Blog</h3>
                    </a>
                    <a href='https://zepengblog.herokuapp.com/' target="_blank">
                        <img src={blog} alt="blog"/>
                    </a>
                </div>

                <div className='item'>
                    <a href='https://github.com/zepsgit/jobboard' target="_blank">
                        <h3 className='subtitle'>Job Board</h3>
                    </a>
                    <a href='https://nljobboard.netlify.app/' target="_blank">
                        <img src={job} alt="job"/>
                    </a>
                </div>
            </div>

             <div className='cat frontend'>
                <h3 className='title'>Frontend</h3>
                <div className='item'>
                    <a href='https://github.com/zepsgit/ecommerce' target="_blank">
                        <h3 className='subtitle'>E-commerce</h3>
                    </a>
                    <a href='https://zepshoppingsite.netlify.app/' target="_blank">
                        <img src={shop} alt="shop"/>
                    </a>
                </div>
                <div className='item'>
                    <a href='https://github.com/zepsgit/presidentsRoster' target="_blank">
                        <h3 className='subtitle'>Rolodex</h3>
                    </a>
                    <a href='https://zepsgit.github.io/presidentsRoster/' target="_blank">
                        <img src={rolodex} alt="rolodex"/>
                    </a>
                </div>

                <div className='item'>
                    <a href='https://github.com/zepsgit/ImageSearchEngine' target="_blank">
                        <h3 className='subtitle'>Image Search API</h3>
                    </a>
                    <a href='https://zepsgit.github.io/ImageSearchEngine/' target="_blank">
                        <img src={sydney} alt="sydney"/>
                    </a>
                </div>
             </div>
            
            <div className='cat ml'>
            <h3 className='title'>Machine Learning</h3>
                <div className='item'>
                    <a href='https://github.com/zepsgit/ocean-mammal-sounds-classification' target="_blank">
                        <h3 className='subtitle'>Mammal Souds Recognition</h3>
                    </a>
                    <a href='https://github.com/zepsgit/ocean-mammal-sounds-classification' target="_blank">
                        <img src={sound} alt="sound"/>
                    </a>
                </div>
                <div className='item'>
                    <a href='https://github.com/zepsgit/OpticalMusicRecognition' target="_blank">
                        <h3 className='subtitle'>Optical Music Recognition</h3>
                    </a>
                    <a href='https://github.com/zepsgit/OpticalMusicRecognition' target="_blank">
                        <img src={img} alt="img"/>
                    </a>
                </div>
            </div>
        <div className='cat digital' >
        <h3 className='title'>Digital Communication</h3>
            <div className='item'>
                    <a href='https://github.com/zepsgit/FPGAsignalGenerator' target="_blank">
                        <h3 className='subtitle'>FPGA Based Signal Generator</h3>
                    </a>
                    <a href='https://youtu.be/bvpLv8TMJrY' target="_blank">
                    <img src={fpga} alt="fpga"/>
                </a>
            </div>
            <div className='item'>
                    <a href='https://github.com/zepsgit/MatlabQPSKSimulation' target="_blank">
                        <h3 className='subtitle'>QPSK Simulation</h3>
                    </a>
                    <a href='https://github.com/zepsgit/MatlabQPSKSimulation' target="_blank">
                    <img src={qpsk} alt="qpsk"/>
                </a>
            </div>
        </div>
    </div>
    )
}