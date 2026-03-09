"use client"

interface HeroProps {
  onNavigate?: (index: number) => void
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
            <div className="border-2 border-foreground p-2 inline-block">
              <span className="font-mono text-xs md:text-sm bg-accent text-accent-foreground px-2 py-1">
                AVAILABLE FOR WORK
              </span>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4">
                FULLSTACK <br />
                <span className="bg-accent text-accent-foreground px-2 italic transform -skew-x-12 inline-block">DEVELOPER</span> <br />
                & PROJECT MANAGER
              </h1>
            </div>

            <div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-mono">
                Building digital experiences with a focus on brutalist aesthetics and
                robust functionality.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate?.(2)}
                  className="bg-foreground text-background px-8 py-3 font-mono font-bold hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-foreground cursor-pointer"
                >
                  VIEW WORK
                </button>
                <button
                  onClick={() => onNavigate?.(6)}
                  className="bg-transparent text-foreground px-8 py-3 font-mono font-bold hover:bg-foreground hover:text-background transition-colors border-2 border-foreground cursor-pointer"
                >
                  CONTACT ME
                </button>
                <a
                  href="/cv/DuongPhuDong_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent text-foreground px-8 py-3 font-mono font-bold hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <p className="font-mono text-xs font-bold text-muted-foreground tracking-widest uppercase mb-3">
                SUPPORT & SPONSOR — lab68dev
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/sponsors/lab68dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent text-foreground px-4 py-2 font-mono text-xs font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 21.593c-.425-.394-8.279-7.163-8.279-12.026 0-3.809 2.9-6.567 6.279-6.567 1.941 0 3.7.927 4.871 2.384.012.016.024.03.036.044C15.951 3.914 17.74 3 19.721 3c3.379 0 6.279 2.758 6.279 6.567 0 4.863-7.854 11.632-8.279 12.026L12 21.593z"/>
                  </svg>
                  GITHUB SPONSORS
                </a>
                <a
                  href="https://ko-fi.com/dongphuduong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent text-foreground px-4 py-2 font-mono text-xs font-bold border-2 border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.317-.448-.405-1.105-.285-1.97.265-1.905 2.42-2.194 3.265-.457 1.503-1.518 3.498-.769 3.503.733.005 1.25-.428 1.64-1.03 1.741l.01-.002zm11.062.007c-.619.716-1.827 1.269-3.332 1.324.168-1.637-.418-3.27-1.988-3.77.083-.268.136-.546.136-.831 0-1.473-1.27-2.667-2.835-2.667-1.13 0-2.095.645-2.566 1.585C13.2 7.28 15.175 7.014 16.625 8.195c-.332.48-.496 1.062-.496 1.62 0 1.64 1.324 2.973 2.958 2.973.13 0 .26-.01.388-.028.061.353.064.71.007 1.053-.085.511-.313.979-.655 1.361z"/>
                  </svg>
                  KO-FI
                </a>
                <a
                  href="https://buymeacoffee.com/lab68dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent text-foreground px-4 py-2 font-mono text-xs font-bold border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.163.04 2.286-.028 3.44-.162.609-.069 1.217-.148 1.812-.296.201-.05.402-.100.601-.152.2-.05.4-.1.601-.149.3-.074.3-.525 0-.6-.2-.05-.402-.1-.601-.149-.2-.05-.4-.1-.601-.152-.595-.147-1.203-.226-1.812-.295-1.154-.134-2.277-.202-3.44-.163-1.098.04-2.212.133-3.287.37-.386.083-.763.205-1.123.367-.277.124-.538.313-.692.58-.216.376-.12.844.177 1.146.242.245.57.385.888.5.87.317 1.835.418 2.75.501a25.834 25.834 0 003.7.063c1.027-.056 2.077-.153 3.077-.417.205-.054.418-.12.626-.193.399-.155.8-.389.996-.789.148-.297.193-.662.25-.987.067-.377.127-.755.192-1.133.035-.206.079-.429.231-.572.15-.143.373-.172.57-.241.613-.216.882-.781 1.001-1.38l.132-.665c.067-.339.132-.678.197-1.017l-.467-.235c-.065.339-.13.678-.197 1.017z"/>
                    <path d="M6.723 21.034H3.948c-.428 0-.649-.513-.37-.83l1.124-1.27H3.553c-.467 0-.7-.571-.357-.894L4.67 16.72H3.37c-.447 0-.685-.544-.37-.857L7.7 11.26c.334-.323.867-.063.867.4V15h1.283c.459 0 .695.565.361.89l-1.498 1.41h1.174c.463 0 .698.57.354.894l-2.52 2.376c-.005.005-.011.009-.016.014V21c0 .02-.003.034-.015.034z"/>
                  </svg>
                  BUY ME A COFFEE
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-lg font-mono">
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>LOCATION:</span>
              <span className="font-bold">HO CHI MINH, VIETNAM</span>
            </div>
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>EDUCATION:</span>
              <span className="font-bold">RMIT VIETNAM</span>
            </div>
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>PROJECTS:</span>
              <span className="font-bold">9+ COMPLETED</span>
            </div>
            <div className="flex justify-between border-b-2 border-foreground pb-2">
              <span>FOUNDER:</span>
              <span className="font-bold">
                <a href="https://github.com/lab68dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  @lab68dev
                </a>
              </span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="font-bold text-foreground flex items-center">
                <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
