import { Vazirmatn } from "next/font/google";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import FilterSection from "@/components/FilterSection";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export default function Home() {
  return (
    <main
      className={vazir.className}
      style={{ display: "flex", gap: "1rem", padding: "4rem" }}
    >
      <FilterSection />
      <ProductList />
    </main>
  );
}
