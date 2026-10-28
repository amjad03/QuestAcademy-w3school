# Sign in with Kinetix: contract for the Kinetix team

Quest Academy accepts a short-lived JWT signed by Kinetix and signs the user in
(creating their Quest Academy account and school membership the first time).

## Flow

1. The user clicks **Quest Academy** in Kinetix (or **Sign in with Kinetix** on
   `https://<quest-academy>/auth`, which opens `NEXT_PUBLIC_KINETIX_LOGIN_URL?redirect_uri=<quest-academy>/api/auth/kinetix`).
2. Kinetix (NestJS API) authenticates the user with its own session and issues a JWT as below.
3. Kinetix redirects the browser to

   ```
   GET https://<quest-academy>/api/auth/kinetix?token=<JWT>&next=/teach
   ```

   or auto-submits a form `POST /api/auth/kinetix` with fields `token` and optional `next`
   (preferred: keeps the token out of server logs and browser history).
4. Quest Academy verifies the token, maps the user, and finishes sign-in at `/auth/kinetix`.
   `next` must be a path on Quest Academy (e.g. `/teach`, `/school`, `/learn`); default by role.
   On failure the user lands on `/auth?kinetix_error=<code>`.

## Token

Header: `alg` = `HS256` (shared secret) **or** `RS256` / `ES256` (key from your JWKS, `kid` required).

| Claim | Required | Meaning |
|---|---|---|
| `iss` | if `KINETIX_ISSUER` is set | must equal it, e.g. `https://erp.kinetix.example` |
| `aud` | yes | `quest-academy` (or the value of `KINETIX_AUDIENCE`) |
| `sub` | yes | stable Kinetix user id (never reused) |
| `email` | yes | the user's email; links to an existing Quest Academy account with the same email |
| `name` | no | display name |
| `iat`, `exp` | yes | issued ≤ 5 min ago; lifetime ≤ 10 min (use 2 min) |
| `jti` | yes | unique token id; each token works **once** |
| `role` | no | `student` · `teacher` · `principal` · `parent` |
| `org_id` | no | Kinetix school/organisation id → Quest Academy school (`schools.kinetix_org_id`) |
| `org_name` | no | school name, used when the school is created on first sign-in |
| `class_name`, `section` | students/teachers | e.g. `Class 10`, `A` (class is created if missing) |
| `grade`, `board` | no | e.g. `10`, `cbse` (`cbse`, `icse`, `kseeb`, `pue`) so chapters line up |

Example payload:

```json
{ "iss": "https://erp.kinetix.example", "aud": "quest-academy", "sub": "usr_8f2c", "email": "asha.rao@school.edu",
  "name": "Asha Rao", "role": "student", "org_id": "sch_104", "org_name": "Sunrise Public School",
  "class_name": "Class 10", "section": "A", "grade": "10", "board": "cbse",
  "iat": 1798000000, "exp": 1798000120, "jti": "5b0a8c6e-3f0e-4c64-a0f5-2f1c9b9d2e11" }
```

NestJS (HS256) sketch:

```ts
const token = this.jwt.sign(
  { sub: u.id, email: u.email, name: u.name, role, org_id: school.id, org_name: school.name, class_name, section, grade, board, jti: randomUUID() },
  { secret: process.env.QUEST_ACADEMY_SSO_SECRET, algorithm: "HS256", audience: "quest-academy", issuer: "https://erp.kinetix.example", expiresIn: "2m" },
);
res.redirect(`${QA_URL}/api/auth/kinetix?token=${token}&next=/learn`);
```

## Mapping rules

- Identity: `(kinetix, sub)` is stored once; later sign-ins use it even if the email changes (the Quest Academy email is updated to match).
- First sign-in with an email already registered on Quest Academy links that account.
- `principal` → principal of the school. `teacher`/`student` with `class_name` → member of that class
  (a student moves class if Kinetix says so). `parent` → no class; parents are linked to children
  through the guardian email the school imported.
- Schools are created automatically from `org_id`/`org_name` unless `KINETIX_AUTO_CREATE_SCHOOLS=false`
  (then link an existing school: `update schools set kinetix_org_id = 'sch_104' where id = '…'`).
- Roles are only ever **added** by SSO; removing a teacher is done in Quest Academy.

## Quest Academy configuration

| Env var | |
|---|---|
| `KINETIX_JWT_SECRET` | HS256 shared secret (≥ 32 random bytes) |
| `KINETIX_JWKS_URL` | or: JWKS URL for RS256/ES256 |
| `KINETIX_ISSUER` | optional, recommended |
| `KINETIX_AUDIENCE` | optional, default `quest-academy` |
| `NEXT_PUBLIC_KINETIX_LOGIN_URL` | optional: shows the button on `/auth` |
| `KINETIX_AUTO_CREATE_SCHOOLS` | `false` to require pre-linked schools |

Requires `SUPABASE_SERVICE_ROLE_KEY`. With neither secret nor JWKS set, the route is disabled
(`/auth?kinetix_error=disabled`) and the button is hidden. Error codes: `disabled`, `missing_token`,
`invalid_token` (signature, audience, issuer, expiry, missing claims), `token_used`, `server_error`.
