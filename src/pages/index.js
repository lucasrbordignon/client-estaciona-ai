import { useState } from "react";

export default function Home() {
  const cars = [
    {
      "id": 1,
      "numero": 1,
      "modelo": "Toyota Corolla",
      "placa": "ABC-1234",
      "cliente": {
        "nome": "João da Silva",
        "telefone": "(11) 98765-4321"
      }
    },
    {
      "id": 2,
      "numero": 2,
      "modelo": "Honda Civic",
      "placa": "DEF-5678",
      "cliente": {
        "nome": "Maria Oliveira",
        "telefone": "(21) 12345-6789"
      }
    },
    {
      "id": 3,
      "numero": 3,
      "modelo": "Ford Focus",
      "placa": "GHI-9012",
      "cliente": {
        "nome": "Pedro Santos",
        "telefone": "(31) 55555-5555"
      }
    }
  ]

  const [selectedCar, setSelectedCar] = useState(null)

  const handleCheckboxChange = (carId) => {
    if ( selectedCar === carId ) {
      setSelectedCar(null)
    } else {
      setSelectedCar(carId)
    }
  }

  return (
    <div className="h-full">
      <div className="h-full w-full">
        <div className="max-w-6xl text-center py-8 m-auto">
          <h1 className="text-4xl font-bold m-auto text-zinc-800">Estaciona Aí 🚘</h1>
        </div>

        <div className="max-w-6xl text-center pb-8 m-auto w-full flex">
          <button className="bg-orange-400 rounded-xl py-3 px-4 text-zinc-800 font-semibold border border-zinc-300 hover:border-zinc-400 hover:cursor-pointer hover:bg-orange-400 hover:shadow-inner">
            Estacionar +
          </button>
        </div>

        <div className="max-w-6xl m-auto">
          <table className="table-auto w-full overflow-x-scroll">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-orange-400 rounded-l-xl"></th>
                <th className="px-4 py-3 bg-orange-400 text-left">Número</th>
                <th className="px-4 py-3 bg-orange-400 text-left">Carro</th>
                <th className="px-4 py-3 bg-orange-400 text-left">Placa</th>
                <th className="px-4 py-3 bg-orange-400 text-left">Nome do Cliente</th>
                <th className="px-4 py-3 bg-orange-400 text-left rounded-r-xl">Telefone do Cliente</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id} className={selectedCar === car.id ? "bg-orange-200" : ""}>
                  <td className="border-b border-zinc-400 px-4 py-2 rounded-l-xl text-center">
                    <input
                      type="checkbox"
                      checked={selectedCar === car.id}
                      onChange={() => handleCheckboxChange(car.id)}
                      className="form-checkbox w-4"
                    />
                  </td>
                  <td className="border-b border-zinc-400 px-4 py-2">{car.numero}</td>
                  <td className="border-b border-zinc-400 px-4 py-2">{car.modelo}</td>
                  <td className="border-b border-zinc-400 px-4 py-2">{car.placa}</td>
                  <td className="border-b border-zinc-400 px-4 py-2">{car.cliente.nome}</td>
                  <td className="border-b border-zinc-400 px-4 py-2 rounded-r-xl">{car.cliente.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> 
    </div>
  );
}
