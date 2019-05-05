
  
export function getBook() {
    axios.get('http://localhost:8080/list').then(response =>{
        return response;
    });
}
