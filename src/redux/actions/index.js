export const GET_ALL_BANDS = 'GET_ALL_BANDS';
export const GET_BAND_DETAILS = 'GET_BAND_DETAILS';
export const CREATE_BANDS = 'CREATE_BANDS';
export const DELETE_BANDS = 'DELETE_BANDS';


// 馃煝 getAllBands:
// Esta funci贸n debe realizar una petici贸n al Back-End. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/bands'.
export const getAllBands = () => (dispatch) => {  
    return fetch('http://localhost:3001/bands')     
        .then(response => response.json())
        .then(data => dispatch({
            type: GET_ALL_BANDS,
            payload: data
        }))   
};

// 馃煝 getBandDetail:
// Esta funci贸n debe hacer una petici贸n al Back-End. Ten en cuenta que tiene que recibir la variable "id" por
// par谩metro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/bands/:id'.

export const getBandDetail = (id) =>  (dispatch) => {
    return fetch( `http://localhost:3001/bands/${id}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: GET_BAND_DETAILS,
        payload: data
    }))

/*
    const res = await fetch( `http://localhost:3001/bands/${id}`)
    const data = await res.json();
    return dispatch({
        type: GET_BAND_DETAILS,
        payload: data
    })*/
         
};

// 馃煝 createBands:
// Esta funci贸n debe recibir una variable "bands" por par谩metro.
// Luego retornar una action que, en su propiedad payload:
//    - haga un spread operator de la variable bands, para copiar todo su contenido.
//    - tenga una nueva propiedad "id" igual la variable de abajo, pero con un incremento +1.
// Descomenta esta variable cuando la necesites
 let id = 6;
export const createBands = (payload) => {
    return{
        type: CREATE_BANDS,
        payload:{
            ...payload,
            id:id++
        }
    }
};

// 馃煝 deleteBands:
// Esta funci贸n debe retornar una action. En su propiedad "payload" habr谩 una ID recibido por par谩metro.
export const deleteBands = (id) => {
    return{
        type: DELETE_BANDS,
        payload: id        
    }
};