import { useEffect, useState } from "react";
import { handleGetTariffs } from "../../entities/tariffs/model/tariffModel";
import { TariffForm } from "../../entities/tariffs/ui/TariffForm";
import styles from "../TariffList/TariffList.module.css"

export function TariffList() {
    const [tariffs, setTariffs] = useState([]);

    
    
    const tariffText = {
        1: "Подойдёт для: CS:GO, Dota 2, LoL, Valorant, старые игры",
        2: "Подойдёт для: Cyberpunk 2077, Warzone, Hogwarts Legacy, стримов"
    }

    useEffect(() => {
        async function fetchTarrifs() {
            try {
                const data = await handleGetTariffs();
             
                setTariffs(data);
            }
            catch (error) {
                console.error("Ошибка загрузки блюд", error);
            }
        }
        fetchTarrifs();
    }, []);

    return (
        <>
        {
            <div className={styles["tariff-container"]}>
                {tariffs.map((tariff) => {
                    // Берем из заготовленного массива описаний подходящий для тарифа
                    const textForChildren = tariffText[tariff.id];
                    return <TariffForm key={tariff.id} img={tariff.name} title={tariff.name} description={tariff.description}>{textForChildren}</TariffForm>
                })}
            </div>
        }
        </>
    )
}