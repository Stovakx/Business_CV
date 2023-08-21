
import '../assets/css/footer.css';

const Footer= ()=>{
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };

    const currentYear = getCurrentYear();

    return(
        <footer>
            <div className='footerContainer'>
                <div className='creator'>
                    <p>© {currentYear} by Robin Palatáš</p>
                </div>
                <div className='contactFooter'>
                    <div>
                        <p className='infoP'>Call</p>
                        <p>+420 684 231 000</p>
                    </div>
                    <div>
                        <p className='infoP'>Wtrite</p>
                        <p>example@example.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;

