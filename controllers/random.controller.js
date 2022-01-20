// select nb items from the list
exports.find = (req, res) => {
    if (req.params.list === undefined ){
        res.status(400).send({ message: "Need 2 parameters." });
    } else {
        let nb = parseInt(req.params.number);
        let list = req.params.list.split(",")

        if (isNaN(nb) || nb < 1) {
            res.status(400).send({message: "1st parameter needs to be a number, upper than 0."});
        } else if (list.length <= nb) {
            res.status(400).send({message: "number needs to be lower than list's length."});
        } else {
            let choices = []
            while (nb > 0) {
                let new_choice_id = Math.floor(Math.random() * list.length);
                choices.push(list[new_choice_id]);
                list.splice(new_choice_id, 1);
                nb--;
            }
            console.log({choices: choices});
            res.send({choices: choices});
        }
    }
};
