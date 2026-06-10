"use client";

import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPython, FaDocker, FaAws, FaLinkedin } from "react-icons/fa";
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
import { HiAcademicCap, HiBriefcase, HiSparkles, HiBeaker, HiTrophy } from "react-icons/hi2";

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

const KW_LECTURE_2024 = "https://drive.google.com/file/d/12FL-seNn9frHawSLDiWI1dvRSaXZxO9P/view";
const KW_LECTURE_2026 = "https://drive.google.com/file/d/1uXLz-Pfv5iKNhLttWmcQ3EtsGq9Yq1Tu/view";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold gradient-text">DY.</span>
          <div className="hidden md:flex gap-5 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#publications" className="hover:text-white transition-colors">Publications</a>
            <a href="#talks" className="hover:text-white transition-colors">Talks</a>
            <a href="#awards" className="hover:text-white transition-colors">Awards</a>
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
            AI Platform Developer @ Samsung Electronics
          </p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            LLM & Recommender System 연구자. 삼성전자 MX사업부 Samsung Health 팀
            Health Platform R&D Group에서 Samsung Health를 위한 LLM 모델을 개발하고 있습니다.
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
                삼성전자 MX사업부 Samsung Health 팀 Health Platform R&D Group에서
                Samsung Health를 위한 LLM 모델을 개발하고 있습니다. 온디바이스 SLM부터
                클라우드 LLM까지 end-to-end로 AI 서비스를 상용화하고 운영합니다.
                Samsung Research America 등 글로벌 팀과 협업하며 ML 모델을 프로덕션에
                통합하는 업무도 담당하고 있습니다.
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
                  Recommender Systems & Graph Neural Networks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Natural Language Processing
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  <span className="text-gray-300">Languages:</span> 한국어 (Native) · English (Fluent) · 中文 (Intermediate)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education & Career Timeline */}
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
                year: "2024.07 ~ 현재",
                title: "Samsung Electronics MX Division",
                subtitle: "Samsung Health · Health Platform R&D Group · AI Platform Developer",
                desc: "Samsung Health LLM/SLM 모델 개발 및 상용화 · Samsung Research America 협업",
                side: "left",
              },
              {
                year: "2022.03 ~ 2024.02",
                title: "서울대학교 (Seoul National University)",
                subtitle: "M.S. in Artificial Intelligence · Data Mining Lab (Prof. U Kang)",
                desc: "GPA 3.72/4.3 · 추천 시스템 연구 · AI Fellowship 수여",
                side: "right",
              },
              {
                year: "2019.08 ~ 2019.12",
                title: "Tampere University, Finland",
                subtitle: "Exchange · Computer Science and Engineering",
                desc: "핀란드 탐페레 대학교 교환학생 (4 major + 2 general courses)",
                side: "left",
              },
              {
                year: "2018.03 ~ 2022.02",
                title: "광운대학교 (Kwangwoon University)",
                subtitle: "B.S. in Information Convergence, Data Science",
                desc: "GPA 4.07/4.5 (Major 4.16/4.5) · Dean's List · Software Excellence Scholarship",
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
                period: "2026.02 ~ 2026.05",
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
                tags: ["On-device", "Gauss", "LoRA", "Kubeflow", "G-Eval", "GitHub Actions"],
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
              {
                period: "2022.12 ~ 2023.04",
                title: "Calendar-based Schedule Recommender System",
                summary: "삼성전자 산학협력 · 캘린더 기반 일정 추천 시스템",
                points: [
                  "Content-based filtering 기반 일정 추천 시스템 데이터 수집 및 구조 설계",
                  "BPR-MF 및 RNN 기반 추천 알고리즘 제안",
                  "삼성전자와 보고서 협업 및 추가 데이터 요청 커뮤니케이션",
                ],
                tags: ["Recommender System", "BPR-MF", "RNN", "Content-based Filtering"],
                gradient: "from-blue-500 to-indigo-500",
                icon: "📅",
              },
              {
                period: "2022.07 ~ 2022.12",
                title: "DRAM Workload Classification Interpretation Model",
                summary: "삼성전자 산학협력 · DRAM 워크로드 분류 모델 해석 연구",
                points: [
                  "DRAM 워크로드에서 해석 가능한 feature 추출",
                  "Black-box 워크로드 분류 모델의 해석 가능 모델 학습",
                  "PLOS ONE 논문 게재 (Fast and Accurate Interpretation of Workload Classification Model)",
                ],
                tags: ["XAI", "DRAM", "Classification", "PLOS ONE"],
                gradient: "from-slate-500 to-gray-500",
                icon: "🧮",
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
                  <span className="text-xs text-pink-400 font-mono">2025.02 ~ 2026.05 · yamyamlab (모두의연구소)</span>
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
                  <span>LLM 기반 &quot;Restaurant World Cup&quot; 기능으로 사용자 선호 맞춤 설명 생성, engagement 향상</span>
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
                {["Redis", "LightGCN", "Collaborative Filtering", "LLM", "Streamlit", "Embedding"].map((tag) => (
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
                    Multi-behavior Sequence-aware Recommendation via GCN
                  </h3>
                  <p className="text-gray-400 mt-2">
                    다중 행동 정보를 활용한 Graph Convolutional Network 기반 추천 시스템 연구
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <a
                  href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20 hover:border-violet-400 hover:bg-violet-500/20 transition-all group"
                >
                  <div className="text-xs text-violet-300 mb-1">📄 논문 (SCIE)</div>
                  <div className="text-sm font-semibold group-hover:text-violet-200">PLOS ONE 2024</div>
                </a>
                <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <div className="text-xs text-indigo-300 mb-1">💾 SW 등록</div>
                  <div className="text-sm font-semibold">Software Registration</div>
                </div>
                <div className="p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                  <div className="text-xs text-pink-300 mb-1">📜 특허 출원</div>
                  <div className="text-sm font-semibold">10-2024-0001156</div>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Freelance Project Matching System",
                desc: "RoBERTa 임베딩과 GNN을 활용한 프리랜서-프로젝트 매칭 시스템 (Elancer Co., 2023)",
                tech: ["RoBERTa", "GNN", "Matching"],
                link: "https://github.com/yammayamm",
                gradient: "from-violet-500 to-purple-500",
                icon: "🔗",
              },
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
                link: "https://github.com/yammayamm",
                gradient: "from-purple-500 to-pink-500",
                icon: "📊",
              },
              {
                title: "LLM Fine-tuning",
                desc: "EEVE-Korean, Alpaca, Gemma 모델 파인튜닝 실험",
                tech: ["LLM", "Fine-tuning", "HuggingFace"],
                stars: 1,
                link: "https://github.com/yammayamm",
                gradient: "from-indigo-500 to-violet-500",
                icon: "🧠",
              },
              {
                title: "AI야, 진짜 뉴스를 찾아줘!",
                desc: "AI 기반 가짜 뉴스 탐지 NLP 프로젝트",
                tech: ["NLP", "Classification", "BERT"],
                link: "https://github.com/yammayamm",
                gradient: "from-emerald-500 to-teal-500",
                icon: "📰",
              },
              {
                title: "Review-based Product Platform",
                desc: "리뷰 감성 분석 기반 키워드 점수화 시스템 (K-STARTUP 2020 1등)",
                tech: ["NLP", "Sentiment Analysis"],
                link: "https://github.com/yammayamm",
                gradient: "from-amber-500 to-yellow-500",
                icon: "🛍️",
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
                {(project.stars || project.forks) && (
                  <div className="flex gap-4 text-xs text-gray-500">
                    {project.stars ? <span>⭐ {project.stars}</span> : null}
                    {project.forks ? <span>🔀 {project.forks}</span> : null}
                  </div>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📄 Publications & Patents</h2>
            <p className="text-gray-400">발표 논문 및 특허</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4"
          >
            {[
              {
                year: "2024",
                venue: "PLOS ONE (SCIE)",
                type: "International",
                title: "Accurate multi-behavior sequence-aware recommendation via graph convolution networks",
                authors: "Doyeon Kim, Saurav Tanwar, U Kang",
                link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314282",
                color: "from-violet-500 to-indigo-500",
              },
              {
                year: "2023",
                venue: "PLOS ONE (SCIE)",
                type: "International",
                title: "Fast and Accurate Interpretation of Workload Classification Model",
                authors: "Sooyeon Shim, Doyeon Kim, Jun-gi Jang, U Kang",
                link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0282595",
                color: "from-indigo-500 to-blue-500",
              },
              {
                year: "2021",
                venue: "KCC 2021 (KIISE)",
                type: "Domestic",
                title: "OTT 웹서비스 로그 데이터를 이용한 사용자 사용 패턴 연구",
                authors: "Hi-Seoung Ahn, Joo-Hyun Moon, Doyeon Kim, Jin-Ah Kim, Yu-jin Lee",
                link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10583396",
                color: "from-cyan-500 to-blue-500",
              },
            ].map((pub, i) => (
              <motion.a
                key={i}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                custom={i + 1}
                className="glass-card p-6 group cursor-pointer block"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${pub.color} flex items-center justify-center text-xs font-bold`}>
                    {pub.year}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        {pub.type}
                      </span>
                      <span className="text-xs text-gray-400">{pub.venue}</span>
                    </div>
                    <h3 className="text-base font-semibold group-hover:text-indigo-300 transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{pub.authors}</p>
                    <div className="text-xs text-indigo-400 mt-2 group-hover:text-indigo-300">
                      View Paper →
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Patent */}
            <motion.div
              variants={fadeInUp}
              custom={4}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  📜
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      Patent
                    </span>
                    <span className="text-xs text-gray-400">2024 · South Korea</span>
                  </div>
                  <h3 className="text-base font-semibold">
                    Multi-Behavior Sequence-Aware Recommendation Method and Apparatus via Graph Convolution Network
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">Doyeon Kim, Saurav Tanwar, U Kang</p>
                  <p className="text-xs text-gray-500 mt-1 font-mono">10-2024-0001156</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Talks & Activities */}
      <section id="talks" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🎤 Talks & Activities</h2>
            <p className="text-gray-400">강연, 멘토링, 외부 활동</p>
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
                period: "2026.04 · 광운대학교",
                title: "광운대학교 특강",
                desc: "모교 광운대학교에서 AI / LLM 관련 주제로 특강 진행. 학부생 대상 실무 경험과 진로 인사이트 공유.",
                tags: ["Lecture", "AI / LLM", "Career"],
                link: KW_LECTURE_2026,
                gradient: "from-amber-500 to-orange-500",
                icon: "🎓",
              },
              {
                period: "2024.03 · 광운대학교",
                title: "대학원 준비 과정과 대학원 생활",
                desc: "대학원 진학을 고민하는 학부 후배들에게 대학원 준비 과정, 연구실 선택, 대학원 생활 전반에 대한 경험 공유.",
                tags: ["Lecture", "Graduate School", "Career"],
                link: KW_LECTURE_2024,
                gradient: "from-amber-500 to-yellow-500",
                icon: "🎓",
              },
              {
                period: "2022.10 / 2023.03 / 2023.09",
                title: "Teaching & TA",
                desc: "삼성전자 임직원 데이터 사이언스 강의 (10기, 11기) · 서울대 학부 'Data Structure' 조교 · 우리은행 임직원 DB 관리 교육.",
                tags: ["Teaching", "TA", "Data Science"],
                link: null,
                gradient: "from-cyan-500 to-blue-500",
                icon: "👩‍🏫",
              },
              {
                period: "2021.02 ~ 2021.06",
                title: "Algorithm Study Group",
                desc: "학과 학생들과 자료구조·알고리즘 스터디 그룹 운영. 백준/프로그래머스 코딩 테스트 준비 및 GitHub 코드 리뷰.",
                tags: ["Algorithm", "Study Group", "Mentoring"],
                link: null,
                gradient: "from-emerald-500 to-teal-500",
                icon: "💻",
              },
              {
                period: "2019.03 ~ 2019.07",
                title: "International Students Mentoring Program",
                desc: "해외 유학생을 대상으로 학교 생활, 캠퍼스 시설, 서울 생활 (은행 계좌 개설, 문화 시설 이용 등) 멘토링.",
                tags: ["Mentoring", "International"],
                link: null,
                gradient: "from-pink-500 to-rose-500",
                icon: "🌏",
              },
            ].map((talk, i) => {
              const Wrapper = talk.link ? motion.a : motion.div;
              const wrapperProps = talk.link
                ? { href: talk.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={i}
                  variants={fadeInUp}
                  custom={i + 1}
                  className={`glass-card p-8 block ${talk.link ? "group cursor-pointer" : ""}`}
                  {...wrapperProps}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${talk.gradient} flex items-center justify-center text-2xl`}>
                      {talk.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-amber-400 font-mono">{talk.period}</span>
                      <h3 className={`text-xl font-semibold mt-1 ${talk.link ? "group-hover:text-amber-300 transition-colors" : ""}`}>
                        {talk.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{talk.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {talk.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {talk.link && (
                        <div className="mt-4 text-sm text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                          📄 강연 자료 보기 →
                        </div>
                      )}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section id="awards" className="py-32 px-6">
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
              <HiTrophy className="inline mr-2 text-amber-400" />
              Awards & Certifications
            </h2>
            <p className="text-gray-400">수상, 장학, 자격증</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Awards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-5 text-amber-300 flex items-center gap-2">
                🏆 Awards
              </h3>
              <ul className="space-y-4">
                {[
                  { year: "2023", title: "3rd Place, Monthly Dacon Emotion Recognition AI Competition", org: "DACON" },
                  { year: "2020", title: "1st Place, K-STARTUP 2020 STUDENT LEAGUE", org: "Korea Enterprise Foundation" },
                  { year: "2020", title: "1st Place, 4th KHU Valley Program (KVP)", org: "Kyung Hee University" },
                  { year: "2020", title: "Special Prize, Open Source Contribution Conference", org: "Ministry of Science and ICT" },
                ].map((a, i) => (
                  <li key={i} className="border-l-2 border-amber-500/50 pl-3">
                    <div className="text-xs text-amber-400 font-mono">{a.year}</div>
                    <div className="text-sm text-gray-200 mt-0.5">{a.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{a.org}</div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Honors / Scholarships */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-5 text-purple-300 flex items-center gap-2">
                🎖️ Honors
              </h3>
              <ul className="space-y-4">
                {[
                  { year: "2022", title: "AI Fellowship", org: "Seoul National University" },
                  { year: "2021", title: "Semester High Honors / Dean's List", org: "Kwangwoon University" },
                  { year: "2021", title: "Software Excellence Scholarship", org: "Kwangwoon University" },
                  { year: "2019", title: "English Excellence Scholarship", org: "Kwangwoon University" },
                  { year: "2018", title: "Admission Scholarship", org: "Kwangwoon University" },
                ].map((h, i) => (
                  <li key={i} className="border-l-2 border-purple-500/50 pl-3">
                    <div className="text-xs text-purple-400 font-mono">{h.year}</div>
                    <div className="text-sm text-gray-200 mt-0.5">{h.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{h.org}</div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={3}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-5 text-emerald-300 flex items-center gap-2">
                📜 Certifications
              </h3>
              <ul className="space-y-4">
                {[
                  { year: "2025.07", title: "빅데이터분석기사", org: "한국데이터산업진흥원" },
                  { year: "2022.09", title: "정보처리기사", org: "한국산업인력공단" },
                ].map((c, i) => (
                  <li key={i} className="border-l-2 border-emerald-500/50 pl-3">
                    <div className="text-xs text-emerald-400 font-mono">{c.year}</div>
                    <div className="text-sm text-gray-200 mt-0.5">{c.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{c.org}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
            <motion.div variants={fadeInUp} custom={1} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-4 text-indigo-300">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Python", icon: <FaPython /> },
                  { name: "R", icon: null },
                  { name: "C/C++", icon: null },
                  { name: "Java", icon: null },
                  { name: "MySQL", icon: null },
                  { name: "Swift", icon: null },
                  { name: "Android", icon: null },
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

            <motion.div variants={fadeInUp} custom={2} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-4 text-purple-300">LLM / DL</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "PyTorch", icon: <SiPytorch /> },
                  { name: "TensorFlow", icon: <SiTensorflow /> },
                  { name: "Keras", icon: null },
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
                  { name: "Azure", icon: null },
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

            <motion.div variants={fadeInUp} custom={4} className="glass-card p-6">
              <h3 className="text-base font-semibold mb-4 text-pink-300">Data / Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "NumPy", icon: <SiNumpy /> },
                  { name: "Pandas", icon: <SiPandas /> },
                  { name: "scikit-learn", icon: null },
                  { name: "Matplotlib", icon: null },
                  { name: "Tableau", icon: null },
                  { name: "Jupyter", icon: <SiJupyter /> },
                  { name: "Streamlit", icon: <SiStreamlit /> },
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
                href="mailto:rlaehdus@snu.ac.kr"
                className="glass-card px-8 py-4 flex items-center gap-3 hover:border-purple-400/50"
              >
                <FaEnvelope className="text-xl" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/doyeon-kim-yammayamm"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 flex items-center gap-3 hover:border-blue-400/50"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
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
