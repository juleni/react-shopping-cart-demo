import Cart from "./Components/Cart";

const items = [
  {id: 1, name: 'Cynotilapia zebroides Cobwe', price: 2.9, qty: 3},
  {id: 2, name: 'Labidochromis hongi "Sweden"', price: 3.9, qty: 5},
  {id: 3, name: 'Metriaclima fainzilberi Maison Reef', price: 2.8, qty: 2},
]

function App() {
  return (
    <div>
      <Cart initialItems={ items }/>
    </div>
  );
}

export default App;
