import {PropsWithChildren as Props} from "solid-js"
import {component} from "babel-plugin-solid-undestructure"


export const Bar = component(({background, children}:Props<{background:string}>) => {
	return (
		<div style={{background}}>
			{children}
		</div>
	)
})
