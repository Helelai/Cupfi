export function Review({user_id, comment, creation_data_and_time, rating}) {
    return (
        <>
            <div className="cont">
                <p>{user_id}</p>
                <p>{comment}</p>
                <p>{creation_data_and_time}</p>
                <p>{rating}</p>
            </div>
        </>
    )
}