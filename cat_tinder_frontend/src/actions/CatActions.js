import dispatcher from '../dispatchers/dispatcher'

export function fetchCats(initial=false){
  let success;
  const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }
  fetch('http://localhost:4000/cats', params)
    .then((response)=>{
      success = response.ok
      return response.json()
    })
    .then((body)=>{
      if (success){
        console.log("success!", body)
        let cats = body.cats
        dispatcher.dispatch({
          type: "FETCH_CATS",
          cats: cats,
          initial: initial
        })
      }
      else {
        console.log("failure!", body)
      }
    })
}



export function newCat(catInfo){
  let success;
  const params = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(catInfo)
      }
  fetch('http://localhost:4000/create-cat', params)
    .then((response)=>{
      success = response.ok
      return response.json()
    })
    .then((body)=>{
      if (success){
        dispatcher.dispatch({
          type: "NEW_CAT",
          cat: body.cat
        })
        console.log("success!", body.cat)
      }
      else {
        console.log("failure!", body.cat)
      }
    })
}
