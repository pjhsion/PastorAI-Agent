// README.md
// Pastor AI Agent 프로젝트 설명서

# 📖 Pastor AI Agent

목회자를 위한 AI 에이전트 플랫폼입니다. 
- 설교안 작성 및 원어 검증
- 청소년부 설교문 생성
- 찬양단 콘티 자동 추천
- 주보 제작 자동화
- 요일별 워크플로우 자동 실행

이 프로젝트는 **Express + MongoDB (백엔드)**, **React/Next.js (프론트엔드)**, **OpenAI GPT API**를 활용합니다.

---

## 📂 프로젝트 구조
```
PastorAI-Agent/
├── backend/        # 백엔드 API (Express)
├── frontend/       # 프론트엔드 (Next.js)
├── .env            # 환경변수 (API 키, DB URI)
├── README.md       # 프로젝트 설명서
└── deploy-guide.md # 배포 가이드
```

---

## 🚀 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/pjhsion/PastorAI-Agent.git
cd PastorAI-Agent
```

### 2. 환경 변수 설정
루트 디렉토리에 `.env` 파일 생성:
```bash
OPENAI_API_KEY=sk-xxxxxxx
MONGO_URI=mongodb+srv://pjhsion:andstudio1905@cluster.mongodb.net/pastor-ai
PORT=4000
```

⚠️ `.env` 파일은 절대 공개 저장소에 업로드하지 마세요.

### 3. 백엔드 실행
```bash
cd backend
npm install
node api.js
```
API 서버 실행 후: `http://localhost:4000`

### 4. 프론트엔드 실행
```bash
cd frontend
npm install
npm run dev
```
프론트엔드 실행 후: `http://localhost:3000`

---

## 🛠️ 기술 스택
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, Next.js, TailwindCSS, shadcn/ui
- **AI**: OpenAI GPT (4o-mini)
- **Infra**: Render/Railway (백엔드), Vercel/Netlify (프론트엔드)

---

## 📌 주요 기능
- **설교안 관리**: 작성, 원어 검증, 자동 교정
- **청소년부 설교문**: AI 자동 생성 및 편집
- **찬양단 콘티**: 성경 본문 기반 AI 추천
- **주보 제작**: API 연동으로 자동 제작
- **워크플로우 자동화**: 요일·시간 기반 자동 실행

---

## 🖼️ 스크린샷 & 데모

### 메인 화면 (PastorMate)
![메인 화면](https://via.placeholder.com/800x400.png?text=PastorMate+Main+Screen)

### 설교안 에디터 + 원어 검증
![설교안 에디터](https://via.placeholder.com/800x400.png?text=Sermon+Editor+with+Lexical+Check)

### 청소년부 설교문 자동 생성
![청소년부 설교문](https://via.placeholder.com/800x400.png?text=Youth+Sermon+Generator)

### 찬양단 콘티 자동 추천
![찬양단 콘티](https://via.placeholder.com/800x400.png?text=Worship+Conti+Planner)

### 주보 제작 화면
![주보 제작](https://via.placeholder.com/800x400.png?text=Bulletin+Maker)

👉 추후 실제 화면 캡처나 GIF로 교체하면 더 효과적입니다.

### 🎥 데모 GIF
실제 실행 화면을 녹화한 GIF:
![데모](./frontend/public/demo.gif)

👉 `frontend/public/demo.gif` 파일을 프로젝트에 추가하면 위 이미지가 표시됩니다.

### 🎥 데모 GIF 제작 방법
1. **로컬 실행**: `npm run dev`로 프론트엔드를 실행합니다.
2. **화면 녹화**: [ScreenToGif](https://www.screentogif.com/) (Windows) 또는 [Kap](https://getkap.co/) (Mac) 같은 툴로 화면을 녹화합니다.
3. **편집 & 저장**: 필요한 부분만 잘라내고 `.gif` 형식으로 저장합니다.
4. **저장소 업로드**: `frontend/public/demo.gif`에 저장 후 `README.md`에 경로 추가.

---

## ✅ 배포 후 체크리스트
- [ ] GitHub에 backend, frontend 코드 push 완료
- [ ] Render/Railway에 backend 배포 완료, 환경 변수 설정 (`OPENAI_API_KEY`, `MONGO_URI`, `PORT`)
- [ ] Vercel/Netlify에 frontend 배포 완료, 환경 변수 설정 (`NEXT_PUBLIC_API_BASE`)
- [ ] 실제 배포된 URL에서 **설교안 원어 검증** 테스트
- [ ] **청소년부 설교문 생성** 동작 확인
- [ ] **찬양단 콘티 생성** 동작 확인
- [ ] **주보 제작** API 응답 확인
- [ ] **워크플로우 자동 실행** 정상 작동 여부 확인

---

## 🌍 배포
- [Render/Railway](https://render.com) → 백엔드 API
- [Vercel/Netlify](https://vercel.com) → 프론트엔드

자세한 내용은 **deploy-guide.md** 참고.

---

## 📜 라이선스
MIT License
