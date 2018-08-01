const database = require("./database-connection");

module.exports = {
    list(){
        return database('game')
    },
    read(id){
    },
    create(game){
    },
    update(id, game){
    },
    delete(id){
    }
};
