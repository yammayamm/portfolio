"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPython, FaDocker, FaAws } from "react-icons/fa";
import {
  SiPytorch,
  SiTensorflow,
  SiJupyter,
  SiHuggingface,
  SiNumpy,
  SiPandas,
  SiKubernetes,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiLangchain,
  SiStreamlit,
  SiGooglecloud,
} from "react-icons/si";
import { HiAcademicCap, HiBriefcase, HiSparkles, HiBeaker } from "react-icons/hi2";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold gradient-text">DY.</span>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl"
          >
            👩‍💻
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Doyeon Kim</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            AI Engineer @ Samsung Electronics
          </p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            LLM & Recommender System 연구자. 삼성전자 MX사업부 Health Software R&D에서
            Samsung Health를 위한 LLM 모델을 개발하고 있습니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/yammayamm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              <FaEnvelope /> Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            <HiSparkles className="inline mr-2 text-indigo-400" />
            About Me
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} custom={1} className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-indigo-300 flex items-center gap-2">
                <HiBriefcase /> Current Role
              </h3>
              <p className="text-gray-300 leading-relaxed">
                삼성전자 MX사업부 Health Software R&D 그룹에서 Samsung Health를 위한
                LLM 모델을 개발하고 있습니다. 온디바이스 SLM부터 클라우드 LLM까지,
                end-to-end로 AI 서비스를 상용화하고 운영하고 있습니다.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} custom={2} className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
                <HiAcademicCap /> Research Interests
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  Large Language Models & RAG
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Machine Learning & Deep Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                  Recommender Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Natural Language Processing
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            <HiAcademicCap className="inline mr-2 text-indigo-400" />
            Education & Career
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

            {[
              {
                year: "2024 ~ 현재",
                title: "Samsung Electronics MX Division",
                subtitle: "Health Software R&D Group · AI Engineer",
                desc: "Samsung Health LLM/SLM 모델 개발 및 상용화",
                side: "left",
              },
              {
                year: "2022 ~ 2024",
                title: "서울대학교 (Seoul National University)",
                subtitle: "M.S. in AI · Data Mining Lab",
                desc: "인공지능 협동과정 석사 졸업 · 추천 시스템 연구",
                side: "right",
              },
              {
                year: "2019",
                title: "Tampere University",
                subtitle: "Exchange Student Program",
                desc: "핀란드 탐페레 대학교 교환학생",
                side: "left",
              },
              {
                year: "2018 ~ 2022",
                title: "광운대학교 (Kwangwoon University)",
                subtitle: "B.S. in Data Science",
                desc: "정보융합학부 데이터사이언스 전공",
                side: "right",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i + 1}
                className={`relative flex items-center mb-12 ${
                  item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-indigo-500 border-4 border-[#0a0a0a] z-10" />
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card p-6">
                    <span className="text-xs text-indigo-400 font-mono">{item.year}</span>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-purple-300">{item.subtitle}</p>
                    <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Experience - Samsung Projects */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <HiBriefcase className="inline mr-2 text-indigo-400" />
              Work Experience
            </h2>
            <p className="text-gray-400">Samsung Electronics에서 진행한 프로젝트들</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            {[
              {
                period: "2025.03 ~ 2026.01",
                title: "Health AI Assistant 상품화 및 운영",
                summary: "Samsung Health 앱 내 개인 맞춤형 건강 인사이트를 제공하는 AI Assistant 상품화 및 글로벌 서비스 운영",
                points: [
                  "GCP·Azure 기반 글로벌 서비스 운영 및 안정화",
                  "Input Guardrail 모델 설계 및 경량 SLM 기반 안전성 분류 체계 개발",
                  "Phi-3-mini·Gemma2 기반 Instruction Tuning 및 평가 체계 구축",
                  "실제 서비스 환경에서 AI 안전성과 운영 효율성 개선",
                ],
                tags: ["LLM", "GCP", "Azure", "Phi-3-mini", "Gemma2", "Instruction Tuning"],
                gradient: "from-indigo-500 to-blue-500",
                icon: "🏥",
              },
              {
                period: "2024.11 ~ 2025.11",
                title: "온디바이스 Gauss 기반 Energy Score Insight Message 상품화",
                summary: "Galaxy S25 / Flip7 / Fold7 / S26 시리즈 대상 개인화 Insight Message 기능 상용화",
                points: [
                  "프롬프트 설계, LoRA 기반 파인튜닝까지 end-to-end 담당",
                  "Kubeflow 학습 파이프라인 운영 및 온디바이스 모델 변환",
                  "GPT-4o 기반 G-Eval 평가 시스템 구축",
                  "GitHub Actions 기반 자동화 환경 구축으로 제품 수준 AI 기능 상용화",
                ],
                tags: ["On-device", "LoRA", "Kubeflow", "G-Eval", "GitHub Actions"],
                gradient: "from-purple-500 to-pink-500",
                icon: "📱",
              },
              {
                period: "2025.06 ~ 2025.09",
                title: "Cloud Gemini 기반 메시지 생성 모듈 개발",
                summary: "Cloud 환경에서 Gemini 기반 메시지 생성 모듈 개발",
                points: [
                  "FastAPI 기반 API 서버 및 MongoDB 기반 메시지 저장 구조 설계",
                  "Prompt Engineering 및 JSON Parsing 기반 구조화 응답 체계 구축",
                ],
                tags: ["Gemini", "FastAPI", "MongoDB", "Prompt Engineering"],
                gradient: "from-cyan-500 to-blue-500",
                icon: "💬",
              },
              {
                period: "2025.03 ~ 현재",
                title: "Partner API Gateway 플랫폼 구축 및 운영",
                summary: "외부 파트너사의 데이터 및 서비스 접근을 위한 API Gateway 플랫폼 구축 및 운영",
                points: [
                  "Kubernetes 기반 API Gateway 운영 환경 구축",
                  "OAuth2 / JWT 기반 인증 체계 설계·운영, Scope 기반 권한 관리 정책 수립",
                  "선언적 설정 기반 운영 체계로 신규 서비스 온보딩 시 코드 수정 없이 확장 가능",
                  "User·Contents·Push 등 다양한 내부 서비스에 대한 통합 API 접근 체계 설계",
                  "중앙화된 인증·인가 체계로 운영 복잡도와 보안 리스크 감소",
                ],
                tags: ["Kubernetes", "API Gateway", "OAuth2", "JWT", "AWS Cognito", "Helm"],
                gradient: "from-emerald-500 to-teal-500",
                icon: "🔐",
              },
              {
                period: "2024.11 ~ 2025.04",
                title: "사내 헬스 도메인 챗봇 개발",
                summary: "Llama 기반 Physician-8B 모델을 한국어 의료 데이터로 파인튜닝한 헬스 도메인 특화 QA 챗봇",
                points: [
                  "LangChain 기반 RAG 파이프라인 구축",
                  "Streamlit UI – RAG – Ollama – Cloud Run 구조로 배포",
                  "사내 활용 환경까지 end-to-end 구축",
                ],
                tags: ["Llama", "RAG", "LangChain", "Ollama", "Streamlit", "Cloud Run"],
                gradient: "from-orange-500 to-red-500",
                icon: "🤖",
              },
            ].map((work, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i + 1}
                className="glass-card p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${work.gradient} flex items-center justify-center text-2xl`}>
                    {work.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-indigo-400 font-mono">{work.period}</span>
                    <h3 className="text-xl font-semibold mt-1">{work.title}</h3>
                    <p className="text-gray-400 mt-2">{work.summary}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 ml-2">
                  {work.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-indigo-400 mt-1.5 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research & Personal Projects */}
      <section id="research" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <HiBeaker className="inline mr-2 text-purple-400" />
              Research & Projects
            </h2>
            <p className="text-gray-400">추천 시스템 연구 및 개인 프로젝트</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* 추천 시스템 연구 - 모두의연구소 */}
            <motion.div variants={fadeInUp} custom={1} className="glass-card p-8 md:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-2xl">
                  🍽️
                </div>
                <div className="flex-1">
                  <span className="text-xs text-pink-400 font-mono">2025.02 ~ 현재 · 모두의연구소</span>
                  <h3 className="text-xl font-semibold mt-1">개인화 맛집 추천 웹서비스 개발</h3>
                  <p className="text-gray-400 mt-2">
                    사용자 음식 선호도 및 방문 이력 기반 맛집 추천 서비스
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-4 ml-2">
                <li className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-pink-400 mt-1.5 shrink-0">▸</span>
                  <span>Redis 기반 임베딩 유사도 검색 API 구축</span>
                </li>
                <li className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-pink-400 mt-1.5 shrink-0">▸</span>
                  <span>Item-based Collaborative Filtering, LightGCN 기반 추천 모델 적용</span>
                </li>
                <li className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-pink-400 mt-1.5 shrink-0">▸</span>
                  <span>Streamlit UI로 사용자 피드백 데이터 수집 및 만족도 기반 품질 개선 실험</span>
                </li>
                <li className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-pink-400 mt-1.5 shrink-0">▸</span>
                  <span>데이터 수집·전처리, 임베딩 생성, API 서버, 결과 시각화까지 end-to-end 수행</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Redis", "LightGCN", "Collaborative Filtering", "Streamlit", "Embedding"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 석사 연구 */}
            <motion.div variants={fadeInUp} custom={2} className="glass-card p-8 md:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-2xl">
                  📚
                </div>
                <div className="flex-1">
                  <span className="text-xs text-violet-400 font-mono">2022 ~ 2024 · 서울대 Data Mining Lab</span>
                  <h3 className="text-xl font-semibold mt-1">
                    다중 행동 정보 기반 GCN 추천 모델 연구
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Multi-behavior Graph Convolutional Network 기반 추천 시스템 연구
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  <div className="text-xs text-violet-300 mb-1">📄 논문 게재</div>
                  <div className="text-sm font-semibold">PLOS ONE</div>
                </div>
                <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <div className="text-xs text-indigo-300 mb-1">💾 SW 등록</div>
                  <div className="text-sm font-semibold">Software Registration</div>
                </div>
                <div className="p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                  <div className="text-xs text-pink-300 mb-1">📜 특허 출원</div>
                  <div className="text-sm font-semibold">Patent Application</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["GCN", "Recommender System", "Multi-behavior", "Graph Neural Network"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* GitHub Projects */}
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-2xl font-semibold mb-8 text-center"
          >
            🚀 Other Projects
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Watch Out",
                desc: "청각 장애인을 위한 위험 소리 감지 Apple Watch 앱",
                tech: ["Python", "Deep Learning", "watchOS"],
                stars: 19,
                forks: 6,
                link: "https://github.com/yammayamm",
                gradient: "from-blue-500 to-cyan-500",
                icon: "⌚",
              },
              {
                title: "LG Aimers 4기 Hackathon",
                desc: "MQL 데이터 기반 B2B 영업기회 창출 예측 모델",
                tech: ["Jupyter", "ML", "Data Analysis"],
                stars: 5,
                forks: 0,
                link: "https://github.com/yammayamm",
                gradient: "from-purple-500 to-pink-500",
                icon: "📊",
              },
              {
                title: "LLM Fine-tuning",
                desc: "EEVE-Korean, Alpaca, Gemma 모델 파인튜닝 실험",
                tech: ["LLM", "Fine-tuning", "HuggingFace"],
                stars: 1,
                forks: 0,
                link: "https://github.com/yammayamm",
                gradient: "from-indigo-500 to-violet-500",
                icon: "🧠",
              },
              {
                title: "AI야, 진짜 뉴스를 찾아줘!",
                desc: "AI 기반 가짜 뉴스 탐지 NLP 프로젝트",
                tech: ["NLP", "Classification", "Python"],
                stars: 0,
                forks: 0,
                link: "https://github.com/yammayamm",
                gradient: "from-emerald-500 to-teal-500",
                icon: "📰",
              },
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                custom={i + 1}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform`}>
                  {project.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {(project.stars > 0 || project.forks > 0) && (
                  <div className="flex gap-4 text-xs text-gray-500">
                    {project.stars > 0 && <span>⭐ {project.stars}</span>}
                    {project.forks > 0 && <span>🔀 {project.forks}</span>}
                  </div>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            🛠️ Skills & Tech Stack
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Languages */}
            <motion.div variants={fadeInUp} custom={1} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-4 text-indigo-300">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Python", icon: <FaPython /> },
                  { name: "C/C++", icon: null },
                  { name: "SQL", icon: null },
                  { name: "R", icon: null },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-400/50 transition-colors text-sm"
                  >
                    {skill.icon && <span className="text-indigo-400">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* LLM/ML Stacks */}
            <motion.div variants={fadeInUp} custom={2} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-4 text-purple-300">LLM / ML</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "PyTorch", icon: <SiPytorch /> },
                  { name: "TensorFlow", icon: <SiTensorflow /> },
                  { name: "HuggingFace", icon: <SiHuggingface /> },
                  { name: "LangChain", icon: <SiLangchain /> },
                  { name: "LoRA", icon: null },
                  { name: "RAG", icon: null },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-colors text-sm"
                  >
                    {skill.icon && <span className="text-purple-400">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend / Infra */}
            <motion.div variants={fadeInUp} custom={3} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-4 text-emerald-300">Backend / Infra</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "FastAPI", icon: <SiFastapi /> },
                  { name: "MongoDB", icon: <SiMongodb /> },
                  { name: "Redis", icon: <SiRedis /> },
                  { name: "Kubernetes", icon: <SiKubernetes /> },
                  { name: "Docker", icon: <FaDocker /> },
                  { name: "AWS", icon: <FaAws /> },
                  { name: "GCP", icon: <SiGooglecloud /> },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-colors text-sm"
                  >
                    {skill.icon && <span className="text-emerald-400">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeInUp} custom={4} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-4 text-pink-300">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Jupyter", icon: <SiJupyter /> },
                  { name: "Streamlit", icon: <SiStreamlit /> },
                  { name: "Git", icon: <FaGithub /> },
                  { name: "NumPy", icon: <SiNumpy /> },
                  { name: "Pandas", icon: <SiPandas /> },
                  { name: "Kubeflow", icon: null },
                  { name: "Helm", icon: null },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-pink-400/50 transition-colors text-sm"
                  >
                    {skill.icon && <span className="text-pink-400">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📫 Let&apos;s Connect
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              AI, LLM, 추천 시스템에 대해 이야기하고 싶으시다면 언제든 연락주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/yammayamm"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 flex items-center gap-3 hover:border-indigo-400/50"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="glass-card px-8 py-4 flex items-center gap-3 hover:border-purple-400/50"
              >
                <FaEnvelope className="text-xl" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Doyeon Kim. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
