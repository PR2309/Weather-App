# Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it privately to avoid exposing other users to risk.

### How to Report

1. **Email**: Send details to [security@yourdomain.com](mailto:security@yourdomain.com)
2. **GitHub Security Advisories**: Use [GitHub's private vulnerability reporting](https://github.com/your-username/Weather-App/security/advisories/new)

### What to Include

Please include the following information in your report:
- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact and severity
- Any suggested fixes or mitigations
- Your contact information for follow-up

### Response Timeline

- **Initial Response**: Within 48 hours of receiving your report
- **Vulnerability Assessment**: Within 7 days
- **Fix Development**: Within 30 days for critical issues
- **Public Disclosure**: After fix is deployed and tested

## Security Best Practices

### For Users
- Never commit API keys to version control
- Use environment variables for sensitive configuration
- Keep dependencies updated
- Use HTTPS in production

### For Contributors
- Review code for potential security issues
- Avoid hardcoding sensitive information
- Use secure coding practices
- Report security concerns promptly

## API Key Security

This application uses the OpenWeather API. To protect your API key:

1. **Never commit** `.env` files containing real API keys
2. **Use environment variables** in production
3. **Rotate API keys** regularly
4. **Monitor API usage** for unauthorized access

### Environment Setup
```bash
# Create .env file (not committed to git)
OPENWEATHER_API_KEY=your_actual_api_key_here

# In production, set environment variables:
export OPENWEATHER_API_KEY=your_actual_api_key_here
```

## Known Security Considerations

### API Rate Limiting
- OpenWeather API has rate limits (60 calls/minute, 1,000,000 calls/month for free tier)
- Implement client-side caching to reduce API calls
- Handle API errors gracefully

### Content Security Policy
The application includes basic security headers. For production deployment, consider implementing:
- Content Security Policy (CSP) headers
- HTTPS enforcement
- Secure cookie settings

### Data Privacy
- Weather data is fetched from OpenWeather API
- No user data is stored locally
- Location data is only used for weather queries
- All data transmission uses HTTPS

## Security Updates

Security updates will be:
- Documented in the [CHANGELOG.md](CHANGELOG.md)
- Tagged with security advisories on GitHub
- Released as patch versions following semantic versioning

## Contact

For security-related questions or concerns:
- **Email**: [security@yourdomain.com](mailto:security@yourdomain.com)
- **GitHub Issues**: Use for non-sensitive security discussions

Thank you for helping keep Weather App secure! 🔒