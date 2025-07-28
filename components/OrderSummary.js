export default function OrderSummary() {
    return (
      <aside className="bg-gray-50 border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
        <div className="flex gap-4 items-center">
          <img src="/car.jpg" alt="Car" className="w-24 h-16 rounded object-cover" />
          <div>
            <p className="font-medium">Nissan GT-R</p>
            <p className="text-sm text-gray-500">Sport - 2 doors</p>
          </div>
        </div>
  
        <div className="border-t mt-4 pt-4">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>$80.00</span>
          </p>
          <p className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>$80.00</span>
          </p>
        </div>
      </aside>
    );
  }
  