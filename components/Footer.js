import Image from 'next/image'
const Footer = () => {
    return (
        <footer>
            <div class="row">
                <div class="col">
                    <div className= "flogo">
                        <Image src ="/Component1.png" width ={240} height = {28} />
                    </div>
                    <div className="col11"> 
                        <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt ut labore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt ut labore</p>
                        <p className="p1">Privacy</p>
                        <p className="p3">Terms of service</p>
                        <p className="p4">© All rights reserved 2021</p>
                    </div>
                </div>
                <div class="col">
                    <div className= "contact">
                        <Image src="/Contact Us.png" width={98} height={34} />
                    </div>
                    <div class="col21">
                        <div className="contact-icons">
                            <a>
                                <span class= "co pho">
                                    <Image src="/Component31.png" width={16} height={16} />    
                                </span> Phone +976 99887766
                            </a>  
                            <a>
                                <span class= "co loc">
                                    <Image src="/Component44.png" width={16} height={16} />    
                                </span> E-mail: team@monosolution.co
                            </a>
                            <a>
                                <span class= "co email">
                                    <Image src="/Component45.png" width={16} height={16} />    
                                </span> Address: Хан-Уул дүүрэг, 15-р хороо, Бумба гранд зайсан, 10/1 байр, 1 тоот
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className= "follow">
                        <Image src="/Follow Us.png" width={83} height={34} />
                    </div>
                        <div class="social-icons">
                            <li class="items"><a href="#"> <Image src= "/Component30.png" width={28.5} height={28.5} /> </a></li> 
                            <li class="items"><a href="#"> <Image src= "/insta-icon.png" width={28} height={28} /> </a> </li>
                        </div>
                    
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;


// </div>
// <div ClassName="contact">
// 
// </div>
// {/* <div ClassName="follow">
// <Image src="/Follow Us.png" width={83} height={34} />
// </div> */}