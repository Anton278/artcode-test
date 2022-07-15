export type Item = {
    id: number;
    label: string;
    slug: string;
};

export type CustomResponse = {
    data: Item[];
};

export type ParseLinkResponse = {
    service: {
        id: number;
        label: string;
        slug: string;
    } | null;
    brand: {
        id: number;
        label: string;
        slug: string;
    } | null;
    style: {
        id: number;
        label: string;
        slug: string;
    } | null;
};

export type getSelectedOptionsT = (
    service: string | undefined,
    brand: string | undefined,
    style: string | undefined,
    setServiceValue: React.Dispatch<React.SetStateAction<string>>,
    setBrandValue: React.Dispatch<React.SetStateAction<string>>,
    setStyleValue: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;

export type getServicesT = (
    setServices: React.Dispatch<React.SetStateAction<Array<Item>>>,
    setServiceValue: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;

export type getBrandsT = (
    setBrands: React.Dispatch<React.SetStateAction<Array<Item>>>,
    setBrandValue: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;

export type getStylesT = (
    setStyles: React.Dispatch<React.SetStateAction<Array<Item>>>,
    setStyleValue: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;
