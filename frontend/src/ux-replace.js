const fs = require('fs');
const path = require('path');

const dir = 'd:/Downloads/nkseventsservices/nkswebsite-main/frontend/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace default 10% opacity card borders with the sleek 0.5px 8% opacity borders
  content = content.replace(/dark:border-white\/10/g, 'dark:border-white/[0.08] dark:border-[0.5px]');
  
  // Enhance icon backgrounds with deep purple tint and subtle border
  content = content.replace(/dark:bg-primary\/20/g, 'dark:bg-[#7C3AED]/15 dark:border dark:border-[#7C3AED]/30');
  
  // If there are standard white/20 borders on cards, tone them down slightly for uniformity, but avoid touching forms if possible. We will leave white/20 for inputs.

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Successfully completed UX script.');
