import "./App.css";
import ShoppingItem from "./Card";
import Badge from "./Badge";


function App() {
    const products = [
    {
      id: 1,
      title: "Lorem, ipsum dolor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH12ogDTCcsmF3xKpIvbmeoMO086rGS47Obw&s",
      stock: true,
      rating: "1.5/5",
      badge1: "sport",
      badge2: "lifestyle"
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH12ogDTCcsmF3xKpIvbmeoMO086rGS47Obw&s",
      stock: false,
      rating: "3.4/5",
      badge1: "Casual",
      
      badge2: "lifestyle"
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH12ogDTCcsmF3xKpIvbmeoMO086rGS47Obw&s",
      stock: false,
      rating: "0.5/5",
      badge1: "sport",
      badge2: "lifestyle"
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH12ogDTCcsmF3xKpIvbmeoMO086rGS47Obw&s",
      stock: true,
      rating: "1/5",
      badge1: "Casual",
      badge2: "lifestyle"
    },
    {
      id: 5,
      title: "Lorem, ipsum dolor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH12ogDTCcsmF3xKpIvbmeoMO086rGS47Obw&s",
      stock: true,
      rating: "2.5/5",
      badge1: "Casual",
      badge2: "lifestyle"
    },
    {
      id: 6,
      title: "Lorem, ipsum dolor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH12ogDTCcsmF3xKpIvbmeoMO086rGS47Obw&s",
  
      stock: false,
      rating: "4.9/5",
      badge1: "sport",
      badge2: "lifestyle"
    }
  ];
  
  return (
    <>
    <main className="container">
       {products.map((item) => (
        <ShoppingItem
          key={item.id}
          title={item.title}
          image={item.image}
          stock={item.stock}
          rating={item.rating}
          badge1={item.badge1}
          badge2={item.badge2}
        />         
       ))}
    </main>

    <section className="container">
      <div className="block-listing"  >

      <Badge text="In Stock" />
      <Badge text="4.5" />
      <Badge text="Best Seller" />
      <Badge text="Top Rated" />

      </div>

      <div className="banner"></div>

    </section>  
    </>
  );
}


export default App;




// homework2 branch