import os
import glob

directory = r'c:\Users\colli\Documents\finzamarketing\src'
count = 0

replacements = {
    "Start free — no card required": "Start your 14-day free trial",
    "Start free": "Start your 14-day free trial"
}

for filepath in glob.glob(os.path.join(directory, '**', '*.tsx'), recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    for target, replacement in replacements.items():
        if target in content:
            content = content.replace(target, replacement)
            modified = True
            
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1
        print(f'Updated {filepath}')

print(f'Total files updated: {count}')
