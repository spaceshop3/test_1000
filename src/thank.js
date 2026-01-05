"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { cva } from "class-variance-authority"
import { clsx } from "clsx"

// --- Определение вариантов стилей (CVA) ---

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 font-bold text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-50",
  {
    variants: {
      intent: {
        primary: "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

// --- Вспомогательные компоненты ---

// Кнопка с эффектом глянца
const Button = ({ to, children, ...props }) => (
  <Link to={to} className={clsx(buttonVariants())} {...props}>
    {/* Эффект глянца */}
    <span className="absolute top-0 left-0 h-full w-full bg-white opacity-10 motion-safe:group-hover:animate-shine"></span>
    {children}
  </Link>
);

// Декоративный фон
const DecorativeBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/50 to-indigo-200/50 blur-3xl motion-safe:animate-pulse"></div>
    <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-l from-teal-200/50 to-cyan-200/50 blur-3xl motion-safe:animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>
);

// Иконка успеха с анимацией "звездной пыли"
const SuccessIcon = () => (
  <div className="relative mb-6">
    <div className="relative inline-flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/30">
      {/* Эффект частиц/звезд */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white motion-safe:animate-radiate"
          style={{
            transform: `rotate(${i * 36}deg) translateX(80px)`,
            animationDelay: `${i * 0.1}s`,
          }}
          aria-hidden="true"
        ></div>
      ))}
      {/* Внутренний круг и галочка */}
      <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
        <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  </div>
);

// Элемент списка "Что дальше"
const NextStepItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 transition-all duration-300 rounded-2xl hover:bg-blue-50/70 hover:shadow-sm">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-lg">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-1 text-slate-600">{description}</p>
    </div>
  </div>
);


// --- Основной компонент страницы ---

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nextStepsData = [
    {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Confirmación Recibida",
      description: "Hemos recibido su mensaje y nuestro equipo ya lo está procesando."
    },
    {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      title: "Revise su Correo",
      description: "Le hemos enviado un correo electrónico de confirmación. Por favor, revise su bandeja de entrada (y spam)."
    },
    {
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Próximos Pasos",
      description: "Nos pondremos en contacto con usted en un plazo de 24-48 horas con una respuesta detallada."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 relative isolate">
      <DecorativeBackground />

      <main className="flex flex-grow items-center justify-center p-4">
        <div className={`w-full max-w-2xl transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="rounded-3xl bg-white/70 p-1.5 shadow-2xl shadow-blue-500/20 backdrop-blur-xl ring-1 ring-slate-200/70">
            <div className="rounded-2xl bg-white p-8 sm:p-12 text-center">
              
              <SuccessIcon />
              
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">¡Gracias por su mensaje!</h1>
              <p className="mt-4 text-lg text-slate-600">Hemos recibido su solicitud y nos pondremos en contacto en breve.</p>

              <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

              <div className="text-left">
                <h2 className="text-2xl font-semibold text-slate-800">¿Qué sucede ahora?</h2>
                <div className="mt-6 space-y-4">
                  {nextStepsData.map((step, index) => (
                    <NextStepItem key={index} {...step} />
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <Button to="/">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  <span>Volver al Inicio</span>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </main>

      <footer className="p-8 text-center text-slate-500">
        <p>© {currentYear} Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default ThankYouPage;