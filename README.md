🛡️ DVWA Attack Explorer

A simple, visual website that helps beginners understand common web application security vulnerabilities — how they work, how attackers exploit them, and how to defend against them.

Built using concepts from DVWA (Damn Vulnerable Web Application), a well-known training tool for cybersecurity learners.


⚠️ For learning only. This project explains security concepts — it does not attack real websites. Only practice these techniques in safe environments like DVWA, local labs, or CTF platforms.




What is this?

If you're learning cybersecurity, terms like "SQL Injection" or "XSS" can feel confusing at first. This project breaks them down into:


📊 Simple diagrams showing how each attack works
📝 Plain-language explanations
🛡️ Defense tips to prevent each vulnerability
📚 A glossary of common security terms
✅ Progress tracking as you learn each topic


It's a static website — just open it in a browser, no installation needed.


Vulnerabilities covered

CategoryTopicsInjectionSQL Injection, Blind SQL InjectionScriptingXSS, Stored XSS, DOM-based XSSRequest ForgeryCSRFFile HandlingFile Inclusion, File Upload flawsSession & AuthWeak Session Management, Insecure CAPTCHA


How to run it locally

1. Clone the project

bashgit clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY

2. Open it

Just open index.html in any web browser. That's it — no setup, no dependencies.


Project structure

DVWA-Attack-Explorer
├── public/              → images, diagrams, icons
├── scratch/             → dev testing scripts
├── index.html           → the whole website
└── README.md


Built with


HTML5, CSS3, and vanilla JavaScript (no frameworks)
SVG icons for a clean, fast interface
GitHub Actions for automatic deployment
GitHub Pages for hosting



Deployment

The site deploys automatically whenever changes are pushed to the main branch, using the workflow in .github/workflows/deploy.yml. No manual steps needed.


For developers: testing scripts

Two helper scripts live in /scratch for checking the code before deployment:

bashnode scratch/validate_syntax.js   # checks the JavaScript for errors
node scratch/test_render.js       # simulates the site rendering correctly


Who is this for?


Students learning cybersecurity
Beginners exploring ethical hacking
Web developers who want to understand vulnerabilities
Anyone preparing for bug bounty or CTF challenges



Disclaimer

This project is for educational purposes only. Only test these techniques on systems you own or are explicitly authorized to test (like DVWA, local labs, or CTF platforms). The author is not responsible for any misuse.


Want to contribute?


Fork the repo
Create a branch: git checkout -b feature-name
Make your changes and commit: git commit -m "Added feature"
Push: git push origin feature-name
Open a Pull Request



License

MIT License — free to use, modify, and share for educational purposes.


Author

Sri Meghana
B.Tech, Computer Science (Cyber Security)

Interested in ethical hacking, web app security, cloud security, and secure software development.


⭐ If this helped you learn something, consider starring the repo and sharing it with others!
