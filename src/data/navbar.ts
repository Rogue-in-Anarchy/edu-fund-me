import firstimage from "@/assets/dashboard.svg";
import secondimage from "@/assets/proposal.svg";
import thirdimage from "@/assets/myproposal.svg";
import fourthimage from "@/assets/loan.svg";
import fifthimage from "@/assets/notification.svg";
import sixthimage from "@/assets/profile.svg";
import seventhimage from "@/assets/setting.svg";
import eighthimage from "@/assets/help.svg";

const navbar = [
  { id: 1, title: "Dashboard", link: "/dashboard", image: firstimage },
  {
    id: 2,
    title: "Create Proposal",
    link: "/dashboard/create-proposal",
    image: secondimage,
  },
  {
    id: 3,
    title: "My Proposal",
    link: "/dashboard/my-proposal",
    image: thirdimage,
  },
  {
    id: 4,
    title: "Loan Management",
    link: "/dashboard/loan-management",
    image: fourthimage,
  },
  {
    id: 5,
    title: "Notification",
    link: "/dashboard/notification",
    image: fifthimage,
  },
  { id: 6, title: "Profile", link: "/dashboard/profile", image: sixthimage },
  {
    id: 7,
    title: "Settings",
    link: "/dashboard/settings",
    image: seventhimage,
  },
  {
    id: 8,
    title: "Help & Support",
    link: "/dashboard/help",
    image: eighthimage,
  },
  // { id: 9, title: "Logout", link: "/logout", image: logoutImage }, // Add logout button after implementation of auth
];

export default navbar;
