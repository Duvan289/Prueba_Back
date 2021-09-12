import { Router } from "express";
const router = Router()

import {createPerson, deletePerson, getPerson, getPersons, updatePerson} from '../controllers/person.controller'

router.get('/persons',getPersons);
router.get('/persons/:id',getPerson);
router.post('/persons',createPerson);
router.put('/persons/:id',updatePerson);
router.delete('/persons/:id',deletePerson);

export default router