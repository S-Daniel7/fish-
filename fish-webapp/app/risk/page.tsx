"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function RiskCalculatorPage() {
    const router = useRouter();

    const criteria = useMemo(
        () => [
            "Mistakes in spelling",
            "Urgent or threatening wording",
            "Generic greeting rather than one with your name",
            "Unknown sender address",
            "Pretends to be a business",
            "Suspicious link or shortened links",
            "Unexpected attachments, oftentimes zip files",
            "Ask for passwords or important codes",
            "Requests gift cards or wire transfer",
            "Promises winnings or prizes for contests you did not enter",
            "Claims suspicious account activity",
            "Asks you to 'verify' account information",
        ],
        []
    );

    const [checked, setChecked] = useState<boolean[]>(
        () => Array(criteria.length).fill(false)
    );
    const [submitted, setSubmitted] = useState(false);

    const selectedCount = checked.filter(Boolean).length;
    const score = Math.round((selectedCount / criteria.length) * 100);

    const toggle = (i: number) => {
        if (submitted) return;
        setChecked((prev) => {
            const next = [...prev];
            next[i] = !next[i];
            return next;
        });
    };

    const resetCalculator = () => {
        setChecked(Array(criteria.length).fill(false));
        setSubmitted(false);
    };

    const riskMessage = () => {
        if (score <= 20)
            return "You are SAFE! But make sure to continue practicing safe internet practices.";
        if (score <= 40)
            return "Be on the LOOKOUT! Keep inquiring into this.";
        if (score <= 60)
            return "There are PREDATORS nearby. Be vigilant and don't let your guard down.";
        if (score <= 80)
            return "You are in DANGER. This is most likely a scam.";
        return "You are HOOKED. Don't interact or you will get hurt.";
    };

    const barColor = () => {
        if (score <= 20) return "#4ade80";
        if (score <= 40) return "#facc15";
        if (score <= 60) return "#fb923c";
        if (score <= 80) return "#f87171";
        return "#dc2626";
    };

    return (
        <main className="min-h-screen bg-[#5FA3B3]">
            <div className="mx-auto max-w-5xl px-6 py-16">
                <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-[#BFE8E8]/90 p-10 shadow-lg backdrop-blur-md">
                    {/* TITLE */}
                    <div className="relative mb-8 flex items-center justify-center">
                        <img
                            src="/coral.png"
                            alt=""
                            className="pointer-events-none absolute left-0 w-36"
                        />
                        <img
                            src="/coral.png"
                            alt=""
                            className="pointer-events-none absolute right-0 w-36 scale-x-[-1]"
                        />

                        <h1 className="relative z-10 rounded-xl bg-[#6FB7B7] px-10 py-4 text-4xl font-semibold text-[#032024] shadow-md">
                            Risk Calculator
                        </h1>
                    </div>

                    {/* INSTRUCTIONS */}
                    <p className="mb-2 text-center text-[#05272C]">
                        Select all warning signs that apply to the message you received.
                    </p>

                    <p className="mb-6 text-center text-sm text-[#05272C]">
                        Selected{" "}
                        <span className="font-semibold text-[#032024]">
                            {selectedCount}
                        </span>{" "}
                        / {criteria.length}
                    </p>

                    {/* CHECKLIST */}
                    <div className="relative z-10 grid gap-4">
                        {criteria.map((text, i) => (
                            <button
                                key={text}
                                type="button"
                                disabled={submitted}
                                onClick={() => toggle(i)}
                                className="flex items-center gap-4 text-left"
                            >
                                <span
                                    className={`flex h-9 w-9 items-center justify-center rounded-md border shadow-sm ${
                                        checked[i]
                                            ? "bg-white/90 border-white/60"
                                            : "bg-white/50 border-white/50"
                                    }`}
                                >
                                    {checked[i] && (
                                        <span className="text-xl font-bold text-[#032024]">
                                            ✓
                                        </span>
                                    )}
                                </span>

                                <span className="text-lg text-[#05272C]">
                                    {text}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* SUBMIT / RESULT */}
                    <div className="relative z-10 mt-28 text-center">
                        {!submitted ? (
                            <button
                                onClick={() => setSubmitted(true)}
                                className="rounded-2xl border border-white/50 bg-white px-10 py-4 text-xl font-semibold text-[#032024] shadow-md hover:bg-[#A6D6D6]"
                            >
                                Submit
                            </button>
                        ) : (
                            <>
                                <p className="mb-4 text-xl font-semibold text-[#032024]">
                                    {riskMessage()}
                                </p>

                                <div className="text-4xl font-bold text-[#032024]">
                                    {score}%
                                </div>

                                <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-white/40">
                                    <div
                                        className="h-full transition-all duration-500"
                                        style={{
                                            width: `${score}%`,
                                            backgroundColor: barColor(),
                                        }}
                                    />
                                </div>

                                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <button
                                        onClick={resetCalculator}
                                        className="rounded-2xl border border-white/50 bg-white px-10 py-4 text-xl font-semibold text-[#032024] shadow-md hover:bg-[#A6D6D6]"
                                    >
                                        Redo
                                    </button>

                                    <button
                                        onClick={() => router.push("/resources")}
                                        className="rounded-2xl border border-white/50 bg-white px-10 py-4 text-xl font-semibold text-[#032024] shadow-md hover:bg-[#A6D6D6]"
                                    >
                                        Resources
                                    </button>

                                    <button
                                        onClick={() => router.push("/")}
                                        className="rounded-2xl border border-white/50 bg-white px-10 py-4 text-xl font-semibold text-[#032024] shadow-md hover:bg-[#A6D6D6]"
                                    >
                                        Home
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}