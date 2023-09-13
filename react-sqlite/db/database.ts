import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('contacts.db')

// retorna pra fazer o processo de criação update....
// precisa criar uma transação (transaction)
export const initDatabase = () => {
    //retorna a conexão com o banco
    db.transaction( (conn)=> {
        conn.executeSql(
            "CREATE TABLE IF NOT EXISTS contacts (_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT);",
            [], 
            () => console.log("Tabela contacts criada com sucesso !"),
            (error) => console.log("Exception: " + error) 
        )
    } )
}

export const addContact = (name: string, phone: string) => {
    
    db.transaction((conn) => {

        conn.executeSql(
            "INSERT INTO contacts (name, phone) VALUES (?,?);",
            [name, phone],
            () => console.log('Contato inserido com sucesso !'),
            (error) => {
                console.log('Exception: ' + error)
                return false
            }
        )
    })
}

const deleteContact = () => {

}

export const getContacts = () => {

    return new Promise<{_id: number, name: string, phone: string }[]>
             ((resolver, reject) => {
                db.transaction( (conn) => {

                    conn.executeSql(
                        "SELECT * FROM contacts;",
                        [],
                        (_, result) => resolver(result.rows._array),
                    )
                        }
                    )
            
                })
    }

  

