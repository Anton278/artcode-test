import {
    Service,
    Brand,
    Style,
    getSelectedOptionsType,
    ParseLinkResponse,
} from "./types";

export const getSelectedOptions: getSelectedOptionsType = async (
    service,
    brand,
    style,
    setServiceValue,
    setBrandValue,
    setStyleValue
): Promise<void> => {
    let url = `https://onboarding.art-code.team/api/test/v1/search/parse_link?service_slug=${service}&brand_slug=${brand}&style_slug=${style}`;

    const response = await fetch(url);
    const result: ParseLinkResponse = await response.json();

    if (result.service) {
        setServiceValue(result.service.slug);
    }
    if (result.brand) {
        setBrandValue(result.brand.slug);
    }
    if (result.style) {
        setStyleValue(result.style.slug);
    }
};
