const fs = require('fs');
const path = require('path');
const dirs = ['src/pages', 'src/components'];
dirs.forEach(d => {
  fs.readdirSync(d).filter(f => f.endsWith('.jsx')).forEach(f => {
    let p = path.join(d, f);
    let c = fs.readFileSync(p, 'utf8');
    let orig = c;
    c = c.replace(/background:\s*['"]#fff['"]/gi, 'background: \'var(--bg-white)\'');
    c = c.replace(/backgroundColor:\s*['"]#fff['"]/gi, 'backgroundColor: \'var(--bg-white)\'');
    c = c.replace(/background:\s*['"]#fafafa['"]/gi, 'background: \'var(--bg-lavender)\'');
    c = c.replace(/backgroundColor:\s*['"]#fafafa['"]/gi, 'backgroundColor: \'var(--bg-lavender)\'');
    c = c.replace(/background:\s*['"]#f0f0f0['"]/gi, 'background: \'var(--bg-cream)\'');
    c = c.replace(/color:\s*['"]#666['"]/gi, 'color: \'var(--text-muted)\'');
    c = c.replace(/color:\s*['"]#888['"]/gi, 'color: \'var(--text-muted)\'');
    c = c.replace(/color:\s*['"]#222['"]/gi, 'color: \'var(--text-dark)\'');
    c = c.replace(/color:\s*['"]#000['"]/gi, 'color: \'var(--text-dark)\'');
    c = c.replace(/border:\s*['"]1px solid #f0f0f0['"]/gi, 'border: \'1px solid var(--border-light)\'');
    c = c.replace(/border:\s*['"]1px solid #eee['"]/gi, 'border: \'1px solid var(--border-light)\'');
    c = c.replace(/borderBottom:\s*['"]1px solid #eee['"]/gi, 'borderBottom: \'1px solid var(--border-light)\'');
    c = c.replace(/color:\s*['"]#D4AF37['"]/gi, 'color: \'var(--accent-gold)\'');
    
    // Also catch Tailwind classes if they used them for background white:
    c = c.replace(/className="min-h-screen bg-white"/gi, 'className="min-h-screen" style={{ background: \'var(--bg-white)\' }}');
    
    if (c !== orig) {
      fs.writeFileSync(p, c);
      console.log('Updated ' + p);
    }
  });
});
