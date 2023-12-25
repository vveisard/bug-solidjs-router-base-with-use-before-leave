Minimal reproduction repository for a @solidjs/router bug.

# Steps to reproduce:
1. install dependencies
2. Run "dev" package.json script
3. Navigate to https://localhost:3000/base
4. Click "to /bar" button
5. Observe resolved url to be /base/base/bar