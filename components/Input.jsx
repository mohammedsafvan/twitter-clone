import { useRef, useState } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

const Input = () => {
  const [input, setInput] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojies, setShowEmojies] = useState(true);
  const filePickerRef = useRef(null);

  const addImageToPost = () => {};

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll  `}
    >
      <img
        referrerPolicy="no-reffered"
        src="https://lh3.googleusercontent.com/-Ebs5pJevn40/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm74xC5EkGrZUKx_ukNaUrNGmGRhA/photo.jpg?sz=46"
        alt="Profile Pic"
        className="h-11 w-11 rounded-full cursor-pointer "
      />
      <div className="w-full divide-gray-700 divide-y ">
        <div className={``}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent text-[#d9d9d9] text-lg tracking-wide outline-none placeholder-gray-500 w-full min-h-[50px] "
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer "
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl object-contain max-h-80 "
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center ">
            <div
              className="icon  "
              onClick={() => filePickerRef.current.click()}
            >
              <PhotographIcon className="h-[22px] text-[#1d9bf0] " />
              <input
                type="file"
                hidden
                onChange={() => addImageToPost}
                ref={filePickerRef}
              />
            </div>

            <div className="icon rotate-90 ">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0] " />
            </div>

            <div className="icon" onClick={() => setShowEmojies(!showEmojies)}>
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0] " />
            </div>

            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
