import React, { Component } from 'react';
import { Get } from '../services/ApiRequest';

var Request= Get("https://rpc-computacion.com.ar/Api2/api/Publicacion/TraerPublicacionesDestacadas");
//este componente obtiene el array de la respeusta del server.
//llamaral server dentro de un componentdidmopunt.

class GetAllProducts extends Component {
    
    constructor(){
        super();
        
    }
    render() {
         
         return <div>{Request}</div>;

      }
    }

export default GetAllProducts;