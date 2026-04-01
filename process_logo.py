from PIL import Image
import sys

img_path = r'C:\Users\colli\.gemini\antigravity\brain\5a313ba7-ceb5-4271-8779-f7309f2e364f\media__1775050112652.png'
out_full = r'c:\Users\colli\Documents\finzamarketing\public\logo.png'
out_icon = r'c:\Users\colli\Documents\finzamarketing\public\icon.png'

img = Image.open(img_path).convert("RGBA")

data = img.getdata()
newData = []
for item in data:
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)
img.putdata(newData)

bbox = img.getbbox()
if not bbox:
    print("Empty image")
    sys.exit(1)

crop_img = img.crop(bbox)
crop_img.save(out_full)

width, height = crop_img.size
pixels = crop_img.load()

empty_cols = []
for x in range(width):
    is_empty = True
    for y in range(height):
        if pixels[x, y][3] > 10:  # not transparent
            is_empty = False
            break
    if is_empty:
        empty_cols.append(x)

gaps = []
start = None
for i in range(len(empty_cols)):
    if start is None:
        start = empty_cols[i]
    if i == len(empty_cols) - 1 or empty_cols[i+1] != empty_cols[i] + 1:
        end = empty_cols[i]
        gaps.append((start, end))
        start = None

if gaps:
    largest_gap = max(gaps, key=lambda g: g[1] - g[0])
    icon_right = largest_gap[0]
    
    icon_img = crop_img.crop((0, 0, icon_right, height))
    icon_bbox = icon_img.getbbox()
    if icon_bbox:
        icon_img = icon_img.crop(icon_bbox)
    
    iw, ih = icon_img.size
    size = max(iw, ih)
    pad = int(size * 0.1)
    size += 2*pad
    
    icon_square = Image.new('RGBA', (size, size), (255,255,255,0))
    offset_x = (size - iw) // 2
    offset_y = (size - ih) // 2
    icon_square.paste(icon_img, (offset_x, offset_y))
    icon_square.save(out_icon)
    print("Saved logo and icon")
else:
    print("No gap found", width, height)
