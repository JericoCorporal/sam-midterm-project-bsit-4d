const CERTIFICATIONS = [
      {
        id: 'comptia-a',
        name: 'CompTIA A+',
        organization: 'Computing Technology Industry Association (CompTIA)',
        examCode: 'Core 1 (220-1201) & Core 2 (220-1202)',
        format: '2 Exams • Performance & MCQ',
        category: 'Foundational',
        icon: 'ph-desktop-tower',
        description:
          'The industry-standard entry-level certification for IT operational roles and junior system administration. It validates hands-on skills across enterprise hardware, operating system installation, software troubleshooting, basic networking, and endpoint security.',
        skills: [
          'Server & Workstation Hardware',
          'Windows, Linux & macOS OS',
          'System Troubleshooting',
          'Networking Fundamentals',
          'Virtualization Basics',
          'Operational Procedures'
        ],
        officialLink: 'https://www.comptia.org/en-us/certifications/a/'
      },
      {
        id: 'comptia-net',
        name: 'CompTIA Network+',
        organization: 'Computing Technology Industry Association (CompTIA)',
        examCode: 'Exam N10-009',
        format: '90 Mins • Max 90 Questions',
        category: 'Networking',
        icon: 'ph-share-network',
        description:
          'Validates the essential knowledge required to design, configure, manage, and troubleshoot wired and wireless enterprise networks—a core responsibility of every System Administrator managing connected servers.',
        skills: [
          'TCP/IP & OSI Model',
          'IPv4 & IPv6 Subnetting',
          'Routing & VLAN Switching',
          'DNS, DHCP & VPN Services',
          'Network Security & Firewalls',
          'Network Troubleshooting'
        ],
        officialLink: 'https://www.comptia.org/en-us/certifications/network/'
      },
      {
        id: 'redhat-rhcsa',
        name: 'Red Hat Certified System Administrator (RHCSA)',
        organization: 'Red Hat, Inc.',
        examCode: 'Exam EX200 (Hands-On Lab)',
        format: '3 Hours • 100% Live Practical Lab',
        category: 'Linux',
        icon: 'ph-linux-logo',
        description:
          'A premier, 100% performance-based practical exam where candidates execute real administrative tasks on Red Hat Enterprise Linux (RHEL) servers, including storage management, SELinux security, and shell automation.',
        skills: [
          'RHEL Command Line & Bash',
          'LVM Storage & File Systems',
          'Systemd Service Management',
          'Users, Groups & Permissions',
          'SELinux & Firewalld Hardening',
          'Rootless Containers (Podman)'
        ],
        officialLink: 'https://www.redhat.com/en/services/certification/rhcsa'
      },
      {
        id: 'comptia-sec',
        name: 'CompTIA Security+',
        organization: 'Computing Technology Industry Association (CompTIA)',
        examCode: 'Exam SY0-701',
        format: '90 Mins • Performance & MCQ',
        category: 'Security',
        icon: 'ph-shield-check',
        description:
          'A globally recognized cybersecurity certification that validates baseline defensive skills needed by System Administrators to harden servers, manage identity and access controls, and respond to security incidents.',
        skills: [
          'Server & OS Hardening',
          'Identity & Access Management',
          'Cryptography & PKI / TLS',
          'Vulnerability Management',
          'SIEM Log Monitoring',
          'Incident Response & Backups'
        ],
        officialLink: 'https://www.comptia.org/en-us/certifications/security/'
      },
      {
        id: 'lpi-lpic1',
        name: 'LPIC-1: Certified Linux Administrator',
        organization: 'Linux Professional Institute (LPI)',
        examCode: 'Exams 101-500 & 102-500',
        format: '2 Exams • 90 Mins Each',
        category: 'Linux',
        icon: 'ph-terminal-window',
        description:
          'The world’s largest vendor-neutral Linux certification. LPIC-1 validates command-line administration, package management, file systems, and networking across all major Linux distributions (Ubuntu, Debian, RHEL, Rocky Linux).',
        skills: [
          'GNU & Unix Commands',
          'APT & RPM Package Management',
          'Linux Boot & System Architecture',
          'Bash Scripting & Cron Jobs',
          'Linux Networking & SSH',
          'Access Control & Disk Quotas'
        ],
        officialLink: 'https://www.lpi.org/our-certifications/lpic-1-overview/'
      },
      {
        id: 'ms-az800',
        name: 'Microsoft Certified: Windows Server Administrator Associate',
        organization: 'Microsoft Corporation',
        examCode: 'Exam AZ-802',
        format: 'Role-based • On-premises & Hybrid',
        category: 'Microsoft',
        icon: 'ph-windows-logo',
        description:
          'Validates expertise in configuring and managing Windows Server workloads across on-premises data centers and Microsoft Azure hybrid environments, including Active Directory, Group Policy, and Hyper-V.',
        skills: [
          'Active Directory (AD DS)',
          'Group Policy Objects (GPO)',
          'Hyper-V Virtualization',
          'Failover Clustering & Storage',
          'Windows Server Hardening',
          'Hybrid Cloud (Azure Arc)'
        ],
        officialLink: 'https://learn.microsoft.com/en-us/credentials/certifications/windows-server-hybrid-administrator/'
      }
    ];

    // --------------------------------------------------------------------------
    // 2. SKILLS & QUALIFICATIONS DATA (6 Core Competencies + Importance)
    // --------------------------------------------------------------------------
    const SKILLS = [
      {
        name: '1. Operating System Administration (Linux & Windows Server)',
        icon: 'ph-hard-drives',
        category: 'Core Foundation',
        importance:
          'Operating systems host every enterprise application and database. A System Administrator must configure users, file permissions, storage volumes (LVM/RAID), system services, and Active Directory Group Policies so servers remain stable and accessible 24/7.',
        keyAreas: ['Red Hat / Ubuntu Linux', 'Windows Server', 'Active Directory', 'File Permissions', 'LVM Storage']
      },
      {
        name: '2. Enterprise Networking & Infrastructure Services',
        icon: 'ph-globe-hemisphere-west',
        category: 'Connectivity',
        importance:
          'Servers cannot function without reliable network connectivity. Understanding TCP/IP, IPv4/IPv6 subnetting, DNS, DHCP, VLAN segmentation, and routing allows administrators to maintain fast, secure communication across local and cloud networks.',
        keyAreas: ['TCP/IP & Subnetting', 'DNS & DHCP', 'VLANs & Routing', 'VPN & SSH', 'Packet Diagnostics']
      },
      {
        name: '3. Systematic Troubleshooting & Root-Cause Diagnostics',
        icon: 'ph-magnifying-glass',
        category: 'Reliability',
        importance:
          'Hardware failures, resource bottlenecks, and misconfigurations can halt business operations. Structured troubleshooting—using system logs, performance monitors, and network utilities—minimizes downtime and prevents recurring outages.',
        keyAreas: ['Log Analysis (journalctl / Event Viewer)', 'CPU, RAM & Disk I/O', 'OSI Layer Isolation', 'Root-Cause Analysis']
      },
      {
        name: '4. Cybersecurity Fundamentals & System Hardening',
        icon: 'ph-lock-key',
        category: 'Security',
        importance:
          'System Administrators are the primary defenders of organizational servers and data. Enforcing least-privilege access, configuring host firewalls, applying security patches, and maintaining verified 3-2-1 backups protect systems against ransomware and unauthorized access.',
        keyAreas: ['Firewalld / UFW', 'Least-Privilege IAM', 'Patch Management', 'SELinux', '3-2-1 Disaster Recovery']
      },
      {
        name: '5. Scripting, Automation & Configuration Management',
        icon: 'ph-code',
        category: 'Efficiency',
        importance:
          'Performing repetitive administrative tasks manually across dozens of servers is slow and error-prone. Writing Bash, PowerShell, or Python scripts—combined with scheduled Cron jobs—automates backups, user provisioning, and system health checks.',
        keyAreas: ['Bash Scripting', 'PowerShell', 'Cron & Systemd Timers', 'Automated Backups', 'Ansible Basics']
      },
      {
        name: '6. Virtualization, Containers & Hybrid Cloud Readiness',
        icon: 'ph-cloud',
        category: 'Scalability',
        importance:
          'Modern IT infrastructure relies on virtual machines and containers rather than single-purpose physical servers. Mastering hypervisors (Hyper-V, Proxmox, VMware) and containers (Docker, Podman) enables rapid server deployment, snapshots, and resource scalability.',
        keyAreas: ['Hyper-V & Proxmox VE', 'Virtual Machines', 'Docker & Podman', 'Live Snapshots', 'Hybrid Cloud Ops']
      }
    ];

    // --------------------------------------------------------------------------
    // 3. LEARNING RESOURCES DATA (6 Verified Platforms with Working Links)
    // --------------------------------------------------------------------------
    const RESOURCES = [
      {
        name: 'Red Hat Product Documentation & Training',
        type: 'Official Documentation',
        icon: 'ph-book-bookmark',
        description:
          'Comprehensive official enterprise Linux manuals covering Red Hat Enterprise Linux (RHEL) installation, storage management, SELinux security, and hands-on RHCSA preparation.',
        url: 'https://docs.redhat.com/'
      },
      {
        name: 'Microsoft Learn: Administrator Career Path',
        type: 'Interactive Platform',
        icon: 'ph-graduation-cap',
        description:
          'Free, self-paced learning paths and interactive sandbox labs from Microsoft covering Windows Server administration (AZ-802), Active Directory, and PowerShell.',
        url: 'https://learn.microsoft.com/en-us/training/'
      },
      {
        name: 'CompTIA Official Training & Exam Objectives',
        type: 'Certification Prep',
        icon: 'ph-seal-check',
        description:
          'The official source for CompTIA A+, Network+, and Security+ exam blueprints, domain weightings, study guides, and CertMaster practice labs.',
        url: 'https://www.comptia.org/en-us/training/'
      },
      {
        name: 'Linux Professional Institute (LPI) Learning Materials',
        type: 'Open Study Guides',
        icon: 'ph-terminal',
        description:
          'Free, open-access lessons and command-line exercises mapped directly to every exam objective in Linux Essentials and LPIC-1.',
        url: 'https://learning.lpi.org/'
      },
      {
        name: 'Professor Messer Free IT Certification Courseware',
        type: 'Video Courseware',
        icon: 'ph-video',
        description:
          'Complete, free video training courses and study groups structured directly around the official CompTIA A+, Network+, and Security+ exam objectives.',
        url: 'https://www.professormesser.com/'
      },
      {
        name: 'Cisco Networking Academy (Skills for All)',
        type: 'Networking & Labs',
        icon: 'ph-git-branch',
        description:
          'Free interactive courses and Cisco Packet Tracer labs covering enterprise networking, IPv4/IPv6 subnetting, Linux fundamentals, and cybersecurity.',
        url: 'https://www.netacad.com/'
      }
    ];

    // --------------------------------------------------------------------------
    // 4. RENDER SECTIONS CLEANLY
    // --------------------------------------------------------------------------
    /* Standalone portfolio interactions. No backend, authentication or analytics. */
'use strict';
const $ = id => document.getElementById(id);
const $$ = q => [...document.querySelectorAll(q)];
const escaped = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const certInitials = {'comptia-a':'A+','comptia-net':'N+','redhat-rhcsa':'RH','comptia-sec':'S+','lpi-lpic1':'LPI','ms-az800':'MS'};
const skillIcons = ['i-terminal','i-globe','i-search','i-award','i-layers','i-layers'];
const categories = ['All','Foundational','Networking','Linux','Security','Microsoft'];
let certQuery = '', certCategory = 'All';
const htmlIcon = id => `<svg class="ic" aria-hidden="true"><use href="#${id}"></use></svg>`;
const htmlTags = list => list.map(label=>`<span class="tag">${escaped(label)}</span>`).join('');
const shortSummary = {
 'comptia-a':'A practical starting point for IT support: hardware, operating systems, troubleshooting, networking, and basic security.',
 'comptia-net':'Build the networking knowledge needed to configure, maintain, and troubleshoot connected IT systems.',
 'redhat-rhcsa':'Show practical Red Hat Enterprise Linux administration skills through a hands-on performance exam.',
 'comptia-sec':'Establish essential security skills for protecting systems, managing access, and responding to threats.',
 'lpi-lpic1':'Develop distribution-independent Linux command-line, maintenance, and networking proficiency.',
 'ms-az800':'Learn modern Windows Server administration across on-premises and hybrid environments.'
};
function renderFilters(){
  $('cert-filters').innerHTML = categories.map(c=>`<button class="filter-chip ${certCategory===c?'active':''}" type="button" data-filter="${escaped(c)}" aria-pressed="${certCategory===c}">${c==='Foundational'?'Foundation':escaped(c)}</button>`).join('');
}
function renderCertifications(){
  const matches=CERTIFICATIONS.filter(c=>{
    const categoryOk=certCategory==='All'||c.category===certCategory;
    const match=[c.name,c.organization,c.description,c.category,...c.skills].join(' ').toLocaleLowerCase().includes(certQuery.toLocaleLowerCase());
    return categoryOk&&match;
  });
  $('cert-count').textContent=`${matches.length} ${matches.length===1?'certification':'certifications'} found`;
  $('certifications-grid').innerHTML= matches.length?matches.map((c)=>`<article class="cert-card glass-shell">
   <div class="cert-top"><span class="glass-orb cert-logo" aria-hidden="true">${escaped(certInitials[c.id]||c.name.slice(0,2))}</span><span class="cert-category">${escaped(c.category)}</span></div>
   <p class="cert-issuer">${escaped(c.organization)}</p><h3>${escaped(c.name)}</h3>
   <p class="cert-summary">${escaped(shortSummary[c.id]||c.description)}</p>
   <h4>Knowledge &amp; skills</h4><div class="tag-list">${htmlTags(c.skills)}</div>
   <div class="cert-actions"><button class="card-action" type="button" data-details="${c.id}">${htmlIcon('i-book')} View details</button><a class="card-action is-primary" href="${escaped(c.officialLink)}" target="_blank" rel="noopener noreferrer">Official website ${htmlIcon('i-external')}</a></div>
  </article>`).join(''):`<div class="empty-state glass-shell"><h3>No matching certifications</h3><p>Try another keyword or clear the filters.</p><button class="card-action" type="button" id="clear-cert-filters">Show all certifications</button></div>`;
  renderFilters();
}
function renderSkills(){
 $('skills-grid').innerHTML=SKILLS.map((s,i)=>`<article class="skill-card glass-shell"><div class="skill-top"><span class="skill-number">0${i+1} / ${escaped(s.category)}</span><span class="skill-mark glass-orb" aria-hidden="true">${htmlIcon(skillIcons[i]||'i-layers')}</span></div><h3>${escaped(s.name.replace(/^\d+\.\s*/,''))}</h3><p>${escaped(s.importance)}</p><div class="tag-list">${htmlTags(s.keyAreas)}</div></article>`).join('');
}
function renderResources(){
 $('resources-grid').innerHTML=RESOURCES.map((r,i)=>`<article class="resource-card glass-shell"><div class="resource-top"><span class="resource-type">${escaped(r.type)}</span><span class="glass-orb skill-mark" aria-hidden="true">${htmlIcon(i%2===0?'i-book':'i-terminal')}</span></div><h3>${escaped(r.name)}</h3><p>${escaped(r.description)}</p><a class="resource-link" href="${escaped(r.url)}" target="_blank" rel="noopener noreferrer">Explore learning resource ${htmlIcon('i-external')}</a></article>`).join('');
}
function openDetails(id){
 const c=CERTIFICATIONS.find(item=>item.id===id);if(!c)return;
 $('dialog-mark').textContent=certInitials[id]||c.name.slice(0,2);
 $('dialog-issuer').textContent=c.organization;
 $('dialog-title').textContent=c.name;
 $('dialog-description').textContent=c.description;
 $('dialog-exam').textContent=c.examCode;
 $('dialog-format').textContent=c.format;
 $('dialog-skills').innerHTML=htmlTags(c.skills);
 $('dialog-link').href=c.officialLink;
 $('details-dialog').showModal();
}
function initAppearance(){
 const key='sam-portfolio-appearance';
 const current=document.documentElement.dataset.theme==='light'?'light':'dark';
 function updateTheme(mode){
   document.documentElement.dataset.theme=mode;
   $('theme-text').textContent=mode==='dark'?'Light mode':'Dark mode';
   const target=mode==='dark'?'light':'dark';
   $('theme-toggle').setAttribute('aria-label',`Switch to ${target} mode`);
   $('theme-toggle').setAttribute('title',`Switch to ${target} mode`);
   $('theme-icon').querySelector('use').setAttribute('href',mode==='dark'?'#i-sun':'#i-moon');
   document.querySelector('meta[name="theme-color"]').content=mode==='dark'?'#080d15':'#e9f0f6';
 }
 updateTheme(current);
 $('theme-toggle').addEventListener('click',()=>{
   const next=document.documentElement.dataset.theme==='dark'?'light':'dark';updateTheme(next);
   try{localStorage.setItem(key,next)}catch(e){}
 });
}
function initNavigation(){
 const anchors=$$('a[href^="#"]');
 const navLinks=$$('[data-nav]');
 const tabletButton=$('tablet-menu-button'),menu=$('tablet-menu');
 function setActive(id){
    navLinks.forEach(a=>{const active=a.dataset.nav===id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 }
 anchors.forEach(a=>a.addEventListener('click',()=>{
    const id=a.getAttribute('href').slice(1);if(id)setActive(id==='main'?'home':id);
    menu.hidden=true;tabletButton.setAttribute('aria-expanded','false');
 }));
 tabletButton.addEventListener('click',()=>{menu.hidden=!menu.hidden;tabletButton.setAttribute('aria-expanded',String(!menu.hidden))});
 document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!tabletButton.contains(e.target)){menu.hidden=true;tabletButton.setAttribute('aria-expanded','false')}});
 if('IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>{
   const visible=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
   if(visible)setActive(visible.target.id);
  },{rootMargin:'-18% 0px -58% 0px',threshold:[0,.1,.3,.6]});
  ['home','certifications','skills','resources','developer'].forEach(id=>observer.observe($(id)));
 }
 if(location.hash && $(location.hash.slice(1)))setActive(location.hash.slice(1));
}
function initDialogs(){
 $('certifications-grid').addEventListener('click',e=>{
   const btn=e.target.closest('[data-details]');if(btn)openDetails(btn.dataset.details);
   if(e.target.closest('#clear-cert-filters')){certCategory='All';certQuery='';$('cert-search').value='';renderCertifications()}
 });
 $('close-dialog').addEventListener('click',()=>$('details-dialog').close());
 for(const d of [$('details-dialog')]){
   d.addEventListener('click',e=>{if(e.target===d)d.close()});
 }
}
document.addEventListener('DOMContentLoaded',()=>{
 // Update issuer information as providers change exam paths.
 // Sources documented in README.md.
 const microsoft=CERTIFICATIONS.find(c=>c.id==='ms-az800');
 if(microsoft){microsoft.examCode='Exam AZ-802';microsoft.officialLink='https://learn.microsoft.com/en-us/credentials/certifications/windows-server-hybrid-administrator/';}
 renderCertifications();renderSkills();renderResources();
 $('cert-search').addEventListener('input',e=>{certQuery=e.target.value.trim();renderCertifications()});
 $('cert-filters').addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(btn){certCategory=btn.dataset.filter;renderCertifications()}});
 initAppearance();initNavigation();initDialogs();
});
