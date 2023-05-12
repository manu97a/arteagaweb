import React, {useState} from "react";
const Result = () => {
    return (
      <h1 className="font-principal text-gray-900 mt-8">
        Tu información ha sido enviada con éxito, te contactaremos pronto.
      </h1>
    );
  };
function ContactForm() {
    const [result,showResult] = useState(false);
    let bot = {
        TOKEN:"5881491856:AAEdcGhbwgduLP5Yse3UM6eRaP5R-6R7jwM",
        chatID:"6075665861",
    }
    async function sendContacttoTelegram(event){
        event.preventDefault();
        let cliente = document.querySelector("#NombreCliente")
        let correo = document.querySelector("#CorreoCliente")
        let mensaje = document.querySelector("#TextoCliente")
        let mensajefinal = `Tienes un nuevo cliente llamado: ${cliente.value} , el correo del nuevo cliente es ${correo.value}, y el cliente quiere saber lo siguiente: ${mensaje.value}`
        const response = await fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${mensajefinal}`,{
            method: "GET"
        })
        if(response.ok){
            showResult(true)
            var formtoreset = document.getElementById("form")
            formtoreset.reset()
        }else{
            setTimeout(() => {
                showResult(false);
              }, 5000);
        }

    }
    
    
    // form.addEventListener("submit",e=>{
    //     e.preventDefault();
    //     let cliente = document.querySelector("#NombreCliente")
    //     let correo = document.querySelector("#CorreoCliente")
    //     let mensaje = document.querySelector("#TextoCliente")
    //     let mensajefinal = `Tienes un nuevo cliente llamado: ${cliente.value} , el correo del nuevo cliente es ${correo.value}, y el cliente quiere saber lo siguiente: ${mensaje.value}`
    //     fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${mensajefinal}`,{
    //         method: "GET"
    //     }).then( success => {
    //         alert("mensaje Enviado con exito")
    //         var formtoreset = document.getElementById("form")
    //         formtoreset.reset()
    //     },error =>{
    //         alert("Mensaje no enviado que pena pana ")
    //     }

    //     )
    // })

    
  return (
    
 
      <form onSubmit={sendContacttoTelegram} name="InstrumentosArteagaContacto" className="max-w-[700px] mx-auto" id="form">
        <div class="form-group mb-6">
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#C2391B] focus:outline-none"
            id="NombreCliente"
            placeholder="Nombre"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="email"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#C2391B] focus:outline-none"
            id="CorreoCliente"
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#C2391B] focus:outline-none"
            id="TextoCliente"
            rows="5"
            placeholder="Escribe tu consulta"
          ></textarea>
        </div>

        <button
          type="submit"
          value="submit"
          name="submit"
          className="w-full px-6 py-2.5 bg-[#C2391B] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#c23a1bf0] hover:shadow-lg transition duration-150 ease-in-out"
        >
          Enviar
        </button>
        <div className="transition duration-150 ease-in-out">{result ? <Result /> : null}</div>
      </form>
    
  );
}
export default ContactForm