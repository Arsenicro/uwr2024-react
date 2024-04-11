import { useSwitch } from "@mui/base";
import { Switch as MuiSwitch } from "@mui/base/Switch";
import "./Switch.css";

export default function Switch() {
  const switch2 = useSwitch({});
  console.log(switch2);

  return (
    <MuiSwitch
      slotProps={{
        root: { className: "CustomSwitchIntroduction" },
        input: { className: "CustomSwitchIntroduction-input" },
        thumb: { className: "CustomSwitchIntroduction-thumb" },
        track: { className: "CustomSwitchIntroduction-track" },
      }}
      defaultChecked
    />
  );
}
