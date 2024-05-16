import { execa } from 'execa'

for (let i = 0; i < 3; i++) {
  const { stdout: result } = await execa`pnpm rollup -c rollup.config.js`
  const chunks = result.matchAll(/\/\/→ (.*\.js)/mg)
  console.log([...chunks].map(c => c[1]))
}

