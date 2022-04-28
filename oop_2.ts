class Database {
     private _url;
     private _port;
     private _username;
     private _password;
     private _tables;


     constructor(url, port, username, password) {
          this._url = url;
          this._port = port;
          this._username = username;
          this._password = password;
          this._tables = []
     }

     public createNewTable(table){
          this._tables.push(table)
     }


    public get_url(): undefined {
        return this._url;
    }

    public clearTables(){
         this._tables = []
    }

    public set_url(_url: undefined): void {
        this._url = _url;
    }

    public get_port(): undefined {
        return this._port;
    }

    public set_port(_port: undefined): void {
        this._port = _port;
    }

    public get_username(): undefined {
        return this._username;
    }

    public set_username(_username: undefined): void {
        this._username = _username;
    }

    public get_password(): undefined {
        return this._password;
    }

    public set_password(_password: undefined): void {
        this._password = _password;
    }

    public get_tables(): undefined {
        return this._tables;
    }

    public set_tables(_tables: undefined): void {
        this._tables = _tables;
    }


}

const db = new Database( 1, 2, 3, 4)

db.createNewTable({name: 'roles'})
db.createNewTable({name: 'users'})
db.clearTables()

console.log(db)