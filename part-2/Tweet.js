function Tweet(props) {
    const { username, name, date, message } = props;
    return (
        <div className="Tweet">
            <div className="Tweet-name">{username}</div>
            <div className="Tweet-message">
                {message}
                <span className="Tweet-date">{date}</span>
            </div>
        </div>
    )
}