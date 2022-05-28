import Login from "../../Assets/Login.svg";
import Detect from "../../Assets/detection.svg";
import Transafer from "../../Assets/Transafer.svg";
import Status from "../../Assets/Status.svg";
import Logout from "../../Assets/logout.png";
export const InstructionsList = [
  {
    image: Login,
    text: "Admin here perform the fuctions of transactions, so admin have to register first by entering his/her username, then face detection will take place, so admin have to sit properly.",
  },
  {
    image: Detect,
    text: "After successful registration, now admin have to login with the same username, now face recognition in which admin have to sit in the posture as was sitting during registration.",
  },
  {
    image: Status,
    text: "Admin have to create account for the for the customers and only admin can do transactions where the customers want, and this is how the banking system works.",
  },
  {
    image: Transafer,
    text: "Whenever accountholders wants to check their bank balance or their transaction history, they have to go to admin, admin will ask their name, after that he/she will provide all the required data to the accountholders.",
  },
  {
    image: Logout,
    text: "If admin forgot to logout then, he/she will be automatically logout when the pages reloa or refresh.",
  },
];
