import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Vehicle} from "../entity/Vehicle";

export class VehicleController {

    private VehicleRepository = getRepository(VehicleController);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.VehicleRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.VehicleRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.VehicleRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.VehicleRepository.findOne(request.params.id);
        await this.VehicleRepository.remove(userToRemove);
    }

}