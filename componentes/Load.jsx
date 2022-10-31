import React, { useState } from 'react';

const Load = () => {

const [load,setLoad]=useState(<div className='loadsito'><img src='https://media2.giphy.com/media/lr8H4Ua3jCgXLwKNo4/giphy.gif?cid=790b7611825d6143cbb9bc6ebbac62dd890f95613b29864c&rid=giphy.gif&ct=s'/><p><span>CARGANDO!</span>,debes darle permiso para que empiece</p></div>)

setTimeout(()=>{
setLoad()
},3000)

    return (
        <>{load}</>
    );
};

export default Load;