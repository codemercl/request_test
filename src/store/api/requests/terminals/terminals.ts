import { ITerminalsRequests } from "./types";
import { axiosConfig } from "../../axios.config";

class TerminalsRequests implements ITerminalsRequests {
  public getTerminals(): Promise<any> {
    return axiosConfig.get(
      "Terminals"
    )
  }
}
export default new TerminalsRequests();
