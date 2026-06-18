# Vericus

Vericus는 GUI/CLI 테스트, 취약점 분석, 컴플라이언스 검증, 감사 증거 보고를 위한 evidence-driven workspace를 지향합니다.

## 현재 초기 실행 scaffold

- Frontend: Next.js, React, TypeScript, Tailwind CSS, axios, SweetAlert2, Playwright.
- Backend: Django, Django REST Framework, Django Admin, Django ORM, django-cors-headers.
- Local 연동: Next.js 개발 서버가 `/api/*` 요청을 Django backend `http://127.0.0.1:8000/api/*`로 rewrite합니다.
- Health endpoint: `GET /api/health/`.
- Django Admin: `/admin/`.

이번 초기 scaffold에는 Docker, Nginx, K8s, Helm, production deployment manifest, custom domain model, custom migration, SQL schema 작업이 포함되지 않습니다.

## 로컬 실행 순서

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

브라우저에서 `http://127.0.0.1:3000`을 열면 Vericus workspace shell과 `/api/health/` 응답이 표시됩니다. Backend 연결 실패 또는 재시도 실패 시 SweetAlert2 alert가 표시됩니다.

## 방향성

Next.js frontend는 case workspace, evidence timeline, report review, visual artifact viewer, reviewer/admin UI를 위한 제품형 화면으로 확장될 예정입니다. Django Admin은 내부 운영자/admin workflow 용도로 예약됩니다.
