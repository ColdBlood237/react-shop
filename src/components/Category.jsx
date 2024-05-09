export default function Category({ name, products }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">{name}!</h2>
        <ul>
          {products.slice(0, 5).map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See All</button>
        </div>
      </div>
    </div>
  );
}
