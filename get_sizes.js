import fs from 'fs';
import sizeOf from 'image-size';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

files.forEach(f => {
    try {
        const dimensions = sizeOf(path.join(dir, f));
        console.log(`${f}: ${dimensions.width}x${dimensions.height}`);
    } catch (e) {}
});
