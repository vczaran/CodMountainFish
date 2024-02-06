import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
   
  export function SpeedDialWithTextOutside() {
    const labelProps = {
      variant: "small",
      color: "blue-gray",
      className:
        "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };
   
    return (
      <div className="relative">
        <div className="absolute bottom-2 right-10 bg-red-500">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full bg-gray-700">
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45 bg-red-400" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction className="relative">
                <HomeIcon className="h-5 w-5" />
                <Typography {...labelProps}>Home</Typography>
              </SpeedDialAction>
              <SpeedDialAction className="relative">
                <CogIcon className="h-5 w-5" />
                <Typography {...labelProps}>Settings</Typography>
              </SpeedDialAction>
              <SpeedDialAction className="relative">
                <Square3Stack3DIcon className="h-5 w-5" />
                <Typography {...labelProps}>Pages</Typography>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    );
  }