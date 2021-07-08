import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'}  />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4593.455651991205!2d121.05619932196414!3d14.50646826802779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf3802f527bd%3A0x6d5d9a6e140df1e5!2sAir%20Force%20Rd%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1625642778216!5m2!1sen!2sph" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect c-white">
                    <ContactItem icon={phone} text1={'+63 9196753332'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'ranniepavillon@gmail.com'} text2={'ranniepavillon26@yahoo.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'#47 Airforce South Signal'} text2={'Taguig City'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
