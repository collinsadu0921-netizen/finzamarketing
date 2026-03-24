import os
import glob

directory = r'c:\Users\colli\Documents\finzamarketing\src'
target_string = '"https://app.finza.africa/signup"'
replacement_string = '"/pricing"'
count = 0

for filepath in glob.glob(os.path.join(directory, '**', '*.tsx'), recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if target_string in content:
        new_content = content.replace(target_string, replacement_string)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        print(f'Updated {filepath}')

print(f'Total files updated: {count}')
