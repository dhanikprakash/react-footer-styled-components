import {Footer} from '../components/footer/';
import {Icons} from '../components/icons/';

export const  FooterContainer = () => {
    return (<Footer> 
        <Footer.Wrapper>
            <Footer.Row>
            <Footer.Column>
                <Footer.Title>About us</Footer.Title>
                <Footer.Link href='#'>Story</Footer.Link>
                <Footer.Link href='#'>Clients</Footer.Link>
                <Footer.Link href='#'>Testimonials</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                <Footer.Link href='#'>Marketing</Footer.Link>
                <Footer.Link href='#'>Consulting</Footer.Link>
                <Footer.Link href='#'>Developement</Footer.Link>
                <Footer.Link href='#'>Design</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Contact us</Footer.Title>
                <Footer.Link href='#'>United State</Footer.Link>
                <Footer.Link href='#'>United Kingdom</Footer.Link>
                <Footer.Link href='#'>Poland</Footer.Link>
                <Footer.Link href='#'>Denmark</Footer.Link>
            </Footer.Column>
            <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                <Footer.Link href='#'><Icons className='fab fa-facebook' ></Icons>Facebook</Footer.Link>
                <Footer.Link href='#'><Icons className='fab fa-youtube' ></Icons>Youtube</Footer.Link>
                <Footer.Link href='#'><Icons className='fab fa-instagram' ></Icons>Instagram</Footer.Link>
                <Footer.Link href='#'><Icons className='fab fa-twitter' ></Icons>Twitter</Footer.Link>
            </Footer.Column>
            </Footer.Row>
        </Footer.Wrapper>
    </Footer>)
};
