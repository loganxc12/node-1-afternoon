let messages = [];
let id = 0; 

module.exports = {

    read: (req, res) => {
        res.status(200).send(messages);
    },
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(201).send(messages);
    },
    update: (req, res) => {
        const { id } = req.params;
        const { text } = req.body;
        messages.forEach(message => {
            if (message.id === +id) {
                message.text = text;
            }
        });
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const { id } = req.params;
        messages.forEach((message, index, array) => {
            if (message.id === +id) {
                array.splice(index, 1);
            }
        })
        res.status(200).send(messages); 
    }

}