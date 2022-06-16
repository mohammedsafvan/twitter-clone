import Image from "next/image";
import SidebarLink from "./SidebarLink";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsHorizontalIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="hidden  sm:flex  flex-col items-center xl:items-start sm:mr-[-75px] xl:w-[300px] p-2 h-full xl:ml-[-40px] xl:mr-2 ">
      <div className="flex items-center  justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 ">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className=" space-y-2.5 mt-2 mb-2.5  xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] rounded-full w-56 h-[52px] text-lg font-bold text-white hover:bg-[#1a8cd8] ">
        Tweet
      </button>

      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto mt-[60px]  xl:-mr-0">
        <img
          src="https://lh3.googleusercontent.com/-Ebs5pJevn40/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm74xC5EkGrZUKx_ukNaUrNGmGRhA/photo.jpg?sz=46"
          alt="Profile pic"
          className="h-10 w-10 rounded-full xl:mr-2.5 "
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold  ">firebase 1827</h4>
          <p className="text-[#6e767d]">@firebase1875</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
