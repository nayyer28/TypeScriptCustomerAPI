export async function getCustomers(req: any, res: any){
    try {

        const {db} = req.app;

        const result = await db.collection('customers').find().toArray();
        
        const transformedResult = result.map(({_id, name, email, phone, address}) => {
            return {_id, name, email, phone: phone||'', address: address ||''};
        })

        res.status(200).json(transformedResult);
        
    } catch (err) {
        return res.status(500).json({error: err.toString()});
    }

}