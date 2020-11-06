import axios from 'axios'


class TutorialDataService {
    selecionarCliente(config: any): any{
         axios(config)
         .then( (response) => {
         console.log(JSON.stringify("Resposta" + response.data.data));
         return  response.data.data
        })
  .catch(function (error) {
  console.log(error);
  });

}
logar(config: any){
    return axios(config)
    
  }
    getAll() {
      return axios.get("/tutorials");
    }
  
    get(id: string) {
      return axios.get(`/tutorials/${id}`);
    }
  
    create(data: any) {
      return axios.post("/tutorials", data);
    }
  
    update(id: string, data: any) {
      return axios.put(`/tutorials/${id}`, data);
    }
  
    delete(id: string) {
      return axios.delete(`/tutorials/${id}`);
    }
  
    deleteAll() {
      return axios.delete(`/tutorials`);
    }
  
    findByTitle(title: string) {
      return axios.get(`/tutorials?title=${title}`);
    }
  }
  
  export default new TutorialDataService();