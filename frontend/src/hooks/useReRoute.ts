import { useHistory } from "react-router";

export const useReRoute = (): ((link: string, search?: { [key: string]: string | number }, isNewTab?: boolean) => void) => {
  const history = useHistory();
  const reRoute = (link: string, search: { [key: string]: string | number }, isNewTab = false) => {
    console.log("In Reroute: ", link);
    let searchStrList: string[];
    if (search) {
      searchStrList = Object.entries(search).map(([key, value], idx) => {
        return `${idx == 0 ? "?" : "&"}${key}=${value}`;
      });
    }
    if (isNewTab) {
      window.open(`${link}${search ? searchStrList.join("") : ""}`);
    } else {
      console.log("Pushing History: ", `${link}`);
      history.push({
        pathname: `${link}`,
        search: search ? searchStrList.join("") : "",
      });
    }
  };
  return reRoute;
};
