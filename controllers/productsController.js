let products = [
  { id: 1, name: "Spoon", description: "Stainless steel", inventory: 100 },
  {
    id: 2,
    name: "Fork",
    description: "Imported stailess steel",
    inventory: 50,
  },
  {
    id: 3,
    name: "Dishwasher",
    description: "Automatic, various setting modes depends on the load",
    inventory: 12,
  },
  {
    id: 4,
    name: "Air Fryer",
    description: "5 in 1 air fryer imported from Germany",
    inventory: 6,
  },
  { id: 5, name: "Bowl", description: "Hard ceramin bowls", inventory: 30 },
];

export const getAllProducts = (req, res) => {
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "Products not found" });
  }
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(product => product.id === Number(id));
  if (!product) {
    res.status(404).json({ message: "Products not found" });
  } else {
    res.status(200).json(product);
  }
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find(product => product.id === Number(id));
  if (!product) {
    res.status(404).json({ message: "Products not found" });
  } else {
    products = products.map(product => {
      if (product.id === Number(id)) {
        return { ...product, ...req.body };
      }
      return product;
    });
    res.status(200).json("Updated successfully");
  }
};

export const addProduct = (req, res) => {
  const { name, description, inventory } = req.body;
  const sortedProducts = [...products].sort((a, b) => b.id - a.id);
  const newProduct = {
    id: sortedProducts[0].id + 1,
    name,
    description,
    inventory,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const removeProduct = (req, res) => {
  const { id } = req.params;
  const removedProduct = products.find(product => product.id === Number(id));
  if (removedProduct) {
    products = products.filter(product => product.id !== removedProduct.id);
    res.status(200).json(removedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
