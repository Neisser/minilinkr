# MiniLinkr - URL Shortener Rust Monorepo

Welcome to MiniLinkr, a URL shortening project monorepo implemented in Rust. This repository hosts a comprehensive URL shortening service that allows you to generate and manage short links for long URLs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Packages](#packages)
- [Contributing](#contributing)
- [License](#license)

## Introduction

MiniLinkr is designed to simplify the process of creating short links for long URLs. This monorepo utilizes Rust to provide a performant and reliable URL shortening service. With the power of Rust's concurrency and memory safety, MiniLinkr aims to offer a robust platform for generating and managing short links.

## Features

- Generate short URLs from long ones
- Customizable short link aliases
- Analytics to track link usage (upcoming feature)
- User authentication and management (upcoming feature)
- API for programmatic link creation (upcoming feature)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Rust (latest stable version)
- Cargo (Rust's package manager)
- Git

### Installation

1. Clone the MiniLinkr repository:

```bash
git clone https://github.com/your-username/minilinkr.git
cd minilinkr
```

2. Build the project:

```bash
cargo build
```

3. Run the service:

```bash
cargo run
```

## Packages

This monorepo is organized around Rust crates that collectively form the MiniLinkr URL shortening service.

- minilinkr-core: Core functionality for URL shortening.
- minilinkr-api: RESTful API for interacting with the service.
- minilinkr-cli: Command-line tool for creating short links.
- minilinkr-web: Frontend web application for user interaction.
- Each crate has its own README and documentation for specific usage and development instructions.

## Contributing

We welcome contributions to MiniLinkr! If you'd like to contribute, please follow our Contribution Guidelines.

## License

This project is licensed under the MIT License.