# 🚀 Deployment Instructions for goFLY

## Files to Upload to Your Website:

### Required Files (2):
1. `index.html` - Main English version
2. `bn-visa-checklist.html` - Bangla version

## Upload Location:
Upload both files to: `https://goflybd.com/`

After upload, these URLs should work:
- English: https://goflybd.com/index.html (or just https://goflybd.com/)
- Bangla: https://goflybd.com/bn-visa-checklist.html

## How to Upload:

### Option 1: Via cPanel File Manager
1. Login to your cPanel
2. Go to File Manager
3. Navigate to public_html folder (or the folder for goflybd.com)
4. Upload both files:
   - index.html
   - bn-visa-checklist.html
5. Done! Test the links

### Option 2: Via FTP Client (FileZilla)
1. Connect to your FTP server
2. Navigate to public_html or website root
3. Upload both HTML files
4. Done!

### Option 3: Via GitHub Pages (if using)
1. Push both files to your repository
2. Enable GitHub Pages from repository settings
3. Set source to main branch
4. Done!

## Testing After Upload:
1. Visit: https://goflybd.com/
2. Click "🇧🇩 বাংলা" button
3. Should open: https://goflybd.com/bn-visa-checklist.html
4. Click "🇬🇧 English" button
5. Should return to: https://goflybd.com/

## Troubleshooting:
- If 404 error: File not uploaded correctly
- If permission error: Set file permissions to 644
- If path error: Make sure files are in correct folder

## File Sizes:
- index.html: ~79 KB
- bn-visa-checklist.html: ~78 KB

Both files are standalone - no external CSS/JS dependencies needed!
