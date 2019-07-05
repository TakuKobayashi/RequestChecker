import { AxiosResponse } from "axios";
import { AlertLevel } from './enums'

export default class ResponseChecker {
  private response: AxiosResponse;

  constructor(axiosResponse: AxiosResponse){
    this.response = axiosResponse;
  }

  getResponseAlertLevel(){
    let result = AlertLevel.Success;
    if(300 <= this.response.status && this.response.status < 400){
      result = AlertLevel.Warn;
    }else if(400 <= this.response.status){
      result = AlertLevel.Fatal;
    }
    return result;
  }
}