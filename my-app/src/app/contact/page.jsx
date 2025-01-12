import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
return (
    <>
        <div className="relative w-full h-[100vh]">
            <Image
                src="/Images/contact.JPG"
                layout="fill"
                objectFit="cover"
                alt="Image"
            ></Image>
            <div className="absolute w-full h-full bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute w-full h-full squeezetainer flex items-center justify-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-white text-2xl lg:text-6xl font-semibold">
                        We would love to hear from you!
                    </h1>
                    <p className="text-white text-sm lg:text-2xl">
                        Email us at email@umich.edu
                    </p>
                    <div className="flex gap-6 text-white text-4xl">
                        <Link href = "https://www.linkedin.com/company/pantanal-partnership/">
                            <FaLinkedin className="transform transition-transform duration-150 hover:scale-110"></FaLinkedin>
                        </Link>
                        <Link href = "https://twitter.com/PantanalPartner">
                            <FaXTwitter className="transform transition-transform duration-150 hover:scale-110"></FaXTwitter>
                        </Link>
                        <Link href = "https://www.facebook.com/PantanalPartnership">
                            <FaFacebook className="transform transition-transform duration-150 hover:scale-110"></FaFacebook>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default Contact;
