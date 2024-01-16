import './Header.css';
import image1 from './assets/images/circle-grid.png'
function Header(){
    return (
        <header className='navBar'>
            <div className='div1'>
                <a>Gmail</a>
                <a>Images</a>
            </div>
            <div className='filterIcon'>
                <i className='fa-solid fa-flask'></i>
                
            </div>
            <div className='filterIcon'>
                {/* <i className="fa-solid fa-grid-round"></i> */}
                <img src={image1} alt="React Image" className="image1" />
                
            </div>
            
        </header>
    );
}

export default Header;