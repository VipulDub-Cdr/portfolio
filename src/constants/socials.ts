import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";

import { SocialLinkType } from "../types";

export const socialsInfo: SocialLinkType[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:vipuldubey041@gmail.com",
    icon: MdAlternateEmail,
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/VipulDub-Cdr",
    icon: RxGithubLogo,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vipul-dubey-541629256",
    icon: RxLinkedinLogo,
  },
  {
    id: 4,
    name: "Twitter",
    url: "",
    icon: RxTwitterLogo,
  },
];
