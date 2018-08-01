const database = require("./database-connection");

module.exports = {
    list(){
        return database('game')
    },
    read(id){
        return database('game').where('id',id).first()
    },
    create(game){
        return database('game')
            .insert(game)
            .returning('*')
            .then(record => record[0])
    },
    update(id, game){
        return database('game')
            .update('game')
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('game')
            .del()
            .where('id',id)
    }
};
