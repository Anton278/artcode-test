export type Service = {
    id: number;
    label: string;
    slug: string;
};

export type Services = {
    data: Array<Service>;
};

export type Brand = {
    id: number;
    label: string;
    slug: string;
};

export type Brands = {
    data: Array<Brand>;
};

export type Style = {
    id: number;
    label: string;
    slug: string;
};

export type Styles = {
    data: Array<Style>;
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

export type getSelectedOptionsType = (
    service: string | undefined,
    brand: string | undefined,
    style: string | undefined,
    setServiceValue: React.Dispatch<React.SetStateAction<string>>,
    setBrandValue: React.Dispatch<React.SetStateAction<string>>,
    setStyleValue: React.Dispatch<React.SetStateAction<string>>
) => Promise<void>;
