import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../assets/components/ui/popover";

export default function Header() {
  return (
    <div className="flex justify-between h-36 bg-gray-50 text-black relative shadow-sm font-mono px-10 mb-6">
      <div className="flex flex-col text-sm">
        <svg width="60" height="100" viewBox="0 0 100 100">
          <polygon
            points="50,0 100,50 50,100 0,50"
            fill="none"
            stroke="blue"
            strokeWidth="5"
          />
        </svg>
        <div>Mindful</div>
        <div>Health</div>
      </div>
      <div className="flex justify-end items-center space-x-4 text-lg">
        <Popover>
          <PopoverTrigger className="py-2 px-4">
            <div className="cursor-not-allowed">For Therapists</div>
          </PopoverTrigger>
          <PopoverContent>This feature is coming soon...</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="py-2 px-4">
            <div className="cursor-not-allowed">For Patients</div>
          </PopoverTrigger>
          <PopoverContent>This feature is coming soon...</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="py-2 px-4 flex flex-row">
            <div className="cursor-not-allowed">Learn More</div>
            <div className="h-5 w-5 justify-center ml-1 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentcolor"
                className="w-3 h-3 mx-auto my-auto"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
              </svg>
            </div>
          </PopoverTrigger>
          <PopoverContent>This feature is coming soon...</PopoverContent>
        </Popover>
      </div>
      <div className="flex justify-end items-center space-x-8 text-lg">
        <Popover className="py-2 px-4">
          <PopoverTrigger>
            <div className="cursor-not-allowed">Log in</div>
          </PopoverTrigger>
          <PopoverContent>This feature is coming soon...</PopoverContent>
        </Popover>
        <Popover className="py-2 px-4">
          <PopoverTrigger>
            <div className="bg-blue-700 text-white rounded-lg py-2 px-8 cursor-not-allowed">
              Get Started
            </div>
          </PopoverTrigger>
          <PopoverContent>This feature is coming soon...</PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
