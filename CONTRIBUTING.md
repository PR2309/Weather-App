# Contributing to Weather App

Thank you for your interest in contributing to the Weather App! We welcome contributions from everyone. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to Contribute

- **🐛 Bug Reports**: Found a bug? [Open an issue](https://github.com/your-username/Weather-App/issues) with detailed steps to reproduce it.
- **✨ Feature Requests**: Have an idea for a new feature? [Create an issue](https://github.com/your-username/Weather-App/issues) describing your proposal.
- **💻 Code Contributions**: Help improve the codebase by submitting pull requests.
- **📖 Documentation**: Improve documentation, add examples, or fix typos.
- **🎨 Design**: Suggest UI/UX improvements or create new weather icons.

## Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/Weather-App.git
   cd Weather-App
   ```
3. **Install dependencies** (if using the development server):
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Add your OpenWeather API key to .env
   ```
5. **Start the development server**:
   ```bash
   npm start
   # or
   node server.js
   ```

## Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   - Open the app in your browser
   - Test different weather conditions
   - Verify responsive design on mobile devices
   - Check console for any errors

4. **Run linting** (if available):
   ```bash
   npm run lint
   ```

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub

## Coding Standards

### JavaScript
- Use modern ES6+ syntax
- Follow the existing code style
- Add comments for complex logic
- Use meaningful variable and function names
- Handle errors appropriately

### CSS
- Use consistent naming conventions
- Follow BEM methodology where applicable
- Ensure responsive design
- Optimize for performance

### HTML
- Use semantic HTML elements
- Ensure accessibility (alt text, ARIA labels)
- Keep markup clean and organized

### Commit Messages

Follow conventional commit format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
- `feat: add wind speed unit conversion`
- `fix: correct timezone calculation for local time`
- `docs: update API setup instructions`

## Pull Request Guidelines

- **Title**: Use a clear, descriptive title
- **Description**: Explain what changes you made and why
- **Screenshots**: Include screenshots for UI changes
- **Testing**: Describe how you tested your changes
- **Breaking Changes**: Mention any breaking changes

## Reporting Issues

When reporting bugs, please include:
- **Steps to reproduce** the issue
- **Expected behavior**
- **Actual behavior**
- **Browser and version**
- **Screenshots** if applicable
- **Console errors** if any

## Feature Requests

For feature requests, please include:
- **Use case**: What problem does this solve?
- **Proposed solution**: How should it work?
- **Alternatives**: Have you considered other approaches?

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

## Questions?

If you have questions about contributing, feel free to:
- Check existing [issues](https://github.com/your-username/Weather-App/issues) and [discussions](https://github.com/your-username/Weather-App/discussions)
- Start a new discussion
- Contact the maintainers

Thank you for contributing to Weather App! 🌦️