import "./App.css";
import { useState } from "react";
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Vegetables", price: "$1", stocked: false, name: "Tomato" },
];

function SearchBox({
  filterText,
  inStockOnly,
  onFilterTextChnage,
  onInStockOnlyChange,
}) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChnage(e.target.value)}
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />

            <span>Only show product in stock </span>
          </label>
        </div>
      </form>
    </>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  let row = [];
  let lastCat = null;
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCat) {
      row.push(
        <ProductCat category={product.category} key={product.category} />
      );
    }
    row.push(<ProductRow product={product} key={product.name} />);
    lastCat = product.category;
  });

  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </>
  );
}

function ProductCat({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  let name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

function FilterProductTable({ products }) {
  let [filterText, setfilterText] = useState("");
  let [inStockOnly, setinStockOnly] = useState(false);
  return (
    <>
      <div>
        <SearchBox
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChnage={setfilterText}
          onInStockOnlyChange={setinStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </>
  );
}

export default function App() {
  return <FilterProductTable products={PRODUCTS} />;
}
