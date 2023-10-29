import {ObjectId} from 'mongodb';

export async function deleteCustomer(req: any, res: any){
    try {

        const {db} = req.app;

        const {_id} = req.params;
        console.log(_id);
        if(!_id || !ObjectId.isValid(_id)){
            return res.status(400).json({message: "Invalid request. Please provide a valid customer ID."});
        }

        const result = await db.collection('customers').deleteOne({_id: new ObjectId(_id)});
        console.log(result);

        if(result.acknowledged){
            res.status(200).json({message: `Customer with Id: ${_id} deleted successfully`});
        }
        else
        {
            return res.status(404).json({message: `Customer with id: ${_id} not found.`});
        }
    
        
    } catch (err) {

        return res.status(500).json({error: err.toString()});
    }
}