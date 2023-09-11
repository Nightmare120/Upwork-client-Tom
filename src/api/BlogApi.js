import axios from "axios";
import { HEADERS, STRAPI_URL } from "./Constant";

export async function getAllBlogs(pageNo) {
    let pageSize = 13;
    let res = await axios.get(
        `${STRAPI_URL}/api/blogs?pagination[page]=${pageNo}&pagination[pageSize]=${pageSize}&populate=*`,
        HEADERS
    );
    return res.data;
}

export async function getEveryBlogs() {
    let res = await axios.get(`${STRAPI_URL}/api/blogs?populate=*`, HEADERS);
    return res.data;
}

export async function getBlog(slug) {
    let res = await axios.get(
        `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
        HEADERS
    );
    return res.data;
}

export async function getHeroSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/blog-page?populate=*`,
        HEADERS
    );
    return res.data;
}
