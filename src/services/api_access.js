const api_root = "//localhost:80";

export function login(name, password){
    return myFetch(api_root + "/login", {name, password});
}
export function updateInfo(name, password, newName, newPassword){
    return myFetch(api_root + "/update-info", {name, password, newName, newPassword});
}
export function setInfo(name, height, weight){
    return myFetch(api_root + "/set-info", {name, height, weight});
}
export function setGoal(name, goalType){
    return myFetch(api_root + "/set-goal", {name, goalType});
}
export function getGoal(name){
    return myFetch(api_root + "/get-goal", {name});
}
export function register(){
    return myFetch(api_root + "/register");
}
export function generate(name,firstName, lastName, password){
    return myFetch(api_root + "/generate", {name,firstName, lastName, password});
}





  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                playerId: 0
            }
      };
      if(data){
          options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
      }
      return fetch(url, options)
      .then(response =>{
        return response.json()
      }); // parses response to JSON
  }