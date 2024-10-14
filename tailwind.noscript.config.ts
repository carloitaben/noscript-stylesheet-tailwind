import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import config from "./tailwind.config"

export default {
  ...config,
  corePlugins: {
    preflight: false,
  },
  plugins: [
    ...config.plugins,
    plugin(({ addVariant }) => {
      addVariant("noscript", "&[class]")
    }),
  ],
} satisfies Config
