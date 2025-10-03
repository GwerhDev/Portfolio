import { environment } from "../../environment";
import { DEVELOPMENT } from "../misc/consts";

export const URL_API = environment === DEVELOPMENT ? "http://localhost:8080/gwerh":"https://developers-terminalcore-api.fly.dev/gwerh";
export const URL_WIKI_API = "https://es.wikipedia.org/w/api.php";
export const URL_DEVDAILYJOKE_API = "https://devdailyjoke-api.fly.dev";

export const GITHUB_URL = "https://github.com/GwerhDev";
export const LINKEDIN_URL = "https://www.linkedin.com/in/gwerh/";
export const UPWORK_URL = "https://www.upwork.com/freelancers/~0150aa07f211fc5b42";
export const PORTFOLIO_REPO_URL = "https://github.com/GwerhDev/Portfolio";

export const NHEXA_PROJECT_API = environment === DEVELOPMENT ? "http://localhost:8080/streamby/68810ff3251b7fe36503c8b2/get-export" : "https://api.nhexa.cl/streamby/68810ff3251b7fe36503c8b2/get-export";