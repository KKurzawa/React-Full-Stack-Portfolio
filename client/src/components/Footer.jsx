import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { DiStackoverflow } from 'react-icons/di';

export default function Footer() {
    return (
        <footer>
            <nav className='footer'>
                <div>
                    <a href="https://github.com/KKurzawa" target="_blank" rel="noreferrer"><AiFillGithub className='footerItem' /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/kris-kurzawa-34105226b/" target="_blank" rel="noreferrer"><FaLinkedinIn className='footerItem' /></a>
                </div>
                <div>
                    <a href="https://stackoverflow.com/users/22785835/kris-kurzawa?tab=profile" target="_blank" rel="noreferrer"><DiStackoverflow className='footerItem' /></a>
                </div>
            </nav>
        </footer>
    );
}

