import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiClipboardCheck, HiCog, HiOutlineCheckCircle, HiPlus, HiX } from "react-icons/hi";
import InputMask from 'react-input-mask';

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
        "telefone": "(11) 12345-6789"
      }
    },
    {
      "id": 3,
      "numero": 3,
      "modelo": "Volkswagen Gol",
      "placa": "GHI-9012",
      "cliente": {
        "nome": "Pedro Santos",
        "telefone": "(11) 98765-4321"
      }
    }
  ]
  
  const [selectedCar, setSelectedCar] = useState(null)
  const [showFinishPopup, setshowFinishPopup] = useState(false)
  const [showAddingPopup, setshowAddingPopup] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  const [licensePlate, setlicensePlate] = useState('')

  const handleFinishClick = (carId) => {
    setSelectedCar(carId);
    setshowFinishPopup(true);
  }

  const handleCloseFinishPopup = () => {
    setSelectedCar(null);
    setshowFinishPopup(false);
  }

  const finishCar = (carId) => { 
    alert(carId)
    handleCloseFinishPopup()
  }

  const handleAddingClick = () => {
    setshowAddingPopup(true);
  }

  const handleCloseAddingPopup = () => {
    setshowAddingPopup(false);
  }
  
  const handleChange = (event) => { 
    setSelectedValue(event.target.value); 
  }

  const handlelicensePlateChange = (event) => {
    setlicensePlate(event.target.value.toUpperCase())
  }

  return (
    <div className="h-full">
      <div className="h-full w-full">
        <div className="max-w-6xl text-center py-8 px-8 m-auto left-[50%] translate-x-[-50%] w-full flex justify-between fixed top-0 bg-zinc-900">
          <h1 className="text-4xl font-bold">Estaciona Aí 🚘</h1>

          <div className="flex items-center gap-2">
            <div className="border p-2 rounded-lg bg-zinc-800 transform transition-colors border-zinc-500 hover:cursor-pointer hover:bg-zinc-700 hover:border-zinc-400">
              <HiClipboardCheck size={24} className="text-zinc-200"/>
            </div>

            <div className="border p-2 rounded-lg bg-zinc-800 transform transition-colors border-zinc-500 hover:cursor-pointer hover:bg-zinc-700 hover:border-zinc-400">
              <HiCog size={24} className="text-zinc-200"/>
            </div>

            <button onClick={handleAddingClick} className="flex items-center gap-2 px-4 py-2 bg-green-500 font-semibold text-zinc-900 border border-white/30 rounded-lg hover:border-green-400 hover:cursor-pointer hover:bg-green-400 hover:shadow">
              Estacionar
              <HiPlus/>
            </button>
          </div>
        </div>

        <div className="max-w-6xl m-auto px-8 my-28">
          <table className="table-auto w-full">
            <thead className="">
              <tr>
                <th className="px-4 py-2 bg-zinc-800 rounded-l-lg"></th>
                <th className="px-4 py-2 bg-zinc-800 text-left">Número</th>
                <th className="px-4 py-2 bg-zinc-800 text-left">Carro</th>
                <th className="px-4 py-2 bg-zinc-800 text-left">Placa</th>
                <th className="px-4 py-2 bg-zinc-800 text-left">Nome do Cliente</th>
                <th className="px-4 py-2 bg-zinc-800 text-left rounded-r-lg">Telefone do Cliente</th>
              </tr>
            </thead>

            <tbody className="table-auto w-full overflow-x-auto">
              {cars.map(car => (
                <tr key={car.id}>
                  <td className="border-b border-white/10 px-4 py-2 rounded-l-lg text-center">
                    <button onClick={() => handleFinishClick(car.id)}>
                      <HiOutlineCheckCircle size={20} className="text-green-600 cursor-pointer hover:text-green-400" />
                    </button>
                  </td>
                  <td className="border-b border-white/10 px-4 py-2">{car.numero}</td>
                  <td className="border-b border-white/10 px-4 py-2">{car.modelo}</td>
                  <td className="border-b border-white/10 px-4 py-2">{car.placa}</td>
                  <td className="border-b border-white/10 px-4 py-2">{car.cliente.nome}</td>
                  <td className="border-b border-white/10 px-4 py-2 rounded-r-xl">{car.cliente.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="py-6 w-full fixed bottom-0 bg-zinc-900 bg-opacity-95 left-[50%] translate-x-[-50%]">
            <h2 className="font-semibold text-center text-zinc-300">LRB TECH © 2024</h2>
            <p className="flex items-center justify-center gap-2"><a hrf="https://www.linkedin.com/in/lucasrbordignon/" target="_blank" className="text-zinc-300 text-sm text-center underline hover:text-blue-300">LinkedIn</a><FaLinkedin className="text-blue-500"/> </p>
          </div>


          {/* finalizar */}
          {
            showFinishPopup && 
          (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-zinc-800 p-4 border border-white/20 rounded-lg flex flex-col gap-3 shadow shadow-white/20">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-semibold text-xl text-zinc-100/80">Confirmação</h2>
                  <button onClick={handleCloseFinishPopup}><HiX className="text-zinc-300 transform transition-colors hover:text-red-300"/></button>
                </div>
                <p className="mb-4">Deseja realmente finalizar esta vaga?</p>    
                <div className="flex justify-end gap-2"> 
                  <button onClick={handleCloseFinishPopup} className="px-4 py-2 bg-zinc-300 font-semibold transform transition-colors text-zinc-900 border border-white/10 rounded-lg hover:border-red-900 hover:cursor-pointer hover:bg-red-300 hover:shadow">Cancelar</button>                             
                  <button onClick={() => {finishCar(selectedCar)}} className="px-4 py-2 bg-green-500 transform transition-colors border-green-900 font-semibold text-zinc-900 border  rounded-lg hover:border-white/30 hover:cursor-pointer hover:border-green-400 hover:shadow">Finalizar</button>
                </div>
              </div>
            </div>
          )}

          {/* Estacionar  */}

          {
            showAddingPopup && 
          (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-zinc-800 p-4 border border-white/20 rounded-lg flex flex-col gap-8 transform transition-transform shadow shadow-white/20">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-semibold text-xl text-zinc-100/80">Adicionar carro 🚘</h2>
                  <button onClick={handleCloseAddingPopup}><HiX className="text-zinc-300 transform transition-colors hover:text-red-300"/></button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-zinc-200">Número da vaga</label>
                    <select value={selectedValue} onChange={handleChange} className="bg-zinc-800 border border-zinc-700 py-1.5 px-2 rounded"> 
                      <option value="1">1</option> 
                      <option value="2">2</option> 
                      <option value="3">3</option> 
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="licensePlate" className="text-zinc-200">Placa do Carro</label>
                    <InputMask type="text" name="licensePlate" mask="aaa9a99"  value={licensePlate} onChange={handlelicensePlateChange} className="bg-zinc-800 border border-zinc-700 py-1 px-2 rounded text-base">
                      {(inputProps) => <input {...inputProps} id="licensePlate" />}
                    </InputMask>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="carModel" className="text-zinc-200">Modelo do carro</label>
                    <input type="text" name="carModel" id="carModel" className="bg-zinc-800 border border-zinc-700 py-1 px-2 rounded text-base"/>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="ownerName" className="text-zinc-200">Proprietário</label>
                    <input type="text" name="ownerName" id="ownerName" className="bg-zinc-800 border border-zinc-700 py-1 px-2 rounded text-base"/>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="celular" className="text-zinc-200">Celular</label>
                    <InputMask type="text" mask="(99) 99999-9999" className="bg-zinc-800 border border-zinc-700 py-1 px-2 rounded text-base">
                      {(inputProps) => <input {...inputProps} id="celular" />}
                    </InputMask>
                  </div>
                </div>

                <div className="flex justify-end gap-2"> 
                  <button onClick={handleCloseAddingPopup} className="px-4 py-2 bg-zinc-300 font-semibold transform transition-colors text-zinc-900 border border-white/10 rounded-lg hover:border-red-900 hover:cursor-pointer hover:bg-red-300 hover:shadow">Cancelar</button>                             
                  <button className="px-4 py-2 bg-green-500 border-green-900 font-semibold text-zinc-900 border transform transition-colors rounded-lg hover:border-white/30 hover:cursor-pointer hover:border-green-400  hover:shadow">Adicionar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> 
    </div>
  );
}
