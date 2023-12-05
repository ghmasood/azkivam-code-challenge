import { Inter } from "next/font/google";
import ProductCard from "@/components/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ProductCard
      image={mock.imageUrl}
      title={mock.name}
      price={mock.minPrice}
    />
  );
}

const mock = {
  id: "Ybwc_okBd7CINZ3k6Yv1",
  name: "Galaxy A24 128GB RAM 6GB",
  slug: "galaxy-a24-128gb-ram-6gb",
  available: true,
  categoryId: 47,
  categoryName: "کالای دیجیتال",
  minPrice: 102990000,
  maxPrice: 102990000,
  imageUrl:
    "https://ghestchy.ir/wp-content/uploads/2023/08/unnamed-file-17.jpg",
  azkivam: false,
  hidden: false,
  merchantName: "قسطچی",
  merchantId: 263562,
};
