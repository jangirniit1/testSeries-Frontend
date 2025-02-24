import React from "react";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <>
    <div>
        <div className="footer container bg-zinc-50 py-10 ">
        <div className="flex justify-between mx-40">
          <div>
            <div className="h-12">
              <img
                src="images/examgridFooterIcon.png"
                alt=""
                className="h-full"
              />
            </div>
            <h2 className="text-lg font-medium my-2">
              Let's grow with Exam Grid.
            </h2>
            <div className="pt-2 ">
              <span className="text-blue-950 ">
                <a href="">
                  <FacebookIcon />
                </a>
              </span>
              <span className="text-red-800 ">
                <a href="">
                  <InstagramIcon />
                </a>
              </span>
              <span className="text-red-800 ">
                <a href="">
                  <YouTubeIcon />
                </a>
              </span>
              <span className="text-blue-400 ">
                <a href="">
                  <TelegramIcon />
                </a>
              </span>
              <span>
                <a href="">
                  <XIcon fontSize="small" />
                </a>
              </span>
            </div>
            <h3 className="text-xl font-semibold my-2">Download Mobile Apps</h3>
            <div className="h-10 w-30">
              <img
                src="images/playStore.avif"
                alt=""
                className="h-full w-full object-contain cursor-pointer"
              />
            </div>
            <div className="h-10 w-30 mt-2">
              <img
                src="images/appStore.avif"
                alt=""
                className="h-full w-full object-contain cursor-pointer"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium">Government Exams & Jobs</h2>
            <div className="flex justify-between mt-5 leading-10">
              <ul>
                <li>
                  <a href="">AFCAT</a>
                </li>
                <li>
                  <a href="">UGC NET</a>
                </li>
                <li>
                  <a href="">CDS</a>
                </li>
                <li>
                  <a href="">NDA</a>
                </li>
                <li>
                  <a href="">UP POLICE</a>
                </li>
                <li>
                  <a href="">IAS Exam</a>
                </li>
                <li>
                  <a href="">Railways</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">IBPS PO</a>
                </li>
                <li>
                  <a href="">SBI CLERK</a>
                </li>
                <li>
                  <a href="">SSC</a>
                </li>
                <li>
                  <a href="">CTET</a>
                </li>
                <li>
                  <a href="">RPSC</a>
                </li>
                <li>
                  <a href="">NTSE</a>
                </li>
                <li>
                  <a href="">KVPY</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-5">Previous Year Papers</h2>
            <ul className="leading-10">
              <li>
                <a href="">IAS Question Paper </a>
              </li>
              <li>
                <a href="">SSC Question Paper</a>
              </li>
              <li>
                <a href="">Bank Question Paper</a>
              </li>
              <li>
                <a href="">CDS Question Paper</a>
              </li>
              <li>
                <a href="">NDA Question Paper</a>
              </li>
              <li>
                <a href="">UGC NET Question Paper</a>
              </li>
              <li>
                <a href="">RRB Question Paper</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-5">Notes</h2>
            <ul className="leading-10">
                <li><a href="">Current Affairs</a></li>
                <li><a href="">IAS Notes</a></li>
                <li><a href="">NDA Notes</a></li>
                <li><a href="">CDS Notes</a></li>
                <li><a href="">UGC NET Notes</a></li>
                <li><a href="">IBPS Notes</a></li>
                <li><a href="">SSC Notes</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-zinc-200">
        <div className="mx-40 flex justify-between py-5 text-lg">
            <div>
                <ul className="flex gap-5">
                    <li><a href="">About </a></li> &#124;
                    <li><a href="">Contact Us</a></li> &#124;
                    <li><a href="">Terms and Conditions</a></li> &#124;
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>
            <h3 className="">Exam Grid &copy; 2025</h3>
        </div>
            
        </div>
    </div>
      
    </>
  );
}

export default Footer;
