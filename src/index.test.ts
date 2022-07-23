import { describe, test, expect} from 'vitest'
import { helloWorld } from '.'


describe("helloWorld", () => {
	test("returns 'Hello World!'", () => {
		expect(helloWorld()).toBe('Hello World!')
	})
})