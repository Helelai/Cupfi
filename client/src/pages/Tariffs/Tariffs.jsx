import styles from "../Tariffs/Tariffs.module.css"
import { TariffList } from "../../widgets/TariffList/TariffList";
import "../../app/styles/style.css";
function Tariffs() {

    return (
        <>
            <div className="pageCont">
                <h2>Тарифы</h2>
                <TariffList></TariffList>
            </div>
        </>
    )
}

export default Tariffs;