const { API_URL, CONSUMER_KEY, CONSUMER_SECRET } = import.meta.env;

export const getProductos = async () => {
  const response = await fetch(
    `${API_URL}/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`
  );
  if (!response.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  const data = await response.json();
  return data;
};
