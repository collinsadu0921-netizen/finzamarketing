from PIL import Image

bg = Image.new('RGB', (1200, 630), (255, 255, 255))
logo = Image.open(r'c:\Users\colli\Documents\finzamarketing\public\logo.png')
# Assuming logo has transparent background or is already processed.
# Calculate resize to fit nicely
aspect_ratio = logo.width / logo.height
new_width = 800
new_height = int(new_width / aspect_ratio)

if new_height > 400:
    new_height = 400
    new_width = int(new_height * aspect_ratio)

logo = logo.resize((new_width, new_height), Image.Resampling.LANCZOS)
x = (1200 - new_width) // 2
y = (630 - new_height) // 2

bg.paste(logo, (x, y), logo if logo.mode == 'RGBA' else None)
bg.save(r'c:\Users\colli\Documents\finzamarketing\public\og-image.png')
print("Generated new og-image.png")
