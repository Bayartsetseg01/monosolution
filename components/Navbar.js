import Image from 'next/image'
const Navbar = () => {
    return (
        <nav>
            <div className = "logo">
                <Image src ="/Component1.png" width ={240} height = {28} />
            </div>
        </nav>
    );
}
export default Navbar;