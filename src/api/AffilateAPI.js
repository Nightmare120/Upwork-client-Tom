import axios from "axios";
import { HEADERS, STRAPI_URL } from "./Constant";

export async function getHeroSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/affilate-hero-section`,
        HEADERS
    );
    return res.data;
}

export async function getFAQSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/affilate-faq-section
        `,
        HEADERS
    );
    return res.data;
}

export async function getBEcomeAffilateSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/become-affilate
        `,
        HEADERS
    );
    return res.data;
}

export async function getStepTextSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/affiliate-step-text
        `,
        HEADERS
    );
    return res.data;
}

export async function getReferrals() {
    let res = await axios.get(
        `${STRAPI_URL}/api/affilate-referrals-section
        `,
        HEADERS
    );
    return res.data;
}

export async function getFAQs() {
    let res = await axios.get(`${STRAPI_URL}/api/faqs?populate=*`, HEADERS);
    return res.data;
}
export async function getAffilateFAQs() {
    let res = await axios.get(
        `${STRAPI_URL}/api/affilate-faqs?populate=*`,
        HEADERS
    );
    return res.data;
}

export async function getTestimonials() {
    let res = await axios.get(
        `${STRAPI_URL}/api/affilate-testimonials?populate=*`,
        HEADERS
    );
    return res.data;
}

export async function getStepsSection() {
    let res = await axios.get(
        `${STRAPI_URL}/api/affilate-step-sections?populate=*&sort=id`,
        HEADERS
    );
    return res.data;
}
