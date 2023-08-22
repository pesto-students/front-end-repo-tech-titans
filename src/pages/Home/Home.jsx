const Home = () => {
    const categories = [
        {
            name: "Tea",
            img: "https://images.pexels.com/photos/17780418/pexels-photo-17780418/free-photo-of-coffee-in-cup-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Coffee",
            img: "https://images.pexels.com/photos/2659387/pexels-photo-2659387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "equiment",
            img: "https://images.pexels.com/photos/12176053/pexels-photo-12176053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
            <section className="hero-banner">
                <h1>Welcome to Your E-Commerce Store</h1>
                <p>Discover the latest trends and shop from a wide selection of products.</p>
                {/* <button>Shop Now</button> */}
            </section>

            <section className="featured-products">
                <h2>Featured Products</h2>
                {/* Display featured products here */}
                {categories.map(({name, img }) => <img key={name} src={img} />)}
                {/* imgs.map(function(image) {
    return (<Image src={image} rounded />);
    }); */}
            </section>
        </div>
    );
};

export default Home;