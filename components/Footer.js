import Image from 'next/image'
const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <div className= "flogo">
                        <Image alt="Mono is logo" src ="/Component1.png" width ={240} height = {28} />
                    </div>
                    <div className="col11"> 
                        <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt ut labore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt ut labore</p>
                        <p className="p1">Privacy</p>
                        <p className="p3">Terms of service</p>
                        <p className="p4">© All rights reserved 2021</p>
                    </div>
                </div>
                <div className="col">
                    <div className= "contact">
                        Contact Us
                        {/* <Image alt="contact is icon" src="/Contact Us.png" width={98} height={34} /> */}
                    </div>
                    <div className="col21">
                        <div className="contact-icons">
                            <div>
                                <span className= "co pho">
                                    <Image alt="phone is icon" src="/phone.png" width={16} height={16} />    
                                </span> Phone +976 99887766
                            </div>  
                            <div>
                                <span className= "co email">
                                    <Image alt="location is icon" src="/email.png" width={16} height={16} />    
                                </span> E-mail: team@monosolution.co
                            </div>
                            <div>
                                <span className= "co loc">
                                    <Image  alt="location is icon" src="/location.png" width={29} height={29} /> 
                                </span> Address: Хан-Уул дүүрэг, 15-р хороо, Бумба гранд зайсан, 10/1 байр, 1 тоот
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className= "follow">
                        Follow Us 
                    </div>
                        <div className="social-icons">
                            <li className="items"><a href="#"> <Image alt="facebook is icon" src= "/facebook.png" width={28.5} height={28.5} /> </a> </li> 
                            <li className="items"><a href="#"> <Image alt="Insta is icon" src= "/insta-icon.png" width={28} height={28} /> </a> </li>
                        </div>
                    
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;


// </div>
// <div className="contact">
// 
// </div>
// {/* <div className="follow">
// <Image src="/Follow Us.png" width={83} height={34} />
// </div> */}