import { Employee } from "./classes/heranca/Employee.class";
import { Seller } from "./classes/heranca/Seller.class";

//EXERCÍCIO DE HERANÇA

// const costumerTeste: CustomerUser = new CustomerUser("123", "1", "abc@teste.com", "Isabella", "password")

// console.log(costumerTeste)
// console.log(costumerTeste.getId())
// console.log(costumerTeste.getEmail())
// console.log(costumerTeste.purchaseTotal)
// console.log(costumerTeste.introduceYourself())

//1-a) Não, pois ela é privada.
//1-b) Uma vez só
//2-a) Uma vez só
//2-b) Uma vez só, pois ele só enviou uma vez as informações para essa classe. Foi um caminho feito.
//3-a) Não seria possível pois ela é privada e não há a disponibilidade de função get para ela.

//--------------------------------------------------------------------------------

//EXERCÍCIO DE POLIMORFISMO

// const client1: Client = {
//     name: "Isabella",
//     registrationNumber: 200,
//     consumedEnergy: 10,
//     calculateBill: () => {
//         return 2
//     }
// }

// console.log(client1)

// 1- Consegui imprimir o nome, o registro, a energia consumida mas não consegui imprimir a função. Porque ele apenas faz o molde, não exerce a função em si.

//2- a) Não é possível criar uma instância de uma classe abstrata.ts

//b) Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

//4-Métodos: getCpf e calculateBill; Propriedades: name, registrationNumber, consumedEnergy, cpf, pois as outras ele herda de seus pais.

//5- a) recebe as mesmas informações de Client

//b) Recebe as exigencias de Commerce e o cpnj que é proprio dele.

//6- a) Industry. Pra herdar suas exigencias

//b) Client, para que todos os clientes enviem as informações certas.

//c) Para que as informações não sejam alteradas. As info que poderiam ser mudadas já estão públicas permitindo a mudança.

//------------------------------------------------------------------------------------

// DESAFIO

// HERANÇA

// console.log(new Employee("15/02/2022", 3000, "1", "bellah@lbn.com", "Bella", "123456").calculateTotalSalary())

// 1-a) Uma vez
// b) id: '1',
//   email: 'bellah@lbn.com',
//   name: 'Bella',
//   password: '123456',
//   admissionDate: '15/02/2022',
//   baseSalary: 3000

//4-a) admissionDate: string, baseSalary: number, id: string, email: string, name: string, password: string
//b) Consegui imprimir o que estava como public ou com um get para isso. O que estava protegido ou privado não consegui visualizar.

// const funcionario = new Seller("15/02/2022", 3000, "1", "bellah@lbn.com", "Bella", "123456")

//5-a) Não, pois ele é privado. Precisa criar um get

//6- a) 

const seller1 = new Seller("15/02/2022", 3000, "1", "bellah@lbn.com", "Bella", "123456")
seller1.setSalesQuantity(2)
console.log(seller1.calculateTotalSalary())