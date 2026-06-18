# Vericus Backend

Initial backend scaffold for Vericus uses Django, Django REST Framework, Django Admin, Django ORM, and django-cors-headers.

## Local development

```bash
python -m pip install -r backend/requirements.txt
python backend/manage.py check
python backend/manage.py runserver 127.0.0.1:8000
```

## Optional local admin setup

Django Admin is available at `http://127.0.0.1:8000/admin/`. To sign in locally, initialize Django built-in auth/admin tables and create a local superuser:

```bash
python backend/manage.py migrate
python backend/manage.py createsuperuser
python backend/manage.py runserver 127.0.0.1:8000
```

- `backend/db.sqlite3` is a local development artifact and must not be committed.
- This uses Django built-in migrations only; no custom domain migrations are added in this scaffold.

## Endpoints

- Health API: `GET http://127.0.0.1:8000/api/health/`
- Django Admin: `http://127.0.0.1:8000/admin/`

This scaffold intentionally does not add custom domain models, custom migrations, SQL, production deployment settings, Docker, Nginx, K8s, or Helm.
