import React, { useState } from "react";
import { socials, footerPages } from "../constants";
import Section from "./Section";
import { indianabones_logo3 } from "../assets";
import { FaSms } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/design/NavbarMenu";
import { cn } from "../libs/utils";

const Footer = () => {
  const [active, setActive] = useState();
  return (
    <Section crosses className="!px-0 !py-10 text-n-4 caption bg-primary">
      <div className="container flex flex-col sm:justify-between justify-center items-center gap-10 max-sm:flex-col ">
        <div className="flex sm:flex-row flex-col justify-around gap-4 w-full my-10 items-center">
          <div>
            <a className="block w-[12rem] xl:mr-8" href="/">
              <img
                src={indianabones_logo3}
                alt="Indiana Bones Dog Adventures"
              />
            </a>
          </div>
          <div className="flex flex-col gap-3 mt-5 mb-20 sm:m-0">
            {footerPages.map((pages) => (
              <a
                href={pages.link}
                className="font-code uppercase transition-colors hover:text-color-800"
              >
                <nav>{pages.page}</nav>
              </a>
            ))}
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Policies">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/safetypolicy">Safety Policy</HoveredLink>
                  <HoveredLink href="/cancellationpolicy">
                    Cancellation Policy
                  </HoveredLink>
                  <HoveredLink href="/privacypolicy">
                    Privacy Policy
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <MdOutlineAlternateEmail size={20} title="email icon" />
              <p className="ml-5"> logistics@indianabones.ca</p>
            </div>
            <div className="flex">
              <FaSms size={20} title="sms icon" />
              <p className="ml-5">+1 (778) 871-INDY (4639)</p>
            </div>
          </div>
        </div>
        <p className=" lg:block text-center">
          Trademark Disclaimer: Indiana Bones Dog Adventures is an independent
          dog hiking service. Our company name is a playful pun and is not
          affiliated with, endorsed by, or connected to Lucasfilm Ltd. LLC, the
          owners of the Indiana Jones trademark. We provide distinct services
          unrelated to the Indiana Jones entertainment franchise.
        </p>
        <p className=" lg:block text-center">
          Indiana Bones Dog Adventures Corp. © 2021. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-color-800 rounded-full transition-colors hover:bg-color-500"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
