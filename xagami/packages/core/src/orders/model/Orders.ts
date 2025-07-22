export default interface Order{
    id:             String  
    solicitacaoId:  String
    prestadorId?:   String
    dataEntrega?:   Date
    status:         String
}