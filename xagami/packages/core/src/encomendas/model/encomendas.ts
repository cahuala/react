import User from "../../user/model/User";

export default interface Encomendas{
  id:string
  user?:Partial<User>;
  solicitacaoId:string
  dataEntrega?: Date
  status:string
}