import axios from "axios";
import { HEADERS, STRAPI_URL } from "./Constant";

export async function getHeroSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/home-page-hero-section`,
        HEADERS
    );
    return res.data;
}

export async function getProblemSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/home-page-problem-section`,
        HEADERS
    );
    return res.data;
}
export async function getSolutionSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/home-page-solution-section`,
        HEADERS
    );
    return res.data;
}

export async function getAdvantageSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/home-page-advantage-section       `,
        HEADERS
    );
    return res.data;
}

export async function getHomePageTrialSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/home-page-trial-section       `,
        HEADERS
    );
    return res.data;
}
export async function getTestimonialSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/testimonials?populate=*`,
        HEADERS
    );
    return res.data;
}
export async function getSteps() {
    let res = await axios.get(
        `${STRAPI_URL}/api/home-page-step-sections?sort=Number`,
        HEADERS
    );
    return res.data;
}
