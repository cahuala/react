export default interface User{
  id:string
  name:string
  email:string
  password?: string
  telefone?: string
  tipo?: 'PARTICULAR' | 'EMPRESARIAL' | 'PRESTADOR'; // string literal union
}