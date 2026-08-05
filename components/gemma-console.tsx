"use client"

import { useState } from "react"
import { Terminal, Send, Sparkles, RefreshCw, Cpu, Settings } from "lucide-react"

export function GemmaConsole() {
  const [endpoint, setEndpoint] = useState("http://localhost:8000/chat")
  const [prompt, setPrompt] = useState("")
  const [temperature, setTemperature] = useState(0.7)
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [latency, setLatency] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleTest = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setError(null)
    setResponse("")
    const startTime = performance.now()

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          temperature: temperature,
        }),
      })

      const endTime = performance.now()
      setLatency(Math.round(endTime - startTime))

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}. Make sure your Gemma server is running locally on port 8000.`)
      }

      const data = await res.json()
      setResponse(data.response || data.choices?.[0]?.message?.content || JSON.stringify(data, null, 2))
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to connect to local Gemma API server.")
    } finally {
      setLoading(false)
    }
  }

  const loadPreset = (text: string) => {
    setPrompt(text)
  }

  return (
    <section id="gemma" className="scroll-mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <div className="border-2 border-foreground p-2 inline-block">
            <h2 className="font-mono text-2xl md:text-4xl font-bold flex items-center gap-3">
              <Cpu className="h-6 w-6 md:h-8 md:w-8 animate-pulse text-accent" />
              {">"} GEMMA LOCAL TESTBENCH
            </h2>
          </div>
          <p className="mt-2 font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
            Direct interface for testing local Capstone integration. Hosts google/gemma-4-E2B-it API.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 border-2 border-foreground p-6 bg-card flex flex-col justify-between shadow-[4px_4px_0_0_var(--foreground)]">
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-foreground/10 pb-3">
                <Settings className="h-4 w-4 text-accent" />
                <h3 className="font-mono text-xs font-black tracking-wider uppercase">Configurations</h3>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[10px] font-bold uppercase">Local Endpoint</label>
                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="w-full bg-secondary/35 border-2 border-foreground p-2 font-mono text-xs focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] font-bold uppercase">
                  <span>Temperature</span>
                  <span>{temperature}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-accent"
                />
              </div>

              <div className="space-y-2 pt-2">
                <label className="block font-mono text-[10px] font-bold uppercase">Preset Prompts</label>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => loadPreset("Write a clean FastAPI structure for local MLX model loading.")}
                    className="text-left font-mono text-[11px] p-2 border border-foreground/35 bg-secondary/25 hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    🚀 FastAPI Structure
                  </button>
                  <button
                    onClick={() => loadPreset("Explain Gemma-4 multimodal weights vs text weights simply.")}
                    className="text-left font-mono text-[11px] p-2 border border-foreground/35 bg-secondary/25 hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    🧠 Multimodal weights
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-foreground/10 mt-6 space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>GPU Acceleration</span>
                <span className="text-emerald-500 font-bold">CUDA Active</span>
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>Effective Params</span>
                <span className="font-bold">~2.3B</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 border-2 border-foreground bg-[#0a0a0c] text-neutral-200 flex flex-col justify-between overflow-hidden shadow-[6px_6px_0_0_var(--foreground)]">
            <div className="border-b-2 border-foreground bg-secondary/50 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground">
                <Terminal className="h-4 w-4 text-accent" />
                <span>gemma-api-terminal</span>
              </div>
              <div className="flex items-center gap-3">
                {latency !== null && (
                  <span className="font-mono text-[10px] bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded">
                    {latency}ms
                  </span>
                )}
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 font-mono text-xs space-y-4 min-h-[250px] max-h-[350px] overflow-y-auto bg-black/40">
              {error && (
                <div className="p-3 border border-red-500/30 bg-red-950/20 text-red-400">
                  <p className="font-bold">❌ Connection Error:</p>
                  <p className="mt-1 opacity-90">{error}</p>
                </div>
              )}

              {response && (
                <div className="space-y-2">
                  <p className="text-accent flex items-center gap-1.5 font-bold">
                    <Sparkles className="h-3.5 w-3.5" /> GEMMA-4 RESPONSE:
                  </p>
                  <pre className="whitespace-pre-wrap leading-relaxed font-mono opacity-90 break-words max-w-full">
                    {response}
                  </pre>
                </div>
              )}

              {!response && !error && !loading && (
                <p className="text-neutral-500 italic">Terminal ready. Send a prompt to query your local Gemma-4 E2B-it engine.</p>
              )}

              {loading && (
                <div className="flex items-center gap-2 text-accent">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Gemma is thinking...</span>
                </div>
              )}
            </div>

            <div className="border-t-2 border-foreground p-3 bg-secondary/25 flex items-center gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTest()}
                placeholder="Type your prompt for local testing..."
                disabled={loading}
                className="flex-1 bg-black/50 border border-foreground/30 p-2.5 font-mono text-xs focus:outline-none focus:border-accent text-white"
              />
              <button
                onClick={handleTest}
                disabled={loading}
                className="bg-accent border-2 border-foreground hover:bg-foreground hover:text-background p-2.5 transition-colors flex items-center justify-center disabled:opacity-50 text-accent-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
