import logoAsset from "@/assets/logo.png.asset.json";
import logoMarkAsset from "@/assets/logo-mark.jpg.asset.json";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Activity,
  HeartPulse,
  Dumbbell,
  Baby,
  Hand,
  ShieldCheck,
  Users,
  Sparkles,
  ClipboardList,
  FileText,
  FolderCheck,
  CheckCircle2,
  Stethoscope,
  Ruler,
  UserCheck,
  FlaskConical,
  Star,
  MapPin,
  Mail,
  Instagram,
  ArrowRight,
} from "lucide-react";

const PHONE_DISPLAY = "+7 (962) 644-44-88";
const PHONE_TEL = "tel:+79626444488";
const EMAIL = "[EMAIL]"; // укажите email для футера
const ADDRESS = "г. Назрань, ул. И. Базоркина, 116";
const INSTAGRAM_URL = "https://instagram.com/reabilitaciya_ing_";
// Куда приходят заявки. Замените на ваш email — на первую заявку FormSubmit
// пришлёт письмо-подтверждение, после подтверждения заявки начнут приходить.
const FORM_SUBMIT_EMAIL = "REPLACE_ME@example.com";
const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`;
// Яндекс.Карта — Назрань, ул. И. Базоркина, 116
const YANDEX_MAP_SRC =
  "https://yandex.ru/map-widget/v1/?ll=44.770000%2C43.226000&mode=search&text=" +
  encodeURIComponent("Назрань, улица Идриса Базоркина, 116") +
  "&z=16";

const NAV = [
  { href: "#uslugi", label: "Услуги" },
  { href: "#oms", label: "По ОМС" },
  { href: "#specialisty", label: "Специалисты" },
  { href: "#otzyvy", label: "Отзывы" },
  { href: "#kontakty", label: "Контакты" },
];

const SERVICES = [
  {
    icon: HeartPulse,
    title: "Реабилитация после операций и травм",
    text: "Индивидуальная программа восстановления после хирургии, переломов и травм опорно-двигательного аппарата.",
  },
  {
    icon: ShieldCheck,
    title: "Лечение по ОМС",
    text: "Восстановительное лечение бесплатно по полису обязательного медицинского страхования.",
  },
  {
    icon: Dumbbell,
    title: "Кинезитерапия",
    text: "Лечение движением на специальном оборудовании: сила, подвижность суставов и правильная осанка.",
  },
  {
    icon: Baby,
    title: "Войта-терапия",
    text: "Метод рефлекторной локомоции для детей и взрослых при нарушениях двигательного развития.",
  },
  {
    icon: Hand,
    title: "Массаж",
    text: "Лечебный и восстановительный массаж как часть комплексной реабилитационной программы.",
  },
  {
    icon: Activity,
    title: "Индивидуальные программы",
    text: "Составляем маршрут восстановления под ваш диагноз, возраст и цели — взрослым и детям.",
  },
];

const OMS_STEPS = [
  { icon: ClipboardList, title: "Оставьте заявку", text: "Свяжитесь с нами по телефону или через форму на сайте." },
  { icon: FileText, title: "Возьмите направление", text: "Получите направление у лечащего врача по месту прикрепления." },
  { icon: FolderCheck, title: "Соберите документы", text: "Паспорт, полис ОМС, СНИЛС и направление от врача." },
  { icon: CheckCircle2, title: "Пройдите курс", text: "Составим программу и проведём полный курс реабилитации бесплатно." },
];

const DIAGNOSTICS = [
  { icon: Stethoscope, title: "Функциональная диагностика", text: "Оценка состояния опорно-двигательного аппарата." },
  { icon: Ruler, title: "Оценка объёма движений", text: "Замеры подвижности суставов и мышечной силы." },
  { icon: UserCheck, title: "Консультация специалиста", text: "Приём врача-реабилитолога перед началом курса." },
  { icon: FlaskConical, title: "Базовые анализы", text: "При необходимости — направление на обследования." },
];

const SPECIALISTS = [
  { name: "Имя Фамилия", role: "Врач-реабилитолог", years: "Опыт работы более 10 лет" },
  { name: "Имя Фамилия", role: "Инструктор-методист по кинезитерапии", years: "Опыт работы более 7 лет" },
  { name: "Имя Фамилия", role: "Войта-терапевт", years: "Сертифицированный специалист" },
  { name: "Имя Фамилия", role: "Массажист", years: "Опыт работы более 8 лет" },
];

const REVIEWS = [
  { name: "Марьям А.", rating: 5, text: "После операции на колене прошла курс кинезитерапии. Внимательные специалисты, вернулась к обычной жизни быстрее, чем ожидала." },
  { name: "Ахмед Б.", rating: 5, text: "Занимаемся с сыном Войта-терапией. Виден результат, врачи объясняют каждое упражнение. Спасибо центру!" },
  { name: "Лейла М.", rating: 5, text: "Оформили лечение по ОМС — всё подсказали, помогли с документами. Массаж и ЛФК на высоком уровне." },
  { name: "Ислам К.", rating: 5, text: "После травмы спины прошёл полный курс. Боли ушли, вернулся к спорту. Рекомендую всем." },
  { name: "Хава Д.", rating: 5, text: "Чистый современный центр, оборудование новое. Отношение к пациентам — как к родным." },
  { name: "Магомед Т.", rating: 5, text: "Проходил реабилитацию после перелома. Индивидуальный подход, чёткая программа. Результатом доволен." },
];

const SERVICE_OPTIONS = [
  "Реабилитация после операций и травм",
  "Лечение по ОМС",
  "Кинезитерапия",
  "Войта-терапия",
  "Массаж",
  "Диагностика / консультация",
];

/* ---------- HEADER ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="Центр медицинской реабилитации">
          <img src={logoAsset.url} alt="Центр медицинской реабилитации" className="h-10 sm:h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Основная навигация">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary-dark transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={PHONE_TEL} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary-dark">
            <Phone className="h-4 w-4 text-primary" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href="#zapis" className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors shadow-sm">
            Записаться
          </a>
          <button
            aria-label="Открыть меню"
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Мобильная навигация">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 px-2 rounded-lg text-base font-medium text-foreground hover:bg-secondary">
                {n.label}
              </a>
            ))}
            <a href={PHONE_TEL} className="py-3 px-2 rounded-lg text-base font-medium text-foreground hover:bg-secondary flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
            </a>
            <a href="#zapis" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground">
              Записаться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[color:var(--accent)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary-dark px-3 py-1.5 text-xs sm:text-sm font-semibold mb-5">
            <ShieldCheck className="h-4 w-4" />
            Лечение по ОМС — бесплатно по полису
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight">
            Реабилитация после операций и травм — <span className="text-primary-dark">вернём вас к движению</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Кинезитерапия, Войта-терапия и массаж. Лечение по ОМС — бесплатно по полису.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#zapis" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-dark transition-colors shadow-[0_10px_30px_-10px_oklch(0.58_0.08_202/0.5)]">
              Записаться на приём <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#oms" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3.5 text-base font-semibold text-primary-dark hover:bg-primary/5 transition-colors">
              Как лечиться по ОМС
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Лечение по ОМС", "Взрослым и детям", "Индивидуальные программы"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground/80">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {b}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-3xl bg-primary/10 overflow-hidden shadow-[var(--shadow-elevated)]">
            <img
              src={logoMarkAsset.url}
              alt="Центр медицинской реабилитации"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[var(--shadow-card)] border border-border px-5 py-4 gap-3 items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary-dark" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-foreground">1000+</div>
              <div className="text-xs text-muted-foreground">пациентов вернулись к движению</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <section id="uslugi" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Услуги" title="Направления реабилитации" subtitle="Полный цикл восстановления — от диагностики до возвращения к активной жизни." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary hover:shadow-[var(--shadow-card)] transition-all">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary-dark flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OMS ---------- */
function OMS() {
  return (
    <section id="oms" className="py-16 sm:py-20 lg:py-24 bg-[color:var(--accent)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="По ОМС" title="Лечитесь бесплатно по полису ОМС" subtitle="Мы работаем в системе обязательного медицинского страхования. Оформление занимает несколько дней." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OMS_STEPS.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-white border border-border p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-9 w-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                {i + 1}
              </div>
              <s.icon className="h-8 w-8 text-primary-dark mb-4" />
              <h3 className="font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#zapis" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">
            Узнать, подхожу ли я по ОМС <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- DIAGNOSTICS ---------- */
function Diagnostics() {
  return (
    <section id="diagnostika" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Диагностика" title="Диагностика и чекапы перед реабилитацией" subtitle="Перед составлением программы проводим оценку состояния и при необходимости назначаем обследования." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIAGNOSTICS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-border p-6 hover:border-primary transition-colors">
              <d.icon className="h-8 w-8 text-primary-dark mb-4" />
              <h3 className="font-bold text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SPECIALISTS ---------- */
function Specialists() {
  return (
    <section id="specialisty" className="py-16 sm:py-20 lg:py-24 bg-[color:var(--accent)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Команда" title="Наши специалисты" subtitle="Врачи и инструкторы с профильным образованием и многолетним опытом реабилитации." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALISTS.map((sp, i) => (
            <div key={i} className="rounded-2xl bg-white border border-border p-6 text-center">
              <div className="mx-auto h-28 w-28 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-primary/60" aria-hidden />
              </div>
              <h3 className="font-bold text-foreground">{sp.name}</h3>
              <div className="text-sm text-primary-dark font-medium mt-1">{sp.role}</div>
              <div className="text-xs text-muted-foreground mt-2">{sp.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUIZ ---------- */
const QUIZ_QUESTIONS = [
  { q: "Вы недавно перенесли операцию или травму?", opts: ["Да", "Нет"] },
  { q: "Есть ли у вас боли или ограничение движения?", opts: ["Да, регулярно", "Иногда", "Нет"] },
  { q: "Проходили ли вы реабилитацию раньше?", opts: ["Да", "Нет"] },
  { q: "Есть ли у вас действующий полис ОМС?", opts: ["Да", "Нет", "Не уверен(а)"] },
  { q: "Кому нужна реабилитация?", opts: ["Взрослому", "Ребёнку"] },
];

function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const pick = (i: number) => {
    const next = [...answers, i];
    setAnswers(next);
    if (step + 1 >= QUIZ_QUESTIONS.length) setDone(true);
    else setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  return (
    <section id="test" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Опрос" title="Нужна ли вам реабилитация?" subtitle="Ответьте на 5 коротких вопросов — мы подскажем, подойдёт ли вам курс." />
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-[var(--shadow-card)]">
          {!done ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-primary-dark">Вопрос {step + 1} из {QUIZ_QUESTIONS.length}</span>
                <div className="h-1.5 flex-1 mx-4 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all" style={{ width: `${((step) / QUIZ_QUESTIONS.length) * 100}%` }} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{QUIZ_QUESTIONS[step].q}</h3>
              <div className="mt-6 space-y-3">
                {QUIZ_QUESTIONS[step].opts.map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => pick(i)}
                    className="w-full text-left rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 px-5 py-4 font-medium text-foreground transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Sparkles className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Вам стоит проконсультироваться со специалистом</h3>
              <p className="mt-3 text-muted-foreground">
                На основе ваших ответов рекомендуем записаться на очную консультацию. Наш врач составит индивидуальную программу реабилитации.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#zapis" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">
                  Оставить заявку <ArrowRight className="h-4 w-4" />
                </a>
                <button onClick={reset} className="inline-flex items-center justify-center rounded-full border-2 border-border px-6 py-3.5 font-semibold text-foreground hover:border-primary transition-colors">
                  Пройти заново
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
function Reviews() {
  return (
    <section id="otzyvy" className="py-16 sm:py-20 lg:py-24 bg-[color:var(--accent)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Отзывы" title="Что говорят наши пациенты" subtitle="Настоящие истории людей, которые прошли реабилитацию в нашем центре." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl bg-white border border-border p-6 shadow-sm">
              <div className="flex gap-0.5 mb-3" aria-label={`Оценка: ${r.rating} из 5`}>
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-4 pt-4 border-t border-border font-semibold text-foreground">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FORM ---------- */
// Форматирование телефона в маску +7 (999) 999-99-99
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").replace(/^8/, "7").slice(0, 11);
  const d = digits.startsWith("7") ? digits : "7" + digits;
  const p = d.slice(0, 11);
  const parts = [
    "+7",
    p.length > 1 ? " (" + p.slice(1, 4) : "",
    p.length >= 4 ? ") " + p.slice(4, 7) : "",
    p.length >= 7 ? "-" + p.slice(7, 9) : "",
    p.length >= 9 ? "-" + p.slice(9, 11) : "",
  ];
  return parts.join("");
}
function isValidPhone(value: string): boolean {
  return value.replace(/\D/g, "").length === 11;
}

function BookingForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", time: "", service: SERVICE_OPTIONS[0], consent: false });

  const onPhoneChange = (v: string) => {
    setForm({ ...form, phone: formatPhone(v) });
    setPhoneError(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) return;
    if (!isValidPhone(form.phone)) {
      setPhoneError("Введите номер полностью: +7 (XXX) XXX-XX-XX");
      return;
    }
    if (!form.consent) return;

    setSending(true);
    try {
      const payload = {
        _subject: `Новая заявка с сайта — ${form.name}`,
        Имя: form.name,
        Телефон: form.phone,
        Услуга: form.service,
        "Удобное время / комментарий": form.time || "—",
        Источник: "Сайт Центра медицинской реабилитации",
      };
      const res = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setSent(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Booking submit failed:", err, form);
      setError("Не удалось отправить заявку. Позвоните нам, пожалуйста: " + PHONE_DISPLAY);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="zapis" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <SectionHeading eyebrow="Запись" title="Оставьте заявку на приём" subtitle="Перезвоним в течение рабочего дня, ответим на вопросы и подберём удобное время." align="left" />
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary-dark" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Или позвоните</div>
                <a href={PHONE_TEL} className="text-lg font-bold text-foreground hover:text-primary-dark">{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary-dark" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Адрес</div>
                <div className="font-semibold text-foreground">{ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
          {sent ? (
            <div className="text-center py-8">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Заявка отправлена!</h3>
              <p className="mt-3 text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <Field label="Имя *">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Ваше имя" autoComplete="name" />
              </Field>
              <Field label="Телефон *">
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => onPhoneChange(e.target.value)}
                  className={"input " + (phoneError ? "border-destructive" : "")}
                  placeholder="+7 (___) ___-__-__"
                  aria-invalid={!!phoneError}
                />
                {phoneError && <span className="mt-1 block text-xs text-destructive">{phoneError}</span>}
              </Field>
              <Field label="Интересующая услуга">
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input">
                  {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Удобное время / комментарий">
                <textarea rows={3} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input resize-none" placeholder="Например: будни после 17:00" />
              </Field>
              <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                <input required type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 h-4 w-4 accent-[color:var(--primary)]" />
                <span>Согласен на обработку персональных данных в соответствии с <a href="#politika" className="text-primary-dark underline">политикой обработки</a>.</span>
              </label>
              {error && <div className="rounded-lg bg-destructive/10 text-destructive text-sm p-3">{error}</div>}
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Отправляем..." : (<>Отправить заявку <ArrowRight className="h-4 w-4" /></>)}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer id="kontakty" className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="bg-white/10 rounded-2xl p-4 inline-block mb-5">
            <img src={logoAsset.url} alt="Центр медицинской реабилитации" className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm text-white/80 leading-relaxed">Центр медицинской реабилитации в Ингушетии. Помогаем вернуться к движению взрослым и детям.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Контакты</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> <span>{ADDRESS}</span></li>
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href={PHONE_TEL} className="hover:underline">{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a></li>
            <li className="flex items-start gap-3"><Instagram className="h-4 w-4 mt-0.5 shrink-0" /> <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:underline">@reabilitaciya_ing_</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Как нас найти</h4>
          <div className="aspect-video rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sm text-white/70">
            [Карта: {ADDRESS}]
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/70">
          <div>© {new Date().getFullYear()} ООО «Центр Кинезитерапии в Ингушетии». ОГРН/ИНН — [указать при необходимости].</div>
          <a href="#politika" className="hover:text-white underline">Политика обработки персональных данных</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Section heading ---------- */
function SectionHeading({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-primary-dark">{eyebrow}</div>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------- Floating mobile CTA ---------- */
function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#zapis"
      className={`sm:hidden fixed bottom-4 left-4 right-4 z-30 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[0_10px_30px_-6px_oklch(0.58_0.08_202/0.55)] transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <Phone className="h-4 w-4" /> Записаться на приём
    </a>
  );
}

/* ---------- Page ---------- */
export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .input { width: 100%; border: 1px solid var(--border); border-radius: 0.75rem; padding: 0.75rem 1rem; background: white; color: var(--foreground); font-size: 0.95rem; outline: none; transition: border-color .15s, box-shadow .15s; }
        .input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px oklch(0.68 0.075 200 / 0.2); }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Services />
        <OMS />
        <Diagnostics />
        <Specialists />
        <Quiz />
        <Reviews />
        <BookingForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
