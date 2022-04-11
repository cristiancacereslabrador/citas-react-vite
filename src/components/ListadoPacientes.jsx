import Paciente from "./Paciente"
import { useEffect } from "react"//reto 2

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  //console.log("HEY"+pacientes)
  //reto 2 inicio
  useEffect(()=>{
    if(pacientes.length>0)
       console.log("NUEVO PACIENTE")
  },[pacientes])
  //reto 2 fin

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
     {pacientes && pacientes.length ?
    (<>
    <h2 className='font-black text-3xl text-center '>Listado Pacientes</h2>
    <p className='text-xl mt-5 mb-10 text-center '>
      Administra tus {''}
      <span className="text-indigo-600 font-bold">Pacientes y Citas

      </span>
      </p>
      {  pacientes.map( (paciente, index) =>(

      <Paciente
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />


      ))}

    </>
    ) : (
    <>
    <h2 className='font-black text-3xl text-center '>No hay Pacientes</h2>
    <p className='text-xl mt-5 mb-10 text-center '>
      Comienza agregando pacientes {''}
      <span className="text-indigo-600 font-bold">y apareceren en este lugar

      </span>
      </p>
    </>
    )


    }


    </div>
  )
}

export default ListadoPacientes