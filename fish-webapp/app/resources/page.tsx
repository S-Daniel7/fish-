"use client";

import Link from "next/link";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-[#5FA3B3]">
            <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-16">
                <div className="mx-auto mb-16 inline-block rounded-2xl border border-white/40 bg-[#BFE8E8]/90 px-10 py-6 shadow-lg backdrop-blur-md">
                    <h1 className="text-7xl font-semibold text-[#08333A]">
                        Resources
                    </h1>
                </div>

                <section className="mb-16">
                    <div className="relative rounded-xl border border-white/40 bg-[#BFE8E8]/90 p-8 shadow-md backdrop-blur-md overflow-hidden">
                        <img src="/coral.png" alt="" className="absolute left-0 top-8 z-10 w-44 drop-shadow-lg pointer-events-none" />
                        <img src="/coral.png" alt="" className="absolute right-0 top-8 z-10 w-44 scale-x-[-1] drop-shadow-lg pointer-events-none" />

                        <div className="relative z-30">
                            <div className="mx-auto inline-block rounded-lg border border-white/40 bg-[#7FBFC0] px-6 py-3 shadow-sm">
                                <h2 className="text-4xl font-semibold text-[#032024]">
                                    Guides
                                </h2>
                            </div>

                            <p className="mt-8 leading-loose text-[#05272C]">
                                Step-by-step guides which will help you recognize and avoid common scams.
                            </p>

                            <div className="mt-12 space-y-12 leading-loose text-[#05272C]">
                                <div>
                                    <div className="inline-block rounded-lg border border-black/10 bg-white px-4 py-2 shadow-sm">
                                        <h3 className="text-2xl font-bold text-[#08333A]">
                                            What is phishing?
                                        </h3>
                                    </div>
                                    <p className="mt-4">
                                        Phishing is the fraudulent practice used by attackers who send emails or messages while
                                        posed as trusted entities, such as banks, employers, or other popular services in an attempt
                                        to steal sensitive data. The attacks aim to trick their victims into giving up passwords,
                                        names, credit card numbers or into installing malware on their devices.
                                    </p>
                                </div>

                                <div>
                                    <div className="inline-block rounded-lg border border-black/10 bg-white px-4 py-2 shadow-sm">
                                        <h3 className="text-2xl font-bold text-[#08333A]">
                                            Who do these attacks affect?
                                        </h3>
                                    </div>
                                    <p className="mt-4">
                                        Anyone can be a victim of such attacks, but scammers often focus on people who are lonely,
                                        stressed, or less familiar with technology—because it’s easier to create a sense of urgency
                                        and confusion. Oftentimes, scammers will target older individuals on purpose, as they are
                                        usually least familiar with the kinds of scams people will utilize.
                                    </p>
                                </div>

                                <div>
                                    <div className="inline-block rounded-lg border border-black/10 bg-white px-4 py-2 shadow-sm">
                                        <h3 className="text-2xl font-bold text-[#08333A]">
                                            How to spot phishing emails
                                        </h3>
                                    </div>
                                    <ul className="mt-6 list-none space-y-4">
                                        <li>Look for suspicious sender addresses, addresses that have misspellings, unusual domains, or do not seem official may be scammers.</li>
                                        <li>Look for language that tries to create a sense of urgency such as “act now” or “your account will be locked”.</li>
                                        <li>Look for links that do not match the real website or links that have misspellings or an unofficial domain name.</li>
                                        <li>Look for requests for passwords, codes, payment info, or other sensitive information that you would not regularly share with strangers.</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="inline-block rounded-lg border border-black/10 bg-white px-4 py-2 shadow-sm">
                                        <h3 className="text-2xl font-bold text-[#08333A]">
                                            Common red flags in phone scams
                                        </h3>
                                    </div>
                                    <ul className="mt-6 list-none space-y-4">
                                        <li>They may come off as aggresive or standoffish, oftentimes berating you into payment.</li>
                                        <li>They may attempt to coerce you into immediate payment or demand that you send them sensitive information.</li>
                                        <li>They may ask for monetary compensation in the form of gift cards, wire transfers, or access to your bank account.</li>
                                        <li>They may threaten arrest or other serious consequences, such as you losing access to all of your cards or your bank account.</li>
                                        <li>They may not let you hang up and may keep persisting you through call backs.</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="inline-block rounded-lg border border-black/10 bg-white px-4 py-2 shadow-sm">
                                        <h3 className="text-2xl font-bold text-[#08333A]">
                                            Common scams
                                        </h3>
                                    </div>
                                    <ul className="mt-6 list-none space-y-4">
                                        <li>Attackers may pretend to be a fake bank or other business and send fraud alerts.</li>
                                        <li>Attackers may pretend to be a delivery service and send “missed delivery” texts.</li>
                                        <li>Attackers may pretend to be tech support for different websites and claim that your passwords are leaked.</li>
                                        <li>Attackers may attempt romance scams where they engage in a relationship with victims while pretending to be a noble or an aristocrat.</li>
                                        <li>Attackers may pretend to be a university or a learning institution and attempt to gain passwords or funds for tuition payments.</li>
                                        <li>Attackers may attempt to install malware through harmful links sent through emails which will allow them to control your devices.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <div className="relative rounded-xl border border-white/40 bg-[#BFE8E8]/90 p-8 shadow-md backdrop-blur-md overflow-hidden">
                        <img src="/coral.png" alt="" className="absolute left-0 top-8 z-10 w-44 drop-shadow-lg pointer-events-none" />
                        <img src="/coral.png" alt="" className="absolute right-0 top-8 z-10 w-44 scale-x-[-1] drop-shadow-lg pointer-events-none" />

                        <div className="relative z-30">
                            <div className="mx-auto inline-block rounded-lg border border-white/40 bg-[#7FBFC0] px-6 py-3 shadow-sm">
                                <h2 className="text-4xl font-semibold text-[#032024]">
                                    Helpful Links
                                </h2>
                            </div>

                            <p className="mt-8 leading-loose text-[#05272C]">
                                Trusted external resources from official organizations.
                            </p>

                            <ul className="mt-8 space-y-6 text-[#05272C]">
                                <li><a href="https://consumer.ftc.gov" target="_blank" rel="noreferrer" className="underline">FTC Consumer Advice</a></li>
                                <li><a href="https://www.identitytheft.gov" target="_blank" rel="noreferrer" className="underline">IdentityTheft.gov</a></li>
                                <li><a href="https://fightcybercrime.org" target="_blank" rel="noreferrer" className="underline">Fight Cybercrime</a></li>
                                <li><a href="https://www.thecyberhelpline.com" target="_blank" rel="noreferrer" className="underline">Cybercrime Helpline</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative rounded-xl border border-white/40 bg-[#BFE8E8]/90 p-8 shadow-md backdrop-blur-md overflow-hidden">
                        <img src="/coral.png" alt="" className="absolute left-0 top-8 z-10 w-44 drop-shadow-lg pointer-events-none" />
                        <img src="/coral.png" alt="" className="absolute right-0 top-8 z-10 w-44 scale-x-[-1] drop-shadow-lg pointer-events-none" />

                        <div className="relative z-30">
                            <div className="mx-auto inline-block rounded-lg border border-white/40 bg-[#7FBFC0] px-6 py-3 shadow-sm">
                                <h2 className="text-4xl font-semibold text-[#032024]">
                                    Tools
                                </h2>
                            </div>

                            <p className="mt-8 leading-loose text-[#05272C]">
                                Interactive tools on our website to educate you on how to stay safe.
                            </p>

                            <div className="mt-10 flex flex-col items-center gap-6">
                                <Link
                                    href="/"
                                    className="rounded-xl border border-white/50 bg-white px-10 py-3 text-lg font-semibold text-[#08333A] shadow-sm transition hover:bg-[#A6D6D6]"
                                >
                                    Home Page
                                </Link>

                                <Link
                                    href="/practice"
                                    className="rounded-xl border border-white/50 bg-white px-10 py-3 text-lg font-semibold text-[#08333A] shadow-sm transition hover:bg-[#A6D6D6]"
                                >
                                    Practice Scenarios
                                </Link>
                                <Link
                                    href="/risk"
                                    className="rounded-xl border border-white/50 bg-white px-10 py-3 text-lg font-semibold text-[#08333A] shadow-sm transition hover:bg-[#A6D6D6]"
                                >
                                    Risk Calculator
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}