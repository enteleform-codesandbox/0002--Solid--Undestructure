import {batch, createEffect, createSignal} from "solid-js"

/** Works without issue. */
//import * as Foo from "./Foo_NamedExports"

/** Uncaught TypeError: Cannot read properties of undefined (reading 'name') */
import {Foo} from "./Foo_Namespace"


export function App(){
	const [color_1, set_Color_1] = createSignal("lightpink")
	const [color_2, set_Color_2] = createSignal("lightblue")

	let invert = false

	createEffect(()=>{
		setInterval(()=>{
			invert = !invert

			const [color_1, color_2] =
				(invert)
				? ["lightblue", "lightpink"]
				: ["lightpink", "lightblue"]

			batch(()=>{
				set_Color_1(color_1)
				set_Color_2(color_2)
			})

		}, 1000)
	})

	return <>
		<Foo.Bar background={color_1()}> Hello </Foo.Bar>
		<Foo.Bar background={color_2()}> World </Foo.Bar>
	</>
}
