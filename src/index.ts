#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import prompts from 'prompts';
import kleur from 'kleur';
import { copyTemplate } from './utils/copy.js';


const __dirname = path.dirname(fileURLToPath(import.meta.url));


async function main() {
    console.log(kleur.bold().cyan('\ncreate-next-daisy-clerk-stripe-app'));


    const res = await prompts([
        { name: 'appName', type: 'text', message: 'App directory name', initial: 'my-app' },
        { name: 'useTS', type: 'toggle', message: 'Use TypeScript?', initial: true, active: 'yes', inactive: 'no' },
        {
            name: 'pkgManager', type: 'select', message: 'Package manager', choices: [
                { title: 'pnpm', value: 'pnpm' },
                { title: 'npm', value: 'npm' },
                { title: 'yarn', value: 'yarn' }
            ], initial: 0
        },
        { name: 'orgs', type: 'toggle', message: 'Enable Clerk Organizations?', initial: true, active: 'yes', inactive: 'no' },
        {
            name: 'billing', type: 'select', message: 'Billing model', choices: [
                { title: 'Subscriptions (Stripe Checkout)', value: 'subscriptions' },
                { title: 'One‑time (Payment Links)', value: 'onetimes' }
            ], initial: 0
        }
    ]);


    const targetDir = path.resolve(process.cwd(), res.appName);
    if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
        console.error(kleur.red(`\nDirectory ${res.appName} is not empty.`));
        process.exit(1);
    }
    fs.mkdirSync(targetDir, { recursive: true });


    const templateRoot = path.resolve(__dirname, 'templates');
    await copyTemplate(templateRoot, targetDir, {
        __APP_NAME__: res.appName,
        __USE_TS__: String(res.useTS),
        __CLERK_ORGS__: String(res.orgs),
        __BILLING__: String(res.billing)
    });


    console.log(`\n${kleur.bold('Next steps:')}`);
    console.log(` cd ${res.appName}`);
    console.log(` ${res.pkgManager} install`);
    console.log(` ${res.pkgManager} run dev\n`);
}


main().catch((e) => {
    console.error(e);
    process.exit(1);
});