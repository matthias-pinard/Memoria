import { useState } from "react";

export default initialValue => {
  const [settings, setSettings] = useState(initialValue);

  return {
    settings,
    handleInputChangeSetting: event => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const vname = target.name;
      let s = settings;
      s[vname] = value;
      setSettings(s);
    },
    onSubmitSetting: event => {
      let storage = localStorage;
      storage.setItem("settings", JSON.stringify(settings));
      setStage(0);
      setPeoples(getPeoples(settings.number));
      event.preventDefault();
    }
  };
};
