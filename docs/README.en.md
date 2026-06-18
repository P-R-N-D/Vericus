# Vericus

Vericus is an evidence-driven workspace for GUI/CLI testing, vulnerability analysis, compliance validation, and audit evidence reporting.

## Current initial runnable scaffold

- Frontend: Next.js, React, TypeScript, Tailwind CSS, axios, SweetAlert2, Playwright.
- Backend: Django, Django REST Framework, Django Admin, Django ORM, django-cors-headers.
- Local integration: the Next.js dev server rewrites `/api/*` to the Django backend at `http://127.0.0.1:8000/api/*`.
- Health endpoint: `GET /api/health/`.
- Django Admin: `/admin/`.

This initial scaffold does not include Docker, Nginx, K8s, Helm, production deployment manifests, custom domain models, custom migrations, or SQL schema work.

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

Open `http://127.0.0.1:3000` to view the Vericus workspace shell and `/api/health/` response. SweetAlert2 alerts are used when backend health checks fail.

## Direction

The Next.js frontend is reserved for the product-style case workspace, evidence timeline, report review, visual artifact viewer, and reviewer/admin UI. Django Admin is reserved for internal operator/admin workflows.
