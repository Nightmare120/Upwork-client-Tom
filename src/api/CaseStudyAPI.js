import axios from "axios";
import { HEADERS, STRAPI_URL } from "./Constant";

export async function getHeroSection() {
    let res = await axios.get(`${STRAPI_URL}/api/case-study-page`, HEADERS);
    return res.data;
}

export async function getBanner() {
    let res = await axios.get(
        `${STRAPI_URL}/api/case-study-banner?populate=*`,
        HEADERS
    );
    return res.data;
}

export async function getVideos() {
    let res = await axios.get(
        `${STRAPI_URL}/api/case-study-videos?populate=*`,
        HEADERS
    );
    return res.data;
}
