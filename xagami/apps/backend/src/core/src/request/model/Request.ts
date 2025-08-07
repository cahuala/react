import User from "../../user/model/User";

export default interface Request{
  id:string
  user:Partial<User>;
  tipoServico:string
  origem : string
  destino:string
  descricao:string
  estado : string
}