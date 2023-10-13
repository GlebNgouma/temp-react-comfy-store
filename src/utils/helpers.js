export const formatPrice = (number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number / 650);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat(); //applati le tableau cad va retourner un tableau simple au lieu dun tableu de tableau
  }
  return ["all", ...new Set(unique)];
};
