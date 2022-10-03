import { IContentRequests } from "./types";
import { axiosConfig } from "../../axios.config";

class AuthRequests implements IContentRequests {
  public getContent(): Promise<any> {
    return axiosConfig.get("Transactions", {
      params: {
        ToCreatedDate: "2021-02-10T00:00:00",
        FromCreatedDate: "2019-02-01T01:00:00",
        Terminals: "0882577012, 0883577010",
        PageNumber: "1",
        PageSize: "14",
      },
    });
  }
}
export default new AuthRequests();
