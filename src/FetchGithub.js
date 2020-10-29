import React, {useEffect,useState} from "react";

function FetchGithub() {

  const [state,Setstate] = useState({
    name: '',
    location: '',
    loading:true,
  });

  let handler = x=> Setstate({...state,...x});

  let Request = () =>{
    fetch('http://api.github.com/users/workshopsjsmvd')
        .then(res => {

          if(res.status === 200){
            handler({
              loading:false,
              name: res.name,
              location: res.location
            })
          }else{
            handler({
              loading:false,
              name: "Sin información.",
              location: "Sin información."
            })
          }
        })
        .catch(e=>{
          alert("Error al intentar consultar",e)
          handler({
            loading:false,
            name: "Sin información.",
            location: "Sin información."
          })
        });
  }


  useEffect(()=>{
    Request()
  },[ ] );

  return (
      <div>
        {state.loading ? <p>Procesando...</p> :
            <>
              <h1>Nombre:{state.name}</h1>
              <h1>País:{state.location}</h1>
            </>
        }
      </div>
  )
}

export default React.memo(FetchGithub);

