from PIL import Image
img = Image.open('public/Logo.jpeg').convert('L')
w, h = img.size
# Compute row darkness
row_darkness = [sum(255 - img.getpixel((x,y)) for x in range(w)) for y in range(h)]

# Find the gap (minimum darkness) in the middle of the content
# Content starts at 143, ends at 725.
content_top = 143
content_bottom = 725

# Let's find the split point between the icon and the text
# Usually there is a valley in darkness between icon and text.
# Let's search between y=300 and y=650
min_darkness = min(row_darkness[300:650])
split_y = row_darkness[300:650].index(min_darkness) + 300

# Now crop the image from content_top to split_y
# Also we can trim the sides.
img_color = Image.open('public/Logo.jpeg').convert('RGB')
icon = img_color.crop((0, content_top, w, split_y))

# Let's crop whitespace around it
bg = Image.new(icon.mode, icon.size, (255,255,255))
diff = ImageChops.difference(icon, bg) if 'ImageChops' in globals() else None
# Wait, I didn't import ImageChops.
from PIL import ImageChops
diff = ImageChops.difference(icon, bg)
bbox = diff.getbbox()
if bbox:
    icon = icon.crop(bbox)

icon.save('public/Logo-icon.jpeg')
print(f"Cropped exactly to icon. Split Y: {split_y}. BBox: {bbox}")
