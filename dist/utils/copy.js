import fs from 'node:fs';
import path from 'node:path';
export async function copyTemplate(srcDir, destDir, vars) {
    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    for (const e of entries) {
        const from = path.join(srcDir, e.name);
        const to = path.join(destDir, e.name);
        if (e.isDirectory()) {
            fs.mkdirSync(to, { recursive: true });
            await copyTemplate(from, to, vars);
        }
        else {
            let data = fs.readFileSync(from, 'utf8');
            Object.entries(vars).forEach(([k, v]) => {
                data = data.replaceAll(k, v);
            });
            // handle dotfiles
            const out = e.name.replace(/^_dot_/, '.');
            fs.writeFileSync(path.join(destDir, out), data);
        }
    }
}
