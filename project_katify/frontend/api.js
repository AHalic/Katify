/*
 * Descricao: cria api para conexão do back com o front
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default api