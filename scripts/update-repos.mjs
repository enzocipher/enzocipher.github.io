import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const USERNAME = 'enzocipher'
const OUTPUT_PATH = resolve(process.cwd(), 'public', 'repos.json')

async function run() {
  const url = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'enzocipher-site-repo-sync',
    },
  })

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  const repos = await response.json()
  const sanitized = Array.isArray(repos)
    ? repos
        .filter((repo) => !repo?.fork)
        .map((repo) => ({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description ?? null,
          language: repo.language ?? null,
          updated_at: repo.updated_at,
          fork: Boolean(repo.fork),
        }))
    : []

  const payload = {
    generatedAt: new Date().toISOString(),
    source: `github.com/${USERNAME}`,
    repos: sanitized,
  }

  await mkdir(dirname(OUTPUT_PATH), { recursive: true })
  await writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8')

  console.log(`Updated ${OUTPUT_PATH} with ${sanitized.length} repositories.`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
