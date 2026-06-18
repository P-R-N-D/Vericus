<h1 align="center">Vericus</h1>

<p align="center">
  <strong>RAG와 LangGraph, tool-based execution을 활용하는 evidence-driven workspace</strong><br>
  <strong>An evidence-driven workspace powered by RAG, LangGraph, and tool-based execution</strong>
</p>

<p align="center">
  GUI/CLI testing, vulnerability analysis, compliance auditing을 지원하는 방향입니다.<br>
  See the Korean and English documentation for details.
</p>

<p align="center">
  <a href="docs/README.ko.md"><strong>한국어</strong></a>
  &nbsp;·&nbsp;
  <a href="docs/README.en.md"><strong>English</strong></a>
</p>

---

## Initial runnable scaffold

Vericus now includes an initial local application scaffold:

- Frontend: Next.js, React, TypeScript, Tailwind CSS, axios, SweetAlert2, Playwright.
- Backend: Django, Django REST Framework, Django Admin, Django ORM, django-cors-headers.
- Local integration: the Next.js dev server rewrites `/api/*` to the Django backend at `http://127.0.0.1:8000/api/*`.
- Health endpoint: `GET /api/health/` returns the Django/DRF service status.
- Admin route: Django Admin is enabled at `/admin/`.

Docker, Nginx, K8s, Helm, production deployment manifests, custom domain models, custom migrations, and SQL schema work are not part of this initial scaffold.

## Local development

```bash
# Backend
python -m pip install -r backend/requirements.txt
python backend/manage.py check
python backend/manage.py runserver 127.0.0.1:8000

# Frontend
cd frontend
npm install
npm run build
npm run test:visual
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open `http://127.0.0.1:3000` to view the Vericus workspace shell and backend health status.

### Optional Django Admin setup

Django Admin is enabled at `/admin/`. To use it locally, run Django built-in migrations and create a local superuser:

```bash
python backend/manage.py migrate
python backend/manage.py createsuperuser
```

`backend/db.sqlite3` is a local development artifact and must not be committed. This scaffold does not add custom domain migrations.

---

## Language

| Language | README |
|---|---|
| 한국어 | [docs/README.ko.md](docs/README.ko.md) |
| English | [docs/README.en.md](docs/README.en.md) |

---

## License

Source code is licensed under the PolyForm Noncommercial License 1.0.0. See the repository license file for details.
