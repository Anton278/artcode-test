import {
    getSelectedOptionsT,
    ParseLinkResponse,
    Services,
    getServicesT,
    getBrandsT,
    CustomResponse,
    getStylesT,
} from "./types";

export const getSelectedOptions: getSelectedOptionsT = async (
    service,
    brand,
    style,
    setServiceValue,
    setBrandValue,
    setStyleValue
): Promise<void> => {
    let url = `https://onboarding.art-code.team/api/test/v1/search/parse_link?service_slug=${service}&brand_slug=${brand}&style_slug=${style}`;

    const response: Response = await fetch(url);
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

export const getServices: getServicesT = async (
    setServices,
    setServiceValue
): Promise<void> => {
    const url = "https://onboarding.art-code.team/api/test/v1/search/terms";
    const response: Response = await fetch(url);
    const result: Services = await response.json();

    setServices(result.data);
    setServiceValue(result.data[0].slug);
};

export const getBrands: getBrandsT = async (
    setBrands,
    setBrandValue
): Promise<void> => {
    const url =
        "https://onboarding.art-code.team/api/test/v1/search/brands_terms";
    const response: Response = await fetch(url);
    const result: CustomResponse = await response.json();

    setBrands(result.data);
    setBrandValue(result.data[0].slug);
};

export const getStyles: getStylesT = async (
    setStyles,
    setStyleValue
): Promise<void> => {
    const url = "https://onboarding.art-code.team/api/test/v1/search/styles";
    const response: Response = await fetch(url);
    const result: CustomResponse = await response.json();

    setStyles(result.data);
    setStyleValue(result.data[0].slug);
};
