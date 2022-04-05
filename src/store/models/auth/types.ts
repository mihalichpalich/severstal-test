import {Action} from "easy-peasy";

export interface AuthModel {
	isAuth: boolean;

	setAuth: Action<AuthModel>;
}