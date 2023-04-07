function App() {
    return (
        <div>
            <Tweet 
                username="hello" 
                name="hellokitty" 
                date={new Date().toLocaleDateString} 
                message="First Tweet"
            />
            <Tweet 
                username="hello" 
                name="hellokitty" 
                date={new Date().toLocaleDateString} 
                message="Second Tweet"
            />
            <Tweet 
                username="hello" 
                name="hellokitty" 
                date={new Date().toLocaleDateString} 
                message="Third Tweet"
            />
        </div>
    )
}