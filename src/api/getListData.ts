import { baseAPI } from "./baseAPI";
import { convertResponseToProduct } from "./responseMapper";
import { ProductData } from "./type";

export async function getListData(filterOption: {
  category: { value: string };
  sort: { value: string };
}) {
  const page = 0;
  const size = 20;
  const categoryPath =
    filterOption.category.value !== "전체"
      ? `category=${filterOption.category.value}&`
      : "";
  const basePath = `/products?${categoryPath}page=${page}&size=${size}&sort=price,${filterOption.sort.value}`;

  const data = await baseAPI<ProductData>({
    method: "GET",
    path: basePath,
  });
  const productsData = data?.content.map((product) =>
    convertResponseToProduct(product)
  );
  return productsData ?? [];
}
