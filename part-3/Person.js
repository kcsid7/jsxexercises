function Person(props) {
    const { name, age, hobbies } = props;
    const hobbiesLi = hobbies.map( h => <li>{h}</li>)
    return (
            <div class="Person" style={{border: "2px solid blue", margin: "1rem", padding: "1rem"}}>
                <h1 class="Person-name"> {name.slice(0,6)} </h1>
                <p class="Person-header">Learn some information about this person</p>

                <h4 class="Person-age"> 
                    {age} years old 
                </h4> 
                <span class="Person-voting-message">
                    {age < 18 ? "You must be 18 to vote" : "Please Go Vote!"}
                </span>
                <div>
                    <h2>Hobbies</h2>
                    <ul class="Person-hobbies">
                    { hobbiesLi }
                    </ul>
                </div>
            </div>
    )
}