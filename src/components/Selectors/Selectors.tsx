import "./Selectors.css";
import { Item } from "../../types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getSelectedOptions,
    getServices,
    getBrands,
    getStyles,
} from "../../asyncActions";

const Selectors: React.FC = () => {
    const [services, setServices] = useState<Array<Item>>([]);
    const [brands, setBrands] = useState<Array<Item>>([]);
    const [styles, setStyles] = useState<Array<Item>>([]);

    const [serviceValue, setServiceValue] = useState("");
    const [brandValue, setBrandValue] = useState("");
    const [styleValue, setStyleValue] = useState("");

    const { service, brand, style } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            await getServices(setServices, setServiceValue);
            await getBrands(setBrands, setBrandValue);
            await getStyles(setStyles, setStyleValue);
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
                    {services.map((service: Item) => (
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
                    {brands.map((brand: Item) => (
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
                    {styles.map((style: Item) => (
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
