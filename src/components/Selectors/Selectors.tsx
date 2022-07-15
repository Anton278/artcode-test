import "./Selectors.css";
import {
    Brand,
    Service,
    Style,
    Services,
    Brands,
    Styles,
    ParseLinkResponse,
} from "../../types";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getSelectedOptions } from "../../asyncActions";

const Selectors: React.FC = () => {
    const [services, setServices] = useState<Array<Service>>([]);
    const [brands, setBrands] = useState<Array<Brand>>([]);
    const [styles, setStyles] = useState<Array<Style>>([]);

    const [serviceValue, setServiceValue] = useState("");
    const [brandValue, setBrandValue] = useState("");
    const [styleValue, setStyleValue] = useState("");

    const { service, brand, style } = useParams();
    console.log(service, brand, style);

    const navigate = useNavigate();

    const getServices = async (): Promise<void> => {
        const url = "https://onboarding.art-code.team/api/test/v1/search/terms";
        const response = await fetch(url);
        const result: Services = await response.json();

        setServices(result.data);
        setServiceValue(result.data[0].slug);
    };

    const getBrands = async (): Promise<void> => {
        const url =
            "https://onboarding.art-code.team/api/test/v1/search/brands_terms";
        const response = await fetch(url);
        const result: Brands = await response.json();

        setBrands(result.data);
        setBrandValue(result.data[0].slug);
    };

    const getStyles = async (): Promise<void> => {
        const url =
            "https://onboarding.art-code.team/api/test/v1/search/styles";
        const response = await fetch(url);
        const result: Styles = await response.json();

        setStyles(result.data);
        setStyleValue(result.data[0].slug);
    };

    useEffect(() => {
        const fetchData = async () => {
            await getServices();
            await getBrands();
            await getStyles();
            await getSelectedOptions(
                service,
                brand,
                style,
                setServiceValue,
                setBrandValue,
                setStyleValue
            );
        };
        fetchData();
    }, []);

    return (
        <div className="wrapp">
            <div className="row">
                <select
                    value={serviceValue}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setServiceValue(e.target.value);
                        navigate(`/s-${e.target.value}/b-${brand}/st-${style}`);
                    }}
                >
                    {services.map((service: Service) => (
                        <option value={service.slug} key={service.id}>
                            {service.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="row">
                <select
                    value={brandValue}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setBrandValue(e.target.value);
                        navigate(
                            `/s-${service}/b-${e.target.value}/st-${style}`
                        );
                    }}
                >
                    {brands.map((brand: Brand) => (
                        <option value={brand.slug} key={brand.id}>
                            {brand.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="row">
                <select
                    value={styleValue}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setStyleValue(e.target.value);
                        navigate(
                            `/s-${service}/b-${brand}/st-${e.target.value}`
                        );
                    }}
                >
                    {styles.map((style: Style) => (
                        <option value={style.slug} key={style.id}>
                            {style.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Selectors;
