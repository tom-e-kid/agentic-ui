import Image from 'next/image';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/logo.svg"
                alt="Agentic UI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Agentic UI
            </span>
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
} 