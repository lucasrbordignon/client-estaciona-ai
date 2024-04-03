import { useState } from "react";
import { HiOutlineCheckCircle, HiPlus, HiX } from "react-icons/hi";

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
  const [showPopup, setShowPopup] = useState(false)

  const handleFinishClick = (carId) => {
    setSelectedCar(carId);
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setSelectedCar(null);
    setShowPopup(false);
  }

  return (
    <div className="h-full">
      <div className="h-full w-full">
        <div className="max-w-6xl text-center py-8 m-auto">
          <h1 className="text-4xl font-bold m-auto text-zinc-700">Estaciona Aí 🚘</h1>
        </div>

        <div className="max-w-6xl text-center pb-4 m-auto w-full flex">
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 font-semibold text-zinc-900 border border-zinc-400 rounded-lg hover:border-green-900 hover:cursor-pointer hover:bg-green-400 hover:shadow">
            Estacionar
            <HiPlus/>
          </button>
        </div>

        <div className="max-w-6xl m-auto">
          <table className="table-auto w-full overflow-x-scroll">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-zinc-400 rounded-l-lg"></th>
                <th className="px-4 py-2 bg-zinc-400 text-left">Número</th>
                <th className="px-4 py-2 bg-zinc-400 text-left">Carro</th>
                <th className="px-4 py-2 bg-zinc-400 text-left">Placa</th>
                <th className="px-4 py-2 bg-zinc-400 text-left">Nome do Cliente</th>
                <th className="px-4 py-2 bg-zinc-400 text-left rounded-r-lg">Telefone do Cliente</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id}>
                  <td className="border-b border-zinc-400 px-4 py-2 rounded-l-lg text-center">
                    <button onClick={() => handleFinishClick(car.id)}>
                      <HiOutlineCheckCircle className="text-green-600 cursor-pointer hover:text-green-400" />
                    </button>
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

          {
            showPopup && 
          (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg relative">
                <button onClick={handleClosePopup} className="absolute right-2 top-2"><HiX className="text-red-500 hover:text-red-600"/></button>
                <p className="mb-4">Deseja realmente finalizar esta vaga?</p>                                  
                <button onClick={handleClosePopup} className="px-4 py-2 bg-green-500 font-semibold text-zinc-900 border border-zinc-400 rounded-lg hover:border-green-900 hover:cursor-pointer hover:bg-green-400 hover:shadow">Finalizar</button>
              </div>
            </div>
          )}
        </div>
      </div> 
    </div>
  );
}
