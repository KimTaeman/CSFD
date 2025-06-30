# Contribution Guidelines

## Branching Strategy

- `main` → Stable production code
- `dev` → Active development branch
- `feature/xxx` → New features (e.g., `feature/auth`, `feature/api`)

## Contribution Workflow

1. **Clone the repository**: `git clone git@github.com:KimTaeman/CSFD.git`
2. **Create a feature branch**: `git checkout -b feature/xxx`
3. **Enable Corepack for package manager consistency**:
   ```sh
   corepack enable
   corepack use pnpm@latest
   ```
4. **Commit your changes**:

   ```sh
   git add .
   git commit -m "feat: add new feature"
   ```

   _Note_: Always run `git pull origin dev --rebase` before pushing to keep your branch up to date.

5. **Push to GitHub**: `git push origin feature/xxx`
6**Create a Pull Request** to `dev` branch and request a review

## Code Guidelines

- Follow best practices for **React & Express.js**
- Keep commits **small and meaningful**
- Write **clear commit messages**.
- If possible, please use [Conventional Commits](https://www.conventionalcommits.org/).
- Run `pnpm run format` & `npm run lint` before submitting PRs

---

Need help? Contact us via Discord or GitHub Issues!
