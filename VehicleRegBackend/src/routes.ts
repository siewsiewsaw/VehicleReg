import {VehicleController} from "./controller/VehicleController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: VehicleController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: VehicleController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: VehicleController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: VehicleController,
    action: "remove"
}];