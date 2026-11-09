# Accessibility Statement

We want everyone, including people with disabilities, to be able to use and contribute to the **BIOME** multi-agent software engineering ecosystem. Accessibility reports and contributions are warmly welcomed.

## Scope and Goals

This statement covers the repository's documentation, shared agent skills, prompt architectures, and the official [BIOME documentation](https://github.com/asteria-core/biome).

Our goal for web documentation is the Web Content Accessibility Guidelines [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/).

Priorities include keyboard navigability, clear focus indicators, readable typography, high-contrast ratios, semantic heading hierarchies, descriptive link targets, text alternatives for diagrams and icons, and reduced-motion preferences. For documentation and generated reports, we mandate plain language and accessible formatting that does not rely on color or diagrams alone to convey meaning.

## Environments and Current Limits

BIOME delivers multi-agent engineering workflows, prompt definitions, and Markdown skill specifications. The interactive experience runs inside a coding assistant or host application (such as Antigravity, Claude Code, Cursor, Codex CLI, or GitHub Copilot). See the [harness guide](docs/harnesses.md) for environment details and verification limits.

Known operational limits include:
- Host applications manage their own chat, terminal, and user interfaces; BIOME cannot override native UI/UX barriers in third-party harnesses.
- Model-generated specifications and execution receipts should always be paired with structured Markdown tables and accessible text summaries. Human review remains essential.
- Automated test suites verify deterministic invariants, but do not replace user testing with screen readers or assistive technologies.

All documentation is stored as plain Markdown, allowing full access through text editors, terminals, and screen readers without requiring a rendered web browser.

## Report an Accessibility Barrier

If you encounter an accessibility barrier in BIOME:
1. Open an issue using the [Bug Report Template](https://github.com/asteria-core/biome/issues/new?template=bug_report.md).
2. Clearly identify the report with the `accessibility` label.
3. Describe the affected document, agent skill, or command.
4. Specify the assistive technology, terminal/browser, and operating system used.

Reports do not need to cite formal WCAG criteria or include a proposed patch—we appreciate any feedback that helps us remove barriers.

## Contributing Accessibility Improvements

Follow our [Contributing Guide](CONTRIBUTING.md). When proposing accessibility improvements, describe the barrier addressed and document any manual or automated checks performed (e.g., keyboard tab traversal, color contrast checks, or screen reader tests).
