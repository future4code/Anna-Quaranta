import { Transaction } from './classes/Transaction.class';
import { UserAccount } from "./classes/UserAccount.class";

/*
1-a) O constructor é o método que vai executar automaticamente quando essa classe foi instanciada. Não precisa ser chamado, mas se quiser passar parâmetros é só passar na instância da classe.

1-b) Apenas uma vez

1-c) Criando métodos públicos que acessam esses atributos.

*/


const transaction2: Transaction = new Transaction("saque para comprar xburguer 2", 100, "14/02/2021")

const user1: UserAccount = new UserAccount("123.456.789-10", "Isabella", 20, transaction2)