import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc/consts";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:8080/gwerh":"https://developers-terminalkiller.fly.dev/gwerh";
export const URL_WIKI_API = "https://es.wikipedia.org/w/api.php";
export const URL_DEVDAILYJOKE_API = "https://devdailyjoke-api.fly.dev";