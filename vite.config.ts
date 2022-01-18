import Solid from "vite-plugin-solid"
import {UserConfig} from "vite"
import {undestructurePlugin} from "babel-plugin-solid-undestructure"

export default {
	plugins: [
		...undestructurePlugin("ts"),
		Solid(),
	],
} as UserConfig
