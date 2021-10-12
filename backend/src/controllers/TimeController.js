import Time from '../models/Time';

class TimeController {

    async index(req, res) {

        const times = await Time.find();

        if (! times) 
            return res.status(400).json({message: "Nenhum registro"});
        

        return res.json(times);
    }

    async show_cod(req, res) {

        const { cod } = req.params;
        const times = await Time.find({ cod });

        if (! times) 
            return res.status(400).json({message: "Nenhum registro"});
        

        return res.json(times);
    }

    async show(req, res) {

      const { id } = req.params;
      const times = await Time.find({ _id: id });

      if (!times) 
          return res.status(400).json({message: "Nenhum registro"});
      

      return res.json(times);
    }

    async store(req, res) {
        const {filename} = req.file;
        const {cod, nome, serie} = req.body;
        const {user_id} = req.headers;
      	  
    
        const time = await Time.create({
            user: user_id,
            brasao: filename,
            cod,
            nome,
            serie
        });

        return res.status(201).json(time);
    }

    async update(req, res) {
      const {filename} = req.file;
      const { id } = req.params;
      const {cod, nome, serie} = req.body;
      const {user_id} = req.headers;

      const time = await Time.updateOne({ _id: id }, { 
        user: user_id,
        brasao: filename,
        cod,
        nome,
        serie
      });

      return res.status(201).json({message: `${id} alterado com sucesso!`});
    }

    async delete(req, res) {
      const {id} = req.params;
      await Time.delete({ _id: id });
      return res.status(201).json({message: `${id} deletado!` });
      
    }

}

export default new TimeController();
