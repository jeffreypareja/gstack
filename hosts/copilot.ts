import type { HostConfig } from '../scripts/host-config';

const copilot: HostConfig = {
  name: 'copilot',
  displayName: 'GitHub Copilot',
  cliCommand: 'code',
  cliAliases: [],

  // VS Code Copilot prompt files live at .github/prompts/<name>.prompt.md
  globalRoot: '.github/prompts',
  localSkillRoot: '.github/prompts',
  hostSubdir: '.github/prompts',
  usesEnvVars: true,

  frontmatter: {
    mode: 'allowlist',
    keepFields: ['name', 'description'],
    descriptionLimit: null,
    // Inject VS Code Copilot agent mode so skills run in full agent mode
    extraFields: { mode: 'agent' },
  },

  generation: {
    generateMetadata: false,
    skipSkills: ['codex'],
  },

  pathRewrites: [
    { from: '~/.claude/skills/gstack', to: '~/.github/skills/gstack' },
    { from: '.claude/skills/gstack', to: '.github/skills/gstack' },
    { from: '.claude/skills', to: '.github/skills' },
  ],

  runtimeRoot: {
    globalSymlinks: ['bin', 'browse/dist', 'browse/bin', 'gstack-upgrade', 'ETHOS.md'],
    globalFiles: {
      'review': ['checklist.md', 'TODOS-format.md'],
    },
  },

  install: {
    prefixable: false,
    linkingStrategy: 'symlink-generated',
  },

  // Each skill is a flat .prompt.md file under .github/prompts/
  flatSkillOutput: true,
  outputFileSuffix: '.prompt.md',

  learningsMode: 'basic',
  coAuthorTrailer: 'Co-Authored-By: GitHub Copilot <noreply@github.com>',
};

export default copilot;
