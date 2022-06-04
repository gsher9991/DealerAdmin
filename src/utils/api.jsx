export const baseurl = "http://192.168.18.15:8000/api";
export const localData = localStorage.getItem("data");
const JSONdata = localData ? JSON.parse(localData) : "";
export const mId = JSONdata.info ? JSONdata.info[0].member_id : "";
export const mc_ID = JSONdata.info ? JSONdata.info[0].company_id : "";
export const access = JSONdata.access_token;
