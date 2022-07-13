import { ReactElement } from "react";

import HomeIcon from "@mui/icons-material/Home";
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import PhpOutlinedIcon from '@mui/icons-material/PhpOutlined';
import DataArrayOutlinedIcon from '@mui/icons-material/DataArrayOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';

/**
 * @author Ross Morrison <ross@rosscode.dev>
 */

export type NavbarLink = {
  name: string;
  url: string;
  icon: ReactElement;
};

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    name: "TypeScript",
    url: "/typescript",
    icon: <JavascriptIcon />,
  },
  {
    name: "Databases",
    url: "/database",
    icon: <StorageOutlinedIcon />,
  },
  {
    name: "HTML & CSS",
    url: "/html",
    icon: <HtmlOutlinedIcon />,
  },
  {
    name: "PHP",
    url: "/php",
    icon: <PhpOutlinedIcon />,
  },
  {
    name: "Game Development",
    url: "/games",
    icon: <QrCode2OutlinedIcon />,
  },
  {
    name: "Data Science",
    url: "/data",
    icon: <DataArrayOutlinedIcon />,
  },
  {
    name: "Java",
    url: "/java",
    icon: <CoffeeOutlinedIcon />,
  },
];
