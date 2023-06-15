import { printAndReturn } from "./common/utils";


export const helloWorld = () => printAndReturn('Hello World!')




export const run = () => {
	console.log(helloWorld())
}