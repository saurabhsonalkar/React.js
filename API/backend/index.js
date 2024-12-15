import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "table glass",
      price: 250,
      image:
        "https://plus.unsplash.com/premium_photo-1706560278067-b3fb6cba1e4c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "table plastic",
      price: 150,
      image:
        "https://media.istockphoto.com/id/157637113/photo/no-more-garden-parties.jpg?s=612x612&w=0&k=20&c=8sI1wPXd3e-4eZQXT7vwBgVhDs8lzPjSpxIZll9mgsA=",
    },
    {
      id: 4,
      name: "table metal",
      price: 300,
      image:
        "https://img.freepik.com/premium-photo/sturdy-industrial-metal-table-emphasizing-minimalism-bright-studio-space_893571-57017.jpg?semt=ais_hybrid",
    },
    {
      id: 5,
      name: "table polyester",
      price: 150,
      image:
        "https://i.pinimg.com/736x/df/5d/61/df5d61b95978b0edb8ca36af422b3222.jpg",
    },

  ];

  if(req.query.search){
    const filterProducts = products.filter(product => product.name.includes(req.query.search))
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
