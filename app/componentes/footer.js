import './styles_components/footer.css';

export default function Footer(){
    return(
        <footer>
            <div className='copyrigth'>© 2025 Molar Oloarte y Asociados S.C.</div>
            <div className='social-media'>
                <div className='social-ico'>
                    <img src='/facebook.png'/>
                </div>
                <div className='social-ico'>
                <img src='/linkedin.png'/>
                </div>
            </div>
        </footer>
    )
}