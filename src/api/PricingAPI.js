import axios from "axios";
import { HEADERS, STRAPI_URL } from "./Constant";

export async function getHeroSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/pricing-page-hero-section`,
        HEADERS
    );
    return res.data;
}

export async function getBannerSection() {
    let res = await axios.get(`${STRAPI_URL}/api/pricing-page-banner`, HEADERS);
    return res.data;
}

export async function getSupportSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/pricing-support-section`,
        HEADERS
    );
    return res.data;
}

export async function getPricingSectionText() {
    let res = await axios.get(
        `${STRAPI_URL}/api/pricing-page-pricing-section`,
        HEADERS
    );
    return res.data;
}

export async function getPricingSliderSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/pricing-page-slider-section`,
        HEADERS
    );
    return res.data;
}

export async function getAllInOneSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/pricing-allinone-section`,
        HEADERS
    );
    return res.data;
}

export async function getPricingSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/pricing-page-packages?populate=*`,
        HEADERS
    );
    return res.data;
}
