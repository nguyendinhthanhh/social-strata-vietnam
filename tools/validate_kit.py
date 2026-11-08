#!/usr/bin/env python3
"""Static validation of Antigravity starter kit. NOT a runtime agent or website test."""
from pathlib import Path
import hashlib, json, re, zipfile
root = Path(__file__).resolve().parents[1]
errors = []
required = ['AGENTS.md','README.md','spec/PROJECT_BRIEF.md','spec/QUALITY_GATES.md','content/COPY_SEED.md']
for i in (18,19,20): required += [f'references/course/MLN131_Tiet_{i}.pptx', f'references/course/MLN131_Tiet_{i}_text.txt']
for x in required:
    if not (root/x).is_file(): errors.append('MISSING '+x)
agent_dir=root/'.agents/agents'
agent_files=sorted(agent_dir.glob('*.md'))
if len(agent_files)!=6: errors.append(f'Expected 6 agents, found {len(agent_files)}')
valid_tools={'view_file','grep_search','find_by_name','write_to_file','replace_file_content','multi_replace_file_content','run_command','search_web','read_url_content'}

def frontmatter(p):
    text=p.read_text(encoding='utf-8')
    if not text.startswith('---\n'): errors.append('Invalid frontmatter '+str(p)); return ''
    parts=text.split('---',2)
    if len(parts)<3: errors.append('Unclosed frontmatter '+str(p));return ''
    return parts[1]

for p in agent_files:
    fm=frontmatter(p)
    for key in ('name:','description:','mainAgent: false','subagent: true','model:','commandExecutionPolicy: sandbox'):
        if key not in fm: errors.append(f'{p.name}: missing {key}')
    tools=re.findall(r'^  - ([a-z_]+)$',fm,re.M)
    if not tools: errors.append(f'{p.name}: no tool allowlist')
    for tool in tools:
        if tool not in valid_tools: errors.append(f'{p.name}: unmapped tool {tool}')
for p in (root/'.agents/skills').glob('*/SKILL.md'):
    fm=frontmatter(p)
    if 'name:' not in fm or 'description:' not in fm: errors.append(f'{p}: missing skill keys')
for p in (root/'.agents/rules').glob('*.md'):
    fm=frontmatter(p)
    if not re.search(r'trigger: (always_on|model_decision|glob|manual)',fm): errors.append(f'{p}: invalid trigger')
for p in root.glob('references/course/*.pptx'):
    try:
        with zipfile.ZipFile(p) as z:
            if z.testzip() is not None: errors.append(f'{p}: damaged pptx')
    except Exception as e: errors.append(f'{p}: cannot open pptx {e}')
manifest=root/'MANIFEST_SHA256.json'
if manifest.exists():
    data=json.loads(manifest.read_text(encoding='utf-8'))
    for name,expect in data.items():
        p=root/name
        if not p.is_file():errors.append(f'checksum source missing {name}')
        elif hashlib.sha256(p.read_bytes()).hexdigest()!=expect:errors.append(f'checksum mismatch {name}')
print('Static kit validation:', 'PASS' if not errors else 'FAIL')
print('Agents:', ', '.join(f.stem for f in agent_files))
print('Skills:', len(list((root/'.agents/skills').glob('*/SKILL.md'))))
for err in errors: print('ERROR:',err)
if errors: raise SystemExit(1)
