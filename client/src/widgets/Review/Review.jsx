import styles from "../Review/Review.module.css"

export function Review({user_id, comment, creation_data_and_time, rating}) {
    return (
        <>
            <div className={styles.cont}>
                <div className={styles["cont-header"]}>
                    <p>{user_id}</p>
                </div>
                <p>{comment}</p>
                <p>{formatDate(creation_data_and_time)}</p>
                <p>Рейтинг: {rating}</p>
            </div>
        </>
    )
}

function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0"); // День месяца
    const monthNames = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const month = monthNames[date.getMonth()]; // Название месяца
    const year = date.getFullYear(); // Год

    const hours = String(date.getHours()).padStart(2, "0"); // Часы
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Минуты

    return `${day} ${month} ${year}, ${hours}:${minutes}`;
}