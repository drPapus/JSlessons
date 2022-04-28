var Database = /** @class */ (function () {
    function Database(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }
    Database.prototype.createNewTable = function (table) {
        this._tables.push(table);
    };
    Database.prototype.get_url = function () {
        return this._url;
    };
    Database.prototype.clearTables = function () {
        this._tables = [];
    };
    Database.prototype.set_url = function (_url) {
        this._url = _url;
    };
    Database.prototype.get_port = function () {
        return this._port;
    };
    Database.prototype.set_port = function (_port) {
        this._port = _port;
    };
    Database.prototype.get_username = function () {
        return this._username;
    };
    Database.prototype.set_username = function (_username) {
        this._username = _username;
    };
    Database.prototype.get_password = function () {
        return this._password;
    };
    Database.prototype.set_password = function (_password) {
        this._password = _password;
    };
    Database.prototype.get_tables = function () {
        return this._tables;
    };
    Database.prototype.set_tables = function (_tables) {
        this._tables = _tables;
    };
    return Database;
}());
var db = new Database(1, 2, 3, 4);
db.createNewTable({ name: 'roles' });
db.createNewTable({ name: 'users' });
db.clearTables();
console.log(db);
//# sourceMappingURL=oop_2.js.map