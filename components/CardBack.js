import Info from "../data/info"
import { SiGithub, SiLinkedin, SiTwitter, SiHomeadvisor } from "react-icons/si";
import { IoMdMail } from "react-icons/io";


export default function CardFront({ isFront }) {

  const { specialization, linkedin, email, twitter, homepage, github, address } = Info()

  return (
    <div className="flex flex-col flex-wrap justify-center items-center top-0 bottom-0 left-0 right-0 transition-all ease-in-out absolute">
      <p className="text-center">{specialization}</p>
      <div className="flex space-x-4 justify-center my-4 text-neutral-500">
          <a href={linkedin}>
            <SiLinkedin size={28}></SiLinkedin>
          </a>
          <a href={github}>
            <SiGithub size={28}></SiGithub>
          </a>
        <a href={homepage}>
            <SiHomeadvisor size={28}></SiHomeadvisor>
          </a>
        <a href={"mailto:" + email}>
            <IoMdMail size={28}></IoMdMail>
          </a>
          <a href={twitter}>
            <SiTwitter size={28}></SiTwitter>
          </a>
      </div>
      <p>{address}</p>
    </div>
  )
}



