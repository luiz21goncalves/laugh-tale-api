import type { UserConfig } from '@commitlint/types'

const config = {
  extends: ['@commitlint/config-conventional'],
} satisfies UserConfig

// biome-ignore lint/style/noDefaultExport: configuration file
export default config
