import { createCustomer as createCustomerController } from "../controller/createCustomer";
import { getCustomers as getCustomersController} from "../controller/getCustomers";
import { getCustomer as getCustomerController} from "../controller/getCustomer";
import { deleteCustomer as deleteCustomerController} from "../controller/deleteCustomer";


const express = require('express');
const router = express.Router();

console.log("customer route");

router.post('/customers', createCustomerController);

router.get('/customers', getCustomersController);

router.get('/customers/:_id', getCustomerController);

router.delete('/customers/:_id', deleteCustomerController);

module.exports = router;