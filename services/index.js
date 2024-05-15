///FETCHER API FAKE
const BASE_URL = "https://fakestoreapi.com";

export async function fetchAPI(input, options) {
  const url = BASE_URL + input;

  const newOptions = options || {};

  newOptions.headers ||= {};

  newOptions.headers["Content-Type"] = "application/json";
  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);
  if (res.status >= 200 && res.status < 300) {
    //si va todo ok retorna el json
    return res.json();
  } else {
    throw { message: "hubo un error ", status: res.status };
  }
}
