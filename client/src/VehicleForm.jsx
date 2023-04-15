import React, { useState } from "react";

function VehicleForm() {
  const [plate, setPlate] = useState("");
  const [renavam, setRenavam] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor ou para outro componente
    console.log({ plate, renavam, model, brand, year, capacity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Placa:
        <input
          type="text"
          value={plate}
          onChange={(event) => setPlate(event.target.value)}
        />
      </label>
      <br />
      <label>
        N° Renavam:
        <input
          type="text"
          value={renavam}
          onChange={(event) => setRenavam(event.target.value)}
        />
      </label>
      <br />
      <label>
        Modelo:
        <input
          type="text"
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
      </label>
      <br />
      <label>
        Marca:
        <input
          type="text"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
      </label>
      <br />
      <label>
        Ano de Fabricação:
        <input
          type="text"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </label>
      <br />
      <label>
        Capacidade:
        <input
          type="text"
          value={capacity}
          onChange={(event) => setCapacity(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default VehicleForm;
