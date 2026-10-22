# Example topic lists

Copy-paste into `/code-review` or the agent chat. Use only what you need; order is preserved.

## Backend (NestJS-style)

- Project Structure & Setup
- NestJS Architecture
- API Design
- DTOs & Input Validation
- Database & Data Access
- Authentication & Authorization
- Security Measures
- Error Handling
- Performance Optimization
- Testing Coverage
- Code Quality & Standards
- Logging & Monitoring
- Configuration Management
- DevOps & Deployment
- Documentation

## Frontend (Angular-style)

- Project Structure and Setup
- Component Architecture
- Directives and Pipes
- Services and State Management
- Reactive Programming with RxJS
- Routing and Navigation
- Forms and Validation
- API Integration
- Error Handling
- UI/UX Considerations + Styling
- Performance Optimization
- Testing Coverage
- Code Quality and Standards
- Web Accessibility
- Documentation
- Git and Commit Practices
- Security Measures
- DevOps Considerations

## Mixed (backend primary + frontend summary)

List full backend topics, then add one line in chat:

> Also add a short **Frontend Review** summary (not every Angular topic).

## Generic (any stack)

- Architecture & module layout
- Security
- Data layer
- API / contract design
- Error handling
- Testing
- Code quality
- DevOps & deployment
- Documentation

## Kubernetes / platform

- Project Structure & Organization
- Application & Service Architecture
- Data Storage & Messaging
- Containerization (Docker)
- Kubernetes Configuration
- CI/CD
- Logging
- Monitoring & Alerting
- Performance & Load Testing
- Security
- Documentation
- Developer Experience (DX)
- Grafana Integration
- Networking

## Go (Golang)

- Project Structure & Setup
- API Design & Architecture
- Database
- Security Measures
- Concurrency & Goroutines
- Performance Optimization
- Testing Coverage
- Code Quality & Standards
- Logging & Observability
- Git & Commit Practices
- DevOps Considerations
- Documentation
- Reliability & Maintainability
- Production Readiness
- Package Dependency Audit

## AI RAG / LLM application (Python, FastAPI, LangGraph, vector DB)

- Project Structure and Setup
- Code Quality and Maintainability
- Architecture and Design Patterns
- Error Handling and Resilience
- Security and Input Validation
- Database Design and Data Access
- GenAI and LLM Integration
- Testing Strategy and Verification
- Containerization and Deployment
- Frontend Integration and Streaming

Typical checks for these topics: RAG pipeline (ingestion, chunking, embeddings, vector store, similarity thresholds), Text-to-SQL safety (AST validation, read-only enforcement, row limits, statement timeouts), prompt injection and context flooding, agent/graph routing used consistently by sync and streaming paths, checkpoint/state persistence (no `pickle`, bounded memory), path traversal on upload/delete endpoints, blocking I/O inside async handlers, mocked vs real-model tests, and local model (Ollama) bootstrap in Docker.
