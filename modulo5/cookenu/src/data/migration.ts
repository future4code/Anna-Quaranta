import { BaseDataBase } from "./BaseDataBase";


export async function Migration() {
    await BaseDataBase.connection.raw(`
    CREATE TABLE cookenu_recipes(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        creationDate DATE NOT NULL,
        id_user VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_user) REFERENCES cookenu_users(id)
    );
`)

    console.log("Tabelas criadas!")
}
