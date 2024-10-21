'use client'

import { useState, ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ArrowRight, Shield, Lock, Cpu, Bluetooth, Battery, ChevronDown, TvMinimal, Box } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

const content = {
  en: {
    nav: { home: "Home", features: "Features", specs: "Specs", faq: "FAQ" },
    hero: {
      title: "Secure Your Digital Assets",
      subtitle: "Blockstream JADE: The next-generation hardware wallet for the crypto-savvy investor.",
      cta: "Order Now"
    },
    features: {
      title: "Key Features",
      security: {
        title: "Unbreakable Security",
        description: "State-of-the-art encryption to protect your assets from any threat."
      },
      speed: {
        title: "Compatibility",
        description: "Universal compatibility that works with any wallet."
      },
      control: {
        title: "Air-gapped transaction",
        description: "Securely, with complete offline transactions, without any internet connection."
      }
    },
    specs: {
      title: "Technical Specifications",
      processor: "Dimensions",
      processorDesc: "60mm x 24mm x 17mm",
      display: "Display",
      displayDesc: "1.14-inch IPS color LCD",
      connectivity: "Connectivity",
      connectivityDesc: "USB-C, Bluetooth Low Energy",
      battery: "Battery",
      batteryDesc: "240mAh LiPo rechargeable battery"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "How secure is Blockstream JADE?",
      a1: "Blockstream JADE uses state-of-the-art security measures, including a secure element and open-source firmware, to ensure the highest level of protection for your digital assets.",
      q2: "Does Jade send wallet information to a server?",
      a2: "No, Blockstream Jade does not send wallet information to a server. Your seed phrase never leaves Jade and remains highly encrypted on your device.",
      q3: "How long does the battery last?",
      a3: "The 250mAh battery can last for several hours of active use and maintains a charge for weeks when idle."
    },
    cta: {
      title: "Ready to Secure Your Future?",
      subtitle: "Join thousands of satisfied users who trust Blockstream JADE with their digital assets.",
      button: "Get Your Blockstream JADE Now"
    },
    footer: "© 2024 Blockstream. All rights reserved."
  },
  ko: {
    nav: { home: "홈", features: "특징", specs: "사양", faq: "자주 묻는 질문" },
    hero: {
      title: "디지털 자산을 안전하게 보호하세요",
      subtitle: "Blockstream JADE: 암호화폐 전문 투자자를 위한 차세대 하드웨어 지갑",
      cta: "지금 주문하기"
    },
    features: {
      title: "주요 특징",
      security: {
        title: "뛰어난 보안성",
        description: "완벽한 암호화 기술로 안전하게, 완전한 오픈소스로 투명하게."
      },
      speed: {
        title: "호환성",
        description: "어떤 지갑과도 호환 가능한 범용성."
      },
      control: {
        title: "에어갭 트랜젝션",
        description: "인터넷 연결 없이, 완전한 오프라인 거래로 안전하게."
      },
    },
    specs: {
      title: "기술 사양",
      processor: "제원",
      processorDesc: "60mm x 24mm x 17mm",
      display: "디스플레이",
      displayDesc: "1.14인치 IPS 컬러 LCD",
      connectivity: "연결성",
      connectivityDesc: "USB-C, 블루투스",
      battery: "배터리",
      batteryDesc: "240mAh LiPo 충전식 배터리"
    },
    faq: {
      title: "자주 묻는 질문",
      q1: "Blockstream JADE는 얼마나 안전한가요?",
      a1: "Blockstream JADE는 보안 요소와 오픈소스 펌웨어를 포함한 최첨단 보안 조치를 사용하여 디지털 자산에 대한 최고 수준의 보호를 보장합니다.",
      q2: "Blockstream JADE는 서버에 지갑 정보를 전송하나요?",
      a2: "아니오. 서버에 보내지 않습니다. 지갑 정보는 절대 제이드 외부로 나가지 않으며 암호화 단계를 거쳐 오직 지갑 내부에만 보관됩니다.",
      q3: "배터리는 얼마나 오래 지속되나요?",
      a3: "250mAh 배터리는 활발한 사용 시 몇 시간 동안 지속되며, 유휴 상태에서는 몇 주 동안 충전을 유지합니다."
    },
    cta: {
      title: "미래를 안전하게 보호할 준비가 되셨나요?",
      subtitle: "수천 명의 만족한 사용자들과 함께 Blockstream JADE로 디지털 자산을 안전하게 보호하세요.",
      button: "지금 Blockstream JADE 구매하기"
    },
    footer: "© 2024 Blockstream. All rights reserved."
  }
}

export function BlockstreamJadeLanding() {
  const [lang, setLang] = useState('en')
  const t = content[lang as keyof typeof content]

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Blockstream JADE"
            width={200}
            height={50}  
            className="cursor-pointer"
            />
          <div className="flex items-center space-x-4">
            {/*
            <Button variant="ghost">{t.nav.home}</Button>
            <Button variant="ghost">{t.nav.features}</Button>
            <Button variant="ghost">{t.nav.specs}</Button>
            <Button variant="ghost">{t.nav.faq}</Button>
            */}
            <div className="flex items-center space-x-2">
              <span className="text-sm">EN</span>
              <Switch
                checked={lang === 'ko'}
                onCheckedChange={() => setLang(lang === 'en' ? 'ko' : 'en')}
                className="bg-green-500"
              />
              <span className="text-sm">KO</span>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.hero.title}</h2>
            <p className="text-xl mb-8">{t.hero.subtitle}</p>
            <Link href='https://bitkit.co.kr'>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              {t.hero.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
            
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-3xl opacity-30"></div>
              <Image
                src="/jade.png"
                alt="Blockstream JADE Wallet"
                className="relative z-10 mx-auto"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>
        
        <section className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">{t.features.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-green-500" />}
              title={t.features.security.title}
              description={t.features.security.description}
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-green-500" />}
              title={t.features.control.title}
              description={t.features.control.description}
            />
            <FeatureCard
              icon={<Cpu className="h-8 w-8 text-green-500" />}
              title={t.features.speed.title}
              description={t.features.speed.description}
            />
            
          </div>
        </section>
        
        <section className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">{t.specs.title}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <SpecCard
              icon={<Box className="h-8 w-8 text-green-500" />}
              title={t.specs.processor}
              description={t.specs.processorDesc}
            />
            <SpecCard
              icon={<TvMinimal className="h-8 w-8 text-green-500" />}
              title={t.specs.display}
              description={t.specs.displayDesc}
            />
            <SpecCard
              icon={<Bluetooth className="h-8 w-8 text-green-500" />}
              title={t.specs.connectivity}
              description={t.specs.connectivityDesc}
            />
            <SpecCard
              icon={<Battery className="h-8 w-8 text-green-500" />}
              title={t.specs.battery}
              description={t.specs.batteryDesc}
            />
          </div>
        </section>

        <section className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">{t.faq.title}</h3>
          <div className="space-y-8">
            <FAQItem question={t.faq.q1} answer={t.faq.a1} />
            <FAQItem question={t.faq.q2} answer={t.faq.a2} />
            <FAQItem question={t.faq.q3} answer={t.faq.a3} />
          </div>
        </section>

        <section id="buy" className="bg-gradient-to-r from-green-500 to-green-800 py-20 mt-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl mb-8">{t.cta.subtitle}</p>
            <Link href='https://smartstore.naver.com/bitkit'>
            <Button className="bg-white text-green-800 hover:bg-gray-100 px-5 py-3 rounded-full text-lg font-semibold transition-colors">
              {t.cta.button}
            </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 mt-24 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function SpecCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold">{question}</h4>
        <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  )
}