import { useHistory } from "react-router";

export const useReRoute = (): ((link: string, search?: { [key: string]: string | number }, module?: string, isNewTab?: boolean) => void) => {
  const history = useHistory();
  const reRoute = (link: string, search: { [key: string]: string | number }, module = "pa", isNewTab = false) => {
    let searchStrList: string[];
    if (search) {
      searchStrList = Object.entries(search).map(([key, value], idx) => {
        return `${idx == 0 ? "?" : "&"}${key}=${value}`;
      });
    }
    if (isNewTab) {
      window.open(`${link}${search ? searchStrList.join("") : ""}`);
    } else {
      history.push({
        pathname: `${link}`,
        search: search ? searchStrList.join("") : "",
      });
    }
  };
  return reRoute;
};
