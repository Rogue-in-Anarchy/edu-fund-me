import total from "@/assets/proposals/total.svg";
import approved from "@/assets/proposals/approved.svg";
import denied from "@/assets/proposals/denied.svg";
import pending from "@/assets/proposals/pending.svg";
import all from "@/assets/proposals/all.svg";
import current from "@/assets/proposals/current.svg";

import arrowup from "@/assets/proposals/arrow-up.svg";

const proposal = [
  { id: 1, title: "Total Proposal", image: total, value: "3, 000" },
  {
    id: 2,
    title: "Approved Proposal",
    image: approved,
    value: "80%",
    yields: "1%",
    iconYield: arrowup,
  },
  {
    id: 3,
    title: "Denied Proposal",
    image: denied,
    value: 15,
    yields: "25 pending",
  },
  { id: 4, title: "Pending Proposal", image: pending, value: 24 },
  {
    id: 5,
    title: "Total loan",
    image: all,
    value: "1,000,000",
    yields: "1%",
    iconYield: arrowup,
  },
  {
    id: 6,
    title: "Current loan",
    image: current,
    value: "3,500,000",
    yields: "25 pending",
  },
];

export default proposal;
