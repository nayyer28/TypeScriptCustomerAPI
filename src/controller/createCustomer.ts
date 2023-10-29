export async function createCustomer(req: any, res: any) {
    try{
        
        const {db} = req.app;

        const {name, email, phone, address} = req.body;
        
        if(!name || !email)
        {
            return res.status(400).json({message: 'Name and email are required'});
        }
        
        if(phone && phone.length !== 11)
        {
             return res.status(400).json({message: 'Phone number must be 11 digits long'});
        }

        const existingCustomer = await db.collection('customers').findOne({email: email.toLowerCase()});

        if(existingCustomer)
        {
             return res.status(400).json({message: `Customer with email: ${email} already exists`});
        }

        const result = await db.collection('customers').insertOne({name,email: email.toLowerCase(),phone,address});

        const {acknowledged} = result;

        if(acknowledged)
        {
         return res.status(200).json({message: 'Customer created successfully'});
        }
        else{
          throw new Error('Customer not created');
        }
        

    } catch(err){
        return res.status(500).json({error: err.toString()});
    }
}