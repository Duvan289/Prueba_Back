import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import {Persons} from '../entity/Persons'

export const getPersons = async (req:Request,res:Response):Promise<Response>=>{
    const persons = await getRepository(Persons).find();
    return res.json(persons);
}

export const getPerson = async (req:Request,res:Response):Promise<Response>=>{
    const result = await getRepository(Persons).findOne(req.params.id);
    return res.json(result);
}

export const createPerson = async (req:Request,res:Response):Promise<Response>=>{
    console.log("createperson prueba");
    const newPerson = await getRepository(Persons).create(req.body);
    const results = await getRepository(Persons).save(newPerson);
    return res.json(results);
}

export const updatePerson = async (req:Request,res:Response):Promise<Response>=>{
    const person = await getRepository(Persons).findOne(req.params.id)
    console.log(req.body,person,"updateperson");
    if (person){
        getRepository(Persons).merge(person,req.body);
        const result = await getRepository(Persons).save(person);
        return res.json(result);
    }
    return res.status(404).json({msg:'Category not found'});
}

export const deletePerson = async (req:Request,res:Response):Promise<Response>=>{
    const result = await getRepository(Persons).delete(req.params.id);
    return res.json(result);
}