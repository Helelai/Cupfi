import { getTariffs } from "../api/TariffApi";

export async function handleGetTariffs() {
    try {
        let tariffs = await getTariffs();
        
        console.log("Получение тарифов...");
        return tariffs;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}