module.exports = {
    doesItWork : (req, res) => {   
        const dbInstance = req.app.get('db')

        dbInstance.get_inventory()
        .then(products => res.status(200).send( products ))
    },

    create : ( req, res ) => {
        const dbInstance = req.app.get('db')
        const { image, name, price } = req.body
        dbInstance.create_product([image, name, price])
        .then( () => res.sendStatus(200) )
    },

    delete : ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params

        dbInstance.delete_product( id )
        .then( () => res.sendStatus(200))
    }
}
