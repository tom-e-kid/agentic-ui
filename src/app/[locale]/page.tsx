"use client";

import Link from "next/link";
import { useTranslations } from "../../utils/i18n";

export default function Home() {
  const { t } = useTranslations();

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading">{t.title}</h1>
            <p className="subheading">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.concept.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.concept.description}
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {t.concept.detail}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.solutions.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.solutions.description}
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {t.solutions.detail}
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.showcase.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.showcase.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.contact.description}
            </p>
            <div className="mt-10">
              <Link
                href="mailto:dev@agenticui.app"
                className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground shadow-sm hover:opacity-90"
              >
                {t.cta.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
