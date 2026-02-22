const fs = require('fs');
const path = require('path');

function findAndFixEslintConfigs(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.next') {
                findAndFixEslintConfigs(fullPath);
            }
        } else if (file === '.eslintrc.json') {
            let content = fs.readFileSync(fullPath, 'utf8');
            try {
                let json = JSON.parse(content);
                let modified = false;

                // fix plugins
                if (json.plugins && Array.isArray(json.plugins)) {
                    const newPlugins = json.plugins.filter(p => !p.includes('@nx'));
                    if (newPlugins.length !== json.plugins.length) {
                        json.plugins = newPlugins;
                        modified = true;
                    }
                }

                // fix extends
                if (json.extends) {
                    if (Array.isArray(json.extends)) {
                        const newExtends = json.extends.filter(e => !e.includes('@nx'));
                        if (newExtends.length !== json.extends.length) {
                            json.extends = newExtends;
                            modified = true;
                        }
                    } else if (typeof json.extends === 'string' && json.extends.includes('@nx')) {
                        delete json.extends;
                        modified = true;
                    }
                }

                // fix overrides
                if (json.overrides && Array.isArray(json.overrides)) {
                    json.overrides.forEach(override => {
                        if (override.extends) {
                            if (Array.isArray(override.extends)) {
                                const newExtends = override.extends.filter(e => !e.includes('@nx'));
                                if (newExtends.length !== override.extends.length) {
                                    override.extends = newExtends;
                                    modified = true;
                                }
                            } else if (typeof override.extends === 'string' && override.extends.includes('@nx')) {
                                delete override.extends;
                                modified = true;
                            }
                        }
                        if (override.rules) {
                            for (const rule in override.rules) {
                                if (rule.includes('@nx')) {
                                    delete override.rules[rule];
                                    modified = true;
                                }
                            }
                        }
                    });
                }

                if (modified) {
                    fs.writeFileSync(fullPath, JSON.stringify(json, null, 2) + '\n');
                    console.log(`Fixed ${fullPath}`);
                }
            } catch (e) {
                console.error(`Error parsing ${fullPath}`, e);
            }
        }
    }
}

findAndFixEslintConfigs(__dirname);
