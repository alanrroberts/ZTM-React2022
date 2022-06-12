
const App = () => {

    const categories = [
        {
            "title": "Hats"
        },
        {
            "title": "Jackets"
        },
        {
            "title": "Sneakers"
        },
        {
            "title": "Womens"
        },
        {
            "title": "Mens"
        },
    ]

    return (
        <div className="categories-container">
            {
                categories.map((category) => {
                    return (
                        < div className="category-container">
                            {/* <img src='' /> */}
                            <div className="category-body-container">
                                <h2>{category.title}</h2>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    );
                })
            }
        </div >
    );
}

export default App;
