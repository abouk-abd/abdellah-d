const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'youcan.theme.json',
  'layout/theme.liquid',
  'templates/index.json',
  'templates/product.json',
  'templates/collection.json',
  'templates/list-collections.json',
  'templates/page.json',
  'templates/cart.json',
  'templates/search.json',
  'config/settings_schema.json',
  'config/settings_data.json',
  'locales/ar.json',
  'locales/fr.json',
  'locales/en.json',
  'assets/balurix-theme.css',
  'assets/balurix-theme.js'
];

console.log('🔍 [1/3] Checking required files existence...');
let missingFiles = [];
for (const file of requiredFiles) {
  const fullPath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ MISSING: ${file}`);
    missingFiles.push(file);
  } else {
    console.log(`✅ OK: ${file}`);
  }
}

if (missingFiles.length > 0) {
  console.error(`FAILED: ${missingFiles.length} files missing.`);
  process.exit(1);
}

console.log('\n🔍 [2/3] Validating JSON templates & Section references...');
const templatesDir = path.resolve(process.cwd(), 'templates');
const templateFiles = fs.readdirSync(templatesDir).filter(f => f.endsWith('.json'));

let errors = [];

for (const tf of templateFiles) {
  const filePath = path.join(templatesDir, tf);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    console.log(`✅ Valid JSON: templates/${tf}`);

    if (parsed.sections) {
      for (const [sectionKey, sectionObj] of Object.entries(parsed.sections)) {
        const sectionType = sectionObj.type;
        const sectionPath = path.resolve(process.cwd(), 'sections', `${sectionType}.liquid`);
        if (!fs.existsSync(sectionPath)) {
          errors.push(`Template templates/${tf} references missing section: sections/${sectionType}.liquid`);
        } else {
          console.log(`   ↳ Section referenced: sections/${sectionType}.liquid exists.`);
        }
      }
    }
  } catch (err) {
    errors.push(`JSON Syntax Error in templates/${tf}: ${err.message}`);
  }
}

console.log('\n🔍 [3/3] Validating config & locale JSONs...');
const otherJsons = [
  'youcan.theme.json',
  'config/settings_schema.json',
  'config/settings_data.json',
  'locales/ar.json',
  'locales/fr.json',
  'locales/en.json'
];

for (const oj of otherJsons) {
  try {
    const raw = fs.readFileSync(path.resolve(process.cwd(), oj), 'utf-8');
    JSON.parse(raw);
    console.log(`✅ Valid JSON: ${oj}`);
  } catch (err) {
    errors.push(`JSON Syntax Error in ${oj}: ${err.message}`);
  }
}

if (errors.length > 0) {
  console.error('\n❌ VALIDATION ERRORS FOUND:');
  errors.forEach(e => console.error(` - ${e}`));
  process.exit(1);
} else {
  console.log('\n🎉 ALL 100% VALIDATED: Theme structure, templates, sections, and schemas are valid!');
}
