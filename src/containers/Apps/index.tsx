import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";

import AppButton from "../../components/AppButton";
import { desktopApps } from "../../utils/apps";

interface AppProps {
  id: string;
  top: number;
  left: number;
}

const Apps = () => {

  const [apps, setApps] = useState<any>({});

  useEffect(() => {
    const _apps: any = {}

    desktopApps.map((app, index) => {
      _apps[app.name] = {
        left: 20,
        top: index * 90 + 20,
        name: app.name,
        icon: app.icon
      };
    });

    setApps(_apps);
  }, []);

  const moveApp = useCallback((id: string, left: number, top: number) => {
    setApps((old: any) => {
      const _apps: any = { ...old };
      _apps[id] = { ..._apps[id], left, top };

      return _apps;
    })
  }, []);

  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(item: AppProps, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        if (delta) {
          const left = Math.round(item.left + delta.x);
          const top = Math.round(item.top + delta.y);
          moveApp(item.id, left, top);
          return undefined;
        }
      }
    }),
    [moveApp]
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
      ref={drop}
    >
      {
        Object.keys(apps).map((key) => {
          const { left, top, name, icon } = apps[key];

          return (
            <AppButton
              key={key}
              id={key}
              left={left}
              top={top}
              name={name}
              icon={icon}
            />
          )
        })
      }
    </Box>
  );
};

export default Apps;